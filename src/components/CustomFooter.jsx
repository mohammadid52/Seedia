import React from 'react'
import {
  compose,
  pure,
  withProps,
  lifecycle,
  withHandlers,
  withState,
} from 'recompose'
// import WorldwideLocations from './WorldwideLocations'
// import usa from 'assets/images/countries/usa.png'
// import { Col } from 'reactstrap'

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

const Footer = ({
  theme,
  worldwideLocationPopoverIsOpen,
  openWorldWideLocationPopover,
  locationRef,
  closeWorldWideLocationPopover,
  changeCountry,
}) => {
  const year = new Date().getFullYear()
  return (
    <footer
      className="bg-white border-t border-gray-200"
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
                <h3 className="text-sm font-semibold text-gray-600 tracking-wider uppercase">
                  13RMS Trading post
                </h3>
                <ul className="mt-4 space-y-4 pl-0">
                  {navigation.first.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm font-medium text-gray-400 link-hover"
                      >
                        {item.name}
                      </a>
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
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm font-medium text-gray-400 link-hover"
                      >
                        {item.name}
                      </a>
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
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm font-medium text-gray-400 link-hover"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-600 tracking-wider uppercase">
                  Sell
                </h3>
                <ul className="mt-4 space-y-4 pl-0">
                  {navigation.fourth.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm font-medium text-gray-400 link-hover"
                      >
                        {item.name}
                      </a>
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
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm font-medium text-gray-400 link-hover"
                      >
                        {item.name}
                      </a>
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
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm font-medium text-gray-400 link-hover"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* <Col md={9} sm={12}>
              <p>13RMS Trading post worldwide</p>
              <div className="" ref={locationRef}>
                <button
                  {...{
                    type: 'button',
                    className: 'button worldwide dropdown-toggle',
                    onClick: openWorldWideLocationPopover,
                  }}
                >
                  <img
                    {...{
                      alt: '',
                      src: usa,
                      style: {
                        width: '2rem',
                        height: '2rem',
                        marginRight: '8px',
                      },
                    }}
                  />{' '}
                  United States
                </button>
                {worldwideLocationPopoverIsOpen ? (
                  <WorldwideLocations
                    {...{
                      closeWorldWideLocationPopover,
                      changeCountry,
                    }}
                  />
                ) : null}
              </div>
            </Col> */}
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 pt-8">
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
