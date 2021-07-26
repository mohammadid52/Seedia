interface IButton {
  label: string
  onClick: () => void
  Icon: any
  bgColor?: string
  rounded?: string
  className?: string
  gradient: boolean
  gradientColor?: {
    x: string
    y: string
  }
  primary: boolean
  invert: boolean
  secondary: boolean
  size: 'sm' | 'md' | 'lg' | 'xl'
  weight: 'light' | 'medium' | 'semibold' | 'bold'
}

const Button = ({
  label,
  onClick,
  Icon,
  bgColor = 'indigo',
  gradient = false,
  gradientColor = { x: 'pink', y: 'yellow' },
  primary = false,
  secondary = false,
  size,
  invert = false,
  rounded = 'rounded',
  weight = 'medium',
  className = '',
}: IButton) => {
  const generateClass = () => {
    const primaryClass = `text-white inline-flex items-center border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-${bgColor}-600 hover:bg-${bgColor}-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-${bgColor}-500`
    const secondaryClass = `inline-flex items-center border border-transparent text-xs font-medium rounded text-${bgColor}-700 ${
      invert
        ? `hover:bg-${bgColor}-100 focus:ring-${bgColor}-500`
        : `bg-${bgColor}-100 hover:bg-${bgColor}-200 focus:ring-${bgColor}-500`
    }  focus:outline-none focus:ring-2 focus:ring-offset-2 `
    switch (true) {
      case gradient:
        return `text-white  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 bg-gradient-to-r from-${gradientColor.x}-500 to-${gradientColor.y}-500`
      case primary:
        return primaryClass
      case secondary:
        return secondaryClass
      default:
        return primaryClass
    }
  }

  const generatePadding = () => {
    switch (size) {
      case 'sm':
        return 'px-3 py-2'
      case 'md':
      case 'lg':
        return 'px-4 py-2'
      case 'xl':
        return 'px-8 py-3'
      default:
        return 'px-4 py-2'
    }
  }

  return (
    <button
      type="button"
      aria-hidden="true"
      onClick={onClick}
      className={`${generateClass()} ${generatePadding()} ${rounded} font-${weight} ${className}`}
    >
      {label}
      {Icon && <Icon className="ml-3 -mr-1 h-5 w-5" />}
    </button>
  )
}

export default Button
