/* eslint-disable quotes */

import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon, MenuIcon } from '@heroicons/react/outline'
import {
  BiHelpCircle,
  BiMessageDetail,
  BiStore,
  BiUserCircle,
} from 'react-icons/bi'
import { IoIosSettings, IoMdNotificationsOutline } from 'react-icons/io'
import { GiReceiveMoney } from 'react-icons/gi'
import {
  AiOutlineHome,
  AiOutlineLogout,
  AiOutlineSearch,
  AiOutlineUsergroupDelete,
} from 'react-icons/ai'
import Toggle from 'components/ThemeToggle'
import { BsFilePost, BsPeople } from 'react-icons/bs'
import { CgWorkAlt } from 'react-icons/cg'
import { FaAdversal, FaMoneyBillAlt, FaConnectdevelop } from 'react-icons/fa'
import { MdFindReplace, MdAttachMoney, MdLanguage } from 'react-icons/md'
import { SiGoogleanalytics } from 'react-icons/si'
import { FiActivity } from 'react-icons/fi'
import { useUserContext } from 'context/UserContext'
import { IAbout } from 'interfaces/UniversalInterface'
import { classNames } from 'utils/classNames'

const settings = [
  {
    name: 'Settings & Privacy',
    description:
      'Get a better understanding of where your traffic is coming from.',
    href: '#/',
    icon: IoIosSettings,
  },
  {
    name: 'Help',
    description:
      'Get a better understanding of where your traffic is coming from.',
    href: '#/',
    icon: BiHelpCircle,
  },
  {
    name: 'Language',
    description:
      'Get a better understanding of where your traffic is coming from.',
    href: '#/',
    icon: MdLanguage,
  },
  {
    name: 'Activity',
    description:
      'Get a better understanding of where your traffic is coming from.',
    href: '#/',
    icon: FiActivity,
  },
  {
    name: 'Sign Out',
    description:
      'Get a better understanding of where your traffic is coming from.',
    href: '/',
    icon: AiOutlineLogout,
  },
]

