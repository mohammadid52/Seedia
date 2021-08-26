import React from 'react'

const Divider = ({
  className,
  withButton,
  Icon,
  onBtnClick,
}: {
  className?: string
  withButton?: boolean
  Icon?: any
  onBtnClick?: () => void
}) => {
  return withButton ? (
    <div className="relative">
      <div className="absolute inset-0 flex items-center" aria-hidden="true">
        <div className="w-full border-t dark:border-gray-500 border-gray-300" />
      </div>
      <div className="relative flex justify-center">
        <span
          onClick={onBtnClick}
          className={`${className} bg-white dark:bg-gray-800 px-2 text-gray-500`}
        >
          {<Icon />}
        </span>
      </div>
    </div>
  ) : (
    <div
      style={{ height: 1 }}
      className={`my-4 dark:bg-gray-700 bg-gray-400 ${className}`}
    />
  )
}

export default Divider
