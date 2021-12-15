import { fetchUsers } from 'apis/queries'
import Card from 'components/atoms/Card'
import Meta from 'components/atoms/Meta/Meta'
import User from 'components/User'
import EmptyState from 'components/atoms/EmptyState'
import NarrowLayout from 'containers/NarrowLayout'
import { useRouter } from 'hooks/useRouter'
import { IParent } from 'interfaces/UniversalInterface'
import { useQuery } from 'react-query'
import InfiniteScroll from 'react-infinite-scroll-component'

const UsersList = ({ userData }: { userData: IParent }) => {
  const route: any = useRouter()
  const { type } = route.query

  const genFromType = () => {
    switch (type) {
      case 'piv':
        return userData.piv
    }
  }

  const config = {
    users: genFromType(),
    limit: 20,
  }

  const { data, isLoading, isFetched, isSuccess } = useQuery(
    `users-list-${type}`,
    () => fetchUsers(config)
  )

  const list: IParent[] =
    !isLoading && isFetched && isSuccess ? data.data.data.users : []

  //   const history = useHistory()
  //   useEffect(() => {
  //     if (onFollowers) {
  //       history.push(links.followers())
  //     } else {
  //       history.push(links.followings())
  //     }
  //   }, [onFollowers, onFollowings])

  return (
    <NarrowLayout userData={userData} customMaxWidth="max-w-7xl">
      <Meta pageTitle={`${userData.fullName} | 13RMS`} />
      <div className="flex flex-col gap-y-12">
        <Card
          content={
            <div className="">
              {list && list.length > 0 ? (
                <InfiniteScroll
                  dataLength={list.length} //This is important field to render the next data
                  next={() => {}}
                  hasMore={true}
                  loader={undefined}
                  // endMessage={
                  //   <EmptyState
                  //     animation={animationData}
                  //     title="You're all caught up"
                  //   />
                  // }
                >
                  <div className=" grid grid-cols-1 overflow-x-hidden sm:grid-cols-3 lg:grid-cols-4 gap-4 xl:grid-cols-4">
                    {list.map((people: IParent, idx: number) => (
                      <User key={people?._id} user={people} />
                    ))}
                  </div>
                </InfiniteScroll>
              ) : (
                <EmptyState
                  hideBorders
                  title="Oops Can't find user."
                  subtitle={``}
                  iconUrl={'/no-users.png'}
                />
              )}
            </div>
          }
        />
      </div>
    </NarrowLayout>
  )
}

export default UsersList
