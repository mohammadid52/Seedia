import { addPost, uploadMediaToServer } from 'apis/mutations'
import Button from 'components/atoms/Button'
import Modal from 'components/atoms/Modal'
import NormalFormInput from 'components/atoms/NormalFormInput'
import { links } from 'constants/Links'
import { useNotifications } from 'context/NotificationContext'
import { usePostContext } from 'context/PostContext'
import { IPost } from 'interfaces/UniversalInterface'
import { nanoid } from 'nanoid'
import React, { useRef, useState } from 'react'
import { useMutation } from 'react-query'

const PostPhotoModal = ({
  open,
  setOpen,
  isPhoto = true,
  postingIn = 'general',
  customInId,
}: {
  open: boolean
  postingIn?: IPost['postedIn']
  customInId?: string
  isPhoto: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}) => {
  const { setNotification } = useNotifications()

  const { setPosts, posts } = usePostContext()

  const { mutate, isLoading, isError, error } = useMutation(addPost, {
    onSuccess: (data) => {
      const post = data.data.data
      posts.unshift(post)
      setPosts([...posts])

      setOpen(false)
      setNotification({
        show: true,
        title: 'New post added.',
        buttonText: 'View',
        buttonUrl: links.postById(post.postUrl),
      })
    },
  })

  const [media, setMedia] = useState(null)

  const upload = useMutation(uploadMediaToServer, {
    onSuccess: (a) => {
      const modifiedData = {
        postData: {
          postType: 'withPhoto',
          text: altText || '',
          postedIn: postingIn,
          customInId: customInId,
          links: [
            {
              id: nanoid(12),
              url: a?.data?.data?.location,
              type: isPhoto ? 'image' : 'video',
            },
          ],
        },
      }
      mutate(modifiedData)
    },
  })

  const postImageRef: any = useRef()

  const onImageSelect = (e: any) => {
    const img = e.target.files[0]
    setMedia(img)
  }

  const showFileExplorer = () => postImageRef?.current?.click()

  const onCancel = () => {
    setMedia(null)
    setOpen(false)
  }

  const onSubmit = (e: any) => {
    e.preventDefault()
    const fd = new FormData()
    fd.append('image', media)

    upload.mutate(fd)
  }

  const [onAltText, setOnAltText] = useState(false)
  const [altText, setAltText] = useState('')

  const onAltTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setAltText(value)
  }

  return (
    <Modal
      disablePadding
      setOpen={setOpen}
      header={`Edit your ${isPhoto ? 'photo' : 'video'}`}
      open={open}
    >
      <div className=" min-w-132 max-w-132 min-h-56 max-h-132 flex items-center justify-center overflow-y-auto">
        {media ? (
          <div className="">
            {onAltText ? (
              <div className="px-12">
                <h4 className="mb-1 text-gray-600 dark:text-gray-500">
                  Alt text
                </h4>
                <p className="dark:text-gray-700 text-gray-400 mb-2">
                  Alt text describes images for people who have trouble seeing
                  them. If you don’t add alt text, it may be automatically
                  generated after you post. You can edit it anytime.
                </p>
                <NormalFormInput
                  value={altText}
                  onChange={onAltTextChange}
                  textarea
                  rows={6}
                />
                <div className="mt-5 gap-x-4 px-4 m-1 sm:mt-4 flex justify-end  items-center">
                  <Button
                    gradient
                    rounded="rounded-full"
                    onClick={() => {
                      setAltText('')
                      setOnAltText(false)
                    }}
                    invert
                    label="Cancel"
                    size="sm"
                  />
                  <Button
                    gradient
                    rounded="rounded-full"
                    label="Save"
                    onClick={() => {
                      setOnAltText(false)
                    }}
                    size="sm"
                  />
                </div>
              </div>
            ) : (
              <div>
                {isPhoto ? (
                  <img
                    className="w-full"
                    src={URL.createObjectURL(media)}
                    alt=""
                  />
                ) : (
                  <video
                    controls
                    className="w-full"
                    controlsList="nodownload"
                    src={URL.createObjectURL(media)}
                  />
                )}
              </div>
            )}
            <div className="absolute bottom-5 left-5 pt-4 mb-2 pl-4">
              <Button
                onClick={() => setOnAltText(!onAltText)}
                invert={!onAltText}
                label="Alt text"
              />
            </div>
          </div>
        ) : (
          <Button
            onClick={showFileExplorer}
            label={`Select ${isPhoto ? 'image' : 'video'} to share`}
            gradient
            invert
            size="lg"
          />
        )}

        {/* HIDDEN IMAGE INPUT */}
        <input
          // @ts-ignore
          ref={postImageRef}
          className="hidden"
          type="file"
          onChange={onImageSelect}
          accept={isPhoto ? 'image/*' : 'video/*'}
        />
      </div>
      <div className="mt-5 border-t border-gray-200 dark:border-gray-700 pt-4 gap-x-4 px-4 m-1 sm:mt-4 flex justify-end  items-center">
        <Button
          gradient
          rounded="rounded-full"
          onClick={onCancel}
          invert
          label="Cancel"
          size="lg"
        />
        <Button
          gradient
          rounded="rounded-full"
          loading={isLoading || upload.isLoading}
          label="Done"
          onClick={onSubmit}
          size="lg"
        />
      </div>
      {isError && <p className="text-red-500 text-sm">{error}</p>}
    </Modal>
  )
}

export default PostPhotoModal
