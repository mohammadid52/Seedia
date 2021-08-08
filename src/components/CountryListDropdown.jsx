import React from 'react'
import usa from 'assets/images/countries/usa.png'
import { classNames } from 'utils/classNames'
import { ChevronDownIcon } from '@heroicons/react/outline'

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
            <ChevronDownIcon
              className={classNames(
                ' text-gray-400',
                'ml-2 h-5 w-5 group-hover:text-gray-500'
              )}
              aria-hidden="true"
            />
          </a>
          <ul className="dropdown-content hidden absolute right-0 top-8 bg-white dark:bg-gray-700 py-4 px-4 origin-top-right mt-2  rounded-md shadow-lg  ring-1 ring-black ring-opacity-5 focus:outline-none w-96">
            <li className="nav-item">
              <span className="dark:text-white mr-11 font-semibold">
                Change language{' '}
              </span>

              <span className="dark:text-blue-400 link-hover cursor-pointer">
                Learn more
              </span>
            </li>
            <li className="nav-item mt-2">
              <span className="dark:text-white mr-14">English-EN</span>
              <span className="dark:text-blue-400 cursor-pointer link-hover">
                Change
              </span>
            </li>

            <div
              className="dark:bg-gray-600 bg-gray-200 my-4"
              style={{ height: 1 }}
            />

            <li className="nav-item mt-2">
              <span className="dark:text-white mr-12 font-semibold">
                Change currency
              </span>
              <span className="dark:text-blue-400 cursor-pointer link-hover">
                Learn more
              </span>
            </li>
            <li className="nav-item mt-2">
              <span className="dark:text-white mr-14">$ US Dollar</span>
              <span className="dark:text-blue-400 cursor-pointer link-hover">
                Change
              </span>
            </li>
            <div
              className="dark:bg-gray-600 bg-gray-200 my-4"
              style={{ height: 1 }}
            />

            <li className="nav-item mt-2 flex flex-col text-center">
              <span className="dark:text-white flex mb-2">
                <img className="w-6 h-6" src={usa} alt="USA" />
                <span className="dark:text-white site-info text-gray-400">
                  You are on Tradingpost13RMS.com
                </span>
              </span>
              <span className="dark:text-blue-400 cursor-pointer link-hover">
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
