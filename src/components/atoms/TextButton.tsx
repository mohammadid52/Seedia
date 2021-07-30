import React from 'react'

const TextButton = ({
  text,
  onClick,
  className,
  color = 'blue',
}: {
  text: string
  className: string
  color?: string
  onClick: () => void
}) => {
  return (
    <div
      className={`my-2 text-${color}-500 cursor-pointer px-2 py-1 hover:text-${color}-600 hover:bg-${color}-100 rounded-md transition-all duration-200  ${className}`}
      onClick={onClick}
    >
      {text}
    </div>
  )
}

export default TextButton
