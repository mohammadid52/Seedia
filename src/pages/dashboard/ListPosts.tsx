import { fetchFeed } from 'apis/queries'
import animationData from 'assets/animation/caught-up.json'
import EmptyState from 'components/atoms/EmptyState'
import Meta from 'components/atoms/Meta/Meta'
import Post from 'components/posts/Post'
import { usePostContext } from 'context/PostContext'
import useOnScreen from 'hooks/useOnScreen'
import { IParent, IPost } from 'interfaces/UniversalInterface'
import { useEffect, useRef, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useQuery } from 'react-query'

const ListPosts = ({ userData }: { userData: IParent }) => {
  const [limit, setLimit] = useState(10)

  const { data, refetch, isLoading, isFetched, isError, error, isSuccess } =
    useQuery('list-posts', () => fetchFeed(limit))

  const onReachedAtLastPost = () => {
    setLimit((prev) => prev + 10)
    refetch()
  }

  const { newPostAdded, setNewPostAdded } = usePostContext()

  useEffect(() => {
    if (newPostAdded) {
      refetch().then(() => {
        setNewPostAdded(false)
      })
    }
  }, [newPostAdded])

  const lastPostRef = useRef(null)
  const isLastPostVisible = useOnScreen(lastPostRef, '-100px')

  useEffect(() => {
    if (isLastPostVisible) {
      onReachedAtLastPost()
    }
  }, [isLastPostVisible])

  // if (isError) {
  //   return <p>{error}</p>
  // }

  const posts: IPost[] =
    !isLoading && isFetched && isSuccess ? data.data.data : []
  return (
    <div className="">
      <Meta pageTitle={`(${posts?.length || 0}) Feed | 13RMS`} />
      {posts && posts.length > 0 ? (
        <InfiniteScroll
          dataLength={posts.length} //This is important field to render the next data
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
            {posts.map((post, idx) => (
              <Post userId={userData._id} post={post} />
            ))}
          </div>
        </InfiniteScroll>
      ) : (
        <EmptyState animation={animationData} title="You're all caught up" />
      )}
    </div>
  )
}

export default ListPosts
