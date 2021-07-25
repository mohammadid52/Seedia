import React from 'react'
import { Col } from 'reactstrap'

import { RiArrowDropDownFill } from 'react-icons/ri'
import usa from 'assets/images/countries/usa.png'

const CountryListDropdown = ({ theme }) => {
  return (
    <Col
      md={{ size: 6 }}
      lg={{ size: 1 }}
      sm={{ size: 2 }}
      className="country-list column mb-md-3 mb-lg-0"
    >
      <ul className="flex items-center customDropdown p-0 m-0">
        <li className="nav-item  mb-0">
          <a
            className="nav-link  pt-1"
            href="/#"
            id="navbarDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img alt={'USA'} src={usa} className="w-8 h-8" />
            <RiArrowDropDownFill className="w-8 h-8" />
          </a>
          <ul
            className="dropdown-content hidden absolute right-0 top-10 bg-white py-4 px-4 origin-top-right mt-2  rounded-md shadow-lg  ring-1 ring-black ring-opacity-5 focus:outline-none"
            id={theme}
          >
            <li className="nav-item">
              <span className="mr-11 font-semibold">Change language </span>

              <span className="hover:underline text-blue-600 cursor-pointer">
                Learn more
              </span>
            </li>
            <li className="nav-item mt-2">
              <span className="mr-14">English-EN</span>
              <span className="cursor-pointer hover:underline text-blue-600">
                Change
              </span>
            </li>

            <hr className="dropdown-divider text-gray-300" />

            <li className="nav-item mt-2">
              <span className="mr-12 font-semibold">Change currency</span>
              <span className="cursor-pointer hover:underline text-blue-600">
                Learn more
              </span>
            </li>
            <li className="nav-item mt-2">
              <span className="mr-14">$- USD- US Dollar</span>
              <span className="cursor-pointer hover:underline text-blue-600">
                Change
              </span>
            </li>
            <hr className="dropdown-divider text-gray-300" />

            <li className="nav-item flex flex-col text-center">
              <span className="flex mb-2">
                <img className="w-6 h-6" src={usa} alt="USA" />
                <span className="site-info text-gray-400">
                  You are on Tradingpost13RMS.com
                </span>
              </span>
              <span className="cursor-pointer hover:underline text-blue-600">
                Change country/region
              </span>
            </li>
          </ul>
        </li>
      </ul>
    </Col>
  )
}

export default CountryListDropdown
