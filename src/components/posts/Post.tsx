import zIndex from '@material-ui/core/styles/zIndex'
import Dropdown from 'components/Dropdown/Dropdown'
import { IPost } from 'interfaces/UniversalInterface'
import moment from 'moment'
import { avatarPlaceholder } from 'state/Redux/constants'

const Post = ({ post, postRef = null }: { post: IPost; postRef?: any }) => {
  const user = post.user

  const dropdownList = [
    {
      id: '1',
      name: 'Save for later',
      onClick: () => {},
    },
    {
      id: '2',
      name: 'Copy link to post',
      onClick: () => {},
    },
    {
      id: '3',
      name: `Unfollow ${user.fullName}`,
      onClick: () => {},
    },
  ]

  return (
    <div
      ref={postRef}
      className="rounded-lg dark:bg-gray-800 overflow-hidden  border border-gray-200 dark:border-gray-700 shadow-lg"
    >
      <div className="flex w-full items-center justify-between px-6">
        <div className="flex  py-4">
          <div className="mr-4 flex-shrink-0">
            <img
              src={
                user.profilePicture ? user.profilePicture : avatarPlaceholder
              }
              alt="13RMS"
              className="sm:h-14 h-12 w-12 sm:w-14  border-gradient border-transparent border-2 rounded-full"
            />
          </div>
          <div className="flex flex-col">
            <h4 className="text-base dark:text-white font-bold">
              {user?.fullName || 'Lorem Ipsum'}
            </h4>
            <span className="text-xs dark:text-gray-500">
              {user?.followers?.length || 0} followers
            </span>
            <span className="text-xs dark:text-gray-500">
              {moment(post.postedOn).fromNow()}
            </span>
          </div>
        </div>
        <div className="relative">
          <Dropdown list={dropdownList} />
        </div>
      </div>
      <div className="px-6 pb-4">
        <p className="text-gray-700 dark:text-gray-400 text-sm">{post.text}</p>
      </div>
      {post.links && post.links.length > 0 && (
        <img className="w-full" src={post.links[0]} alt="Mountain" />
      )}

      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 dark:bg-gray-700 dark:text-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #photography
        </span>
        <span className="inline-block bg-gray-200 dark:bg-gray-700 dark:text-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #travel
        </span>
        <span className="inline-block bg-gray-200 dark:bg-gray-700 dark:text-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #winter
        </span>
      </div>
    </div>
  )
}

export default Post
