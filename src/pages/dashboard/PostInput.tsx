import Button from 'components/atoms/Button'
import Card from 'components/atoms/Card'
import CreateEvent from 'components/event/CreateEvent'
import { IPost } from 'interfaces/UniversalInterface'
import PostModal from 'pages/dashboard/PostModal'
import PostPhotoModal from 'pages/dashboard/PostPhotoModal'
import React, { useState } from 'react'
import { BiCalendarEvent } from 'react-icons/bi'
import { BsCameraVideo } from 'react-icons/bs'
import { HiOutlinePhotograph } from 'react-icons/hi'
import { RiArticleLine } from 'react-icons/ri'
import { avatarPlaceholder } from 'state/Redux/constants'

const PostInput = ({
  profilePicture,
  customButtons = null,
  placeholder = 'Start a post',
  disabled,
  postingIn = 'general',
  customInId,
  fullName = '',
}: {
  profilePicture?: string
  customButtons?: React.ReactNode
  placeholder?: string
  disabled?: boolean
  postingIn?: IPost['postedIn']
  fullName: string
  customInId?: string
}) => {
  const [showPostModal, setShowPostModal] = useState(false)
  const [showOtherModals, setShowOtherModals] = useState('init')
  const [showEventModal, setShowEventModal] = useState(false)

  const defaultButtons = (
    <>
      <Button
        gradient
        invert
        // className="dark:border-gray-600"
        Icon={HiOutlinePhotograph}
        label="Photo"
        onClick={() => setShowOtherModals('photo')}
      />
      <Button
        gradient
        Icon={BsCameraVideo}
        // className="dark:border-gray-600"
        bgColor="blue"
        invert
        onClick={() => setShowOtherModals('video')}
        label="Video"
      />
      <Button
        gradient
        Icon={BiCalendarEvent}
        // className="dark:border-gray-600"
        invert
        bgColor="blue"
        onClick={() => setShowEventModal(true)}
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
    </>
  )

  return (
    <>
      {!disabled && (
        <PostModal
          customInId={customInId}
          postingIn={postingIn}
          setShowOtherModals={setShowOtherModals}
          open={showPostModal}
          setOpen={setShowPostModal}
        />
      )}
      {(showOtherModals === 'photo' || showOtherModals === 'video') && (
        <PostPhotoModal
          isPhoto={showOtherModals === 'photo'}
          open
          setOpen={() => setShowOtherModals('init')}
        />
      )}
      <CreateEvent
        fullName={fullName}
        open={showEventModal}
        setOpen={setShowEventModal}
      />
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
                className="cursor-pointer sm:h-14 h-12  transition-all duration-300 hover:bg-gray-200 dark:hover:bg-gray-700 ml-4 w-full rounded-full bg-white flex items-center text-gray-500 dark:text-gray-400 justify-start px-4 text-left dark:bg-gray-800 border border-gray-400 dark:border-gray-700"
              >
                {placeholder}
              </div>
            </div>
            <div className="flex items-center justify-between">
              {customButtons || defaultButtons}
            </div>
          </div>
        }
      />
    </>
  )
}

export default PostInput
