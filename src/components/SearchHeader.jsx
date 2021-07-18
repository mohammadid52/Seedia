import React from 'react'
import { Row, Col } from 'reactstrap'

import Select from 'react-select'
import SpeechRecognition from 'react-speech-recognition'
import { compose, pure, lifecycle, withHandlers, withState } from 'recompose'
import { productsArray, departmentsArray } from '../values/values'

import { withStyles } from '@material-ui/core/styles'
import Tooltip from '@material-ui/core/Tooltip'

import voice from './../public/assets/voice.png'
import search from './../public/assets/search.png'
import usa from './../public/assets/countries/usa.png'
import SearchStyles from './styles/SearchStyles'

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
        ['products', 'bulk'].indexOf(product.value) !== -1 ? 'Search' : 'Find a'
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

    return (
        <div
            {...{ className: SearchStyles + theme }}
            style={{ minWidth: '50rem' }}
        >
            <nav
                {...{
                    className: 'navbar navbar-expand-lg navbar-light',
                }}
            >
                <div {...{ className: 'container-fluid' }}>
                    <div
                        {...{
                            className: 'collapse navbar-collapse search-panel',
                            id: 'navbarSupportedContent',
                        }}
                    >
                        <HtmlTooltip
                            title={
                                <React.Fragment>
                                    <p class="p1">
                                        <span class="s1">
                                            <strong>
                                                Bulk items
                                                <br />{' '}
                                            </strong>
                                        </span>
                                        Bulk items are items that are offered in
                                        large numbers.
                                    </p>
                                    <p class="p1">
                                        <span class="s1">
                                            <strong>
                                                Commercial agent
                                                <br />{' '}
                                            </strong>
                                        </span>
                                        A commercial agent acts on your
                                        company's behalf.
                                        <span class="s1">
                                            <strong>
                                                <br />{' '}
                                            </strong>
                                        </span>
                                        Find a commercial agent abroad to sell
                                        your products abroad.
                                    </p>
                                    <p class="p1">
                                        <span class="s1">
                                            <strong>
                                                Distributor
                                                <br />{' '}
                                            </strong>
                                        </span>
                                        A distributor acts for its own account
                                        and risk.
                                        <span class="s1">
                                            <strong>
                                                <br />{' '}
                                            </strong>
                                        </span>
                                        Find a distributor who wants to buy your
                                        products.
                                    </p>
                                    <p class="p1">
                                        <span class="s1">
                                            <strong>
                                                Manufacturer
                                                <br />{' '}
                                            </strong>
                                        </span>
                                        A manufacturer is a company that
                                        produces goods.
                                        <span class="s1">
                                            <strong>
                                                <br />{' '}
                                            </strong>
                                        </span>
                                        Find a manufacturer who wants to produce
                                        your product.
                                    </p>
                                    <p class="p1">
                                        <span class="s1">
                                            <strong>
                                                Supplier
                                                <br />{' '}
                                            </strong>
                                        </span>
                                        A supplier provides goods or services in
                                        exchange for money.
                                        <span class="s1">
                                            <strong>
                                                <br />{' '}
                                            </strong>
                                        </span>
                                        Find a supplier who sells your products
                                        for your webshop, for example
                                    </p>
                                </React.Fragment>
                            }
                            placement="left"
                            disableTouchListener
                        >
                            <Col
                                {...{
                                    md: { size: 6 },
                                    lg: { size: 2 },
                                    sm: { size: 3 },
                                    className: 'column mb-md-3 mb-lg-0 product',
                                }}
                            >
                                <Select
                                    {...{
                                        className:
                                            'text-sm highlite-area search-area products',
                                        value: product,
                                        placeholder: 'Products',
                                        options: productsArray,
                                        onChange: changeProduct,
                                    }}
                                />
                            </Col>
                        </HtmlTooltip>
                        <div
                            {...{
                                className: 'input-box mx-3',
                            }}
                        >
                            <div
                                {...{
                                    className:
                                        'highlite-area search-area item search-place-holder',
                                }}
                            >
                                <div
                                    {...{
                                        onClick: voiceSearch,
                                        style: {
                                            float: 'left',
                                            height: '100%',
                                            padding: '5px',
                                            cursor: 'pointer',
                                        },
                                    }}
                                >
                                    <img
                                        {...{
                                            alt: '',
                                            src: voice,
                                            style: {
                                                width: '2rem',
                                                height: 'auto',
                                            },
                                        }}
                                    />
                                </div>

                                <input
                                    type="text"
                                    className="input-search px-2 bg-gray-200 text-sm focus:outline-none focus:ring-1 focus:ring-blue-100 rounded-md"
                                    placeholder={
                                        searchPlaceHolder + ' ' + product.label
                                    }
                                    name="search"
                                    onChange={handleChange}
                                    {...{ style: { height: '38px' } }}
                                />
                                {text ? (
                                    <img
                                        {...{
                                            alt: '',
                                            src: search,
                                            style: {
                                                width: '2rem',
                                                height: '2rem',
                                                marginTop: '-2px',
                                                cursor: 'pointer',
                                            },
                                        }}
                                    />
                                ) : null}
                            </div>
                        </div>
                        <Col
                            {...{
                                md: { size: 6 },
                                lg: { size: 3 },
                                sm: { size: 3 },
                                className:
                                    'column mb-md-3 mb-lg-0 department-section',
                            }}
                        >
                            <Select
                                {...{
                                    className:
                                        'highlite-area search-area products text-xs',
                                    style: { marginRight: '8px' },
                                    value: department,
                                    placeholder: 'All departments',
                                    options: departmentsArray,
                                    onChange: changeDepartment,
                                }}
                            />
                        </Col>
                        <Col
                            {...{
                                md: { size: 6 },
                                lg: { size: 1 },
                                sm: { size: 2 },
                                className:
                                    'country-list column mb-md-3 mb-lg-0',
                            }}
                        >
                            <ul
                                {...{
                                    className:
                                        'navbar-nav me-auto mb-2 mb-lg-0 highlite-area search-country ',
                                }}
                            >
                                <li
                                    {...{
                                        className: 'nav-item dropdown  w-100',
                                    }}
                                >
                                    <a
                                        {...{
                                            className:
                                                'nav-link dropdown-toggle',
                                            href: '/#',
                                            id: 'navbarDropdown',
                                            role: 'button',
                                        }}
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        <img
                                            {...{
                                                alt: '',
                                                src: usa,
                                                style: {
                                                    width: '2rem',
                                                    height: '2rem',
                                                },
                                            }}
                                        />
                                    </a>
                                    <ul
                                        {...{
                                            className:
                                                'dropdown-menu w-80 end-0 left-auto',
                                        }}
                                        {...{ id: theme }}
                                        aria-labelledby="navbarDropdown"
                                    >
                                        <li
                                            {...{
                                                className: 'nav-item mb-2',
                                            }}
                                        >
                                            <span
                                                {...{
                                                    style: {
                                                        marginRight: '45px',
                                                        fontWeight: 'bold',
                                                    },
                                                }}
                                            >
                                                Change language{' '}
                                            </span>
                                            <span
                                                {...{
                                                    style: {
                                                        cursor: 'pointer',
                                                    },
                                                    className: 'pointer-span',
                                                }}
                                            >
                                                Learn more
                                            </span>
                                        </li>
                                        <li
                                            {...{
                                                className: 'nav-item mb-2',
                                                style: {
                                                    marginTop: '0.5rem',
                                                },
                                            }}
                                        >
                                            <span
                                                {...{
                                                    style: {
                                                        marginRight: '91px',
                                                    },
                                                }}
                                            >
                                                English-EN{' '}
                                            </span>
                                            <span
                                                {...{
                                                    style: {
                                                        cursor: 'pointer',
                                                    },
                                                    className: 'pointer-span',
                                                }}
                                            >
                                                Change
                                            </span>
                                        </li>
                                        <li>
                                            <hr
                                                {...{
                                                    className:
                                                        'dropdown-divider',
                                                }}
                                            />
                                        </li>

                                        <li
                                            {...{
                                                className: 'nav-item',
                                            }}
                                        >
                                            <span
                                                className="mt-2"
                                                {...{
                                                    style: {
                                                        marginRight: '45px',
                                                        fontWeight: 'bold',
                                                    },
                                                }}
                                            >
                                                Change currency{' '}
                                            </span>
                                            <span
                                                {...{
                                                    style: {
                                                        cursor: 'pointer',
                                                    },
                                                    className: 'pointer-span',
                                                }}
                                            >
                                                Learn more
                                            </span>
                                        </li>
                                        <li
                                            {...{
                                                className: 'nav-item',
                                                style: {
                                                    marginTop: '0.5rem',
                                                },
                                            }}
                                        >
                                            <span
                                                {...{
                                                    style: {
                                                        marginRight: '54px',
                                                    },
                                                }}
                                            >
                                                {'$- USD- US Dollar'}
                                            </span>
                                            <span
                                                {...{
                                                    style: {
                                                        cursor: 'pointer',
                                                    },
                                                    className: 'pointer-span',
                                                }}
                                            >
                                                Change
                                            </span>
                                        </li>
                                        <li
                                            {...{
                                                className: 'nav-item',
                                            }}
                                        >
                                            <hr
                                                {...{
                                                    className:
                                                        'dropdown-divider',
                                                }}
                                            />
                                        </li>
                                        <hr />
                                        <li
                                            {...{
                                                className: 'mt-2',
                                                style: {
                                                    textAlign: 'center',
                                                },
                                            }}
                                        >
                                            <span
                                                className="justify-around"
                                                {...{
                                                    style: {
                                                        display: 'flex',
                                                        marginBottom: '0.5rem',
                                                    },
                                                }}
                                            >
                                                <img
                                                    {...{
                                                        alt: '',
                                                        src: usa,
                                                        style: {
                                                            width: '1.5rem',
                                                            height: '1.5rem',
                                                        },
                                                    }}
                                                />
                                                <span
                                                    {...{
                                                        className: 'site-info',
                                                    }}
                                                >
                                                    You are on
                                                    Tradingpost13RMS.com
                                                </span>
                                            </span>
                                            <span
                                                {...{
                                                    className: 'pointer-span',
                                                    style: {
                                                        cursor: 'pointer',
                                                    },
                                                }}
                                            >
                                                Change country/region
                                            </span>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </Col>
                    </div>
                </div>
            </nav>
        </div>
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
            document.addEventListener(
                'mousedown',
                this.props.handleClickOutside
            )
        },

        componentWillUnmount() {
            document.removeEventListener(
                'mousedown',
                this.props.handleClickOutside
            )
        },
    }),

    pure
)(Search)
