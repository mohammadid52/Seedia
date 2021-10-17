import React from 'react'

const Title = ({
  className,
  children,
  size = 'text-3xl',
  fontWeight = 'font-semibld',
  textColor = 'text-gray-900 dark:text-white',
  isLoading = false,
}: {
  className?: string
  size?: string
  isLoading?: boolean
  textColor?: string
  fontWeight?: string
  children: React.ReactNode
}) => {
  if (isLoading) {
    return (
      <div
        className={`h-4 animate-pulse bg-gray-400 rounded ${className} ${size} ${fontWeight} ${textColor}`}
      ></div>
    )
  }
  return (
    <h1 className={`${className} ${size} ${fontWeight} ${textColor}`}>
      {children}
    </h1>
  )
}

export default Title
