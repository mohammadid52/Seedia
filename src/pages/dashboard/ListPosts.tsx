import { fetchFeed } from 'apis/queries'
import animationData from 'assets/animation/caught-up.json'
import EmptyState from 'components/atoms/EmptyState'
import Meta from 'components/atoms/Meta/Meta'
import Post from 'components/posts/Post'
import { usePostContext } from 'context/PostContext'
import { IParent, IPost } from 'interfaces/UniversalInterface'
import { useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useQuery } from 'react-query'

const ListPosts = ({ userData }: { userData: IParent }) => {
  const [skip, setSkip] = useState(0)

  const { setPosts, posts } = usePostContext()

  const { data, refetch, isLoading, isFetched, isSuccess } = useQuery(
    'list-posts',
    () => {
      return fetchFeed({ limit: 10, skip })
    },
    {
      onSuccess: (data) => {
        const _posts = data?.data?.data?.posts
        if (_posts && _posts.length > 0) {
          setPosts([..._posts])
        }
      },
    }
  )

  const fetchMoreData = () => {
    setSkip(skip + 10)
    refetch()
  }

  const postCount =
    !isLoading && isFetched && isSuccess ? data?.data?.data?.count || 0 : 0

  return (
    <div className="">
      <Meta pageTitle={`(${postCount || 0}) Feed | 13RMS`} />
      {posts && posts.length > 0 ? (
        <div className="grid pb-24 grid-cols-1 gap-y-6">
          {posts.map((post: IPost) => (
            <Post userData={userData} userId={userData._id} post={post} />
          ))}
        </div>
      ) : (
        // <InfiniteScroll
        //   endMessage={
        //     <div className="text-center">
        //       <span className="dark:text-gray-600 text-center text-gray-400">
        //         •
        //       </span>
        //     </div>
        //   }
        //   dataLength={postCount}
        //   scrollableTarget="main_content"
        //   next={fetchMoreData}
        //   hasMore={postCount > posts.length}
        //   loader={<h4>Loading...</h4>}
        // >

        // </InfiniteScroll>
        <EmptyState animation={animationData} title="You're all caught up" />
      )}
    </div>
  )
}

export default ListPosts
