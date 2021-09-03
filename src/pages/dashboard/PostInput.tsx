import Button from 'components/atoms/Button'
import Card from 'components/atoms/Card'
import NormalFormInput from 'components/atoms/NormalFormInput'
import { useState } from 'react'
import { BiCalendarEvent } from 'react-icons/bi'
import { BsCameraVideo } from 'react-icons/bs'
import { HiOutlinePhotograph } from 'react-icons/hi'
import { RiArticleLine } from 'react-icons/ri'

const PostInput = ({
  setPosts,
  posts,
  profilePicture,
}: {
  posts: any
  setPosts: any
  profilePicture?: string
}) => {
  const [postText, setPostText] = useState('')

  const onCreatePost = () => {
    if (postText.trim().length > 0) {
      const post = {
        user: {
          firstName: 'Mohammad',
          lastName: 'Dehgamwala',
          achievement: 'Founder and CEO of XYZ',
        },

        post: {
          type: 'text',
          content: postText,
          postedAt: new Date(),
          likeCount: 4,
          commentCount: 3,
        },
      }
      setPostText('')
      setPosts([...posts, post])
    }
  }
  return (
    <Card
      content={
        <div className="flex flex-col space-y-8">
          <div className="">
            <div className=" flex items-center justify-between">
              <div className="flex w-full">
                <img
                  src={
                    profilePicture
                      ? profilePicture
                      : 'https://robohash.org/honey?set=set1'
                  }
                  alt="13RMS"
                  className="h-14 w-14 border-gradient border-transparent border-2 rounded-full"
                />
                <NormalFormInput
                  value=""
                  className="rounded-full h-12 mx-4 px-4 dark:text-white"
                  placeholder="Start a post"
                  onChange={() => {}}
                />
              </div>
              <div className="text-white ">
                <Button
                  rounded="rounded-full"
                  onClick={onCreatePost}
                  label={'Send'}
                  gradient
                />
              </div>
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
  )
}

export default PostInput
