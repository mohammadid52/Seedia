import React from 'react'

const DashboardLayout = ({
  firstCol,
  secondCol,
  thirdCol,
  firstColClass,
  firstColStyles,
  thirdColClass,
  thirdColStyles,
  mainClass = '',
}: {
  firstColClass?: string
  mainClass?: string
  firstColStyles?: any
  firstCol?: React.ReactNode
  thirdColClass?: string
  thirdColStyles?: any
  secondCol?: React.ReactNode
  thirdCol?: React.ReactNode
}) => {
  return (
    <div className="flex-grow pt-24 w-full px-4 md:max-w-6xl lg:max-w-7xl sm:max-w-5xl mx-auto xl:px-8 lg:flex relative">
      {/* Left sidebar & main wrapper */}
      <div className="flex-1 px-6 sm:px-4 lg:px-0  min-w-0 bg-gray-100 dark:bg-gray-900 xl:flex">
        <div
          style={{ ...firstColStyles }}
          className={`${firstColClass}  dark:bg-gray-900 xl:flex-shrink-0 xl:w-64 bg-gray-100`}
        >
          <div
            className="h-full py-6
          "
          >
            {/* Start left column area */}
            <div className="h-full  relative" style={{ minHeight: '12rem' }}>
              {firstCol}
            </div>
            {/* End left column area */}
          </div>
        </div>

        <div className="bg-gray-100 dark:bg-gray-900 lg:min-w-0 lg:pl-6 pl-0 lg:flex-1 ">
          <div className="h-full py-6 px-0 lg:px-6 xl:px-8">
            {/* Start main area*/}
            <div className="relative h-full " style={{}}>
              {secondCol}
            </div>
            {/* End main area */}
          </div>
        </div>
      </div>

      <div
        style={{ ...thirdColStyles }}
        className={`${thirdColClass} bg-gray-100 dark:bg-gray-900 px-4 lg:px-0 lg:flex-shrink-0 `}
      >
        <div className="h-full pl-0 lg:pl-6  py-6 ">
          {/* Start right column area */}
          <div className="h-full relative" style={{ minHeight: '16rem' }}>
            {thirdCol}
          </div>
          {/* End right column area */}
        </div>
      </div>
    </div>
  )
}

export default DashboardLayout
