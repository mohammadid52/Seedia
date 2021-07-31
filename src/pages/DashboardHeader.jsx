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
import { BsFilePost, BsPeople } from 'react-icons/bs'
import { CgWorkAlt } from 'react-icons/cg'
import { FaAdversal, FaMoneyBillAlt, FaConnectdevelop } from 'react-icons/fa'
import { MdFindReplace, MdAttachMoney, MdLanguage } from 'react-icons/md'
import { SiGoogleanalytics } from 'react-icons/si'
import { FiActivity } from 'react-icons/fi'

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

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function DashboardHeader() {
  return (
    <Popover className="relative bg-white">
      {({ open }) => (
        <>
          <div className="flex justify-between items-center py-3 border-b-2 border-gray-100  sm:px-6 md:justify-start md:space-x-10">
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
              <a
                href="/#"
                className="text-base flex flex-col items-center font-medium text-gray-500 hover:text-gray-900"
              >
                <AiOutlineHome />
                Home
              </a>
              <a
                href="/#"
                className="text-base font-medium text-gray-500 hover:text-gray-900  flex flex-col items-center"
              >
                <BsPeople />
                My Network
              </a>
              <a
                href="/#"
                className="text-base font-medium text-gray-500 hover:text-gray-900  flex flex-col items-center"
              >
                <CgWorkAlt />
                Jobs
              </a>
              <a
                href="/#"
                className="text-base font-medium text-gray-500 hover:text-gray-900  flex flex-col items-center"
              >
                <BiMessageDetail />
                Messaging
              </a>
              <a
                href="/#"
                className="text-base font-medium text-gray-500 hover:text-gray-900  flex flex-col items-center"
              >
                <IoMdNotificationsOutline />
                Notifications
              </a>
              <Popover className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open ? 'text-gray-900' : 'text-gray-500',
                        'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none'
                      )}
                    >
                      <span className="text-base font-medium normal-hover text-gray-500 hover:text-gray-900  flex flex-col items-center">
                        <GiReceiveMoney className="" />
                        <span>
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
                        className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                      >
                        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                          <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                            {sellList.map((item) => (
                              <a
                                key={item.name}
                                href={item.href}
                                className="-m-3 p-3 mt-1 flex items-center text-left rounded-lg hover:bg-gray-50 justify-start cursor-pointer"
                              >
                                {/* <item.icon
                                  className="flex-shrink-0 h-6 w-6 text-indigo-600"
                                  aria-hidden="true"
                                /> */}
                                <div className="ml-4">
                                  <p className="text-base text-left font-medium mb-0 text-gray-900">
                                    {item.name}
                                  </p>
                                </div>
                              </a>
                            ))}
                          </div>
                          <div className="px-5 py-5 bg-gray-50 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                            {callsToAction.map((item) => (
                              <div key={item.name} className="flow-root">
                                <a
                                  href={item.href}
                                  className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100"
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
                        'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none'
                      )}
                    >
                      <span className="text-base font-medium normal-hover text-gray-500 hover:text-gray-900  flex flex-col items-center">
                        <BiUserCircle className="" />
                        <span>
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
                        className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                      >
                        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                          <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                            {settings.map((item) => (
                              <a
                                key={item.name}
                                href={item.href}
                                className="-m-3 gradient-item p-3 mt-1 flex items-center text-left rounded-lg hover:bg-gray-50 justify-start cursor-pointer"
                              >
                                <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 bg-gradient-to-br from-yellow-400 via-red-500 to-pink-500 rounded-md shadow-lg text-white sm:h-12 sm:w-12">
                                  <item.icon
                                    className="h-6 w-6"
                                    aria-hidden="true"
                                  />
                                </div>
                                <div className="ml-4">
                                  <p className="text-base text-left font-medium mb-0 text-gray-700">
                                    {item.name}
                                  </p>
                                </div>
                              </a>
                            ))}
                          </div>

                          <div className="flex px-5 py-5 bg-gray-50 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                            <div className="mr-1 flex-shrink-0">
                              <img
                                className="h-16 rounded-full w-16"
                                src={
                                  'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                                }
                                alt="user"
                              />
                            </div>
                            <div>
                              <h4 className="text-lg font-bold">
                                Mohammad Dehgamwala
                              </h4>
                              <p className="mt-1">Web developer</p>
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
                        'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none'
                      )}
                    >
                      <span className="text-base font-medium normal-hover text-gray-500 hover:text-gray-900  flex flex-col items-center">
                        <BiUserCircle className="" />
                        <span>
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
                        className="absolute z-10  mt-3 transform w-screen max-w-md lg:max-w-2xl lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                      >
                        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                          <div className="relative  bg-white px-5 py-6 sm:gap-8 sm:p-8 ">
                            <p className="inline-block text-2xl tracking-wide mb-4 border-b-2 border-pink-600 mt-2 font-bold text-gray-900 ">
                              13RMS
                            </p>

                            <div className="grid gap-6 lg:grid-cols-2">
                              {businessApps.map((item) => (
                                <a
                                  key={item.name}
                                  href={item.href}
                                  className="-m-3 p-3 cursor-pointer flex items-start rounded-lg hover:bg-gray-100"
                                >
                                  <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 bg-gradient-to-br from-yellow-400 via-red-500 to-pink-500 rounded-md shadow-lg text-white sm:h-12 sm:w-12">
                                    <item.icon
                                      className="h-6 w-6"
                                      aria-hidden="true"
                                    />
                                  </div>
                                  <div className="ml-4">
                                    <p className="text-base font-medium text-gray-900">
                                      {item.name}
                                    </p>
                                    <p className="mt-1 text-sm text-gray-500">
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
