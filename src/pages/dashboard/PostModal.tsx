import { addPost, editPost } from 'apis/mutations'
import Button from 'components/atoms/Button'
import FormInput from 'components/atoms/FormInput'
import Modal from 'components/atoms/Modal'
import { links } from 'constants/Links'
import { useNotifications } from 'context/NotificationContext'
import { usePostContext } from 'context/PostContext'
import { Form, Formik } from 'formik'
import { IPost } from 'interfaces/UniversalInterface'
import { isEmpty } from 'lodash'
import { useRef } from 'react'
import { BsCameraVideo } from 'react-icons/bs'
import { HiOutlinePhotograph } from 'react-icons/hi'
import { useMutation } from 'react-query'

const PostModal = ({
  open,
  setOpen,
  setShowOtherModals,
  postingIn = 'general',
  customInId,
  post,
}: {
  open: boolean
  post?: IPost
  postingIn?: IPost['postedIn']
  customInId?: string
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  setShowOtherModals?: React.Dispatch<React.SetStateAction<string>>
}) => {
  const { setNotification } = useNotifications()
  const { setPosts, posts } = usePostContext()

  const editMode = !isEmpty(post)

  const { mutate, isLoading, isError, error } = useMutation(
    editMode ? editPost : addPost,
    {
      onSuccess: (data: any) => {
        const post = data.data.data
        const message = data.data.message
        if (!editMode) {
          posts.unshift(post)
          setPosts([...posts])
        } else {
          let postsCopy = [...posts]
          const index = postsCopy.findIndex((d) => d._id === post._id)
          if (index !== -1) {
            postsCopy[index] = post
            setPosts([...postsCopy])
          }
        }
        setOpen(false)
        setNotification({
          show: true,
          title: message,
          buttonText: 'View',
          buttonUrl: links.postById(post.postUrl),
        })
      },
    }
  )

  const initialValues = {
    text: post?.text || '',
  }

  const formRef = useRef()

  const onSubmit = (values: { text: string }) => {
    let postData = {}
    if (editMode) {
      postData = {
        ...post,
        text: values.text,
        postedIn: postingIn,
        postType: 'normal',
        customInId: postingIn !== 'general' ? customInId : null,
      }
    } else {
      postData = {
        text: values.text,
        postedIn: postingIn,
        postType: 'normal',
        customInId: postingIn !== 'general' ? customInId : null,
      }
    }
    mutate({
      postData: postData,
    })
  }

  return (
    <Modal
      setOpen={setOpen}
      header={`${editMode ? 'Edit' : 'Create'} a post`}
      open={open}
    >
      <div className=" min-w-132 min-h-56 max-h-132 overflow-y-auto">
        <Formik
          innerRef={formRef}
          initialValues={initialValues}
          onSubmit={onSubmit}
        >
          <Form>
            <FormInput
              gridClass="hideBorders"
              hideBorders
              textClass="text-sm text-gray-700 dark:text-gray-100 sm:text-lg"
              placeholder="What do you want to talk about?"
              rows={10}
              name="text"
              id="text"
              textarea
            />
            <div className="mt-5 m-1 sm:mt-4 flex justify-between  items-center">
              <div className="flex items-center gap-x-4">
                <Button
                  gradient
                  invert
                  // className="dark:border-gray-600"
                  Icon={HiOutlinePhotograph}
                  label="Photo"
                  onClick={() => {
                    setOpen(false)
                    setShowOtherModals('photo')
                  }}
                />
                <Button
                  gradient
                  Icon={BsCameraVideo}
                  // className="dark:border-gray-600"
                  bgColor="blue"
                  invert
                  onClick={() => {
                    setOpen(false)
                    return setShowOtherModals('video')
                  }}
                  label="Video"
                />
              </div>
              <Button
                gradient
                loading={isLoading}
                // @ts-ignore
                disabled={formRef?.current?.values.text.length <= 0}
                type="submit"
                label="Post"
                size="lg"
              />
            </div>
            {isError && <p className="text-red-500 text-sm">{error}</p>}
          </Form>
        </Formik>
      </div>
    </Modal>
  )
}

export default PostModal
