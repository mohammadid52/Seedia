import React from 'react'

const NarrowLayout = ({
  children,
  className = '',
  customMaxWidth = 'max-w-3xl',
  customParentMaxWidth = 'max-w-7xl',
}: {
  children: React.ReactNode
  className?: string
  customMaxWidth?: string
  customParentMaxWidth?: string
}) => {
  return (
    <div
      className={`${className} ${customParentMaxWidth} mx-auto px-4 sm:px-6 lg:px-8 min-h-screen bg-white dark:bg-gray-900`}
    >
      {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
      <div className={`${customMaxWidth} py-24 mx-auto`}>{children}</div>
    </div>
  )
}

export default NarrowLayout
