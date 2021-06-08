import React, { Fragment } from 'react'
import HeaderStyles from './styles/HeaderStyles'
import logo from './../public/assets/13RMS.png'

const HomeContent = ({ theme }) => {
  return (
    <Fragment>
      <div {...{ className: HeaderStyles + ' home-content' }}>
        <hr />
        <div {...{ className: 'text-center ' + theme, style: { paddingTop: '3rem', paddingBottom: '1rem' } }}>
          {<img {...{ alt: '', src: logo, style: { margin: '0', height: '11rem' } }} />}
          <p {...{ className: 'description', style: { textAlign: 'center', display: 'grid', fontWeight: '600', fontSize: '15px' } }}>
            <span>The place to sell your products, services</span>
            <span>and build business relationships</span>
          </p>
        </div>
      </div>
    </Fragment>
  )
}

export default HomeContent
