import React from 'react'

const Header = ({ user, headerRef }: { user: any; headerRef: any }) => {
  return (
    <div
      ref={headerRef}
      className="h-32 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 "
    >
      <div className="max-w-7xl mx-auto flex items-center h-full">
        <p className="dark:text-white text-gray-900 text-4xl font-semibold border-r border-gray-200 dark:border-gray-700 pr-6  ">
          Trading Post 13RMS
        </p>
        <div className="mx-6">
          <span className="dark:text-gray-400 text-gray-500 text-base font-medium ">
            {user.jobTitle}
          </span>
          <p className="dark:text-white text-gray-900   text-3xl font-semibold ">
            {user.fullName}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Header
