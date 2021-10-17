import { IParent } from 'interfaces/UniversalInterface'
import UniversalHeader from 'components/headers/UniversalHeader'
import React from 'react'

const NarrowLayout = ({
  children,
  userData,
  className = '',
  customMaxWidth = 'max-w-3xl',
  customParentMaxWidth = 'max-w-7xl',
}: {
  children: React.ReactNode
  className?: string
  customMaxWidth?: string
  customParentMaxWidth?: string
  userData?: IParent
}) => {
  return (
    <>
      {userData && <UniversalHeader userData={userData} />}

      <div
        className={`${className} ${customParentMaxWidth} mx-auto px-4 sm:px-6 lg:px-8 min-h-screen bg-white dark:bg-gray-900`}
      >
        {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
        <div className={`${customMaxWidth} py-24 mx-auto`}>{children}</div>
      </div>
    </>
  )
}

export default NarrowLayout
