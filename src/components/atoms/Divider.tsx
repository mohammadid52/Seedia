import React from 'react'

const Divider = ({ className }: { className?: string }) => {
  return (
    <div
      style={{ height: 1 }}
      className={`my-4 dark:bg-gray-700 bg-gray-400 ${className}`}
    />
  )
}

export default Divider
