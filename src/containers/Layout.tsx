import Copyright from 'components/Copyright'
import React from 'react'

const Layout = ({
  title,
  subtitle,
  children,
}: {
  title?: string
  subtitle?: React.ReactNode
  children: React.ReactNode
}) => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-start py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md flex items-center flex-col ">
        <img
          className="mx-auto h-32 w-auto"
          src={process.env.PUBLIC_URL + '/logo.png'}
          alt="13RMS"
        />
        {title && (
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            {title}
          </h2>
        )}
        {subtitle && (
          <p className="mt-2 text-center text-sm text-gray-600">{subtitle}</p>
        )}
      </div>

      {children}
      <Copyright />
    </div>
  )
}

export default Layout
