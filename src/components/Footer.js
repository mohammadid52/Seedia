import React, { Fragment } from 'react'
import { Row, Col } from 'reactstrap'
import { compose, pure, withProps, lifecycle, withHandlers, withState } from 'recompose'

import WorldwideLocations from './WorldwideLocations'

import usa from './../public/assets/countries/usa.png'

import FooterStyles from './styles/FooterStyles'

const Footer = ({ theme, worldwideLocationPopoverIsOpen, openWorldWideLocationPopover, locationRef, closeWorldWideLocationPopover, changeCountry }) => {
  return (
    <Fragment>
      <hr />
      <div {...{ className: FooterStyles }}>
        <Row {...{ className: theme }}>
          <nav {...{ className: 'navbar navbar-expand-lg navbar-light' }}>
            <div {...{ className: 'container', style: {} }}>
              <div {...{ className: 'collapse navbar-collapse h-100', id: 'navbarSupportedContent', style: { color: '#fff', paddingTop: '25px' } }}>
                {
                  // ------------------------------------
                }
                <Col {...{ md: { size: 3 }, sm: { size: 12 }, className: '' }}>
                  <p {...{ className: '' }}>{'13RMS Trading post'}</p>
                  <ul>
                    <li>About 13RMS Trading post</li>
                    <li>Careers</li>
                    <li>News</li>
                    <li>Blog</li>
                    <li>Advertise with us</li>
                  </ul>
                </Col>
                {
                  // ------------------------------------
                }
                <Col {...{ md: { size: 3 }, sm: { size: 12 }, className: '' }}>
                  <p {...{ className: '' }}>Help & Contact </p>
                  <ul>
                    <li>Contact us</li>
                    <li>Help</li>
                    <li>Ask the community</li>
                    <li>Resolution Center</li>
                    <li>Seller Center</li>
                    <li>Your advertising preferances</li>
                  </ul>
                </Col>
                {
                  // ------------------------------------
                }
                <Col {...{ md: { size: 2 }, sm: { size: 12 }, className: '' }}>
                  <p {...{ className: '' }}>Buy </p>
                  <ul>
                    <li>Registration</li>
                    <li>Moneyback guarentee</li>
                    <li>Buyer protection</li>
                    <li>Pay safely</li>
                  </ul>
                </Col>
                {
                  // ------------------------------------
                }
                <Col {...{ md: { size: 2 }, sm: { size: 12 }, className: '' }}>
                  <p {...{ className: '' }}>Sell </p>
                  <ul>
                    <li>Start selling</li>
                    <li>How to sell</li>
                  </ul>
                </Col>
                {
                  // ------------------------------------
                }
                <Col {...{ md: { size: 2 }, sm: { size: 12 }, className: '' }}>
                  <p {...{ className: '' }}>Community </p>
                  <ul>
                    <li>Join our community</li>
                    <li>Knowledge base</li>
                    <li>Groups</li>
                    <li>Messenger</li>
                  </ul>
                </Col>
                {
                  // ------------------------------------
                }
                <Col {...{ md: { size: 3 }, sm: { size: 12 }, className: '' }}>
                  <p {...{ className: '' }}>Tool & Apps </p>
                  <ul>
                    <li>Developers</li>
                    <li>Security Center</li>
                    <li>Site Map</li>
                  </ul>
                </Col>
                {
                  // ------------------------------------
                }
                <Col {...{ md: { size: 9 }, sm: { size: 12 } }}>
                  <p> {'13RMS Trading post worldwide'} </p>
                  <div {...{ className: 'container p-0', ref: locationRef }}>
                    <button {...{ type: 'button', className: 'button worldwide dropdown-toggle', onClick: openWorldWideLocationPopover }}>
                      <img {...{ alt: '', src: usa, style: { width: '2rem', height: '2rem', marginRight: '8px' } }} /> {' United States'}
                    </button>
                    {worldwideLocationPopoverIsOpen ? <WorldwideLocations {...{ closeWorldWideLocationPopover, changeCountry }} /> : null}
                  </div>
                </Col>
                <Col {...{ md: { size: 12 }, sm: { size: 6 }, className: 'text-center' }}>
                  <p {...{ className: 'copy-right' }}>
                    {'Copyright © 2021 13RMS Trading post all rights reserved. '}
                    <a {...{ href: '/#', style: { marginRight: '5px' } }}>User agreement </a> <a {...{ href: '/#', style: { marginRight: '5px' } }}>Privacy </a>
                    <a {...{ href: '/#' }}>Cookies </a>
                  </p>
                  <p className="text-center copy-right">A Nature tower B.V. company</p>
                </Col>
                {
                  // ------------------------------------
                }
              </div>
            </div>
          </nav>
        </Row>
      </div>
    </Fragment>
  )
}
export default compose(
  withProps(() => ({
    locationRef: React.createRef(),
  })),
  withState('extraRunType', 'setExtraRunType', null),
  withState('worldwideLocationPopoverIsOpen', 'setWorldwideLocationPopoverStatus', false),

  withHandlers({
    openWorldWideLocationPopover: ({ setWorldwideLocationPopoverStatus, worldwideLocationPopoverIsOpen }) => () => {
      setWorldwideLocationPopoverStatus(!worldwideLocationPopoverIsOpen)
    },
    closeWorldWideLocationPopover: ({ setWorldwideLocationPopoverStatus, worldwideLocationPopoverIsOpen }) => () => {
      setWorldwideLocationPopoverStatus(!worldwideLocationPopoverIsOpen)
    },
    handleClickOutside: ({ locationRef, setWorldwideLocationPopoverStatus, worldwideLocationPopoverIsOpen }) => (event) => {
      if (locationRef.current && !locationRef.current.contains(event.target)) {
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
