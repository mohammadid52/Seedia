import React from 'react'

const GradientText = ({
  children,
  className,
}: {
  children: React.ReactNode
  className: string
}) => {
  return <div className={`gradient-text ${className}`}>{children}</div>
}

export default GradientText
