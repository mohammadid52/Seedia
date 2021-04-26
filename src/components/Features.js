import React, { Fragment } from 'react'
import { Row, Col, Button } from 'reactstrap'

import paySafe from './../public/assets/features/pay-safe.png'
import globe from './../public/assets/features/globe.png'
import mobile from './../public/assets/features/mobile.png'
import appStore from './../public/assets/appStore.png'
import playstore from './../public/assets/playstore.png'
import protection from './../public/assets/features/protection.png'
import badge from './../public/assets/features/badge.png'
import FeaturesStyles from './styles/FeaturesStyles'

const Features = ({ theme }) => {
  return (
    <Fragment>
      <div {...{ className: FeaturesStyles, style: { paddingTop: '2.5rem', paddingBottom: '4rem' } }}>
        <Row {...{ className: 'justify-content ' + theme }}>
          <Col {...{ md: { size: 2 }, sm: { size: 3 }, className: 'text-center mb-4 mb-md-0' }}>
            <div>
              <img {...{ alt: '', src: badge, style: { height: '5rem' } }} />
              <p {...{ className: '' }}>
                Only do business with <br />
                verified users
              </p>

              <Button outline color="secondary" {...{ size: 'sm', className: 'feature-button' }}>
                Know More
              </Button>
            </div>
          </Col>
          <Col {...{ md: { size: 2 }, sm: { size: 2 }, className: 'text-center mb-4 mb-md-0' }}>
            <div>
              <img {...{ alt: '', src: paySafe, style: { height: '5rem' } }} />
              <p {...{ className: '' }}>
                Pay safely with <br /> {'13RMS Trading post'}
              </p>

              <Button outline color="secondary" {...{ size: 'sm', className: 'feature-button' }}>
                Know More
              </Button>
            </div>
          </Col>
          <Col {...{ md: { size: 2 }, sm: { size: 3 }, className: 'text-center mb-4 mb-md-0' }}>
            <div>
              <img {...{ alt: '', src: globe, style: { height: '5rem' } }} />
              <p {...{ className: '' }}>
                Worldwide selling & <br />
                Networking
              </p>
              <Button outline color="secondary" {...{ size: 'sm', className: 'feature-button' }}>
                Start Selling
              </Button>
            </div>
          </Col>
          <Col {...{ md: { size: 2 }, sm: { size: 3 }, className: 'text-center mb-4 mb-md-0' }}>
            <div>
              <img {...{ alt: '', src: mobile, style: { height: '5rem' } }} />
              <p {...{ className: '' }}>
                <span>Discover our app</span>
                <br /> <span>Download our app now</span>
              </p>
              <div>
                <img {...{ alt: '', src: playstore, style: { height: '2rem', cursor: 'pointer' }, className: 'mr3' }} />
                <img {...{ alt: '', src: appStore, style: { height: '2rem', cursor: 'pointer' } }} />
              </div>
            </div>
          </Col>
          <Col {...{ md: { size: 2 }, sm: { size: 2 }, className: 'text-center mb-4 mb-md-0' }}>
            <div>
              <img {...{ alt: '', src: protection, style: { height: '5rem' } }} />
              <p {...{ className: '' }}>
                Worldwide buyer
                <br /> protection
              </p>

              <Button outline color="secondary" {...{ size: 'sm', className: 'feature-button' }}>
                Know More
              </Button>
            </div>
          </Col>
        </Row>
      </div>
    </Fragment>
  )
}
export default Features
