import React, { Fragment } from 'react'

// import ReactCountryFlag from 'react-country-flag'

import { countries } from '../values/values'

const WorldwideLocations = ({
  closeWorldWideLocationPopover,
  changeCountry,
  theme,
}) => {
  return (
    <Fragment>
      <div
        style={{
          boxShadow: '0 16px 24px 2px rgba(0, 0, 0, 0.14)',
          border: '1px solid rgba(0, 0, 0, 0.04)',
        }}
        className={'table bg-white top-full left-0 w-72 z-10 '}
        id={theme}
      >
        <ul
          {...{
            className: 'flex max-w-256 flex-wrap items-center justify-center',
          }}
        >
          {countries.map((country, key) => {
            return (
              <li
                {...{
                  key,
                  onClick: closeWorldWideLocationPopover,
                  style: {},
                }}
              >
                <div
                  {...{
                    onClick: (e) => {
                      changeCountry(country.countryCode)
                    },
                  }}
                >
                  <img
                    {...{
                      alt: '',
                      src: country.flag,
                      style: {
                        width: '1.5rem',
                        height: '1.5rem',
                        marginRight: '6px',
                      },
                    }}
                  />
                  {country.label}
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </Fragment>
  )
}

export default WorldwideLocations
