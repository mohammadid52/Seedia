import React from 'react'

const NarrowLayout = ({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) => {
  return (
    <div
      className={`${className} max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen bg-white dark:bg-gray-800`}
    >
      {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
      <div className="max-w-3xl py-24 mx-auto">{children}</div>
    </div>
  )
}

export default NarrowLayout
