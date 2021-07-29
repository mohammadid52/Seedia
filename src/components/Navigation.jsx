/* eslint-disable quotes */
/* This example requires Tailwind CSS v2.0+ */
import React, { Fragment, useState } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon } from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/solid'
import { adjustColors } from 'values/values'
import Button from './atoms/Button'
import { useHistory } from 'react-router-dom'
import Toggle, { classNames } from './atoms/Toggle'

export default function Navigation() {
  const [darkMode, setDarkMode] = useState(false)
  const [selected, setSelected] = useState(adjustColors[0])

  const history = useHistory()

  return (
    <Popover className="relative bg-white">
      {({ open }) => (
        <>
          <div className=" px-4 sm:px-6">
            <div className="flex justify-between items-center border-b-2 border-gray-100 py-3 md:justify-start md:space-x-10">
              <div className="flex justify-start lg:w-0 lg:flex-1">
                <a href="/#">
                  <span className="sr-only">13RMS</span>
                  <img
                    className="h-12 w-auto sm:h-12"
                    src={process.env.PUBLIC_URL + '/logo.png'}
                    alt=""
                  />
                </a>
                <Popover.Group
                  as="nav"
                  className="hidden ml-6 md:flex space-x-10"
                >
                  <a
                    href="/#"
                    className="text-base font-medium text-gray-500 hover:text-gray-900"
                  >
                    Help & Contact
                  </a>
                  <Popover className="relative">
                    {({ open }) => (
                      <>
                        <Popover.Button
                          className={classNames(
                            open ? 'text-gray-900' : 'text-gray-500',
                            'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                          )}
                        >
                          <a
                            href="/#"
                            className="text-base font-medium text-gray-500 hover:text-gray-900"
                          >
                            Adjust Colors
                          </a>
                          <ChevronDownIcon
                            className={classNames(
                              open ? 'text-gray-600' : 'text-gray-400',
                              'ml-2 h-5 w-5 group-hover:text-gray-500'
                            )}
                            aria-hidden="true"
                          />
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
                                <div>
                                  <Toggle
                                    enabled={darkMode}
                                    text="Select mode"
                                    subText="Choose theme preferance"
                                    setEnabled={setDarkMode}
                                  />
                                </div>

                                {adjustColors.map((item) => (
                                  <a
                                    key={item.name}
                                    onClick={() => setSelected(item)}
                                    href={item.href}
                                    className="-m-3 p-3 mt-1 flex items-center text-left rounded-lg hover:bg-gray-50 justify-start cursor-pointer"
                                  >
                                    <span
                                      className={classNames(
                                        selected.name === item.name
                                          ? 'bg-indigo-600 border-transparent'
                                          : 'bg-white border-gray-300',
                                        selected.name === item.name
                                          ? 'ring-2 ring-offset-2 ring-indigo-500'
                                          : '',
                                        'h-4 w-4 mt-0.5 cursor-pointer rounded-full border flex items-center justify-center'
                                      )}
                                      aria-hidden="true"
                                    >
                                      <span className="rounded-full bg-white w-1.5 h-1.5" />
                                    </span>
                                    <div className="ml-4">
                                      <p className="text-base text-left font-medium text-gray-900 mb-0">
                                        {item.name}
                                      </p>
                                      {/* <p className="mt-1 text-left text-sm text-gray-500">
                                        {item.description}
                                      </p> */}
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
                  <a
                    href="/#"
                    className="text-base font-medium text-gray-500 hover:text-gray-900"
                  >
                    Join our forum
                  </a>
                </Popover.Group>
              </div>
              <div className="-mr-2 -my-2 md:hidden">
                <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open menu</span>
                  <MenuIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>

              <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                <a
                  href="/signup"
                  className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
                >
                  Join Now
                </a>

                <Button
                  onClick={() => history.push('/login')}
                  className="ml-4"
                  label="Login"
                  gradient
                />
              </div>
            </div>
          </div>
        </>
      )}
    </Popover>
  )
}
