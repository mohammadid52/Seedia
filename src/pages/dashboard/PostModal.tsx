import { addPost } from 'apis/mutations'
import Button from 'components/atoms/Button'
import FormInput from 'components/atoms/FormInput'
import Modal from 'components/atoms/Modal'
import { links } from 'constants/Links'
import { useNotifications } from 'context/NotificationContext'
import { usePostContext } from 'context/PostContext'
import { Form, Formik } from 'formik'
import { useRef } from 'react'
import { useMutation } from 'react-query'

const PostModal = ({
  open,
  setOpen,
}: {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}) => {
  const { setNotification } = useNotifications()
  const { setNewPostAdded } = usePostContext()
  const { mutate, isLoading, isError, error } = useMutation(addPost, {
    onSuccess: (data) => {
      const postUrl = data.data.data
      setNewPostAdded(true)
      setOpen(false)
      setNotification({
        show: true,
        title: 'New post added.',
        buttonText: 'View',
        buttonUrl: links.postById(postUrl),
      })
    },
  })

  const initialValues = {
    text: '',
  }
  const formRef = useRef()

  const onSubmit = (values: { text: string }) => {
    const modifiedData = {
      postData: { text: values.text },
    }
    mutate(modifiedData)
  }

  return (
    <Modal setOpen={setOpen} header="Create a post" open={open}>
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
            <div className="mt-5 m-1 sm:mt-4 flex justify-end  items-center">
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
