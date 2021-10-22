import { fetchFeed } from 'apis/queries'
import Meta from 'components/atoms/Meta/Meta'
import Post from 'components/posts/Post'
import { usePostContext } from 'context/PostContext'
import useOnScreen from 'hooks/useOnScreen'
import { IPost } from 'interfaces/UniversalInterface'
import { useEffect, useRef, useState } from 'react'
import { useQuery } from 'react-query'
import InfiniteScroll from 'react-infinite-scroll-component'

const ListPosts = () => {
  const [limit, setLimit] = useState(10)

  const { data, refetch, isLoading, isFetched, isError, error } = useQuery(
    'list-posts',
    () => fetchFeed(limit)
  )

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

  if (isError) {
    return <p>{error}</p>
  }

  const posts: IPost[] = !isLoading && isFetched ? data.data.data : []
  return (
    <div className="">
      <Meta pageTitle={`(${posts?.length || 0}) Feed | 13RMS`} />
      <InfiniteScroll
        dataLength={posts.length} //This is important field to render the next data
        next={() => onReachedAtLastPost()}
        hasMore={true}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: 'center' }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        <div className="grid  grid-cols-1 gap-y-6">
          {posts.map((post, idx) => (
            <Post
              postRef={idx === posts.length - 1 ? lastPostRef : undefined}
              post={post}
            />
          ))}
        </div>
      </InfiniteScroll>
    </div>
  )
}

export default ListPosts
