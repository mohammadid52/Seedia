import { fetchedSavedItems, fetchedSavedProfiles } from 'apis/queries'
import animationData from 'assets/animation/caught-up.json'
import Button from 'components/atoms/Button'
import EmptyState from 'components/atoms/EmptyState'
import Meta from 'components/atoms/Meta/Meta'
import Post from 'components/posts/Post'
import SideCard from 'components/SideCard'
import Spinner from 'components/Spinner'
import Tabs from 'components/Tabs'

import VerticalProfileCard from 'components/VerticalProfileCard'
import { links } from 'constants/Links'
import useAccountType from 'hooks/useAccountType'
import useFollow from 'hooks/useFollow'
import useTabs from 'hooks/useTabs'
import { IParent, IPost } from 'interfaces/UniversalInterface'
import DashboardHeader from 'pages/DashboardHeader'
import DashboardLayout from 'pages/DashboardLayout'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useQuery } from 'react-query'
import { avatarPlaceholder } from 'state/Redux/constants'

const User = ({
  user,
  myFollowings,
}: {
  user?: IParent
  myFollowings: string[]
}) => {
  const { isBusiness, isPersonal } = useAccountType(user)
  const { following, addFollow, removeFollow } = useFollow(
    myFollowings || [],
    user._id.toString()
  )
  return (
    <a
      href={links.getProfile(user)}
      key={user._id}
      className={`p-2 py-4 relative cursor-pointer border-b border-gray-200 dark:border-gray-700 dark:hover:bg-gray-800 hover:bg-gray-100  transition-all`}
    >
      <div className="flex  cursor-pointer items-center ">
        <img
          src={user.profilePicture || avatarPlaceholder}
          alt=""
          className="rounded-full mr-2 h-12 w-12"
        />
        <div>
          <h4 className="dark:text-white text-gray-900">{user.fullName}</h4>
          <p className="dark:text-gray-500 text-gray-600 text-sm">
            {isBusiness
              ? user?.business?.name
              : isPersonal
              ? user?.company?.companyName
              : user?.background?.education &&
                user?.background?.education[0].name}
          </p>
        </div>
        <div className="absolute  right-2">
          <Button
            gradient
            onClick={() => {
              following
                ? removeFollow.mutate(user?._id)
                : addFollow.mutate(user?._id)
            }}
            label={following ? 'Unfollow' : 'Follow'}
          />
        </div>
      </div>
    </a>
  )
}

const MyItems = ({ userData }: { userData: IParent }) => {
  const tabs = [{ name: 'Profiles' }, { name: 'Posts' }]

  const { currentTab, setCurrentTab, helpers } = useTabs(tabs)
  const [onProfiles, onPosts] = helpers

  const { data, isLoading, isFetched, isSuccess, refetch } = useQuery(
    `saved-items`,
    fetchedSavedItems,
    { enabled: onPosts }
  )

  const _users = useQuery(`saved-profiles`, fetchedSavedProfiles, {
    enabled: onProfiles,
  })

  const onReachedAtLastPost = () => {
    refetch()
  }

  const savedItems: IPost[] =
    !isLoading && isFetched && isSuccess ? data.data.data : []
  const savedProfiles: IParent[] =
    !_users.isLoading && _users.isFetched && _users.isSuccess
      ? _users.data.data.data
      : []

  const { isBusiness } = useAccountType(userData)

  return (
    <div className="relative  dark:bg-gray-900 bg-gray-100 min-h-screen ">
      <DashboardHeader userData={userData} />
      <Meta pageTitle={`Recent Activity | ${userData.fullName} | 13RMS`} />

      <div
        className={`h-auto pt-4 relative flow-root  transition-all duration-500 `}
      >
        <DashboardLayout
          firstColClass={`   max-h-152 lg:block  xl:block w-full `}
          firstCol={
            <div className="flex flex-col gap-y-12">
              <VerticalProfileCard
                content={
                  <div>
                    <p className="text-sm font-medium dark:text-white text-gray-500 ">
                      {isBusiness
                        ? userData.business.name
                        : userData.company.jobTitle}
                    </p>
                    <div className="flex mt-4 gap-y-2  flex-col border-t py-2 text-xs font-medium text-gray-500 dark:text-gray-500 border-gray-200 dark:border-gray-700">
                      <div className="flex transition-all item-center px-4 py-1  dark:hover:bg-gray-700 justify-between">
                        <h6 className="font-medium ">Followers</h6>
                        <a
                          href={links.followers(userData.profileUrl)}
                          className="hover:underline cursor-pointer text-link font-semibold"
                        >
                          {userData?.followers?.length || 0}
                        </a>
                      </div>
                    </div>
                  </div>
                }
                user={userData}
              />
            </div>
          }
          secondCol={
            <div className="flex gap-y-4 mx-auto lg:max-w-2xl  flex-col">
              {isLoading && !isFetched ? (
                <Spinner />
              ) : (
                <div className="space-y-12 ">
                  <div className="plain-card w-full  px-4">
                    <Tabs
                      tabs={tabs}
                      currentTab={currentTab}
                      setCurrentTab={setCurrentTab}
                    />
                  </div>
                  {onProfiles &&
                    (savedProfiles && savedProfiles.length > 0 ? (
                      <InfiniteScroll
                        dataLength={savedProfiles.length} //This is important field to render the next data
                        next={() => onReachedAtLastPost()}
                        hasMore={true}
                        loader={undefined}
                      >
                        <div className="flex flex-col gap-y-6">
                          {savedProfiles.map((user, idx) => {
                            return (
                              <User
                                myFollowings={userData.following}
                                key={user._id}
                                user={user}
                              />
                            )
                          })}
                        </div>
                      </InfiniteScroll>
                    ) : (
                      <EmptyState
                        animation={animationData}
                        title="You're all caught up"
                      />
                    ))}
                  {onPosts &&
                    (savedItems && savedItems.length > 0 ? (
                      <InfiniteScroll
                        dataLength={savedItems.length} //This is important field to render the next data
                        next={() => onReachedAtLastPost()}
                        hasMore={true}
                        loader={undefined}
                      >
                        <div className="grid  grid-cols-1 gap-y-6">
                          {savedItems.map((post, idx) => (
                            <Post
                              key={post._id}
                              userData={userData}
                              userId={userData._id.toString()}
                              post={post}
                            />
                          ))}
                        </div>
                      </InfiniteScroll>
                    ) : (
                      <EmptyState
                        animation={animationData}
                        title="You're all caught up"
                      />
                    ))}
                </div>
              )}
            </div>
          }
          thirdColClass="lg:block"
          thirdCol={
            <div className="space-y-12">
              <SideCard />
              <SideCard />
              {/* <Following
                  showSingleCard
                  list={userData?.following}
                  interests={userData?.background?.interests}
                /> */}
            </div>
          }
        />
      </div>
    </div>
  )
}

export default MyItems
