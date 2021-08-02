import React, { Fragment } from 'react'

import logo from 'assets/images/13RMS.png'

const HomeContent = ({ theme }) => {
  return (
    <Fragment>
      <div className="home-content dark:bg-gray-800">
        <div className="text-center pt-12 pb-4">
          <img alt="13RMS" src={logo} className="m-0 h-48" />
          <p className="dark:text-gray-300 max-w-xl mt-5 mx-auto text-xl text-gray-500">
            The place to sell your products, services and build business
            relationships
          </p>
        </div>
      </div>
    </Fragment>
  )
}

export default HomeContent
