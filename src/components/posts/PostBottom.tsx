import { AiFillLike, AiOutlineLike } from 'react-icons/ai'
import { IconType } from 'react-icons/lib'
import { FaRegCommentDots } from 'react-icons/fa'
import { AiOutlineShareAlt } from 'react-icons/ai'
import { FiSend } from 'react-icons/fi'
import { useState } from 'react'
import { IPost } from 'interfaces/UniversalInterface'
import { useMutation } from 'react-query'
import { postAction } from 'apis/mutations'

const Button = ({
  Icon,
  label,
  onClick,
}: {
  Icon: IconType
  label: string
  onClick?: () => void
}) => {
  return (
    <button
      onClick={onClick}
      className="flex m-2 hover:bg-gray-200 text-sm text-gray-700 dark:text-gray-400 items-center justify-center py-2 rounded-lg transition-all px-3 duration-300 dark:hover:bg-gray-700"
    >
      <Icon className="mr-2" />
      {label}
    </button>
  )
}

const PostBottom = ({ post, userId }: { post: IPost; userId: string }) => {
  const [isLiked, setIsLiked] = useState(post?.likes?.includes(userId))
  const postLikeMutation = useMutation(postAction)
  const onLikeDislike = () => {
    setIsLiked(!isLiked)
    if (isLiked) {
      postLikeMutation.mutate({
        postUrl: post.postUrl,
        action: 'dislike',
      })
    } else {
      postLikeMutation.mutate({
        postUrl: post.postUrl,
        action: 'like',
      })
    }
  }

  return (
    <div className="grid grid-cols-4 px-2 mb-2">
      <Button
        onClick={onLikeDislike}
        Icon={isLiked ? AiFillLike : AiOutlineLike}
        label={isLiked ? 'Dislike' : 'Like'}
      />

      <Button Icon={FaRegCommentDots} label="Comment" />
      <Button Icon={AiOutlineShareAlt} label="Share" />
      <Button Icon={FiSend} label="Send" />
    </div>
  )
}

export default PostBottom
