import { addPost } from 'apis/mutations'
import Button from 'components/atoms/Button'
import FormInput from 'components/atoms/FormInput'
import Modal from 'components/atoms/Modal'
import { usePostContext } from 'context/PostContext'
import { Form, Formik } from 'formik'
import { useEffect, useRef } from 'react'
import { useMutation } from 'react-query'

const PostModal = ({
  open,
  setOpen,
}: {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}) => {
  const { mutate, isLoading, isError, isSuccess, error } = useMutation(
    addPost,
    {
      onSuccess: () => {
        setNewPostAdded(true)
      },
    }
  )

  const onEmojiClick = (event: any, emojiObject: any): void => {
    console.log('emojiObject', emojiObject)
  }

  const { setNewPostAdded } = usePostContext()

  useEffect(() => {
    if (isSuccess) {
      setOpen(false)
    }
  }, [isSuccess])

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
              textClass="text-sm sm:text-lg"
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
