import React from 'react'

import { RiArrowDropDownFill } from 'react-icons/ri'
import usa from 'assets/images/countries/usa.png'

const CountryListDropdown = () => {
  return (
    <div className="flex-0">
      <ul className="flex items-center customDropdown p-0 m-0">
        <li className="nav-item  mb-0">
          <a
            className="flex items-center  pt-1"
            href="/#"
            id="navbarDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img alt={'USA'} src={usa} className="w-8 h-8" />
            <RiArrowDropDownFill className="w-8 h-8 dark:text-gray-50" />
          </a>
          <ul className="dropdown-content hidden absolute right-0 top-8 bg-white dark:bg-gray-700 py-4 px-4 origin-top-right mt-2  rounded-md shadow-lg  ring-1 ring-black ring-opacity-5 focus:outline-none w-72">
            <li className="nav-item">
              <span className="dark:text-white mr-11 font-semibold">
                Change language{' '}
              </span>

              <span className="dark:text-blue-500 link-hover cursor-pointer">
                Learn more
              </span>
            </li>
            <li className="nav-item mt-2">
              <span className="dark:text-white mr-14">English-EN</span>
              <span className="dark:text-blue-500 cursor-pointer link-hover">
                Change
              </span>
            </li>

            <div
              className="dark:bg-gray-900 bg-gray-50  my-4 dark:bg-opacity-100 bg-opacity-30"
              style={{ height: 1 }}
            />

            <li className="nav-item mt-2">
              <span className="dark:text-white mr-12 font-semibold">
                Change currency
              </span>
              <span className="dark:text-blue-500 cursor-pointer link-hover">
                Learn more
              </span>
            </li>
            <li className="nav-item mt-2">
              <span className="dark:text-white mr-14">$- USD- US Dollar</span>
              <span className="dark:text-blue-500 cursor-pointer link-hover">
                Change
              </span>
            </li>
            <div
              className="bg-gray-50 my-4 bg-opacity-30"
              style={{ height: 1 }}
            />

            <li className="nav-item mt-2 flex flex-col text-center">
              <span className="dark:text-white flex mb-2">
                <img className="w-6 h-6" src={usa} alt="USA" />
                <span className="dark:text-white site-info text-gray-400">
                  You are on Tradingpost13RMS.com
                </span>
              </span>
              <span className="dark:text-blue-500 cursor-pointer link-hover">
                Change country/region
              </span>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  )
}

export default CountryListDropdown
