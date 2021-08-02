import React, { Fragment } from 'react'
import {
  compose,
  pure,
  withProps,
  lifecycle,
  withHandlers,
  withState,
} from 'recompose'

import usa from 'assets/images/countries/usa.png'

import { Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon, MenuIcon } from '@heroicons/react/outline'
import { classNames } from 'utils/classNames'
import { countries } from 'values/values'
// import { Col } from 'reactstrap'

const WorldListPopover = ({ changeCountry }) => {
  return (
    <Popover className="relative z-100 dark:bg-gray-800 bg-white">
      {({ open }) => (
        <>
          <div className="max-w-7xl">
            <div className="flex justify-between items-center  py-6 md:justify-start md:space-x-10">
              <div className="-mr-2 -my-2 md:hidden">
                <Popover.Button className="bg-inherit rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open menu</span>
                  <MenuIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>

              <Popover.Group as="nav" className="" style={{ margin: 0 }}>
                <Popover className="relative">
                  {({ open }) => (
                    <>
                      <p className="mb-3  text-sm font-medium dark:text-gray-400 text-gray-400">
                        13RMS Trading post worldwide
                      </p>
                      <Popover.Button
                        className={classNames(
                          open ? 'text-gray-900' : 'text-gray-500',
                          'group bg-inherit rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none dark:border-gray-700 border p-2 border-gray-400 '
                        )}
                      >
                        <img alt="usa" className={'h-4 mr-1 w-4 '} src={usa} />
                        <span className="dark:text-gray-400">
                          United States
                        </span>
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
                          style={{ maxWidth: '90rem' }}
                          className="absolute bottom-10 z-10 -ml-4 mt-3 transform px-2 w-screen sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                        >
                          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                            <div className="relative grid bg-white dark:bg-gray-700 px-5 py-6 sm:gap-8 sm:p-8 grid-cols-6">
                              {countries.map((country, key) => {
                                return (
                                  <div
                                    className="cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 p-2 px-3 truncate rounded-md flex items-center justify-start"
                                    key={key}
                                    onClick={() => {}}
                                  >
                                    <img
                                      alt={country.label}
                                      src={country.flag}
                                      className="w-6 h-6 mr-3"
                                    />
                                    <p className="mb-0 dark:text-white">
                                      {country.label}
                                    </p>
                                  </div>
                                )
                              })}
                            </div>
                          </div>
                        </Popover.Panel>
                      </Transition>
                    </>
                  )}
                </Popover>
              </Popover.Group>
            </div>
          </div>
        </>
      )}
    </Popover>
  )
}

