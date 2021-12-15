import Dropdown from 'components/Dropdown/Dropdown'
import { links } from 'constants/Links'
import { IGroup } from 'interfaces/UniversalInterface'
import { avatarPlaceholder } from 'state/Redux/constants'

const GroupItem = ({ group, userId }: { group: IGroup; userId: string }) => {
  const isOwner = group?.createdBy?.toString() === userId

  const dropdownList = [
    {
      id: '1',
      name: 'Copy link to group',
      onClick: () => {
        navigator.clipboard.writeText(
          window.origin + links.groupById(group._id)
        )
      },
    },
    isOwner && {
      id: '2',
      name: 'Update your settings',
      onClick: () => {},
    },
    {
      id: '3',
      name: `Leave this group`,
      onClick: () => {},
    },
  ].filter(Boolean)

  return (
    <div key={group._id}>
      <div className="block border-b border-gray-200 dark:border-gray-700 pt-2">
        <div className="px-4 py-4 flex items-center sm:px-6">
          <img
            alt=""
            src={
              group.profilePicture ? group.profilePicture : avatarPlaceholder
            }
            className="h-14 border-gradient border-transparent border-2 rounded-lg shadow-md w-14  2 -mt-3"
          />
          <div className="min-w-0 ml-2 flex-1 sm:flex sm:items-center sm:justify-between">
            <div className="truncate">
              <div className="flex text-sm relative">
                <a
                  href={links.groupById(group._id)}
                  className="font-medium  hover:underline text-lg dark:text-gray-300 text-gray-900 truncate"
                >
                  {group.groupName}
                </a>
                {isOwner && (
                  <div className="ml-2 flex-shrink-0 flex">
                    <p className="px-2 inline-flex text-sm items-center justify-center leading-5 font-semibold rounded-md bg-gray-100 text-gray-800 dark:bg-gray-600 dark:text-gray-200">
                      Owner
                    </p>
                  </div>
                )}
              </div>
              <div className="mt-0 flex text-sm text-gray-600 dark:text-gray-500">
                {group.members.length}{' '}
                {group.members.length > 1 ? 'members' : 'member'}
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

export default GroupItem
