import React from 'react'

// value can be 0/false and 1-100 for true
const Loading = ({ value }: { value?: string }) => {
  return (
    <div className="h-screen w-screen bg-white dark:bg-gray-800 flex items-center justify-center">
      <img style={{ width: '60%' }} src={'/logo-full.gif'} alt="Loading..." />
    </div>
  )
}

export default Loading
