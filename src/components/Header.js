import React, { Fragment } from 'react'
import { Col } from 'reactstrap'
import useDarkMode from 'use-dark-mode'



import Toggle from './Toggle'

import { RiShoppingCart2Line } from 'react-icons/ri'
import { BiMessageDetail } from 'react-icons/bi'
import { FaRegBell } from 'react-icons/fa'
import { AiOutlineHome } from 'react-icons/ai'
import { BsPeople } from 'react-icons/bs'
import { CgWorkAlt } from 'react-icons/cg'


import { adjustColors, my13Rms } from '../values/values'

import menu from './../public/assets/menu.png'
import menuWhite from './../public/assets/list.png'
import on from './../public/assets/on.png'
import off from './../public/assets/off.png'
import HeaderStyles from './styles/HeaderStyles'

const Header = ({ themeToggler, theme }) => {
  const darkMode = useDarkMode(false)
  const hamburg = theme === 'light' ? menuWhite : menu
  return (
    <Fragment>
      <div {...{ className: HeaderStyles + ' header-top' }}>
        <header {...{ className: 'header-container ' + theme }}>
          <nav {...{ className: 'navbar navbar-expand-lg navbar-light' }}>
            <div {...{ className: 'container-fluid' }}>
              <a {...{ className: 'navbar-brand', href: '/#' }}>{}</a>
              <button
                {...{
                  className: 'navbar-toggler',
                  type: 'button',
                }}
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span {...{ className: '' }}>
                  <img {...{ alt: '', src: hamburg, style: { height: '2rem' } }} />
                </span>
              </button>
              <div {...{ className: 'collapse navbar-collapse', id: 'navbarSupportedContent' }}>
                {
                  // ------------------------------------
                }
                <Col {...{ md: { size: 6 }, sm: { size: 6 }, className: 'header-column left-header-column' }}>
                  <ul {...{ className: 'navbar-nav me-auto mb-2 mb-lg-0' }}>
                    <li {...{ className: 'nav-item underline' }}>
                      <a {...{ className: 'nav-link active', href: '/#' }} aria-current="page">
                        Help & Contact
                      </a>
                    </li>

                    <li {...{ className: 'nav-item dropdown underline' }}>
                      <a {...{ className: 'nav-link dropdown-toggle', href: '/#', id: 'navbarDropdown', role: 'button' }} data-bs-toggle="dropdown" aria-expanded="false">
                        Adjust Colors
                      </a>
                      <ul {...{ className:  'dropdown-menu darkto' }} {...{ id: theme }} aria-labelledby="navbarDropdown">
                        <div className="dark-mode-toggle">
                          
                         
                          <Toggle {...{ checked: darkMode.value, onChange: darkMode.toggle, themeToggler }} />
                          
                        </div>
                        <li>
                          <hr {...{ className: 'dropdown-divider' }} />
                        </li>
                        <li>
                          <span>
                            ARE YOU COLOR BLIND ?
                            <br />
                            Then choose the following options
                          </span>
                          <div {...{ className: 'power-btn' }}>
                            <span {...{ style: { display: 'inline-grid' } }}>
                            <div {...{ style: {  cursor: 'pointer' } }} className='ring neon-red' onClick={darkMode.disable}></div>
                            </span>
                            <span {...{ style: { display: 'inline-grid' } }}>
                            <div {...{ style: {  cursor: 'pointer' } }} className='ring neon-green' onClick={darkMode.enable}></div>
                              
                            </span>
                          </div>
                        </li>
                        <li>
                          <hr {...{ className: 'dropdown-divider' }} />
                        </li>
                        {adjustColors.map((item, key) => {
                          return (
                            <li {...{ key }}>
                              <a {...{ className: 'dropdown-item', href: '/#', key: item.value }}>
                                <p {...{ className: 'float-start item-list' }}> {item.name} </p>
                                <input
                                  {...{
                                    type: 'radio',
                                    value: item.value,
                                  }}
                                />
                              </a>
                            </li>
                          )
                        })}
                      </ul>
                    </li>
                    <li {...{ className: 'nav-item' }}>
                      <a {...{ className: 'nav-link join-community underline', href: '/#' }}>Join our community</a>
                    </li>
                  </ul>
                </Col>
                {
                  // ------------------------------------
                }
                <Col {...{ className: 'header-column right-header-column' }}>
                  <ul {...{ className: 'navbar-nav ms-auto mb-2 mb-lg-0 float-right' }}>
                    <li {...{ className: 'nav-item with-label' }}>
                      <a {...{ className: 'nav-link active', href: '/#' }} aria-current="page">
                        <AiOutlineHome {...{ style: { width: '21px', height: '21px' } }} />
                        <span {...{ className: 'item-label' }}>Home</span>
                      </a>
                    </li>

                    <li {...{ className: 'nav-item with-label' }}>
                      <a {...{ className: 'nav-link active', href: '/#' }} aria-current="page">
                        <BsPeople {...{ style: { width: '21px', height: '21px' } }} />
                        <span {...{ className: 'item-label' }}>My Network</span>
                      </a>
                    </li>
                    <li {...{ className: 'nav-item with-label' }}>
                      <a {...{ className: 'nav-link active', href: '/#' }} aria-current="page">
                        <CgWorkAlt {...{ style: { width: '21px', height: '21px' } }} />
                        <span {...{ className: 'item-label' }}>Jobs</span>
                      </a>
                    </li>

                    <li {...{ className: 'nav-item' }}>
                      <a {...{ className: 'nav-link active', href: '/#' }} aria-current="page">
                        <BiMessageDetail {...{ style: { width: '21px', height: '21px' } }} />
                      </a>
                    </li>

                    <li {...{ className: 'nav-item' }}>
                      <a {...{ className: 'nav-link active', href: '/#' }} aria-current="page">
                        <FaRegBell {...{ style: { width: '21px', height: '21px' } }} />
                      </a>
                    </li>
                    <li {...{ className: 'nav-item' }}>
                      <a {...{ className: 'nav-link active', href: '/#' }} aria-current="page">
                        <RiShoppingCart2Line {...{ style: { width: '21px', height: '21px' } }} />
                      </a>
                    </li>

                    <li {...{ className: 'nav-item dropdown underline' }}>
                      <a {...{ className: 'nav-link dropdown-toggle', href: '/#', id: 'navbarDropdown', role: 'button' }} data-bs-toggle="dropdown" aria-expanded="false">
                        Sell
                      </a>
                      <ul {...{ className: 'dropdown-menu sell' }} {...{ id: theme }} aria-labelledby="navbarDropdown">
                        <li>
                          <a {...{ className: 'dropdown-item', href: '/#' }}>Sell Products</a>
                        </li>
                      </ul>
                    </li>

                    <li {...{ className: 'nav-item dropdown underline' }}>
                      <a {...{ className: 'nav-link dropdown-toggle', href: '/#', id: 'navbarDropdown', role: 'button' }} data-bs-toggle="dropdown" aria-expanded="false">
                        {'My 13RMS'}
                      </a>
                      <ul {...{ className: 'dropdown-menu end-0 my-rms' }} {...{ id: theme }} aria-labelledby="navbarDropdown">
                        
                        {my13Rms.map((item, key) => {
                          return (
                            <Fragment>
                              <li {...{ key }}>
                                <a {...{ className: 'dropdown-item rms-item', href: '/#', key: item.name + key }}>
                                  
                                  {item.name + ' '}
                                  {item.count > 0 ? <span {...{ style: { fontWeight: 'bold' } }}> ({item.count})</span> : null}
                                </a>
                              </li>
                              
                            </Fragment>
                          )
                        })}
                      </ul>
                    </li>

                    <li {...{ className: 'nav-item dropdown underline' }}>
                      <a {...{ className: 'nav-link dropdown-toggle', href: '/#', id: 'navbarDropdown', role: 'button' }} data-bs-toggle="dropdown" aria-expanded="false">
                        Sign In
                      </a>
                      <ul {...{ className: 'dropdown-menu end-0 sign-in' }} {...{ id: theme }}aria-labelledby="navbarDropdown">
                        <li>
                          <a {...{ className: 'dropdown-item', href: '/#' }}>Sign In</a>
                        </li>
                        <li>
                          <hr {...{ className: 'dropdown-divider' }} />
                        </li>
                        <li>
                          <span>{'New to 13RMS ?'}</span>
                        </li>
                        <li>
                          <a {...{ className: 'dropdown-item', href: '/#' }}>
                            <span>Join Now</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </Col>
                {
                  // ------------------------------------
                }
              </div>
            </div>
          </nav>
        </header>
      </div>
    </Fragment>
  )
}

export default Header
