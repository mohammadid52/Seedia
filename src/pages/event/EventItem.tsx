import { eventInvite } from 'apis/mutations'
import Dropdown from 'components/Dropdown/Dropdown'
import { links } from 'constants/Links'
import { useNotifications } from 'context/NotificationContext'
import { IEvent } from 'interfaces/UniversalInterface'
import { useMutation } from 'react-query'
import { avatarPlaceholder } from 'state/Redux/constants'

const EventItem = ({ event, userId }: { event: IEvent; userId: string }) => {
  const isOwner = event?.eventBy?._id?.toString() === userId

  const attendee = event?.attendees?.find((atnd) => atnd._id === userId)

  const { setNotification } = useNotifications()

  const { mutate } = useMutation(eventInvite, {
    onSuccess: () => {
      setNotification({
        show: true,
        title: 'Successfully invite accepted',
        buttonText: 'View',
        buttonUrl: links.viewEvent(event._id),
      })
    },
  })
  const dropdownList = [
    {
      id: '1',
      name: 'Copy link to event',
      onClick: () => {
        navigator.clipboard.writeText(
          window.origin + links.viewEvent(event._id)
        )
      },
    },
    attendee && {
      id: '34353',
      name: `Leave this event`,
      onClick: () => {},
    },
    !attendee && {
      id: '3',
      name: `Attendee this event`,
      onClick: () => {
        mutate({
          type: 'accept',
          eventId: event._id,
          notificationId: '',
          targetId: userId,
        })
      },
    },
  ].filter(Boolean)

  return (
    <div key={event._id}>
      <div className="block border-b border-gray-200 dark:border-gray-700 pt-2">
        <div className="px-4 py-4 flex items-center sm:px-6">
          <img
            alt=""
            src={
              event.profilePicture ? event.profilePicture : avatarPlaceholder
            }
            className="h-14 w-14  2 -mt-3"
          />
          <div className="min-w-0 ml-2 flex-1 sm:flex sm:items-center sm:justify-between">
            <div className="truncate">
              <div className="flex text-sm relative">
                <a
                  href={links.viewEvent(event._id)}
                  className="font-medium  hover:underline text-lg dark:text-gray-300 text-gray-900 truncate"
                >
                  {event.eventName}
                </a>
                {isOwner && (
                  <div className="ml-2 flex-shrink-0 flex">
                    <p className="px-2 inline-flex text-sm items-center justify-center leading-5 font-semibold rounded-md bg-gray-100 text-gray-800 dark:bg-gray-600 dark:text-gray-200">
                      Organizer
                    </p>
                  </div>
                )}
              </div>
              <div className="mt-0 flex text-sm text-gray-600 dark:text-gray-500">
                {event.attendees.length}{' '}
                {event.attendees.length > 1 ? 'attendees' : 'attendee'}
              </div>
            </div>
          </div>
          <div className="relative z-10">
            <Dropdown list={dropdownList} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default EventItem
