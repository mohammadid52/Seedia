import { links } from 'constants/Links'
import { useQuery } from 'react-query'
import { fetchEvents } from 'apis/queries'

const DiscoverCard = ({
  extraItems,
}: {
  extraItems?: { name: string; link: string }[]
}) => {
  const { isFetched, isLoading, data } = useQuery('short-event-names', () =>
    fetchEvents(true)
  )

  const shortEventsData: { _id: string; eventName: string }[] =
    isFetched && !isLoading ? data?.data?.data : []
  return (
    <div className="rounded-lg  border dark:border-gray-700  border-gray-200  overflow-hidden lg:max-w-xs bg-white dark:bg-gray-800 ">
      <div className="">
        <div className="p-4 flex flex-col gap-y-3 text-xs font-medium text-link">
          <a href={links.groups()} className="hover:underline cursor-pointer">
            Groups
          </a>
          <div className="flex flex-col">
            <div className=" cursor-pointer flex  items-center justify-between">
              <div className="hover:underline ">Events</div>
              <div className="text-gray-900 dark:text-gray-500 text-base hover:bg-gray-700 rounded-full h-6 transition-all w-6 flex items-center justify-center">
                +
              </div>
            </div>
            {shortEventsData &&
              shortEventsData.length > 0 &&
              shortEventsData.map((ev) => (
                <a
                  href={links.viewEvent(ev._id)}
                  className="py-2 text-xs font-medium text-gray-500 dark:text-gray-500 hover:underline cursor-pointer"
                >
                  {ev.eventName}
                </a>
              ))}
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
