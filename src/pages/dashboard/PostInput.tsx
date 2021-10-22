import Button from 'components/atoms/Button'
import Card from 'components/atoms/Card'
import PostModal from 'pages/dashboard/PostModal'
import { useState } from 'react'
import { BiCalendarEvent } from 'react-icons/bi'
import { BsCameraVideo } from 'react-icons/bs'
import { HiOutlinePhotograph } from 'react-icons/hi'
import { RiArticleLine } from 'react-icons/ri'
import { avatarPlaceholder } from 'state/Redux/constants'

const PostInput = ({
  profilePicture,
}: {
  posts: any
  setPosts: any
  profilePicture?: string
}) => {
  const [showPostModal, setShowPostModal] = useState(false)

  return (
    <>
      <PostModal open={showPostModal} setOpen={setShowPostModal} />
      <Card
        content={
          <div className="flex flex-col space-y-8">
            <div className="flex w-full">
              <img
                src={profilePicture ? profilePicture : avatarPlaceholder}
                alt="13RMS"
                className="sm:h-14 h-12 w-12 sm:w-14  border-gradient border-transparent border-2 rounded-full"
              />
              <div
                onClick={() => setShowPostModal(true)}
                className="cursor-pointer sm:h-14 h-12  transition-all duration-300 hover:bg-gray-200 dark:hover:bg-gray-700 ml-4 w-full rounded-full bg-white flex items-center text-gray-300 dark:text-gray-400 justify-start px-4 text-left dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
              >
                Start a post
              </div>
            </div>
            <div className="flex items-center justify-between">
              <Button
                gradient
                invert
                // className="dark:border-gray-600"
                Icon={HiOutlinePhotograph}
                label="Photo"
              />
              <Button
                gradient
                Icon={BsCameraVideo}
                // className="dark:border-gray-600"
                bgColor="blue"
                invert
                label="Video"
              />
              <Button
                gradient
                Icon={BiCalendarEvent}
                // className="dark:border-gray-600"
                invert
                bgColor="blue"
                label="Event"
              />
              <Button
                gradient
                Icon={RiArticleLine}
                invert
                // className="dark:border-gray-600"
                bgColor="blue"
                label="Write articles"
              />
            </div>
          </div>
        }
      />
    </>
  )
}

export default PostInput
