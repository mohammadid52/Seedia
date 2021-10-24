import { AiOutlineLike } from 'react-icons/ai'
import { IconType } from 'react-icons/lib'
import { FaRegCommentDots } from 'react-icons/fa'
import { AiOutlineShareAlt } from 'react-icons/ai'
import { FiSend } from 'react-icons/fi'

const Button = ({ Icon, label }: { Icon: IconType; label: string }) => {
  return (
    <button className="flex m-2 hover:bg-gray-200 text-sm text-gray-700 dark:text-gray-400 items-center justify-center py-2 rounded-lg transition-all px-3 duration-300 dark:hover:bg-gray-700">
      <Icon className="mr-2" />
      {label}
    </button>
  )
}

const PostBottom = () => {
  return (
    <div className="grid grid-cols-4 px-2 mb-2">
      <Button Icon={AiOutlineLike} label="Like" />
      <Button Icon={FaRegCommentDots} label="Comment" />
      <Button Icon={AiOutlineShareAlt} label="Share" />
      <Button Icon={FiSend} label="Send" />
    </div>
  )
}

export default PostBottom
