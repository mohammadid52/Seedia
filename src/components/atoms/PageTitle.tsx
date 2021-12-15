const PageTitle = ({ title }: { title: string }) => {
  return (
    <div className="md:flex md:items-center md:justify-between">
      <div className="flex-1 min-w-0">
        <h2 className="text-2xl font-bold leading-7 dark:text-white text-gray-900 sm:text-3xl sm:truncate">
          {title}
        </h2>
      </div>
    </div>
  )
}

export default PageTitle
