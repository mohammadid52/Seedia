import React from 'react'

const Badge = ({
  style,
  className,
  color = 'yellow',
  label,
  textSize = 'sm',
  rounded = 'md',
}: {
  style?: any
  className?: string
  color?: string
  label?: string
  textSize?: string
  rounded?: string
}) => {
  return (
    <span
      style={{ ...style }}
      className={`${className} absolute capitalize bg-opacity-90 inline-flex items-center px-2.5 py-0.5  rounded${
        rounded ? `-${rounded}` : ''
      } text-${textSize} font-medium bg-${color}-100 text-${color}-800`}
    >
      {label}
    </span>
  )
}

export default Badge
