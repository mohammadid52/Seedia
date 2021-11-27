import {
  saveUnsavePost,
  viewPost,
  featurePost,
  deletePost,
} from 'apis/mutations'
import Dropdown from 'components/Dropdown/Dropdown'
import PostBottom from 'components/posts/PostBottom'
import { links } from 'constants/Links'
import useOnScreen from 'hooks/useOnScreen'
import { IPost, IParent } from 'interfaces/UniversalInterface'
import moment from 'moment'
import { useEffect, useState, useRef } from 'react'
import { FaRegBookmark, FaBookmark } from 'react-icons/fa'
import { useMutation } from 'react-query'
import { nanoid } from 'nanoid'
import { avatarPlaceholder } from 'state/Redux/constants'
import {
  AiOutlineStar,
  AiFillStar,
  AiOutlineLink,
  AiOutlineEdit,
  AiOutlineDelete,
} from 'react-icons/ai'
import { useNotifications } from 'context/NotificationContext'

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
  const deleteMutations = useMutation(deletePost)

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
      className="rounded-lg overflow-x-hidden  dark:bg-gray-800 border border-gray-200 bg-white dark:border-gray-700 "
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
