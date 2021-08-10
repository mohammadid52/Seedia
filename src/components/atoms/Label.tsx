const Label = ({ text, className }: { text: string; className?: string }) => {
  return (
    <label
      className={`block dark:text-white text-sm font-medium text-gray-700 ${className}`}
    >
      {text}{' '}
    </label>
  )
}

export default Label
