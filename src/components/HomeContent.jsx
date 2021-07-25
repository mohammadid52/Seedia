import React, { Fragment } from 'react'

import logo from 'assets/images/13RMS.png'

const HomeContent = ({ theme }) => {
  return (
    <Fragment>
      <div {...{ className: ' home-content' }}>
        <div
          {...{
            className: 'text-center ' + theme,
            style: { paddingTop: '3rem', paddingBottom: '1rem' },
          }}
        >
          <img alt="13RMS" src={logo} className="m-0 h-48" />
          <p
            {...{
              className: 'description',
              style: {
                textAlign: 'center',
                display: 'grid',
                fontWeight: '600',
                fontSize: '15px',
              },
            }}
          >
            <span>The place to sell your products, services</span>
            <span>and build business relationships</span>
          </p>
        </div>
      </div>
    </Fragment>
  )
}

export default HomeContent
