import { fetchPostById } from 'apis/queries'
import Meta from 'components/atoms/Meta/Meta'
import Post from 'components/posts/Post'
import SideCard from 'components/SideCard'
import Spinner from 'components/Spinner'
import VerticalProfileCard from 'components/VerticalProfileCard'
import { useRouter } from 'hooks/useRouter'
import { IParent, IPost } from 'interfaces/UniversalInterface'
import DashboardHeader from 'pages/DashboardHeader'
import DashboardLayout from 'pages/DashboardLayout'
import { useQuery } from 'react-query'

const SinglePostView = ({ userData }: { userData: IParent }) => {
  const route: any = useRouter()
  const { postUrl } = route?.match?.params

  const { data, isLoading, isFetched, isSuccess } = useQuery(
    `post-${postUrl}`,
    () => fetchPostById(postUrl)
  )

  const post: IPost = !isLoading && isFetched && isSuccess ? data.data.data : {}

  const user = post?.user

  return (
    <div className="relative  dark:bg-gray-900 bg-gray-100 min-h-screen ">
      <DashboardHeader userData={userData} />
      <Meta pageTitle={`Post | Feed | 13RMS`} />

      <div
        className={`h-auto pt-4 relative flow-root  transition-all duration-500 `}
      >
        <DashboardLayout
          firstColClass={`   max-h-152 lg:block  xl:block w-full `}
          firstCol={
            <div className="flex flex-col gap-y-12">
              {isFetched && !isLoading ? (
                <VerticalProfileCard user={user} />
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
                <Post userData={userData} userId={userData._id} post={post} />
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

export default SinglePostView
