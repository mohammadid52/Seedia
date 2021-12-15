const SectionTitle = ({
  title,
  gradient = true,
  className,
}: {
  title: string
  gradient?: boolean
  className?: string
}) => {
  return (
    <h2
      className={`${className} text-2xl mb-6 font-extrabold ${
        gradient ? 'gradient-border' : ''
      } border-b pb-2 tracking-tight
         dark:text-white text-gray-900`}
    >
      {title}
    </h2>
  )
}

export default SectionTitle
