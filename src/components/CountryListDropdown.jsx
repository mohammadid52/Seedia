import React from 'react'
import usa from 'assets/images/countries/usa.png'
import { classNames } from 'utils/classNames'
import { ChevronDownIcon } from '@heroicons/react/outline'

const CountryListDropdown = () => {
  return (
    <div className="flex-0">
      <ul className="flex items-center customDropdown p-0 m-0">
        <li className="nav-item  mb-0">
          <div
            className="flex items-center  pt-1"
            id="navbarDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img alt={'USA'} src={usa} className="w-8 h-8" />
            <ChevronDownIcon
              className={classNames(
                ' text-gray-400',
                'mx-2 h-5 w-5 group-hover:text-gray-500'
              )}
              aria-hidden="true"
            />
          </div>
          <ul className="dropdown-content hidden absolute right-0 top-8 bg-white dark:bg-gray-700 py-4 px-4 origin-top-right mt-2  rounded-md shadow-lg space-y-4 ring-1 ring-black ring-opacity-5 focus:outline-none w-96">
            <li className="flex items-center justfiy-between w-full">
              <span className="dark:text-white text-gray-900 font-semibold w-1/2 flex items-center justify-start">
                Change language{' '}
              </span>

              <span className="text-blue-500 link-hover cursor-pointer w-1/2 flex items-center justify-end">
                Learn more
              </span>
            </li>
            <li className="flex items-center justfiy-between w-full">
              <span className="dark:text-white text-gray-900 font-semibold w-1/2 flex items-center justify-start">
                English-EN
              </span>
              <span className="text-blue-500 link-hover cursor-pointer w-1/2 flex items-center justify-end">
                Change
              </span>
            </li>

            <div
              className="dark:bg-gray-600 bg-gray-200 my-4"
              style={{ height: 1 }}
            />

            <li className="flex items-center justfiy-between w-full">
              <span className="dark:text-white text-gray-900 font-semibold w-1/2 flex items-center justify-start">
                Change currency
              </span>
              <span className="text-blue-500 link-hover cursor-pointer w-1/2 flex items-center justify-end">
                Learn more
              </span>
            </li>
            <li className="flex items-center justfiy-between w-full">
              <span className="dark:text-white text-gray-900 font-semibold w-1/2 flex items-center justify-start">
                $ US Dollar
              </span>
              <span className="text-blue-500 link-hover cursor-pointer w-1/2 flex items-center justify-end">
                Change
              </span>
            </li>
            <div
              className="dark:bg-gray-600 bg-gray-200 my-4"
              style={{ height: 1 }}
            />

            <li className="flex items-center  flex-col text-center">
              <span className="flex mb-2">
                <img title="usa" className="w-6 h-6" src={usa} alt="USA" />
                <p className="dark:text-white ml-2 text-gray-400">
                  You are on tradingpost13rms.com
                </p>
              </span>
              <span className="text-blue-500 cursor-pointer link-hover">
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
