import { fetchUsers } from 'apis/queries'
import Card from 'components/atoms/Card'
import Meta from 'components/atoms/Meta/Meta'
import Tabs from 'components/Tabs'
import User from 'components/User'
import { links } from 'constants/Links'
import NarrowLayout from 'containers/NarrowLayout'
import useTabs from 'hooks/useTabs'
import { IParent } from 'interfaces/UniversalInterface'
import { useEffect } from 'react'
import { useQuery } from 'react-query'
import { useHistory } from 'react-router'

const UserFollowers = ({ userData }: { userData: IParent }) => {
  const tabs = [
    { name: `${userData?.followers?.length} Followers` },
    { name: 'Followings' },
  ]

  const { currentTab, setCurrentTab, helpers } = useTabs(tabs)
  const [onFollowers, onFollowings] = helpers

  const config = {
    users: onFollowers ? userData.followers : userData.following,
  }

  const { data, isLoading, isFetched, isSuccess } = useQuery(
    `user-${onFollowers ? 'followers' : 'followings'}`,
    () => fetchUsers(config)
  )

  const list: IParent[] =
    !isLoading && isFetched && isSuccess ? data.data.data.users : []

  const history = useHistory()
  useEffect(() => {
    if (onFollowers) {
      history.push(links.followers())
    } else {
      history.push(links.followings())
    }
  }, [onFollowers, onFollowings])

  return (
    <NarrowLayout userData={userData} customMaxWidth="max-w-7xl">
      <Meta
        pageTitle={`${onFollowers ? 'Followers' : 'Followings'} | ${
          userData.fullName
        } | 13RMS`}
      />
      <div className="flex flex-col gap-y-12">
        <Card
          content={
            <div className="flex items-center justify-between">
              <Tabs
                tabs={tabs}
                currentTab={currentTab}
                setCurrentTab={setCurrentTab}
              />
            </div>
          }
        />

        <Card
          content={
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              {list && list.length > 0 ? (
                list.map((people: IParent, idx: number) => (
                  <User key={people?._id} user={people} />
                ))
              ) : (
                <p className="text-gray-400 text-center">
                  no {onFollowings ? 'followings' : 'followers'} found
                </p>
              )}
            </div>
          }
        />
      </div>
    </NarrowLayout>
  )
}

export default UserFollowers
