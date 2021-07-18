import React, { Fragment } from 'react'
import { Row, Col, Button } from 'reactstrap'
import useDarkMode from 'use-dark-mode'

import paySafe from './../public/assets/features/pay-safe.png'
import globe from './../public/assets/features/globe.png'
import mobile from './../public/assets/features/mobile.png'
import appStore from './../public/assets/appStore.png'
import playstore from './../public/assets/playstore.png'
import protection from './../public/assets/features/protection.png'
import badge from './../public/assets/features/badge.png'
import FeaturesStyles from './styles/FeaturesStyles'
import rocket from './../public/assets/features/rocket.png'
import photo from './../public/assets/features/photo.png'
import badgewhite from './../public/assets/features/badgewhite.png'
import globewhite from './../public/assets/features/globewhite.png'
import mobilewhite from './../public/assets/features/mobilewhite.png'
import paySafewhite from './../public/assets/features/pay-safewhite.png'
import photowhite from './../public/assets/features/photowhite.png'
import rocketwhite from './../public/assets/features/rocketwhite.png'
import protectionwhite from './../public/assets/features/protectionwhite.png'
import people from './../public/assets/features/people.png'
import peoplewhite from './../public/assets/features/peoplewhite.png'

const Features = ({ theme }) => {
    var color
    if (theme === 'dark') {
        color = true
    } else {
        color = false
    }
    console.log(color)
    return (
        <Fragment>
            <div
                {...{
                    className: FeaturesStyles,
                    style: { paddingTop: '2.5rem', paddingBottom: '4rem' },
                }}
            >
                <Row {...{ className: 'justify-content ' + theme }}>
                    <Col
                        {...{
                            md: { size: 2 },
                            sm: { size: 3 },
                            className: 'text-center mb-4 mb-md-0',
                        }}
                    >
                        <div>
                            <img
                                {...{
                                    alt: '',
                                    src: color ? rocketwhite : rocket,
                                    style: { height: '5rem' },
                                }}
                            />
                            <p {...{ className: '' }}>
                                New product developed look for <br />
                                manufacturers who want to produce your product
                            </p>

                            <Button
                                outline
                                color="secondary"
                                {...{ size: 'sm', className: 'feature-button' }}
                            >
                                Know More
                            </Button>
                        </div>
                    </Col>
                    <Col
                        {...{
                            md: { size: 2 },
                            sm: { size: 3 },
                            className: 'text-center mb-4 mb-md-0',
                        }}
                    >
                        <div>
                            <img
                                {...{
                                    alt: '',
                                    src: color ? peoplewhite : people,
                                    style: { height: '5rem' },
                                }}
                            />
                            <p {...{ className: '' }}>
                                Present yourself extensively on
                                <br />
                                13RMS to the client and employers
                            </p>

                            <Button
                                outline
                                color="secondary"
                                {...{ size: 'sm', className: 'feature-button' }}
                            >
                                Get Started
                            </Button>
                        </div>
                    </Col>
                    <Col
                        {...{
                            md: { size: 2 },
                            sm: { size: 2 },
                            className: 'text-center mb-4 mb-md-0',
                        }}
                    >
                        <div>
                            <img
                                {...{
                                    alt: '',
                                    src: color ? photowhite : photo,
                                    style: { height: '5rem' },
                                }}
                            />
                            <p {...{ className: '' }}>
                                Post vacancies and internships
                                <br /> and find the right candidates
                            </p>

                            <Button
                                outline
                                color="secondary"
                                {...{ size: 'sm', className: 'feature-button' }}
                            >
                                Get Started
                            </Button>
                        </div>
                    </Col>

                    <Col
                        {...{
                            md: { size: 2 },
                            sm: { size: 3 },
                            className: 'text-center mb-4 mb-md-0',
                        }}
                    >
                        <div>
                            <img
                                {...{
                                    alt: '',
                                    src: color ? globewhite : globe,
                                    style: { height: '5rem' },
                                }}
                            />
                            <p {...{ className: '' }}>
                                Worldwide selling & <br />
                                Networking
                            </p>
                            <Button
                                outline
                                color="secondary"
                                {...{ size: 'sm', className: 'feature-button' }}
                            >
                                Start Selling
                            </Button>
                        </div>
                    </Col>
                </Row>
                <div className="padding-top"></div>
                <Row {...{ className: 'justify-content ' + theme }}>
                    <Col
                        {...{
                            md: { size: 2 },
                            sm: { size: 3 },
                            className: 'text-center mb-4 mb-md-0',
                        }}
                    >
                        <div>
                            <img
                                {...{
                                    alt: '',
                                    src: color ? badgewhite : badge,
                                    style: { height: '5rem' },
                                }}
                            />
                            <p {...{ className: '' }}>
                                Only do business with <br />
                                verified users
                            </p>

                            <Button
                                outline
                                color="secondary"
                                {...{ size: 'sm', className: 'feature-button' }}
                            >
                                Know More
                            </Button>
                        </div>
                    </Col>

                    <Col
                        {...{
                            md: { size: 2 },
                            sm: { size: 3 },
                            className: 'text-center mb-4 mb-md-0',
                        }}
                    >
                        <div>
                            <img
                                {...{
                                    alt: '',
                                    src: color ? mobilewhite : mobile,
                                    style: { height: '5rem' },
                                }}
                            />
                            <p {...{ className: '' }}>
                                <span>Discover our app</span>
                                <br /> <span>Download our app now</span>
                            </p>
                            <div>
                                <img
                                    {...{
                                        alt: '',
                                        src: playstore,
                                        style: {
                                            height: '2rem',
                                            cursor: 'pointer',
                                        },
                                        className: 'mr3',
                                    }}
                                />
                                <img
                                    {...{
                                        alt: '',
                                        src: appStore,
                                        style: {
                                            height: '2rem',
                                            cursor: 'pointer',
                                        },
                                    }}
                                />
                            </div>
                        </div>
                    </Col>
                    <Col
                        {...{
                            md: { size: 2 },
                            sm: { size: 2 },
                            className: 'text-center mb-4 mb-md-0',
                        }}
                    >
                        <div>
                            <img
                                {...{
                                    alt: '',
                                    src: color ? protectionwhite : protection,
                                    style: { height: '5rem' },
                                }}
                            />
                            <p {...{ className: '' }}>
                                Worldwide buyer
                                <br /> protection
                            </p>

                            <Button
                                outline
                                color="secondary"
                                {...{ size: 'sm', className: 'feature-button' }}
                            >
                                Know More
                            </Button>
                        </div>
                    </Col>
                    <Col
                        {...{
                            md: { size: 2 },
                            sm: { size: 2 },
                            className: 'text-center mb-4 mb-md-0',
                        }}
                    >
                        <div>
                            <img
                                {...{
                                    alt: '',
                                    src: color ? paySafewhite : paySafe,
                                    style: { height: '5rem' },
                                }}
                            />
                            <p {...{ className: '' }}>
                                Pay safely with <br /> {'13RMS Trading post'}
                            </p>

                            <Button
                                outline
                                color="secondary"
                                {...{ size: 'sm', className: 'feature-button' }}
                            >
                                Know More
                            </Button>
                        </div>
                    </Col>
                </Row>
            </div>
        </Fragment>
    )
}
export default Features
