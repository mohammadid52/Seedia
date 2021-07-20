import React, { Fragment } from 'react'
import './styles/HeaderStyles.js'

const HomeContent = ({ theme }) => {
    return (
        <Fragment>
            <div {...{ className: ' home-content' }}>
                <div
                    {...{
                        className: 'text-center ' + theme,
                        style: { paddingTop: '3rem', paddingBottom: '1rem' },
                    }}
                >
                    {
                        <img
                            {...{
                                alt: '',
                                src: 'http://tradingpost13rms.com/logo.png',
                                style: { margin: '0', height: '11rem' },
                            }}
                        />
                    }
                    <p
                        {...{
                            className: 'description',
                            style: {
                                textAlign: 'center',
                                display: 'grid',
                                fontWeight: '600',
                                fontSize: '15px',
                            },
                        }}
                    >
                        <span>The place to sell your products, services</span>
                        <span>and build business relationships</span>
                    </p>
                </div>
            </div>
        </Fragment>
    )
}

export default HomeContent