const navigation = {
  first: [
    { name: 'About 13RMS Trading post', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'News', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Advertise with us', href: '#' },
  ],
  second: [
    { name: 'Contact us', href: '#' },
    { name: 'Help', href: '#' },
    { name: 'Ask the community', href: '#' },
    { name: 'Resolution Center', href: '#' },
    { name: 'Seller Center', href: '#' },
    { name: 'Your advertising preferances', href: '#' },
  ],
  third: [
    { name: 'Registration', href: '#' },
    { name: 'Moneyback guarentee', href: '#' },
    { name: 'Buyer protection', href: '#' },
    { name: 'Pay safely', href: '#' },
  ],
  fourth: [
    { name: 'Start selling', href: '#' },
    { name: 'How to sell', href: '#' },
  ],
  fifth: [
    { name: 'Join our community', href: '#' },
    { name: 'Knowledge base', href: '#' },
    { name: 'Groups', href: '#' },
    { name: 'Messenger', href: '#' },
  ],
  sixth: [
    { name: 'Developers', href: '#' },
    { name: 'Security Center', href: '#' },
    { name: 'Site Map', href: '#' },
  ],
}

const Footer = ({ changeCountry }) => {
  const year = new Date().getFullYear()
  return (
    <footer
      className="bg-white dark:bg-gray-800 dark:border-gray-700 border-t border-gray-200"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="mt-12 grid grid-cols-3 gap-8 xl:mt-0 xl:col-span-3">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold  text-gray-600 tracking-wider uppercase">
                  13RMS Trading post
                </h3>
                <ul className="mt-4 space-y-4 pl-0">
                  {navigation.first.map((item) => (
                    <li
                      className="text-sm font-medium text-gray-400 link-hover text-left"
                      key={item.name}
                    >
                      {item.name}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-600 tracking-wider uppercase">
                  Help & Contact
                </h3>
                <ul className="mt-4 space-y-4 pl-0">
                  {navigation.second.map((item) => (
                    <li
                      className="text-sm font-medium text-gray-400 link-hover text-left"
                      key={item.name}
                    >
                      {item.name}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-600 tracking-wider uppercase">
                  Buy
                </h3>
                <ul className="mt-4 space-y-4 pl-0">
                  {navigation.third.map((item) => (
                    <li
                      className="text-sm font-medium text-left text-gray-400 link-hover"
                      key={item.name}
                    >
                      {item.name}
                    </li>
                  ))}
                  <li>
                    <WorldListPopover changeCountry={changeCountry} />
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-600 tracking-wider uppercase">
                  Sell
                </h3>
                <ul className="mt-4 space-y-4 pl-0">
                  {navigation.fourth.map((item) => (
                    <li
                      className="text-sm font-medium text-gray-400 link-hover text-left"
                      key={item.name}
                    >
                      {item.name}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-600 tracking-wider uppercase">
                  Community
                </h3>
                <ul className="mt-4 space-y-4 pl-0">
                  {navigation.fifth.map((item) => (
                    <li
                      key={item.name}
                      className="text-sm font-medium text-gray-400 link-hover text-left"
                    >
                      {item.name}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-600 tracking-wider uppercase">
                  Tool & Apps
                </h3>
                <ul className="mt-4 space-y-4 pl-0">
                  {navigation.sixth.map((item) => (
                    <li
                      className="text-sm font-medium text-gray-400 link-hover text-left"
                      key={item.name}
                    >
                      {item.name}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t  dark:border-gray-700 border-gray-200 pt-8">
          <p className="text-sm text-gray-600 xl:text-center">
            &copy; {year} 13RMS, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default compose(
  withProps(() => ({
    locationRef: React.createRef(),
  })),
  withState('extraRunType', 'setExtraRunType', null),
  withState(
    'worldwideLocationPopoverIsOpen',
    'setWorldwideLocationPopoverStatus',
    false
  ),

  withHandlers({
    openWorldWideLocationPopover:
      ({ setWorldwideLocationPopoverStatus, worldwideLocationPopoverIsOpen }) =>
      () => {
        setWorldwideLocationPopoverStatus(!worldwideLocationPopoverIsOpen)
      },
    closeWorldWideLocationPopover:
      ({ setWorldwideLocationPopoverStatus, worldwideLocationPopoverIsOpen }) =>
      () => {
        setWorldwideLocationPopoverStatus(!worldwideLocationPopoverIsOpen)
      },
    handleClickOutside:
      ({
        locationRef,
        setWorldwideLocationPopoverStatus,
        worldwideLocationPopoverIsOpen,
      }) =>
      (event) => {
        if (
          locationRef.current &&
          !locationRef.current.contains(event.target)
        ) {
          setWorldwideLocationPopoverStatus(false)
        }
      },
    changeCountry: () => (countryCode) => {
      if (countryCode === 'NL') {
        window.location.assign('http://tradingpost13rms.nl')
      }
    },
  }),
  lifecycle({
    componentDidMount() {
      document.addEventListener('mousedown', this.props.handleClickOutside)
    },
    componentWillUnmount() {
      document.removeEventListener('mousedown', this.props.handleClickOutside)
    },
  }),
  pure
)(Footer)
