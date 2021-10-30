import { fetchedSavedItems } from 'apis/queries'
import animationData from 'assets/animation/caught-up.json'
import EmptyState from 'components/atoms/EmptyState'
import Meta from 'components/atoms/Meta/Meta'
import Post from 'components/posts/Post'
import SideCard from 'components/SideCard'
import Spinner from 'components/Spinner'
import VerticalProfileCard from 'components/VerticalProfileCard'
import { links } from 'constants/Links'
import useAccountType from 'hooks/useAccountType'
import { IPost, IParent } from 'interfaces/UniversalInterface'
import DashboardHeader from 'pages/DashboardHeader'
import DashboardLayout from 'pages/DashboardLayout'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useQuery } from 'react-query'

const MyItems = ({ userData }: { userData: IParent }) => {
  const { data, isLoading, isFetched, isSuccess, refetch } = useQuery(
    `saved-items`,
    fetchedSavedItems
  )

  const onReachedAtLastPost = () => {
    refetch()
  }

  const savedItems: IPost[] =
    !isLoading && isFetched && isSuccess ? data.data.data : []

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
              {isFetched && !isLoading ? (
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
                            href={links.followers()}
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
              ) : (
                <Spinner />
              )}
            </div>
          }
          secondCol={
            <div className="flex gap-y-4 mx-auto lg:max-w-2xl  flex-col">
              {isLoading && !isFetched ? (
                <Spinner />
              ) : (
                <>
                  {savedItems && savedItems.length > 0 ? (
                    <InfiniteScroll
                      dataLength={savedItems.length} //This is important field to render the next data
                      next={() => onReachedAtLastPost()}
                      hasMore={true}
                      loader={undefined}
                      endMessage={
                        <EmptyState
                          animation={animationData}
                          title="You're all caught up"
                        />
                      }
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
                  )}
                </>
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
