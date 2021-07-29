import React from 'react'

const TextButton = ({
  text,
  onClick,
  className,
}: {
  text: string
  className: string
  onClick: () => void
}) => {
  return (
    <div
      className={`my-2 text-blue-500 cursor-pointer px-2 py-1 hover:text-blue-600 hover:bg-blue-100 rounded-md transition-all duration-200  ${className}`}
      onClick={onClick}
    >
      {text}
    </div>
  )
}

export default TextButton
