import { links } from 'constants/Links'

const DiscoverCard = ({
  extraItems,
}: {
  extraItems?: { name: string; link: string }[]
}) => {
  return (
    <div className="rounded-lg border dark:border-gray-700  border-gray-200  overflow-hidden lg:max-w-xs bg-white dark:bg-gray-800 ">
      <div className="">
        <div className="p-4 flex flex-col gap-y-3 text-xs font-medium text-link">
          <a href={links.groups()} className="hover:underline cursor-pointer">
            Groups
          </a>
          <div className=" cursor-pointer flex items-center justify-between">
            <p className="hover:underline ">Events</p>
            <div className="text-gray-900 dark:text-gray-500 text-base hover:bg-gray-700 rounded-full h-6 transition-all w-6 flex items-center justify-center">
              +
            </div>
          </div>
          <div className="hover:underline cursor-pointer">Followed Hastags</div>
          {extraItems &&
            extraItems.length > 0 &&
            extraItems.map((item) => (
              <a
                href={item.link}
                key={item.name}
                className="hover:underline cursor-pointer"
              >
                {item.name}
              </a>
            ))}
        </div>
        <div className="flex items-center cursor-pointer hover:bg-gray-200 transition-all dark:hover:bg-gray-700 gap-y-2  justify-center px-4 border-t py-4  text-sm font-medium text-gray-500 dark:text-gray-500 border-gray-200 dark:border-gray-700">
          <p>Discover more</p>
        </div>
      </div>
    </div>
  )
}

export default DiscoverCard
