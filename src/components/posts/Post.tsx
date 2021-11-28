import {
  deletePost,
  featurePost,
  saveUnsavePost,
  viewPost,
} from 'apis/mutations'
import {
  fetchGroupById,
  fetchProductDetails,
  fetchProjectById,
  fetchSellerById,
  fetchSingleEvent,
} from 'apis/queries'
import Dropdown from 'components/Dropdown/Dropdown'
import PostBottom from 'components/posts/PostBottom'
import Spinner from 'components/Spinner'
import { links } from 'constants/Links'
import { useNotifications } from 'context/NotificationContext'
import { usePostContext } from 'context/PostContext'
import useOnScreen from 'hooks/useOnScreen'
import {
  IEvent,
  IGroup,
  IParent,
  IPost,
  IProduct,
  IProject,
  IRequest,
} from 'interfaces/UniversalInterface'
import moment from 'moment'
import { nanoid } from 'nanoid'
import EventItem from 'pages/event/EventItem'
import GroupItem from 'pages/groups/GroupItem'
import Product from 'pages/products/Product'
import ProjectCard from 'pages/project/ProjectCard'
import RequestCard from 'pages/request/RequestCard'
import { useEffect, useRef, useState } from 'react'
import {
  AiFillStar,
  AiOutlineDelete,
  AiOutlineEdit,
  AiOutlineLink,
  AiOutlineStar,
} from 'react-icons/ai'
import { FaBookmark, FaRegBookmark } from 'react-icons/fa'
import { useMutation, useQuery } from 'react-query'
import { avatarPlaceholder } from 'state/Redux/constants'

const EmbeddedRequest = ({
  requestId,
  userData,
}: {
  requestId: string
  userData: IParent
}) => {
  const { isLoading, data, isFetched } = useQuery(
    `request-view-${requestId}`,
    () => fetchSellerById(requestId)
  )
  const requestData: IRequest = isFetched && !isLoading ? data.data.data : {}

  if (isLoading && !isFetched) {
    return <Spinner />
  }

  return (
    <div className="p-4">
      <RequestCard
        isLoading={!isFetched && isLoading}
        userData={userData}
        userId={userData._id.toString()}
        request={requestData}
      />
    </div>
  )
}

const EmbeddedProject = ({
  projectId,
  userData,
}: {
  projectId: string
  userData: IParent
}) => {
  const { isLoading, data, isFetched } = useQuery(`project-${projectId}`, () =>
    fetchProjectById(projectId)
  )
  const project: IProject = isFetched && !isLoading ? data.data.data : {}

  if (isLoading && !isFetched) {
    return <Spinner />
  }

  return (
    <div className="p-4">
      <ProjectCard userId={userData._id.toString()} project={project} />
    </div>
  )
}
const EmbeddedGroup = ({
  groupId,
  userData,
}: {
  groupId: string
  userData: IParent
}) => {
  const { isLoading, data, isFetched } = useQuery(
    `group-details-${groupId}`,
    () => fetchGroupById(groupId)
  )

  const group: IGroup = isFetched && !isLoading ? data?.data?.data : {}

  if (isLoading && !isFetched) {
    return <Spinner />
  }

  return (
    <div className="p-4">
      <GroupItem userId={userData._id.toString()} group={group} />
    </div>
  )
}

const EmbeddedEvent = ({
  eventId,
  userData,
}: {
  eventId: string
  userData: IParent
}) => {
  const { isLoading, data, isFetched } = useQuery(
    `group-details-${eventId}`,
    () => fetchSingleEvent(eventId)
  )

  const event: IEvent = isFetched && !isLoading ? data?.data?.data : {}

  if (isLoading && !isFetched) {
    return <Spinner />
  }

  return (
    <div className="p-4">
      <EventItem userId={userData._id.toString()} event={event} />
    </div>
  )
}

const EmbeddedProduct = ({
  productId,
  userData,
}: {
  productId: string
  userData: IParent
}) => {
  const { isLoading, data, isFetched } = useQuery(
    `product-details-${productId}`,
    () => fetchProductDetails(productId)
  )

  const product: IProduct = isFetched && !isLoading ? data?.data?.data : {}

  if (isLoading && !isFetched) {
    return <Spinner />
  }

  return (
    <div className="p-4">
      <Product userId={userData._id.toString()} product={product} />
    </div>
  )
}

