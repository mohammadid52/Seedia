/* eslint-disable quotes */
import React, { Fragment } from 'react'
import { Row, Col, Container } from 'reactstrap'
import Select from 'react-select'
import SpeechRecognition from 'react-speech-recognition'
import { compose, pure, lifecycle, withHandlers, withState } from 'recompose'
import { productsArray, departmentsArray } from '../values/values'
import { withStyles } from '@material-ui/core/styles'
import Tooltip from '@material-ui/core/Tooltip'
import voice from 'assets/images/voice.png'
import search from 'assets/images/search.png'
import CountryListDropdown from 'components/CountryListDropdown'

const Search = ({
  theme,
  product,
  changeProduct,
  changeDepartment,
  voiceSearch,
  handleChange,
  text,
  department,
  voiceActivated,
}) => {
  const searchPlaceHolder =
    ['products', 'bulk', 'all'].indexOf(product.value) !== -1
      ? 'Search'
      : 'Find a'

  var color, textColor
  if (theme === 'dark') {
    color = '#262d31'
    textColor = '#fff'
  } else {
    color = '#f5f5f9'
    textColor = 'rgba(0, 0, 0, 0.87)'
  }

  const HtmlTooltip = withStyles((theme) => ({
    tooltip: {
      backgroundColor: color,
      color: textColor,
      maxWidth: 220,
      fontSize: theme.typography.pxToRem(12),
      border: '1px solid #dadde9',
    },
  }))(Tooltip)

  const tooltipData = [
    {
      heading: 'Bulk items',
      content: 'Bulk items are items that are offered in large numbers.',
    },
    {
      heading: 'Commercial agent',
      content:
        "A commercial agent acts on your company's behalf. Find a commercial agent abroad to sell your products abroad.",
    },

    {
      heading: 'Distributor',
      content:
        'A distributor acts for its own account and risk. Find a distributor who wants to buy your products.',
    },

    {
      heading: 'Manufacturer',
      content:
        'A manufacturer is a company that produces goods. Find a manufacturer who wants to produce your product.',
    },

    {
      heading: 'Supplier',
      content:
        'A supplier provides goods or services in exchange for money. Find a supplier who sells your products for your webshop, for example',
    },
  ]

  const bottomRow = [
    { data: 'Recieve quotes', href: '/#' },
    { data: 'Trending', href: '/#' },
    { data: 'Jobs', href: '/#' },
    { data: 'Remarkable', href: '/#' },
    { data: 'New', href: '/#' },
  ]

  return (
    <Fragment>
      <div className="search-container">
        <div
          className={'h-10  border-gray-200 flex flex-wrap row p-0 border-2'}
          style={{ borderBottom: 0 }}
        >
          <nav className="pb-1 px-0 bg-transparent navbar-expand-lg ">
            <div className="container-fluid px-0">
              <div
                className="collapse navbar-collapse search-panel"
                id="navbarSupportedContent"
              >
                <HtmlTooltip
                  title={
                    <div>
                      {tooltipData.map((item) => (
                        <p className="p1">
                          <span className="s1">
                            <strong>
                              {item.heading}
                              <br />{' '}
                            </strong>
                          </span>
                          {item.content}
                        </p>
                      ))}
                    </div>
                  }
                  placement="left"
                  disableTouchListener
                >
                  <div className="relative h-10 flex-1">
                    <Select
                      className="highlite-area search-area products"
                      value={product}
                      placeholder="Products"
                      options={productsArray}
                      onChange={changeProduct}
                    />
                  </div>
                </HtmlTooltip>
                <Col
                  md={{ size: 6 }}
                  lg={{ size: 6 }}
                  sm={{ size: 2 }}
                  className="column mb-md-3 mb-lg-0 input-box"
                >
                  <div className="highlite-area search-area item search-place-holder">
                    <div
                      onClick={voiceSearch}
                      className="float-left h-full p-1 cursor-pointer"
                    >
                      <img alt="voice" src={voice} className="w-8 h-auto" />
                    </div>

                    <input
                      type="text"
                      className="input-search h-9"
                      placeholder={searchPlaceHolder + ' ' + product.label}
                      name="search"
                      onChange={handleChange}
                    />
                    {text && (
                      <img
                        alt={'search'}
                        src={search}
                        className="w-8 h-8 -mt-0.5 cursor-pointer"
                      />
                    )}
                  </div>
                </Col>
                <Col
                  md={{ size: 6 }}
                  lg={{ size: 3 }}
                  sm={{ size: 3 }}
                  className="column mb-md-3 mb-lg-0 department-section"
                >
                  <Select
                    className="mr-2 highlite-area search-area products"
                    value={department}
                    placeholder="All departments"
                    options={departmentsArray}
                    onChange={changeDepartment}
                  />
                </Col>

                <CountryListDropdown theme={theme} />
              </div>
            </div>
          </nav>
        </div>
        <Row className={`h-10 border-2 border-gray-200 flex flex-wrap`}>
          {bottomRow.map((item, idx) => (
            <Col className="text-center">
              <a className={`search-link link-tag mt-0`} href={item.href}>
                {item.data}
              </a>
            </Col>
          ))}
        </Row>
      </div>
    </Fragment>
  )
}

export default compose(
  withState('text', 'setText', null),
  withState('product', 'setProducts', {
    label: 'Products',
    value: 'products',
  }),
  withState('voiceActivated', 'setVoiceStatus', false),
  withState('department', 'setDepartment', {
    value: 'all',
    label: 'All Departments',
  }),
  withHandlers({
    handleChange:
      ({ setText }) =>
      (e) => {
        const value = e.target.value
        setText(value)
      },
    changeProduct:
      ({ setProducts }) =>
      (product) => {
        setProducts(product)
      },
    changeDepartment:
      ({ setDepartment }) =>
      (department) => {
        setDepartment(department)
      },
    voiceSearch:
      ({ setVoiceStatus, voiceActivated }) =>
      () => {
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
