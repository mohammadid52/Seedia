import React from 'react'

const DashboardLayout = ({
  firstCol,
  secondCol,
  thirdCol,
  firstColClass,
}: {
  firstColClass?: string
  firstCol?: React.ReactNode
  secondCol?: React.ReactNode
  thirdCol?: React.ReactNode
}) => {
  return (
    <div className="flex-grow pt-24 w-full px-4 md:max-w-6xl lg:max-w-7xl sm:max-w-5xl mx-auto xl:px-8 lg:flex">
      {/* Left sidebar & main wrapper */}
      <div className="flex-1  min-w-0 bg-gray-100 dark:bg-gray-900 xl:flex">
        <div
          className={`${firstColClass} border-b dark:border-gray-700 border-gray-200 dark:bg-gray-900 xl:border-b-0 xl:flex-shrink-0 xl:w-64 bg-gray-100`}
        >
          <div
            className="h-full py-6
          "
          >
            {/* Start left column area */}
            <div className="h-full relative" style={{ minHeight: '12rem' }}>
              {firstCol}
            </div>
            {/* End left column area */}
          </div>
        </div>

        <div className="bg-gray-100 dark:bg-gray-900 lg:min-w-0 lg:flex-1 ">
          <div className="h-full py-6 px-4 sm:px-6 lg:px-8">
            {/* Start main area*/}
            <div className="relative h-full" style={{ minHeight: '36rem' }}>
              {secondCol}
            </div>
            {/* End main area */}
          </div>
        </div>
      </div>

      <div className="bg-gray-100 dark:bg-gray-900 lg:flex-shrink-0 ">
        <div className="h-full pl-6 py-6 ">
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
