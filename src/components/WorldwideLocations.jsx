import React, { Fragment } from 'react'

// import ReactCountryFlag from 'react-country-flag'

const WorldwideLocations = ({
  closeWorldWideLocationPopover,
  changeCountry,
  theme,
}) => {
  return (
    <Fragment>
      <div className={'max-w-7xl  '} id={theme}>
        <ul
          {...{
            className: 'flex max-w-7xl flex-wrap items-center justify-center',
          }}
        ></ul>
      </div>
    </Fragment>
  )
}

export default WorldwideLocations
