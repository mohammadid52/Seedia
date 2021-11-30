/* eslint-disable quotes */

import { Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/outline'
import { MenuAlt2Icon } from '@heroicons/react/solid'
import { eventInvite, invite } from 'apis/mutations'
import EmptyState from 'components/atoms/EmptyState'
import Selector from 'components/atoms/Selector'
import CountryListDropdown from 'components/CountryListDropdown'
import Toggle from 'components/ThemeToggle'
import { links as _links } from 'constants/Links'
import { useNotifications } from 'context/NotificationContext'
import { useUserContext } from 'context/UserContext'
import useAccountType from 'hooks/useAccountType'
import useTheme from 'hooks/useTheme'
import {
  IEvent,
  IGroup,
  INotification,
  IParent,
} from 'interfaces/UniversalInterface'
import { isEmpty } from 'lodash'
import find from 'lodash/find'
import React, { Fragment, useState } from 'react'
import {
  AiOutlineArrowRight,
  AiOutlineHome,
  AiOutlineLogout,
  AiOutlineSearch,
  AiOutlineShoppingCart,
  AiOutlineUsergroupDelete,
} from 'react-icons/ai'
import { BiUserCircle } from 'react-icons/bi'
import { BsFilePost, BsPeople } from 'react-icons/bs'
import { FaAdversal, FaMoneyBillAlt, FaMoneyBillWave } from 'react-icons/fa'
import { FiSettings } from 'react-icons/fi'
import { GiReceiveMoney } from 'react-icons/gi'
import { IoIosBriefcase, IoMdNotifications } from 'react-icons/io'
import { MdAttachMoney, MdWork } from 'react-icons/md'
import { RiApps2Line } from 'react-icons/ri'
import { SiGoogleanalytics } from 'react-icons/si'
import { useMutation } from 'react-query'
import { useDispatch } from 'react-redux'
import { NavLink, useHistory } from 'react-router-dom'
import { logOut } from 'state/Redux/Actions/authActions'
import { avatarPlaceholder } from 'state/Redux/constants'
import { classNames } from 'utils/classNames'
import { callsToAction, departmentsArray, productsArray } from 'values/values'

interface INotiProps {
  userData: IParent
  notification: INotification
  setNotifications: React.Dispatch<React.SetStateAction<INotification[]>>
}

const GroupInviteNotification = ({
  userData,
  notification,
  setNotifications,
}: INotiProps) => {
  const { setNotification } = useNotifications()
  const customData: IGroup = notification?.data

  const { mutate } = useMutation(invite, {
    onSuccess: (data) => {
      const userNotifications: INotification[] = data?.data?.data

      setNotifications([...userNotifications])
      setNotification({
        show: true,
        title: 'Successfully invite accepted',
        buttonText: 'View',
        buttonUrl: _links.groupById(customData._id),
      })
    },
  })
  const onGroupInvite = (
    group: any,
    type: 'accept' | 'decline',
    notificationId: string
  ) => {
    mutate({ type, groupId: group._id, notificationId, targetId: userData._id })
  }

  return (
    <div
      className={`${
        userData?.notifications.length > 1
          ? 'border-b border-gray-200 dark:border-gray-700'
          : ''
      } flex items-center pb-2 `}
    >
      <div className="w-0 flex-1 flex justify-start">
        <p className=" text-sm font-medium dark:text-white text-gray-900">
          {notification.message}{' '}
          <span className="underline">{notification.data.groupName}</span>
        </p>

        <div className="flex items-center">
          <button
            onClick={() =>
              onGroupInvite(notification.data, 'accept', notification._id)
            }
            className="ml-4 flex-shrink-0 dark:bg-gray-800 text-link bg-white rounded-md text-sm font-medium hover:underline   focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Accept
          </button>
          <button
            onClick={() =>
              onGroupInvite(notification.data, 'accept', notification._id)
            }
            className="ml-4 flex-shrink-0 dark:bg-gray-800 text-gray-500 bg-white rounded-md text-sm font-medium hover:underline   focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  )
}

const EventInviteNotification = ({
  userData,
  notification,
  setNotifications,
}: INotiProps) => {
  const { setNotification } = useNotifications()
  const customData: IEvent = notification?.data

  const { mutate } = useMutation(eventInvite, {
    onSuccess: (data) => {
      const userNotifications: INotification[] = data?.data?.data

      setNotifications([...userNotifications])
      setNotification({
        show: true,
        title: 'Successfully invite accepted',
        buttonText: 'View',
        buttonUrl: _links.viewEvent(customData._id),
      })
    },
  })
  const onEventInvite = (
    event: IEvent,
    type: 'accept' | 'decline',
    notificationId: string
  ) => {
    mutate({ type, eventId: event._id, notificationId, targetId: userData._id })
  }

  return (
    <div
      className={`${
        userData?.notifications.length > 1
          ? 'border-b border-gray-200 dark:border-gray-700'
          : ''
      } flex items-center pb-2 `}
    >
      <div className="w-0 flex-1 flex justify-start">
        <p className=" text-sm font-medium dark:text-white text-gray-900">
          {notification.message}{' '}
          <span className="underline">{customData.eventName}</span>
        </p>

        <div className="flex items-center">
          <button
            onClick={() =>
              onEventInvite(customData, 'accept', notification._id)
            }
            className="ml-4 flex-shrink-0 dark:bg-gray-800 text-link bg-white rounded-md text-sm font-medium hover:underline   focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Accept
          </button>
          <button
            onClick={() =>
              onEventInvite(customData, 'accept', notification._id)
            }
            className="ml-4 flex-shrink-0 dark:bg-gray-800 text-gray-500 bg-white rounded-md text-sm font-medium hover:underline   focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  )
}

const DashboardHeader = ({ userData }: { userData?: IParent }) => {
  const { setDarkMode, showSidebar, setShowSidebar, darkMode } =
    useUserContext()
  const dispatch = useDispatch()
  const history = useHistory()

  const [notifications, setNotifications] = useState(
    userData?.notifications || []
  )

  const { isBusiness } = useAccountType(userData)
  const isStoreOpened = !isEmpty(userData?.store)

  const businessApps = [
    {
      icon: FaMoneyBillAlt,
      name: 'Sell products',
      link: _links.addProduct(),
    },
    {
      icon: MdWork,
      link: _links.placeRequest(),
      name: 'Place Request For Work',
    },
    !isStoreOpened && {
      // !====== Change Icon ======!
      icon: AiOutlineSearch,
      link: _links.openStore(),
      name: 'Open Store',
    },
    isStoreOpened && {
      icon: AiOutlineSearch,
      link: _links.viewStore(userData?.profileUrl),
      name: 'View Store',
    },
    {
      icon: BsFilePost,
      name: 'New product developed',
      link: _links.addProduct(),
    },

    {
      icon: BsFilePost,
      link: _links.addProject(),
      name: 'Post A Job/Project',
    },

    {
      icon: SiGoogleanalytics,
      name: 'Profile statistics',
    },

    {
      icon: AiOutlineUsergroupDelete,
      name: 'Groups',
      link: _links.groups(),
    },

    isBusiness && {
      icon: BsFilePost,
      link: _links.exploreJobs(),
      name: 'Explore Projects And Jobs',
    },

    {
      icon: FaAdversal,
      name: 'Advertise',
    },

    {
      icon: MdAttachMoney,
      name: 'Salary',
    },

    {
      icon: AiOutlineSearch,
      name: 'Search for leads',
    },
  ].filter(Boolean)

  const sellList1 = [
    {
      name: "Your Friend's Purchases",
      href: _links.friendsPurchases(),
    },
    {
      name: "Today's Deal",
      href: '/#',
    },
    {
      name: 'Gift Cards',
      href: '/#',
    },
  ]
  const sellList2 = [
    {
      name: 'Products of your Interest',
      href: '/#',
    },
    {
      name: 'Business of your Interest',
      href: '/#',
    },
    {
      name: 'Purchase history',
      href: '/#',
    },
    {
      name: 'Recent activity',
      href: '/#',
    },
    {
      name: 'Buy again',
      href: '/#',
    },
    {
      name: 'Saved searches',
      href: '/#',
    },
    {
      name: 'Saved sellers',
      href: '/#',
    },
    {
      name: 'Saved Inbox',
      href: '/#',
    },
  ]

  const [selectedProduct, setSelectedProduct] = useState<any>(productsArray[0])

  const searchPlaceHolder =
    ['products', 'bulk', 'all'].indexOf(selectedProduct.value) !== -1
      ? 'Search'
      : 'Find a'

  const [selectedDepartment, setSelectedDepartment] = useState<any>(
    departmentsArray[0]
  )

  const navClass =
    'flex flex-col items-center  font-medium text-base dark:text-gray-400 text-gray-500 link-hover'

  const settings = [
    {
      name: 'Settings',
      icon: FiSettings,
      onClick: () => history.push(_links.SETTINGS),
    },
    {
      name: 'Sign Out',
      onClick: () => dispatch(logOut(history)),

      icon: AiOutlineLogout,
    },
  ]

  const isProductsPosted = userData?.business?.products?.length > 0

  const sellProducts = [
    isProductsPosted && {
      name: 'My Products',
      href: _links.BROWSE_PRODUCTS(userData?._id),
      subtitle: '',
    },
    !isStoreOpened && {
      name: 'Open Store',
      href: _links.openStore(),
      subtitle: 'and sell your products like a professional',
    },
    isStoreOpened && {
      name: 'My Store',
      href: _links.viewStore(userData?.profileUrl),
    },
    isStoreOpened && {
      name: 'Edit Store',
      href: _links.BROWSE_PRODUCTS(userData?._id),
      subtitle: 'View store as other. Add product to store',
    },
    {
      name: `Sell ${isProductsPosted ? 'more' : ''} products`,
      subtitle: '',
      href: _links.addProduct(),
    },
  ].filter(Boolean)

  const { logo } = useTheme()

  const labelClass = 'hidden text-xs ml-2 2xl:block mt-1'
  const iconLabelClass = 'hidden 2xl:block mr-2 mt-1'

  return (
    <Popover
      style={{ zIndex: 999 }}
      className="fixed top-0 inset-x-0 dark:bg-gray-900 bg-white"
    >
      {({ open }) => (
        <>
          <div
            style={{ zIndex: 999 }}
            className="flex  justify-between items-center py-3 border-b dark:border-gray-700 border-gray-100  sm:px-6 md:justify-start md:space-x-10"
          >
            <div className="flex justify-center items-center lg:flex-1">
              <div
                title="sidebar"
                className="flex absolute left-0 ml-6 items-center  h-9 w-9 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-600 rounded p-2 justify-center"
                tabIndex={0}
                onClick={() => setShowSidebar(!showSidebar)}
              >
                <MenuAlt2Icon className="h-6 xl:h-4 xl:w-4 w-6 dark:text-white text-gray-900" />
              </div>
              <div className="flex   items-center max-w-440 mx-auto">
                <div className="flex items-center">
                  <a href={_links.HOME}>
                    <img
                      title="13RMS"
                      onClick={() => history.push('/')}
                      src={logo}
                      className="h-16 w-16 "
                      alt="13RMS"
                    />
                  </a>

                  <div className="hidden max-w-132 border-gray-200 transform ml-4  scale-95 z-10 rounded-xl h-12  lg:flex dark:border-gray-700 border">
                    <div className="ml-2">
                      <Selector
                        disableFocus
                        selectedItem={selectedProduct.label}
                        list={productsArray.map((product) => ({
                          name: product.label,
                        }))}
                        required
                        border={false}
                        onSelect={(item) => {
                          const selectedItem = find(
                            productsArray,
                            (_item) => _item.label === item.name
                          )
                          setSelectedProduct(selectedItem)
                        }}
                      />
                    </div>

                    <div className="w-40">
                      <input
                        id="home_search_panel"
                        name="search"
                        type="text"
                        className="relative  dark:bg-gray-900 dark:text-white w-full border-none outline-none shadow-none focus:outline-none text-sm  pl-3 pr-10 py-2 text-left  dark:placeholder-gray-400 placeholder-gray-500 h-full"
                        placeholder={
                          searchPlaceHolder + ' ' + selectedProduct.label
                        }
                      />
                    </div>
                    <div className="w-56">
                      <Selector
                        selectedItem={selectedDepartment.label}
                        list={departmentsArray.map((department) => ({
                          name: department.label,
                        }))}
                        border={false}
                        disableFocus
                        required
                        onSelect={(item) => {
                          const selectedItem = find(
                            departmentsArray,
                            (_item) => _item.label === item.name
                          )
                          setSelectedDepartment(selectedItem)
                        }}
                      />
                    </div>
                    <div className="relative flex items-center justify-center col-span-1">
                      <CountryListDropdown />
                    </div>
                  </div>
                </div>

                <Popover.Group as="nav" className="hidden  md:flex space-x-7">
                  <NavLink
                    title={'Home'}
                    to={'/dashboard'}
                    className={navClass}
                  >
                    <AiOutlineHome />
                    <span className={labelClass}>Home</span>
                  </NavLink>

                  <Popover className="relative">
                    {({ open }) => (
                      <>
                        <Popover.Button
                          title="My 13RMS"
                          className={classNames(
                            open ? 'text-gray-900' : 'text-gray-500',
                            `group bg-transparent transition-all rounded-md inline-flex items-center text-base font-medium ${navClass} focus:outline-none`
                          )}
                        >
                          <span className={navClass}>
                            <BiUserCircle />
                            <span className="hidden lg:flex text-xs items-center">
                              <span className={iconLabelClass}>My 13RMS</span>
                              <ChevronDownIcon
                                className={classNames(
                                  open ? 'text-gray-600' : 'text-gray-400',
                                  'h-4 w-4 group-hover:text-gray-500'
                                )}
                                aria-hidden="true"
                              />
                            </span>
                          </span>
                        </Popover.Button>

                        <Transition
                          show={open}
                          as={Fragment}
                          enter="transition ease-out duration-200"
                          enterFrom="opacity-0 translate-y-1"
                          enterTo="opacity-100 translate-y-0"
                          leave="transition ease-in duration-150"
                          leaveFrom="opacity-100 translate-y-0"
                          leaveTo="opacity-0 translate-y-1"
                        >
                          <Popover.Panel
                            static
                            className="absolute z-10 -ml-4 mt-4 transform px-2 w-screen max-w-md sm:px-6 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                          >
                            <div className="rounded-lg shadow-xl ring-1 ring-black ring-opacity-5 border border-gray-200 dark:border-gray-700 overflow-hidden">
                              <img
                                alt=""
                                src={
                                  userData?.coverPicture
                                    ? userData?.coverPicture
                                    : 'https://source.unsplash.com/1600x900/?nature,water'
                                }
                                className="w-full border-b border-gray-200 dark:border-gray-700 lg:h-28 sm:h-24 object-cover h-20"
                              />
                              <div className="relative grid gap-6 bg-white dark:bg-gray-800 px-5 py-6 sm:gap-8 sm:p-8">
                                <div className="flex w-full space-x-4 items-center space-between">
                                  <div className="w-1/2 flex text-xs items-center justify-center dark:border-gray-700 darK:hover:border-gray-500 dark:hover:bg-gray-600 dark:text-white transition-all border-gray-200 py-2 rounded-md font-light hover:bg-gray-50 cursor-pointer hover:border-gray-300 border">
                                    <a
                                      href={_links.getProfileById(
                                        userData?.profileUrl,
                                        userData?.other?.template || 1
                                      )}
                                    >
                                      View profile
                                    </a>
                                  </div>
                                  <a
                                    href={_links.viewStore(
                                      userData?.profileUrl
                                    )}
                                    className="w-1/2 flex text-xs items-center justify-center dark:border-gray-700 darK:hover:border-gray-500 dark:hover:bg-gray-600 dark:text-white transition-all border-gray-200 py-2 rounded-md font-light hover:bg-gray-50 cursor-pointer hover:border-gray-300 border"
                                  >
                                    View store
                                  </a>
                                </div>

                                {settings.map((item) => (
                                  <div
                                    key={item.name}
                                    onClick={() => item.onClick()}
                                    className="-m-3 gradient-item p-3 mt-1 flex items-center text-left rounded-lg dark:hover:bg-gray-600 transition-all hover:bg-gray-50 justify-start cursor-pointer"
                                  >
                                    <div className="flex-shrink-0 flex items-center justify-center h-6 w-6 bg-gradient-to-br from-yellow-400 via-red-500 to-pink-500 rounded-md  text-white sm:h-6 sm:w-6">
                                      <item.icon
                                        className="sm:h-3 sm:w-3"
                                        aria-hidden="true"
                                      />
                                    </div>
                                    <div className="ml-4">
                                      <p className="text-sm text-left font-medium mb-0 dark:text-white text-gray-700">
                                        {item.name}
                                      </p>
                                    </div>
                                  </div>
                                ))}

                                <div>
                                  <Toggle
                                    enabled={darkMode}
                                    text="Select mode"
                                    subText="Choose theme preferance"
                                    setEnabled={setDarkMode}
                                  />
                                </div>
                              </div>

                              <div className="flex px-5 py-5 bg-white border-t dark:border-gray-700 border-gray-200 dark:bg-gray-800 space-y-6 sm:flex sm:space-y-0 sm:px-8">
                                <div className=" flex-shrink-0">
                                  <img
                                    className="border-gradient border-transparent border-2 h-10 mr-6 rounded-full w-10 drop-shadow-lg"
                                    src={
                                      userData?.profilePicture
                                        ? userData?.profilePicture
                                        : avatarPlaceholder
                                    }
                                    alt="user"
                                  />
                                </div>
                                <div>
                                  <h4 className="hover:underline text-sm dark:text-white font-bold">
                                    <a
                                      href={_links.getProfileById(
                                        userData?.profileUrl,
                                        userData?.other?.template || 1
                                      )}
                                    >
                                      {userData?.fullName}
                                    </a>
                                  </h4>

                                  <p className="mt-1 text-gray-800 font-medium text-xs leading-3 dark:text-gray-400">
                                    {isBusiness
                                      ? userData?.business?.name
                                      : userData?.company?.jobTitle}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </Popover.Panel>
                        </Transition>
                      </>
                    )}
                  </Popover>

                  <NavLink title={'My Network'} to={'/#'} className={navClass}>
                    <BsPeople />
                    <span className={labelClass}>My Network</span>
                  </NavLink>

                  <NavLink
                    title={'Jobs'}
                    to={_links.exploreJobs()}
                    className={navClass}
                  >
                    <IoIosBriefcase />
                    <span className={labelClass}>Jobs</span>
                  </NavLink>

                  <Popover className="relative">
                    {({ open }) => (
                      <>
                        <Popover.Button
                          title="Go Shopping"
                          className={classNames(
                            open ? 'text-gray-900' : 'text-gray-500',
                            `group bg-transparent transition-all rounded-md inline-flex items-center text-base font-medium ${navClass} focus:outline-none`
                          )}
                        >
                          <span className={`${navClass}`}>
                            <GiReceiveMoney />
                            <span className="hidden lg:flex text-xs items-center">
                              <span className={iconLabelClass}>
                                Go Shopping
                              </span>
                              <ChevronDownIcon
                                className={classNames(
                                  open ? 'text-gray-600' : 'text-gray-400',
                                  'h-4 w-4 group-hover:text-gray-500'
                                )}
                                aria-hidden="true"
                              />
                            </span>
                          </span>
                        </Popover.Button>

                        <Transition
                          show={open}
                          as={Fragment}
                          enter="transition ease-out duration-200"
                          enterFrom="opacity-0 translate-y-1"
                          enterTo="opacity-100 translate-y-0"
                          leave="transition ease-in duration-150"
                          leaveFrom="opacity-100 translate-y-0"
                          leaveTo="opacity-0 translate-y-1"
                        >
                          <Popover.Panel
                            static
                            className="absolute z-10 -ml-4 mt-4 transform px-12 max-w-md w-screen lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                          >
                            <div className="rounded-lg shadow-xl ring-1 ring-black ring-opacity-5 border border-gray-200 dark:border-gray-700 overflow-hidden dark:bg-gray-800 bg-white">
                              <div className="border-b dark:border-gray-700">
                                <EmptyState
                                  hideBorders
                                  title={`Go Shopping`}
                                  iconUrl={'/shopping-cart.png'}
                                />
                              </div>
                              <div className="relative border-b border-gray-200 dark:border-gray-700 grid gap-4  px-5 py-6 sm:gap-4 sm:px-8 ">
                                {sellList1.map((item) => (
                                  <a
                                    key={item.name}
                                    href={item.href}
                                    className="-m-3 p-3 mt-1 flex items-center text-left dark:hover:bg-gray-700 transition-all  rounded-lg hover:bg-gray-200  justify-start cursor-pointer"
                                  >
                                    <div className="ml-4">
                                      <p className="text-xs dark:text-white text-left font-medium mb-0 text-gray-700">
                                        {item.name}
                                      </p>
                                    </div>
                                  </a>
                                ))}
                              </div>
                              <div className="relative grid gap-4 dark:bg-gray-800 bg-white px-5 py-6 sm:gap-4 sm:px-8">
                                {sellList2.map((item) => (
                                  <a
                                    key={item.name}
                                    href={item.href}
                                    className="-m-3 p-3 mt-1 flex items-center text-left dark:hover:bg-gray-700 transition-all  rounded-lg hover:bg-gray-200  justify-start cursor-pointer"
                                  >
                                    <div className="ml-4">
                                      <p className="text-xs dark:text-white text-left font-medium mb-0 text-gray-700">
                                        {item.name}
                                      </p>
                                    </div>
                                  </a>
                                ))}
                              </div>
                              {
                                <div className="px-5 border-t border-gray-200 dark:border-gray-700 justify-between w-full py-5 bg-white dark:bg-gray-800 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                                  {callsToAction.map((item) => (
                                    <div
                                      key={item.name}
                                      className="w-1/2 flex  items-center justify-center "
                                    >
                                      <a
                                        href={item.href}
                                        className="-m-3 p-3 border border-gray-200 dark:border-gray-700 flex items-center rounded-md text-base font-medium box-rounded-md-2 dark:text-white text-gray-900 hover:bg-gray-200 transition-all duration-300 dark:hover:bg-gray-700 w-full justify-center"
                                      >
                                        <item.icon
                                          className="flex-shrink-0 h-4 w-4 text-gray-400"
                                          aria-hidden="true"
                                        />
                                        <span className="ml-3 text-xs">
                                          {item.name}
                                        </span>
                                      </a>
                                    </div>
                                  ))}
                                </div>
                              }
                            </div>
                          </Popover.Panel>
                        </Transition>
                      </>
                    )}
                  </Popover>
                  <Popover className="relative">
                    {({ open }) => (
                      <>
                        <Popover.Button
                          title="Go Shopping"
                          className={classNames(
                            open ? 'text-gray-900' : 'text-gray-500',
                            `group bg-transparent transition-all rounded-md inline-flex items-center text-base font-medium ${navClass} focus:outline-none`
                          )}
                        >
                          <span className={`${navClass}`}>
                            <FaMoneyBillWave />
                            <span className="hidden lg:flex text-xs items-center">
                              <span className={iconLabelClass}>Sell</span>
                              <ChevronDownIcon
                                className={classNames(
                                  open ? 'text-gray-600' : 'text-gray-400',
                                  'h-4 w-4  group-hover:text-gray-500'
                                )}
                                aria-hidden="true"
                              />
                            </span>
                          </span>
                        </Popover.Button>

                        <Transition
                          show={open}
                          as={Fragment}
                          enter="transition ease-out duration-200"
                          enterFrom="opacity-0 translate-y-1"
                          enterTo="opacity-100 translate-y-0"
                          leave="transition ease-in duration-150"
                          leaveFrom="opacity-100 translate-y-0"
                          leaveTo="opacity-0 translate-y-1"
                        >
                          <Popover.Panel
                            static
                            className="absolute z-10 -ml-4 mt-4 transform px-12 max-w-md w-screen lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                          >
                            <div className="rounded-lg shadow-xl ring-1 ring-black ring-opacity-5 border border-gray-200 dark:border-gray-700 overflow-hidden dark:bg-gray-800 bg-white">
                              <div className="border-b dark:border-gray-700">
                                <EmptyState
                                  hideBorders
                                  title="Sell"
                                  iconUrl={'/trade.png'}
                                />
                              </div>
                              <div className="relative grid gap-4 dark:bg-gray-800 bg-white px-5 py-6 sm:gap-4 sm:px-8">
                                {sellProducts.map((item) => (
                                  <a
                                    key={item.name}
                                    href={item.href}
                                    className="-m-3 p-3 mt-1 flex items-center text-left dark:hover:bg-gray-700 transition-all  rounded-lg hover:bg-gray-200  justify-start cursor-pointer"
                                  >
                                    <div className="ml-4">
                                      <p className="text-xs dark:text-white text-left font-medium mb-0 text-gray-700">
                                        {item.name}
                                      </p>
                                      {item?.subtitle && (
                                        <p className="text-xs dark:text-gray-500 text-left mt-1 text-gray-500">
                                          {item.subtitle}
                                        </p>
                                      )}
                                    </div>
                                  </a>
                                ))}
                              </div>
                            </div>
                          </Popover.Panel>
                        </Transition>
                      </>
                    )}
                  </Popover>

                  <Popover className="relative">
                    {({ open }) => (
                      <>
                        <Popover.Button
                          title="Business Apps"
                          className={classNames(
                            open ? 'text-gray-900' : 'text-gray-500',
                            `group bg-transparent transition-all rounded-md inline-flex items-center text-base font-medium ${navClass} focus:outline-none`
                          )}
                        >
                          <span className={navClass}>
                            <RiApps2Line />
                            <span className="hidden lg:flex text-xs items-center">
                              <ChevronDownIcon
                                className={classNames(
                                  open ? 'text-gray-600' : 'text-gray-400',
                                  'h-4 w-4 group-hover:text-gray-500'
                                )}
                                aria-hidden="true"
                              />
                            </span>
                          </span>
                        </Popover.Button>

                        <Transition
                          show={open}
                          as={Fragment}
                          enter="transition ease-out duration-200"
                          enterFrom="opacity-0 translate-y-1"
                          enterTo="opacity-100 translate-y-0"
                          leave="transition ease-in duration-150"
                          leaveFrom="opacity-100 translate-y-0"
                          leaveTo="opacity-0 translate-y-1"
                        >
                          <Popover.Panel
                            static
                            style={{ left: '-13rem' }}
                            className="absolute z-10  mt-4 transform w-screen max-w-md lg:max-w-2xl sm:px-6 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                          >
                            <div className="rounded-lg shadow-xl ring-1 ring-black ring-opacity-5 border border-gray-200 dark:border-gray-700 overflow-hidden">
                              <div className="relative dark:bg-gray-800 bg-white px-5 py-6 sm:gap-8 sm:p-8 ">
                                <div className="grid mt-4 gap-8 lg:grid-cols-2 grid-cols-1">
                                  <p className="inline-block text-lg sm:text-xl tracking-wide border-b-2 border-pink-600 mt-2 font-bold text-gray-900 dark:text-white">
                                    13RMS
                                  </p>

                                  {businessApps.map((item) => (
                                    <a
                                      key={item.name}
                                      href={item.link}
                                      className="-m-3 p-3 cursor-pointer relative flex items-center rounded-lg dark:hover:bg-gray-700 animated-arrow__container hover:bg-gray-100 "
                                    >
                                      <div className="flex-shrink-0 flex items-center justify-center h-7 w-7  rounded-md shadow-lg text-white bg-gradient sm:h-8 sm:w-8">
                                        <item.icon
                                          className="h-4 w-4"
                                          aria-hidden="true"
                                        />
                                      </div>

                                      <p className="text-sm ml-4 font-medium dark:text-white text-gray-900">
                                        {item.name}
                                      </p>

                                      <AiOutlineArrowRight
                                        className="h-4 w-4 text-gray-500 absolute animated-arrow right-2 dark:text-gray-400"
                                        aria-hidden="true"
                                      />
                                    </a>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </Popover.Panel>
                        </Transition>
                      </>
                    )}
                  </Popover>

                  <Popover className="relative">
                    {({ open }) => (
                      <>
                        <Popover.Button
                          title="Notifications"
                          className={classNames(
                            open ? 'text-gray-900' : 'text-gray-500',
                            `group bg-transparent transition-all rounded-md inline-flex items-center text-base font-medium ${navClass} focus:outline-none`
                          )}
                        >
                          <span className={navClass}>
                            <div className="relative">
                              <IoMdNotifications />
                              {notifications?.length > 0 && (
                                <div className="absolute top-0 right-0">
                                  <span className="flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                                  </span>
                                </div>
                              )}
                            </div>
                            <span className="hidden lg:flex text-xs items-center">
                              <ChevronDownIcon
                                className={classNames(
                                  open ? 'text-gray-600' : 'text-gray-400',
                                  'h-4 w-4 group-hover:text-gray-500'
                                )}
                                aria-hidden="true"
                              />
                            </span>
                          </span>
                        </Popover.Button>

                        <Transition
                          show={open}
                          as={Fragment}
                          enter="transition ease-out duration-200"
                          enterFrom="opacity-0 translate-y-1"
                          enterTo="opacity-100 translate-y-0"
                          leave="transition ease-in duration-150"
                          leaveFrom="opacity-100 translate-y-0"
                          leaveTo="opacity-0 translate-y-1"
                        >
                          <Popover.Panel
                            static
                            style={{ left: '0rem' }}
                            className="absolute z-10  mt-4 transform w-screen max-w-md lg:max-w-lg sm:px-6 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                          >
                            <div className="rounded-lg shadow-xl ring-1 ring-black ring-opacity-5 border border-gray-200 dark:border-gray-700 overflow-hidden">
                              <div className="relative dark:bg-gray-800 bg-white px-5 py-6 sm:gap-8 sm:p-8 ">
                                <div className="grid grid-cols-1">
                                  {notifications && notifications.length > 0 ? (
                                    notifications?.map((notification) => {
                                      const isGroupInvite =
                                        notification.type ===
                                        'group-invite-request'
                                      const isEventInvite =
                                        notification.type ===
                                        'event-invite-request'
                                      const props = {
                                        userData: userData,
                                        key: notification._id,
                                        notification: notification,
                                        setNotifications: setNotifications,
                                      }

                                      if (isGroupInvite) {
                                        return (
                                          <GroupInviteNotification {...props} />
                                        )
                                      } else if (isEventInvite) {
                                        return (
                                          <EventInviteNotification {...props} />
                                        )
                                      }
                                    })
                                  ) : (
                                    <EmptyState
                                      hideBorders
                                      title="No Notifications"
                                      subtitle={`Your all notifications will be here`}
                                      iconUrl={'/notification.png'}
                                    />
                                  )}
                                </div>
                              </div>
                            </div>
                          </Popover.Panel>
                        </Transition>
                      </>
                    )}
                  </Popover>
                  <NavLink title={'Cart'} to={'/cart'} className={navClass}>
                    <AiOutlineShoppingCart />
                    <span className={labelClass}>Cart</span>
                  </NavLink>
                </Popover.Group>
              </div>

              {/* <div className=" hidden">
                <Button
                  link={_links.BROWSE_PRODUCTS(userData?.profileUrl)}
                  className="mx-4 "
                  target=""
                  Icon={BsBagFill}
                  label="Explore Products"
                  gradient
                />
              </div> */}
            </div>
          </div>
        </>
      )}
    </Popover>
  )
}

export default DashboardHeader
