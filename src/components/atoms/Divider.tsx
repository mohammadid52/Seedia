const Divider = ({
  className,
  withButton,
  Icon,
  text,
  onBtnClick,
}: {
  className?: string
  withButton?: boolean
  Icon?: any
  text?: string
  onBtnClick?: () => void
}) => {
  return withButton ? (
    <div className="relative">
      <div className="absolute inset-0 flex items-center" aria-hidden="true">
        <div className="w-full border-t dark:border-gray-700 border-gray-400" />
      </div>
      <div className="relative flex justify-center">
        <span
          onClick={onBtnClick}
          className={`${className} bg-white text-xs dark:bg-gray-900 px-2 text-gray-600`}
        >
          {text}
          {Icon && <Icon />}
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
