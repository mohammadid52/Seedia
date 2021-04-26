import React, { Fragment } from 'react'
import { Row, Col, Container } from 'reactstrap'
import Select from 'react-select'
import SpeechRecognition from 'react-speech-recognition'
import { compose, pure, lifecycle, withHandlers, withState } from 'recompose'
import { productsArray, departmentsArray } from '../values/values'

import voice from './../public/assets/voice.png'
import search from './../public/assets/search.png'
import usa from './../public/assets/countries/usa.png'

import SearchStyles from './styles/SearchStyles'

const Search = ({ theme, product, changeProduct, changeDepartment, voiceSearch, handleChange, text, department, voiceActivated }) => {
  const searchPlaceHolder = ['products', 'bulk'].indexOf(product.value) !== -1 ? 'Search' : 'Find a'
  return (
    <Fragment>
      <Container {...{ className: SearchStyles }}>
        <Row {...{ className: theme }}>
          <nav {...{ className: 'navbar navbar-expand-lg navbar-light' }}>
            <div {...{ className: 'container-fluid' }}>
              <div {...{ className: 'collapse navbar-collapse search-panel', id: 'navbarSupportedContent' }}>
                <Col {...{ md: { size: 6 }, lg: { size: 2 }, sm: { size: 3 }, className: 'column mb-md-3 mb-lg-0 product' }}>
                  <Select
                    {...{
                      className: 'highlite-area search-area products',
                      value: product,
                      placeholder: 'Products',
                      options: productsArray,
                      onChange: changeProduct,
                    }}
                  />
                </Col>
                <Col {...{ md: { size: 6 }, lg: { size: 6 }, sm: { size: 2 }, className: 'column mb-md-3 mb-lg-0 input-box' }}>
                  <div
                    {...{
                      className: 'highlite-area search-area item search-place-holder',
                    }}
                  >
                    <div {...{ onClick: voiceSearch, style: { float: 'left', height: '100%', padding: '5px', cursor: 'pointer' } }}>
                      <img {...{ alt: '', src: voice, style: { width: '2rem', height: 'auto' } }} />
                    </div>

                    <input
                      type="text"
                      className="input-search"
                      placeholder={searchPlaceHolder + ' ' + product.label}
                      name="search"
                      onChange={handleChange}
                      {...{ style: { height: '38px' } }}
                    />
                    {text ? <img {...{ alt: '', src: search, style: { width: '2rem', height: '2rem', marginTop: '-2px', cursor: 'pointer' } }} /> : null}
                  </div>
                </Col>
                <Col {...{ md: { size: 6 }, lg: { size: 3 }, sm: { size: 3 }, className: 'column mb-md-3 mb-lg-0 department-section' }}>
                  <Select
                    {...{
                      className: 'highlite-area search-area products',
                      style: { marginRight: '8px' },
                      value: department,
                      placeholder: 'All departments',
                      options: departmentsArray,
                      onChange: changeDepartment,
                    }}
                  />
                </Col>
                <Col {...{ md: { size: 6 }, lg: { size: 1 }, sm: { size: 2 }, className: 'country-list column mb-md-3 mb-lg-0' }}>
                  <ul {...{ className: 'navbar-nav me-auto mb-2 mb-lg-0 highlite-area search-country ' }}>
                    <li {...{ className: 'nav-item dropdown  w-100' }}>
                      <a {...{ className: 'nav-link dropdown-toggle', href: '/#', id: 'navbarDropdown', role: 'button' }} data-bs-toggle="dropdown" aria-expanded="false">
                        <img {...{ alt: '', src: usa, style: { width: '2rem', height: '2rem' } }} />
                      </a>
                      <ul {...{ className: 'dropdown-menu end-0 left-auto' }} aria-labelledby="navbarDropdown">
                        <li {...{ className: 'nav-item' }}>
                          <span {...{ style: { marginRight: '45px', fontWeight: 'bold' } }}>Change language </span>
                          <span {...{ style: { cursor: 'pointer' }, className: 'pointer-span' }}>Learn more</span>
                        </li>
                        <li {...{ className: 'radio nav-item', style: { marginTop: '0.5rem' } }}>
                          <span {...{ style: { marginRight: '91px' } }}>English-EN </span>
                          <span {...{ style: { cursor: 'pointer' }, className: 'pointer-span' }}>Change</span>
                        </li>
                        <li>
                          <hr {...{ className: 'dropdown-divider' }} />
                        </li>

                        <li {...{ className: 'nav-item' }}>
                          <span {...{ style: { marginRight: '45px', fontWeight: 'bold' } }}>Change currency </span>
                          <span {...{ style: { cursor: 'pointer' }, className: 'pointer-span' }}>Learn more</span>
                        </li>
                        <li {...{ className: 'nav-item', style: { marginTop: '0.5rem' } }}>
                          <span {...{ style: { marginRight: '54px' } }}>{'$- USD- US Dollar'}</span>
                          <span {...{ style: { cursor: 'pointer' }, className: 'pointer-span' }}>Change</span>
                        </li>
                        <li {...{ className: 'nav-item' }}>
                          <hr {...{ className: 'dropdown-divider' }} />
                        </li>
                        <li {...{ className: 'nav-item', style: { textAlign: 'center' } }}>
                          <span {...{ style: { display: 'flex', marginBottom: '0.5rem' } }}>
                            <img {...{ alt: '', src: usa, style: { width: '1.5rem', height: '1.5rem' } }} />
                            <span {...{ className: 'site-info' }}>You are on Tradingpost13RMS.com</span>
                          </span>
                          <span {...{ className: 'pointer-span', style: { cursor: 'pointer' } }}>Change country/region</span>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </Col>
              </div>
            </div>
          </nav>
        </Row>
        <Row {...{ className: 'search-quote quote-links ' + theme }}>
          <Col>
            <a {...{ href: '/#', className: 'search-link link-tag' }}>Receive quotes</a>
          </Col>
          <Col>
            <a {...{ href: '/#', className: 'search-link link-tag' }}>Trending</a>
          </Col>
          <Col>
            <a {...{ href: '/#', className: 'search-link link-tag' }}>Jobs</a>
          </Col>
          <Col>
            <a {...{ href: '/#', className: 'search-link link-tag' }}>Remarkable</a>
          </Col>
          <Col>
            <a {...{ href: '/#', className: 'search-link link-tag spotlights' }}>New</a>
          </Col>
        </Row>
      </Container>
    </Fragment>
  )
}

export default compose(
  withState('text', 'setText', null),
  withState('product', 'setProducts', { label: 'Products', value: 'products' }),
  withState('voiceActivated', 'setVoiceStatus', false),
  withState('department', 'setDepartment', { value: 'all', label: 'All Departments' }),
  withHandlers({
    handleChange: ({ setText }) => (e) => {
      const value = e.target.value
      setText(value)
    },
    changeProduct: ({ setProducts }) => (product) => {
      setProducts(product)
    },
    changeDepartment: ({ setDepartment }) => (department) => {
      setDepartment(department)
    },
    voiceSearch: ({ setVoiceStatus, voiceActivated }) => () => {
      setVoiceStatus(!voiceActivated)
      if (voiceActivated) {
        SpeechRecognition.stopListening()
      } else {
        SpeechRecognition.startListening()
      }
    },
  }),
  lifecycle({
    componentDidMount() {
      document.addEventListener('mousedown', this.props.handleClickOutside)
    },

    componentWillUnmount() {
      document.removeEventListener('mousedown', this.props.handleClickOutside)
    },
  }),

  pure
)(Search)
