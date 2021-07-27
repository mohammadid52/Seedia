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
          <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
            The place to sell your products, services and build business
            relationships
          </p>
        </div>
      </div>
    </Fragment>
  )
}

export default HomeContent
