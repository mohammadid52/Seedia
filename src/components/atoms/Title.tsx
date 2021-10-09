import React from 'react'

const Title = ({
  className,
  children,
  size = 'text-3xl',
  fontWeight = 'font-semibld',
  textColor = 'text-gray-900 dark:text-white',
}: {
  className?: string
  size?: string
  textColor?: string
  fontWeight?: string
  children: React.ReactNode
}) => {
  return (
    <h1 className={`${className} ${size} ${fontWeight} ${textColor}`}>
      {children}
    </h1>
  )
}

export default Title
