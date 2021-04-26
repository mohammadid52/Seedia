import React, { Fragment } from 'react'
// import ReactCountryFlag from 'react-country-flag'

import { countries } from '../values/values'

import LocationStyles from './styles/LocationStyles'

const WorldwideLocations = ({ closeWorldWideLocationPopover, changeCountry }) => {
  return (
    <Fragment>
      <div {...{ className: LocationStyles }}>
        <ul {...{ className: 'country-listing' }}>
          {countries.map((country, key) => {
            return (
              <li {...{ key, onClick: closeWorldWideLocationPopover, style: {} }}>
                <div
                  {...{
                    onClick: (e) => {
                      changeCountry(country.countryCode)
                    },
                  }}
                >
                  <img {...{ alt: '', src: country.flag, style: { width: '1.5rem', height: '1.5rem', marginRight: '6px' } }} />
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
