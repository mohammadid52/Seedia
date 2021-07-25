import React from 'react'
import { Col } from 'reactstrap'

const Dropdown = ({ theme, header, content }) => {
  return (
    <Col
      md={{ size: 6 }}
      lg={{ size: 1 }}
      sm={{ size: 2 }}
      className="column mb-md-3 mb-lg-0"
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
            {header}
          </a>
          <ul
            className="dropdown-content hidden absolute right-0 top-10 bg-white py-4 px-4 origin-top-right mt-2  rounded-md shadow-lg  ring-1 ring-black ring-opacity-5 focus:outline-none"
            id={theme}
          >
            {content}
          </ul>
        </li>
      </ul>
    </Col>
  )
}

export default Dropdown
