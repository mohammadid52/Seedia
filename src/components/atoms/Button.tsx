interface IButton {
  label?: string
  onClick?: () => void
  Icon?: any
  bgColor?: string
  rounded?: string
  className?: string
  gradient?: boolean
  onlyText?: boolean
  gradientColor?: {
    x: string
    y: string
  }
  primary?: boolean
  fullWidth?: boolean
  invert?: boolean
  secondary?: boolean
  loading?: boolean
  customClass?: boolean
  shadow?: boolean
  gradientHover?: boolean

  loadingText?: string
  type?: 'button' | 'submit' | 'reset'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  weight?: 'light' | 'medium' | 'semibold' | 'bold'
}

const Button = ({
  label,
  onClick,
  Icon,
  type = 'button',
  bgColor = 'indigo',
  gradient = false,
  gradientColor = { x: 'yellow', y: 'pink' },
  primary = false,
  fullWidth = false,
  secondary = false,
  onlyText = false,
  size = 'md',
  invert = false,
  rounded = 'rounded',
  weight = 'medium',
  gradientHover = true,
  className = '',
  shadow = false,
  loading = false,
  loadingText = 'Processing',
  customClass = false,
}: IButton) => {
  const generateClass = () => {
    const primaryClass = `${
      onlyText
        ? `text-${bgColor}-600 hover:text-${bgColor}-700 `
        : `text-white bg-${bgColor}-600 hover:bg-${bgColor}-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-${bgColor}-500`
    }  flex items-center border border-transparent shadow-sm text-base font-medium rounded-md `
    const secondaryClass = `flex items-center border border-transparent font-medium rounded dark:text-${bgColor}-400 dark:border-${bgColor}-400 text-${bgColor}-700 ${
      invert
        ? `hover:border-${bgColor}-300 dark:border-gray-600 dark:hover:border-gray-500 {bgColor}- border-${bgColor}-200 border focus:ring-${bgColor}-500`
        : `bg-${bgColor}-100 hover:bg-${bgColor}-200 focus:ring-${bgColor}-500`
    }  focus:outline-none focus:ring-2 focus:ring-offset-2 `
    switch (true) {
      case gradient:
        return `${
          invert
            ? `gradient-text border border-gray-200 dark:border-gray-600 overflow-hidden  ${
                gradientHover
                  ? 'hover:gradient-border'
                  : 'hover:border-gray-300'
              }  rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-${
                gradientColor.x
              }-500`
            : `text-white via-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-${gradientColor.x}-500 bg-gradient-to-br from-${gradientColor.x}-500 to-${gradientColor.y}-500`
        } `
      case primary:
        return primaryClass
      case secondary:
        return secondaryClass
      default:
        return primaryClass
    }
  }

  const generatePaddingAndTextSize = () => {
    switch (size) {
      case 'sm':
        return 'px-3 py-2 text-sm'
      case 'md':
      case 'lg':
        return 'px-4 py-2 text-base'
      case 'xl':
        return 'px-8 py-3 text-lg'
      default:
        return 'px-4 py-2 text-xl'
    }
  }

  return (
    <button
      aria-hidden="true"
      onClick={onClick}
      type={type}
      style={{ filter: shadow ? 'drop-shadow(2px 4px 6px pink)' : undefined }}
      className={`${
        customClass
          ? className
          : `${generateClass()} ${generatePaddingAndTextSize()} ${rounded} font-${weight} ${className} ${
              fullWidth ? 'w-full' : ''
            } transition-all duration-200`
      }`}
    >
      {loading && (
        <svg
          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      )}
      {Icon && (
        <Icon className={`${label ? 'mr-2' : ''} dark:text-white h-5 w-5"`} />
      )}
      {label && (loading ? loadingText : label)}
    </button>
  )
}

export default Button
