import { addNewSection, uploadMediaToServer } from 'apis/mutations'
import Button from 'components/atoms/Button'
import FormInput from 'components/atoms/FormInput'
import Label from 'components/atoms/Label'
import Modal from 'components/atoms/Modal'
import { Form, Formik } from 'formik'
import BannerImage from 'pages/store/BannerImage'
import React, { useEffect, useRef, useState } from 'react'
import { useMutation } from 'react-query'
import * as Yup from 'yup'

const NewSectionModal = ({
  open,
  setOpen,
}: {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}) => {
  const formRef = useRef()

  const initialValues = {
    title: '',
    content: '',
  }

  const {
    isLoading: addingSection,
    mutate,
    isSuccess,
  } = useMutation(addNewSection)

  useEffect(() => {
    if (isSuccess) {
      setOpen(false)
    }
  }, [isSuccess])

  const upload = useMutation(uploadMediaToServer, {
    onSuccess: (a, b) => {
      // @ts-ignore
      const values = formRef?.current?.values
      if (formRef?.current && values) {
        const finalInput = {
          image: a.data.data.location,
          ...values,
        }

        mutate({ section: finalInput })
      }
    },
  })

  const onSubmit = (e: any) => {
    const fd = new FormData()
    fd.append('image', media)

    upload.mutate(fd)
  }

  const [media, setMedia] = useState(null)

  const validationSchema = Yup.object({
    title: Yup.string().required('Section title is required').min(3).max(150),
    content: Yup.string()
      // .test(regex)
      .required('Section content is required')
      .min(5)
      .max(150),
  })

  const onImageSelect = (e: any, setFieldValue: any) => {
    const img = e.target.files[0]

    setFieldValue(img)
  }

  return (
    <Modal header="Add Section" open={open} setOpen={setOpen}>
      <div>
        <Formik
          initialValues={initialValues}
          innerRef={formRef}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          <Form className="my-4 flex flex-col gap-y-12">
            <div className="grid grid-cols-1 gap-y-12">
              <div>
                <Label text="Image" />
                <BannerImage
                  media={media}
                  setMedia={setMedia}
                  onImageSelect={onImageSelect}
                />
              </div>
              <div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
                  <div>
                    <Label text="Title" />
                    <FormInput
                      name="title"
                      placeholder="The main header of section"
                    />
                  </div>
                  <div>
                    <Label text="Content" />
                    <FormInput
                      name="content"
                      placeholder="Give a little description about the section"
                    />
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-end">
                <Button
                  type="submit"
                  rounded="rounded-lg"
                  loading={addingSection || upload.isLoading}
                  gradient
                  size="lg"
                  label="Add section"
                />
              </div>
            </div>
          </Form>
        </Formik>
      </div>
    </Modal>
  )
}

export default NewSectionModal
