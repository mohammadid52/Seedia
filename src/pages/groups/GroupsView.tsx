import { fetchGroups } from 'apis/queries'
import IdleUser from 'assets/svg/idle-user.svg'
import AnimatedContainer from 'components/animation/AnimatedContainer'
import Button from 'components/atoms/Button'
import Card from 'components/atoms/Card'
import Meta from 'components/atoms/Meta/Meta'
import Dropdown from 'components/Dropdown/Dropdown'
import Spinner from 'components/Spinner'
import Tabs from 'components/Tabs'
import { links } from 'constants/Links'
import NarrowLayout from 'containers/NarrowLayout'
import useTabs from 'hooks/useTabs'
import { IGroup, IParent } from 'interfaces/UniversalInterface'
import { useQuery } from 'react-query'
import { avatarPlaceholder } from 'state/Redux/constants'

const NoGroups = () => (
  <div className="m-4 text-center flex items-center justify-center flex-col">
    <img
      src={IdleUser}
      alt=""
      className="h-28 sm:h-32 lg:h-36 xl:h-40 w-full"
    />
    <h3 className="mt-4 text-xl font-medium dark:text-gray-300 text-gray-900">
      Discover groups
    </h3>
    <p className="mt-1 text-base text-gray-500">
      Find other trusted communities that share and support your goals.
    </p>
    <div className="mt-6">
      <Button
        size="sm"
        //   invert
        rounded="rounded-full"
        label={'Discover'}
        gradient
        onClick={() => {}}
      />
    </div>
  </div>
)

const Groups = ({ groups, userId }: { groups: IGroup[]; userId: string }) => {
  const dropdownList = [
    {
      id: '1',
      name: 'Copy link to group',
      onClick: () => {},
    },
    {
      id: '2',
      name: 'Update your settings',
      onClick: () => {},
    },
    {
      id: '3',
      name: `Leave this group`,
      onClick: () => {},
    },
  ]

  return (
    <div className="bg-white dark:bg-gray-800">
      <ul className="">
        {groups.map((group) => {
          const isOwner = group?.owner?.toString() === userId
          return (
            <li key={group._id}>
              <div className="block border-b border-gray-200 dark:border-gray-700 pt-2">
                <div className="px-4 py-4 flex items-center sm:px-6">
                  <img
                    alt=""
                    src={
                      group.profilePicture
                        ? group.profilePicture
                        : avatarPlaceholder
                    }
                    className="h-14 w-14  2 -mt-3"
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
            </li>
          )
        })}
      </ul>
    </div>
  )
}

const tabs = [{ name: 'Your groups' }, { name: 'Requested' }]

const GroupsView = ({ userData }: { userData: IParent }) => {
  const { data, isLoading, isFetched, isError, error } = useQuery(
    'group-list',
    fetchGroups
  )

  const groups: IGroup[] = isFetched && !isLoading && data.data.data

  const { currentTab, setCurrentTab, helpers } = useTabs(tabs)
  const [onYourGroups, onRequested] = helpers
  const groupsLen = groups.length || 0

  return (
    <NarrowLayout userData={userData} customMaxWidth="max-w-7xl">
      <Meta
        pageTitle={`(${groupsLen}) Groups | 13RMS`}
        title={`(${groupsLen}) Groups | 13RMS`}
      />
      <Card
        content={
          <div className="">
            <div className="border-b flex items-center justify-between border-gray-200 dark:border-gray-700">
              <Tabs
                tabs={tabs}
                currentTab={currentTab}
                setCurrentTab={setCurrentTab}
              />
              <Button
                size="md"
                rounded="rounded-full"
                label={'Create group'}
                link={links.createGroup()}
                gradient
                invert
              />
            </div>
            {isLoading && !isFetched ? (
              <Spinner />
            ) : groupsLen > 0 ? (
              <div className="mt-4">
                <AnimatedContainer show={onYourGroups}>
                  {onYourGroups && (
                    <Groups userId={userData._id} groups={groups} />
                  )}
                </AnimatedContainer>
                <AnimatedContainer show={onRequested}>
                  {onRequested && (
                    <Groups groups={groups} userId={userData._id} />
                  )}
                </AnimatedContainer>
              </div>
            ) : (
              <NoGroups />
            )}
          </div>
        }
      />
    </NarrowLayout>
  )
}

export default GroupsView
