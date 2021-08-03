import React from 'react'

const Divider = ({ className }: { className?: string }) => {
  return <hr className={`my-4 dark:text-gray-100 text-gray-400 ${className}`} />
}

export default Divider
