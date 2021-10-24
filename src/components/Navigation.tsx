/* eslint-disable quotes */
/* This example requires Tailwind CSS v2.0+ */
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon } from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/solid'
import Button from 'components/atoms/Button'
import Toggle from 'components/ThemeToggle'
import { links } from 'constants/Links'
import { useUserContext } from 'context/UserContext'
import { NavProps } from 'interfaces/UniversalInterface'
import { Fragment, useState } from 'react'
import { BsBagFill } from 'react-icons/bs'
import { classNames } from 'utils/classNames'
import { adjustColors } from 'values/values'

const Navigation = ({
  template = 1,
  accountFilled = false,

  profileUrl,
}: NavProps) => {
  const { setDarkMode, darkMode } = useUserContext()

  const [selected, setSelected] = useState(adjustColors[0])

  return (
    <Popover className="relative dark:bg-gray-900  bg-white">
      {({ open }) => (
        <>
          <div className="">
            <div className="flex justify-between  items-center border-b-2 dark:border-gray-700 border-gray-100 py-2 md:justify-start md:space-x-10 px-2">
              <div className="flex justify-start lg:w-0 lg:flex-1 items-center">
                <Popover.Group
                  as="nav"
                  className="hidden ml-6 md:flex  items-center space-x-10"
                >
                  <a
                    href="/#"
                    className="text-xs font-medium dark:text-gray-400 text-gray-500 link-hover"
                  >
                    Help & Contact
                  </a>
                  <Popover className="relative">
                    {({ open }) => (
                      <>
                        <Popover.Button
                          className={classNames(
                            open ? 'text-gray-900' : 'text-gray-500',
                            'group bg-white dark:bg-gray-900 rounded-md inline-flex items-center text-xs font-medium link-hover focus:outline-none '
                          )}
                        >
                          <button className="text-xs font-medium dark:text-gray-400 text-gray-500 link-hover">
                            Adjust Colors
                          </button>
                          <ChevronDownIcon
                            className={classNames(
                              open ? 'text-gray-600' : ' text-gray-400',
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
                            className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/4"
                          >
                            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                              <div className="relative grid gap-6 bg-white dark:bg-gray-700 px-5 py-6 sm:gap-8 sm:p-8">
                                <div>
                                  <Toggle
                                    enabled={darkMode}
                                    text="Select mode"
                                    subText="Choose theme preferance"
                                    setEnabled={setDarkMode}
                                  />
                                </div>

                                {adjustColors.map((item) => (
                                  <div
                                    key={item.name}
                                    onClick={() => setSelected(item)}
                                    className="-m-3 p-3 mt-1 flex items-center text-left rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 justify-start cursor-pointer"
                                  >
                                    <span
                                      className={classNames(
                                        selected.name === item.name
                                          ? 'bg-indigo-600 border-transparent'
                                          : 'bg-white border-gray-300',
                                        selected.name === item.name ? '' : '',
                                        'h-4 w-4 mt-0.5 cursor-pointer rounded-full border flex items-center justify-center'
                                      )}
                                      aria-hidden="true"
                                    >
                                      <span className="rounded-full bg-white w-1.5 h-1.5" />
                                    </span>
                                    <div className="ml-4">
                                      <p className="text-xs text-left font-medium dark:text-white text-gray-900 mb-0">
                                        {item.name}
                                      </p>
                                    </div>
                                  </div>
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
                    className="text-xs text-gray-500  dark:text-gray-400 font-medium link-hover"
                  >
                    Join our forum
                  </a>
                </Popover.Group>
              </div>
              <div className="-mr-2 -my-2 md:hidden">
                <Popover.Button className="bg-white dark:bg-gray-900 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none ">
                  <span className="sr-only">Open menu</span>
                  <MenuIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>

              {accountFilled ? (
                <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                  <Button
                    link={links.getProfileById(profileUrl, template)}
                    className="mx-4 "
                    label="Profile"
                    target=""
                    gradient
                    invert
                  />

                  <Button
                    link={links.BROWSE_PRODUCTS(profileUrl)}
                    className="mx-4 "
                    target=""
                    Icon={BsBagFill}
                    label="Browse products"
                    gradient
                  />

                  <Button
                    link={links.FEED}
                    target=""
                    className="mx-4 "
                    label="Dashboard"
                    gradient
                  />
                </div>
              ) : (
                <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                  <a
                    href="/signup"
                    className="whitespace-nowrap dark:text-gray-400 text-gray-500  text-xs font-medium  link-hover"
                  >
                    Join Now
                  </a>

                  <Button
                    link={links.LOGIN}
                    className="mx-4 "
                    target=""
                    label="Login"
                    gradient
                  />
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </Popover>
  )
}
export default Navigation
