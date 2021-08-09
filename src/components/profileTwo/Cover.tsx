import Card from 'components/atoms/Card'

import React from 'react'

const Cover = ({ user }: { user: any }) => {
  return (
    <div className="">
      <Card
        content={
          <div className="flex items-center justify-start">
            <div className="">
              <span className="sr-only">13RMS</span>
              <img
                className="h-56 w-auto sm:h-48 rounded-full shadow-xl"
                src={user.userImage}
                alt=""
              />
            </div>
            <div className="ml-4" style={{ maxWidth: '60rem' }}>
              <div className="overflow-hidden">
                <div className=" px-4 pb-5 sm:px-6">
                  <div className="dark:text-white text-gray-900 text-xl font-medium border-b border-gray-200 dark:border-gray-600 pb-4 ">
                    {user.jobTitle}{' '}
                    <span className="ml-2 dark:text-gray-400 text-gray-500 text-sm">
                      - {user.companyName}
                    </span>
                  </div>

                  <dl className="pt-4 grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                    <div className="sm:col-span-1">
                      <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        Full name
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 dark:text-white">
                        {user.fullName}
                      </dd>
                    </div>

                    <div className="sm:col-span-1">
                      <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        Email address
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 dark:text-white">
                        {user.email}
                      </dd>
                    </div>
                    <div className="sm:col-span-1">
                      <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        Company
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 dark:text-white">
                        {user.companyName}
                      </dd>
                    </div>
                    <div className="sm:col-span-1">
                      <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        Company address
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 dark:text-white">
                        {user.companyAddress}
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        }
      />
    </div>
  )
}

export default Cover