const sellList = [
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

const callsToAction = [
  { name: 'Open Store', href: '/#', icon: BiStore },
  { name: 'Sell', href: '/#', icon: GiReceiveMoney },
]

const businessApps = [
  {
    icon: AiOutlineSearch,
    name: 'Search for leads',
    description:
      'Get a better understanding of where your traffic is coming from.',
  },
  {
    icon: BsFilePost,
    name: 'Post a job',
    description:
      'Get a better understanding of where your traffic is coming from.',
  },
  {
    icon: FaAdversal,
    name: 'Advertise',
    description:
      'Get a better understanding of where your traffic is coming from.',
  },
  {
    icon: FaMoneyBillAlt,
    name: 'Sell products',
    description:
      'Get a better understanding of where your traffic is coming from.',
  },
  {
    icon: AiOutlineUsergroupDelete,
    name: 'Groups',
    description:
      'Get a better understanding of where your traffic is coming from.',
  },
  {
    icon: MdFindReplace,
    name: 'Pro finder',
    description:
      'Get a better understanding of where your traffic is coming from.',
  },
  {
    icon: MdAttachMoney,
    name: 'Salary',
    description:
      'Get a better understanding of where your traffic is coming from.',
  },
  {
    icon: BsFilePost,
    name: 'New product',
    description: 'Lorem ipsum dolor sit amet',
  },
  {
    icon: FaConnectdevelop,
    name: 'New product developed',
    description: 'Lorem ipsum dolor sit amet',
  },
  {
    icon: SiGoogleanalytics,
    name: 'Profile statistics',
    description: 'Lorem ipsum dolor sit amet',
  },
]

const DashboardHeader = ({ about }: { about: IAbout }) => {
  const { setDarkMode, darkMode } = useUserContext()

  const navClass =
    'flex flex-col items-center font-medium text-base dark:text-gray-400 text-gray-500 link-hover'

  return (
    <Popover className="relative dark:bg-gray-800 bg-white">
      {({ open }) => (
        <>
          <div className="flex justify-between items-center py-3 border-b-2 dark:border-gray-700 border-gray-100  sm:px-6 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <a href="/#">
                <span className="sr-only">13RMS</span>
                <img
                  className="h-8 w-auto sm:h-10"
                  src={process.env.PUBLIC_URL + '/logo.png'}
                  alt=""
                />
              </a>
            </div>
            <div className="-mr-2 -my-2 md:hidden">
              <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                <span className="sr-only">Open menu</span>
                <MenuIcon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>

            <Popover.Group as="nav" className="hidden md:flex space-x-10">
              <a href="/#" className={navClass}>
                <AiOutlineHome />
                <span className="hidden lg:block">Home</span>
              </a>
              <a href="/#" className={navClass}>
                <BsPeople />

                <span className="hidden lg:block">My Network</span>
              </a>
              <a href="/#" className={navClass}>
                <CgWorkAlt />
                <span className="hidden lg:block">Jobs</span>
              </a>
              <a href="/#" className={navClass}>
                <BiMessageDetail />
                <span className="hidden lg:block">Messaging</span>
              </a>
              <a href="/#" className={navClass}>
                <IoMdNotificationsOutline />

                <span className="hidden lg:block">Notifications</span>
              </a>
              <Popover className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open ? 'text-gray-900' : 'text-gray-500',
                        `group bg-transparent transition-all rounded-md inline-flex items-center text-base font-medium ${navClass} focus:outline-none`
                      )}
                    >
                      <span className={navClass}>
                        <GiReceiveMoney className="" />
                        <span className="hidden lg:block">
                          Sell{' '}
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
                        className="absolute z-10 -ml-4 mt-4 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                      >
                        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                          <div className="relative grid gap-6 dark:bg-gray-700 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                            {sellList.map((item) => (
                              <a
                                key={item.name}
                                href={item.href}
                                className="-m-3 p-3 mt-1 flex items-center text-left dark:hover:bg-gray-600 transition-all  rounded-lg hover:bg-gray-50 justify-start cursor-pointer"
                              >
                                <div className="ml-4">
                                  <p className="text-base dark:text-white text-left font-medium mb-0 text-gray-900">
                                    {item.name}
                                  </p>
                                </div>
                              </a>
                            ))}
                          </div>
                          <div className="px-5 border-t border-gray-600 justify-between w-full py-5 bg-gray-50 dark:bg-gray-700 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                            {callsToAction.map((item) => (
                              <div
                                key={item.name}
                                className="w-1/2 flex items-center justify-center "
                              >
                                <a
                                  href={item.href}
                                  className="-m-3 p-3 flex items-center rounded-md text-base font-medium dark:text-white text-gray-900 hover:bg-gray-100 transition-all dark:hover:bg-gray-600 w-full justify-center"
                                >
                                  <item.icon
                                    className="flex-shrink-0 h-6 w-6 text-gray-400"
                                    aria-hidden="true"
                                  />
                                  <span className="ml-3">{item.name}</span>
                                </a>
                              </div>
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
                      className={classNames(
                        open ? 'text-gray-900' : 'text-gray-500',
                        `group bg-transparent transition-all rounded-md inline-flex items-center text-base font-medium ${navClass} focus:outline-none`
                      )}
                    >
                      <span className={navClass}>
                        <BiUserCircle className="" />
                        <span className="hidden lg:block">
                          My 13RMS{' '}
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
                        className="absolute z-10 -ml-4 mt-4 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                      >
                        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                          <div className="relative grid gap-6 bg-white dark:bg-gray-700 px-5 py-6 sm:gap-8 sm:p-8">
                            {settings.map((item) => (
                              <a
                                key={item.name}
                                href={item.href}
                                className="-m-3 gradient-item p-3 mt-1 flex items-center text-left rounded-lg dark:hover:bg-gray-600 transition-all hover:bg-gray-50 justify-start cursor-pointer"
                              >
                                <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 bg-gradient-to-br from-yellow-400 via-red-500 to-pink-500 rounded-md  text-white sm:h-8 sm:w-8">
                                  <item.icon
                                    className="sm:h-4 sm:w-4 h-8 w-8"
                                    aria-hidden="true"
                                  />
                                </div>
                                <div className="ml-4">
                                  <p className="text-base text-left font-medium mb-0 dark:text-white text-gray-700">
                                    {item.name}
                                  </p>
                                </div>
                              </a>
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

                          <div className="flex px-5 py-5 bg-white border-t dark:border-gray-600 border-gray-200 dark:bg-gray-700 space-y-6 sm:flex sm:space-y-0 sm:px-8">
                            <div className=" flex-shrink-0">
                              <img
                                className="h-14 mr-6 rounded-full w-14 drop-shadow-lg"
                                src={about.userImage}
                                alt="user"
                              />
                            </div>
                            <div>
                              <h4 className="text-lg dark:text-white font-bold">
                                {about.fullName}
                              </h4>
                              <p className="mt-1 text-gray-800 font-medium leading-3 dark:text-gray-400">
                                {about.jobTitle}
                              </p>
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
                      className={classNames(
                        open ? 'text-gray-900' : 'text-gray-500',
                        `group bg-transparent transition-all rounded-md inline-flex items-center text-base font-medium ${navClass} focus:outline-none`
                      )}
                    >
                      <span className={navClass}>
                        <BiUserCircle className="" />
                        <span className="hidden lg:block">
                          Business Apps{' '}
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
                        className="absolute z-10  mt-4 transform w-screen max-w-md lg:max-w-2xl lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                      >
                        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                          <div className="relative dark:bg-gray-700 bg-white px-5 py-6 sm:gap-8 sm:p-8 ">
                            <p className="inline-block text-2xl tracking-wide mb-4 border-b-2 border-pink-600 mt-2 font-bold text-gray-900 dark:text-white">
                              13RMS
                            </p>

                            <div className="grid mt-4 gap-8 lg:grid-cols-2">
                              {businessApps.map((item) => (
                                <a
                                  key={item.name}
                                  href={item.name}
                                  className="-m-3 p-3 cursor-pointer flex items-start rounded-lg dark:hover:bg-gray-600 hover:bg-gray-100"
                                >
                                  <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 bg-gradient-to-br from-yellow-400 via-red-500 to-pink-500 rounded-md shadow-lg text-white sm:h-12 sm:w-12">
                                    <item.icon
                                      className="h-6 w-6"
                                      aria-hidden="true"
                                    />
                                  </div>
                                  <div className="ml-4">
                                    <p className="text-base font-medium dark:text-white text-gray-900">
                                      {item.name}
                                    </p>
                                    <p className="mt-1 text-sm dark:text-gray-400 text-gray-500">
                                      {item.description}
                                    </p>
                                  </div>
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
            </Popover.Group>
          </div>
        </>
      )}
    </Popover>
  )
}

export default DashboardHeader
