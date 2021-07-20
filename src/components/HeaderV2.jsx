import React, { Fragment } from 'react'

import { BiMessageDetail } from 'react-icons/bi'

import { IoMdNotificationsOutline } from 'react-icons/io'

import {
    AiOutlineHome,
    AiOutlineSearch,
    AiOutlineUsergroupDelete,
} from 'react-icons/ai'
import { BsFilePost, BsPeople } from 'react-icons/bs'
import { CgWorkAlt } from 'react-icons/cg'
import { FaAdversal, FaMoneyBillAlt, FaConnectdevelop } from 'react-icons/fa'
import { MdFindReplace, MdAttachMoney } from 'react-icons/md'
import { SiGoogleanalytics } from 'react-icons/si'

import './styles/HeaderV2Styles.js'

import { Col } from 'reactstrap'

import SearchHeader from './SearchHeader'

// Gets the username from the token
// const getUserName = () => {
//     const tokenString = localStorage.getItem('token')
//     if (tokenString) {
//         const token = JSON.parse(tokenString)
//         if (token.name) return token.name
//         else return null
//     } else {
//         return null
//     }
// }

const Header = ({ themeToggler, theme }) => {
    const Link = ({ text, icon, dropdown, dropdownContent, linkContent }) => {
        return (
            <li
                {...{
                    className: 'with-label link-hover ',
                }}
            >
                {!dropdown ? (
                    <a
                        {...{
                            className: 'nav-link active  flex-col items-center',
                            href: '#/',
                        }}
                        style={{
                            display: 'flex !important',
                            color: 'rgba(0, 0, 0, .9)',
                        }}
                        aria-current="page"
                    >
                        {icon}
                        <p
                            {...{
                                className: 'item-label mb-0',
                            }}
                        >
                            {text}
                        </p>
                    </a>
                ) : (
                    linkContent
                )}

                {dropdown && dropdownContent}
            </li>
        )
    }

    const BusinessAppsContent = ({ text, icon }) => {
        return (
            <div className="iconmenu cursor-pointer loop-div">
                <li className="text-center">
                    <div className="p-2 hover:bg-gray-200 flex items-center rounded-md transition-all duration-200 m-1 rms-item">
                        <span className="text-base mr-1">{icon}</span>
                        <span className="block">{text} </span>
                    </div>
                </li>
            </div>
        )
    }

    return (
        <Fragment>
            <div {...{ className: ' header-top' }}>
                <header
                    {...{
                        className:
                            'header-container border-1 border-gray-300 flex items-center' +
                            theme,
                    }}
                >
                    <Col
                        {...{
                            className: 'header-column left-header-column ml-24',
                        }}
                    >
                        <ul className="flex flex-row navbar-nav me-auto mb-2 mb-lg-0 head-logo light profile-page">
                            <div>
                                <img
                                    className="profile-img-medium mr-3"
                                    src={'/logo.png'}
                                    alt="13RMS"
                                />
                            </div>
                            {/* Search section */}
                            <SearchHeader theme={theme} />
                        </ul>
                    </Col>

                    <nav
                        {...{
                            className:
                                'navbar navbar-expand-lg navbar-light p-0',
                        }}
                    >
                        <div {...{ className: 'container-fluid' }}>
                            <div
                                {...{
                                    className: 'collapse navbar-collapse',
                                    id: 'navbarSupportedContent',
                                }}
                            >
                                {
                                    // ------------------------------------
                                }

                                <Col
                                    {...{
                                        className:
                                            'header-column right-header-column',
                                    }}
                                >
                                    <ul
                                        {...{
                                            className:
                                                'flex items-center mb-0 ',
                                        }}
                                    >
                                        <Link
                                            text="Home"
                                            icon={<AiOutlineHome size={21} />}
                                        />
                                        <Link
                                            text="My Network"
                                            icon={<BsPeople size={21} />}
                                        />
                                        <Link
                                            text="Jobs"
                                            icon={<CgWorkAlt size={21} />}
                                        />
                                        <Link
                                            text="Chat"
                                            icon={<BiMessageDetail size={21} />}
                                        />
                                        <Link
                                            text="Messages"
                                            icon={<BiMessageDetail size={21} />}
                                        />
                                        <Link
                                            text="Notification"
                                            icon={
                                                <IoMdNotificationsOutline
                                                    size={21}
                                                />
                                            }
                                        />
                                        <li className="nav-item customDropdown  with-label">
                                            <a
                                                className="nav-link flex flex-col items-center my-account"
                                                href="/#"
                                                style={{
                                                    color: 'rgba(0,0,0,0.9)',
                                                }}
                                                id="navbarDropdown"
                                                role="button"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                            >
                                                <svg
                                                    stroke="currentColor"
                                                    fill="currentColor"
                                                    strokeWidth="0"
                                                    viewBox="0 0 512 512"
                                                    height="1em"
                                                    width="1em"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    style={{
                                                        height: 21,
                                                        width: 21,
                                                    }}
                                                >
                                                    <path d="M258 21.89c-.5 0-1.2 0-1.8.12-4.6.85-10.1 5.1-13.7 14.81-3.8 9.7-4.6 23.53-1.3 38.34 3.4 14.63 10.4 27.24 18.2 34.94 7.6 7.7 14.5 9.8 19.1 9 4.8-.7 10.1-5.1 13.7-14.7 3.8-9.64 4.8-23.66 1.4-38.35-3.5-14.8-10.4-27.29-18.2-34.94-6.6-6.8-12.7-9.22-17.4-9.22zM373.4 151.4c-11 .3-24.9 3.2-38.4 8.9-15.6 6.8-27.6 15.9-34.2 24.5-6.6 8.3-7.2 14.6-5.1 18.3 2.2 3.7 8.3 7.2 20 7.7 11.7.7 27.5-2.2 43-8.8 15.5-6.7 27.7-15.9 34.3-24.3 6.6-8.3 7.1-14.8 5-18.5-2.1-3.8-8.3-7.1-20-7.5-1.6-.3-3-.3-4.6-.3zm-136.3 92.9c-6.6.1-12.6.9-18 2.3-11.8 3-18.6 8.4-20.8 14.9-2.5 6.5 0 14.3 7.8 22.7 8.2 8.2 21.7 16.1 38.5 20.5 16.7 4.4 32.8 4.3 44.8 1.1 12.1-3.1 18.9-8.6 21.1-15 2.3-6.5 0-14.2-8.1-22.7-7.9-8.2-21.4-16.1-38.2-20.4-9.5-2.5-18.8-3.5-27.1-3.4zm160.7 58.1L336 331.7c4.2.2 14.7.5 14.7.5l6.6 8.7 54.7-28.5-14.2-10zm-54.5.1l-57.4 27.2c5.5.3 18.5.5 23.7.8l49.8-23.6-16.1-4.4zm92.6 10.8l-70.5 37.4 14.5 18.7 74.5-44.6-18.5-11.5zm-278.8 9.1a40.33 40.33 0 0 0-9 1c-71.5 16.5-113.7 17.9-126.2 17.9H18v107.5s11.6-1.7 30.9-1.8c37.3 0 103 6.4 167 43.8 3.4 2.1 10.7 2.9 19.8 2.9 24.3 0 61.2-5.8 69.7-9C391 452.6 494 364.5 494 364.5l-32.5-28.4s-79.8 50.9-89.9 55.8c-91.1 44.7-164.9 16.8-164.9 16.8s119.9 3 158.4-27.3l-22.6-34s-82.8-2.3-112.3-6.2c-15.4-2-48.7-18.8-73.1-18.8z"></path>
                                                </svg>
                                                <p className="item-label mb-0">
                                                    Sell
                                                </p>
                                            </a>
                                            <ul
                                                className="dropdown-content sell light"
                                                id="light"
                                                aria-labelledby="navbarDropdown"
                                            >
                                                <div className="flex items-center justify-around mb-2">
                                                    <button
                                                        type="button"
                                                        className="inline-flex  items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded  hover:bg-pink-200 hover:text-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
                                                    >
                                                        Open store
                                                    </button>
                                                    <button
                                                        type="button"
                                                        className="inline-flex  items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded  hover:bg-pink-200 hover:text-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
                                                    >
                                                        Sell
                                                    </button>
                                                </div>
                                                <hr />
                                                <div className="iconmenu">
                                                    <li className="my-2">
                                                        <a
                                                            className="customDropdownItem  rms-item"
                                                            href="/#"
                                                        >
                                                            Products of your
                                                            Interest{' '}
                                                        </a>
                                                    </li>
                                                    <span
                                                        className="_3pPMXKR9nKlHlqzIzqq3FD OXLcLYYySVQqTEUKkCgBF"
                                                        style={{ fontSize: 16 }}
                                                    ></span>
                                                </div>
                                                <div className="iconmenu">
                                                    <li className="my-2">
                                                        <a
                                                            className="customDropdownItem rms-item"
                                                            href="/#"
                                                        >
                                                            Business of your
                                                            Interest{' '}
                                                        </a>
                                                    </li>
                                                    <span
                                                        className="_3pPMXKR9nKlHlqzIzqq3FD zeujwmCY64KWP3UWuCeKB"
                                                        style={{ fontSize: 16 }}
                                                    ></span>
                                                </div>
                                                <div className="iconmenu">
                                                    <li className="my-2">
                                                        <a
                                                            className="customDropdownItem rms-item"
                                                            href="/#"
                                                        >
                                                            Purchase history{' '}
                                                        </a>
                                                    </li>
                                                    <span
                                                        className="_3pPMXKR9nKlHlqzIzqq3FD MNqXhlqWlynwtcKAT0n3j"
                                                        style={{ fontSize: 16 }}
                                                    ></span>
                                                </div>
                                                <div className="iconmenu">
                                                    <li className="my-2">
                                                        <a
                                                            className="customDropdownItem rms-item"
                                                            href="/#"
                                                        >
                                                            Recent activity{' '}
                                                        </a>
                                                    </li>
                                                    <span
                                                        className="_3pPMXKR9nKlHlqzIzqq3FD _1uXwwgDjALWFGP4WiEM12o"
                                                        style={{ fontSize: 16 }}
                                                    ></span>
                                                </div>
                                                <div className="iconmenu">
                                                    <li className="my-2">
                                                        <a
                                                            className="customDropdownItem rms-item"
                                                            href="/#"
                                                        >
                                                            Buy again{' '}
                                                        </a>
                                                    </li>
                                                    <span
                                                        className="_3pPMXKR9nKlHlqzIzqq3FD lTsZewyvLLhSo1XLEehMh"
                                                        style={{ fontSize: 16 }}
                                                    ></span>
                                                </div>
                                                <div className="iconmenu">
                                                    <li className="my-2">
                                                        <a
                                                            className="customDropdownItem rms-item"
                                                            href="/#"
                                                        >
                                                            Saved searches{' '}
                                                        </a>
                                                    </li>
                                                    <span
                                                        className="_3pPMXKR9nKlHlqzIzqq3FD _1Q2xNTphum3cqVCyHiXN5n"
                                                        style={{ fontSize: 16 }}
                                                    ></span>
                                                </div>
                                                <div className="iconmenu">
                                                    <li className="my-2">
                                                        <a
                                                            className="customDropdownItem rms-item"
                                                            href="/#"
                                                        >
                                                            Saved sellers{' '}
                                                        </a>
                                                    </li>
                                                    <span
                                                        className="_3pPMXKR9nKlHlqzIzqq3FD _2n9HssAV11NDptA8_8DdT"
                                                        style={{ fontSize: 16 }}
                                                    ></span>
                                                </div>
                                                <div className="iconmenu">
                                                    <li className="my-2">
                                                        <a
                                                            className="customDropdownItem rms-item"
                                                            href="/#"
                                                        >
                                                            Inbox{' '}
                                                        </a>
                                                    </li>
                                                    <span
                                                        className="_3pPMXKR9nKlHlqzIzqq3FD _1IbZPsp_gOwPZ-hShLA25n"
                                                        style={{ fontSize: 16 }}
                                                    ></span>
                                                </div>
                                            </ul>
                                        </li>

                                        <li className="nav-item customDropdown  with-label">
                                            <a
                                                className="nav-link my-account flex-col"
                                                style={{
                                                    display: 'flex !important',

                                                    color: 'rgba(0,0,0,0.9)',
                                                }}
                                                href="/#"
                                                id="navbarDropdown"
                                                role="button"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                            >
                                                <svg
                                                    stroke="currentColor"
                                                    fill="currentColor"
                                                    strokeWidth="0"
                                                    viewBox="0 0 24 24"
                                                    height="1em"
                                                    width="1em"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    style={{
                                                        height: 21,
                                                        width: 21,
                                                    }}
                                                >
                                                    <g>
                                                        <path
                                                            fill="none"
                                                            d="M0 0h24v24H0z"
                                                        ></path>
                                                        <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-4.987-3.744A7.966 7.966 0 0 0 12 20c1.97 0 3.773-.712 5.167-1.892A6.979 6.979 0 0 0 12.16 16a6.981 6.981 0 0 0-5.147 2.256zM5.616 16.82A8.975 8.975 0 0 1 12.16 14a8.972 8.972 0 0 1 6.362 2.634 8 8 0 1 0-12.906.187zM12 13a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"></path>
                                                    </g>
                                                </svg>
                                                <p className="item-label mb-0">
                                                    My 13RMS
                                                </p>
                                            </a>
                                            <ul
                                                className="dropdown-content right-20 my-rms"
                                                id="light"
                                                aria-labelledby="navbarDropdown"
                                            >
                                                <div
                                                    style={{
                                                        display: 'inline-flex',
                                                        marginBottom: '1rem',
                                                    }}
                                                >
                                                    <div>
                                                        <img
                                                            src="/logo.png"
                                                            alt=""
                                                            className="profile-img-medium"
                                                        />
                                                    </div>
                                                    <div
                                                        style={{
                                                            marginLeft: 15,
                                                            marginTop: '0.8rem',
                                                        }}
                                                    >
                                                        <h6>test developer</h6>
                                                        <p>Web Developer</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-center justify-around mb-2">
                                                    <button
                                                        type="button"
                                                        className="inline-flex  items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded  hover:bg-pink-200 hover:text-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
                                                    >
                                                        View profile
                                                    </button>
                                                    <button
                                                        type="button"
                                                        className="inline-flex  items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded  hover:bg-pink-200 hover:text-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
                                                    >
                                                        View store
                                                    </button>
                                                </div>
                                                <hr />
                                                <li
                                                    style={{
                                                        marginTop: 15,
                                                    }}
                                                    className="flex items-center flex-col justify-center"
                                                >
                                                    <h5 className="font-bold text-base">
                                                        Account
                                                    </h5>
                                                    <a
                                                        className="customDropdownItem account-item"
                                                        href="/#"
                                                    >
                                                        Settings &amp; Privacy
                                                    </a>
                                                    <a
                                                        className="customDropdownItem account-item"
                                                        href="/#"
                                                    >
                                                        Help
                                                    </a>
                                                    <a
                                                        className="customDropdownItem account-item"
                                                        href="/#"
                                                    >
                                                        Language
                                                    </a>
                                                </li>
                                                <hr />
                                                <li
                                                    className="flex items-center flex-col justify-center manage-list light"
                                                    style={{
                                                        marginTop: 15,
                                                    }}
                                                >
                                                    <h5 className="font-bold text-base">
                                                        Manage
                                                    </h5>
                                                    <a
                                                        className="customDropdownItem account-item"
                                                        href="/#"
                                                    >
                                                        Activity
                                                    </a>
                                                    <a
                                                        className="customDropdownItem account-item"
                                                        href="/#"
                                                    >
                                                        Sign out
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>

                                        <li className="nav-item customDropdown  with-label">
                                            <a
                                                className="nav-link active flex flex-col items-center"
                                                href="/#"
                                                id="navbarDropdown"
                                                style={{
                                                    color: 'rgba(0,0,0,0.9)',
                                                }}
                                                role="button"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                            >
                                                <svg
                                                    stroke="currentColor"
                                                    fill="currentColor"
                                                    strokeWidth="0"
                                                    viewBox="0 0 24 24"
                                                    height="1em"
                                                    width="1em"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    style={{
                                                        height: 21,
                                                        width: 21,
                                                    }}
                                                >
                                                    <path d="M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z"></path>
                                                </svg>
                                                <p className="item-label mb-0">
                                                    Business Apps
                                                </p>
                                            </a>
                                            <ul
                                                className="dropdown-content end-0 business-app"
                                                id="light"
                                                aria-labelledby="navbarDropdown"
                                            >
                                                <p
                                                    style={{
                                                        width: '100%',
                                                    }}
                                                    className="font-bold tracking-wide mb-2"
                                                >
                                                    13RMS Products
                                                </p>
                                                <hr />
                                                <div
                                                    className="flex flex-wrap"
                                                    style={{
                                                        maxWidth: '25rem',
                                                    }}
                                                >
                                                    <BusinessAppsContent
                                                        icon={
                                                            <AiOutlineSearch />
                                                        }
                                                        text="Search for leads"
                                                    />
                                                    <BusinessAppsContent
                                                        icon={<BsFilePost />}
                                                        text="Post a job"
                                                    />
                                                    <BusinessAppsContent
                                                        icon={<FaAdversal />}
                                                        text="Advertise"
                                                    />
                                                    <BusinessAppsContent
                                                        icon={
                                                            <FaMoneyBillAlt />
                                                        }
                                                        text="Sell products"
                                                    />
                                                    <BusinessAppsContent
                                                        icon={
                                                            <AiOutlineUsergroupDelete />
                                                        }
                                                        text="Groups"
                                                    />
                                                    <BusinessAppsContent
                                                        icon={<MdFindReplace />}
                                                        text="Pro finder"
                                                    />
                                                    <BusinessAppsContent
                                                        icon={<MdAttachMoney />}
                                                        text="Salary"
                                                    />
                                                    <BusinessAppsContent
                                                        icon={<BsFilePost />}
                                                        text="New product"
                                                    />
                                                    <BusinessAppsContent
                                                        icon={
                                                            <FaConnectdevelop />
                                                        }
                                                        text="New product developed"
                                                    />
                                                    <BusinessAppsContent
                                                        icon={
                                                            <SiGoogleanalytics />
                                                        }
                                                        text="Profile statistics"
                                                    />
                                                </div>
                                            </ul>
                                        </li>
                                    </ul>
                                </Col>
                            </div>
                        </div>
                    </nav>
                </header>
            </div>
        </Fragment>
    )
}

export default Header