const Post = ({
  post,
  userId,
  userData,
}: {
  post: IPost
  userId: string
  userData: IParent
}) => {
  const user = post?.user
  const postId: string = post?._id?.toString()

  const { mutate } = useMutation(() => viewPost(postId))

  const postRef = useRef(null)
  const isCardOnScreen = useOnScreen(postRef)

  const isViewed = post?.viewedBy?.includes(userId)

  const iAmOwnerOfThisPost = user?._id?.toString() === userId
  const { setNotification } = useNotifications()

  const saveMutations = useMutation(saveUnsavePost)
  const featureMutations = useMutation(featurePost)

  const { setPosts, posts } = usePostContext()

  const deleteMutations = useMutation(deletePost, {
    onSuccess: (data) => {
      setPosts([...posts.filter((post) => post._id.toString() !== postId)])
      const { message } = data.data

      setNotification({
        title: message,
        show: true,
      })
    },
  })

  useEffect(() => {
    if (isCardOnScreen && !isViewed && !iAmOwnerOfThisPost) {
      setTimeout(() => {
        mutate()
      }, 300)
    }
  }, [isCardOnScreen, isViewed])

  const isSaved = userData?.savedPosts?.includes(postId?.toString())
  const isFeatured = userData?.featuredPosts?.includes(postId?.toString())

  const [saved, setSaved] = useState(isSaved)
  const [featured, setFeatured] = useState(isFeatured)

  const commonDropdownList = [
    {
      id: nanoid(),
      name: saved ? 'Unsave' : 'Save for later',
      onClick: () => {
        if (saved) {
          // @ts-ignore
          saveMutations.mutate({
            action: 'unsave',
            postId: postId.toString(),
          })
          setSaved(false)
          setNotification({
            buttonText: 'My items',
            buttonUrl: links.myItems(),
            show: true,
            title: 'Post unsaved.',
          })
        } else {
          // @ts-ignore
          saveMutations.mutate({ action: 'save', postId: postId?.toString() })
          setSaved(true)
          setNotification({
            buttonText: 'My items',
            buttonUrl: links.myItems(),
            show: true,
            title: 'Post saved.',
          })
        }
      },
      Icon: saved ? FaBookmark : FaRegBookmark,
    },
    {
      Icon: AiOutlineLink,
      id: nanoid(),
      name: 'Copy link to post',
      onClick: () => {
        navigator.clipboard.writeText(
          window.origin + links.postById(post?.postUrl)
        )
      },
    },
  ]

  const dropdownList = [
    ...commonDropdownList,
    {
      id: '3',
      name: `Unfollow ${user?.fullName || user?.firstName}`,
      onClick: () => {},
    },
  ]

  // Show this if the post is mine
  const myDropdownList = [
    ...commonDropdownList,
    {
      id: '1',
      name: 'Feature on top of profile',
      onClick: () => {
        if (featured) {
          // @ts-ignore
          featureMutations.mutate({
            action: 'unfeature',
            postId: postId.toString(),
          })
          setFeatured(false)
          setNotification({
            show: true,
            title: 'Post removed from featured list.',
          })
        } else {
          // @ts-ignore
          featureMutations.mutate({
            action: 'feature',
            postId: postId.toString(),
          })
          setNotification({
            show: true,
            title: 'Post added to featured list.',
          })
          setFeatured(true)
        }
      },
      Icon: featured ? AiFillStar : AiOutlineStar,
    },
    {
      id: '4',
      name: `Edit post`,
      Icon: AiOutlineEdit,
      onClick: () => {},
    },
    {
      id: '5',
      name: `Delete post`,
      Icon: AiOutlineDelete,
      onClick: () => {
        deleteMutations.mutate(postId)
      },
    },
  ]

  return (
    <div
      ref={postRef}
      className="rounded-lg dark:bg-gray-800 border border-gray-200 bg-white dark:border-gray-700 "
    >
      <div className="flex w-full items-center justify-between px-6">
        <div className="flex  py-4">
          <div className="mr-4 flex-shrink-0">
            <img
              src={
                user?.profilePicture ? user?.profilePicture : avatarPlaceholder
              }
              alt="13RMS"
              className="sm:h-14 h-12 w-12 sm:w-14  border-gradient border-transparent border-2 rounded-full"
            />
          </div>
          <div className="flex flex-col">
            <a
              href={links.getProfileById(
                user?.profileUrl,
                user?.other?.template,
                'public'
              )}
            >
              <h4 className="text-base hover:underline  dark:text-white font-bold">
                {user?.fullName || '--'}
              </h4>
            </a>
            <span className="text-gray-500 text-xs dark:text-gray-500">
              {user?.followers?.length || 0} followers{' '}
              <span className="text-xs dark:text-gray-500 text-gray-500 font-medium">
                • {moment(post?.postedOn).fromNow()}
              </span>
            </span>
          </div>
        </div>
        <div className="relative">
          <Dropdown list={iAmOwnerOfThisPost ? myDropdownList : dropdownList} />
        </div>
      </div>
      {post?.text && (
        <div className="px-6 pb-4">
          <p className="text-gray-700 dark:text-gray-400 text-sm break-words">
            {post?.text}
          </p>
        </div>
      )}
      {post.postType === 'request' && (
        <EmbeddedRequest userData={userData} requestId={post?.customInId} />
      )}
      {post.postType === 'project' && (
        <EmbeddedProject userData={userData} projectId={post?.customInId} />
      )}
      {post.postType === 'group' && (
        <EmbeddedGroup userData={userData} groupId={post?.customInId} />
      )}
      {post.postType === 'event' && (
        <EmbeddedEvent userData={userData} eventId={post?.customInId} />
      )}
      {post.postType === 'product' && (
        <EmbeddedProduct userData={userData} productId={post?.customInId} />
      )}
      {post?.links?.length > 0 &&
        (post.links[0].type === 'image' ? (
          <img className="w-full" src={post.links[0].url} alt="" />
        ) : (
          <video
            controls
            className="w-full"
            controlsList="nodownload"
            src={post.links[0].url}
          />
        ))}

      {/* <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 dark:bg-gray-700 dark:text-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #photography
        </span>
        <span className="inline-block bg-gray-200 dark:bg-gray-700 dark:text-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #travel
        </span>
        <span className="inline-block bg-gray-200 dark:bg-gray-700 dark:text-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #winter
        </span>
      </div> */}

      <PostBottom />
    </div>
  )
}

export default Post
