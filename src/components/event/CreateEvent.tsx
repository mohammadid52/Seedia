import { createEvent, uploadMultipleImages } from 'apis/mutations'
import placeholder from 'assets/svg/placeholder.png'
import Error from 'components/alerts/Error'
import Button from 'components/atoms/Button'
import FormInput from 'components/atoms/FormInput'
import FormSelector from 'components/atoms/FormSelector'
import Modal from 'components/atoms/Modal'
import { links } from 'constants/Links'
import { useNotifications } from 'context/NotificationContext'
import { Form, Formik } from 'formik'
import { IEvent } from 'interfaces/UniversalInterface'
import { isEmpty, map } from 'lodash'
import React, { useEffect, useRef, useState } from 'react'
import { AiOutlineEdit } from 'react-icons/ai'
import { useMutation } from 'react-query'
import { avatarPlaceholder } from 'state/Redux/constants'
import { timezone } from 'values/values'
import * as Yup from 'yup'

const CreateEvent = ({
  open,
  setOpen,
  eventData,
}: {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  eventData?: IEvent
}) => {
  const validationSchema = Yup.object({
    eventName: Yup.string().required('Event Name is required').min(10).max(150),
    eventDescription: Yup.string()
      .required('Event Description is required')
      .min(10)
      .max(600),

    // startTime
  })

  // @ts-ignore
  const initialValues: IEvent = {
    eventName: eventData?.eventName || '',
    eventDescription: eventData?.eventDescription || '',
    startDate: eventData?.startDate || new Date(),
    endDate: eventData?.endDate || new Date(),
    startTime: eventData?.startTime || '',
    endTime: eventData?.endTime || '',
    timezone: eventData?.timezone || '',
  }

  const formRef = useRef()
  const { setNotification } = useNotifications()

  const { mutate, isLoading, isError, error } = useMutation(createEvent, {
    onSuccess: (data) => {
      // console.log(data)
      const message = data.data.message
      const eventId = data.data.data
      setNotification({
        show: true,
        title: message,
        buttonText: 'View',
        buttonUrl: links.viewEvent(eventId),
      })
    },
  })

  const [values, setValues] = useState(null)

  const upload = useMutation(uploadMultipleImages, {
    onSuccess: (a, b) => {
      if (values) {
        if (a.data.data && a.data.data.length) {
          const finalImageList: any[] = map(a.data.data, (img) => img)

          mutate({
            ...values,
            coverPhoto: finalImageList.find(
              (img) => img.originalname === coverPhoto.name
            )?.location,

            profilePhoto: finalImageList.find(
              (img) => img.originalname === profilePhoto.name
            )?.location,
          })
        } else {
          mutate({
            ...values,
          })
        }
        setOpen(false)
        setCoverPhoto(null)
        setProfilePhoto(null)
      }
    },
  })

  const uploadFunction = () => {
    const fd = new FormData()

    fd.append('images', profilePhoto)
    fd.append('images', coverPhoto)

    setTimeout(() => {
      upload.mutate(fd)
    }, 500)
  }

  const onSubmit = async (values: any) => {
    setValues({ ...values })
    uploadFunction()
  }

  const editMode = !isEmpty(eventData)

  useEffect(() => {
    if (editMode) {
      setCoverPhoto(eventData.coverPicture)
      setProfilePhoto(eventData.profilePicture)
      setSelectedTimeZone(eventData?.timezone || timezone[0].text)
    }
  }, [editMode])

  const profileImageSelectorRef = useRef()

  const showFileExplorerForProfile = () =>
    //@ts-ignore
    profileImageSelectorRef?.current?.click()

  const coverImageSelectorRef = useRef()

  const showFileExplorerForCover = () =>
    //@ts-ignore
    coverImageSelectorRef?.current?.click()

  const [profilePhoto, setProfilePhoto] = useState<any>()

  const [coverPhoto, setCoverPhoto] = useState<any>()

  const [selectedTimeZone, setSelectedTimeZone] = useState(timezone[0].text)

  return (
    <Modal disablePadding setOpen={setOpen} header="Create event" open={open}>
      <div className=" min-w-200 pb-4  max-w-200 min-h-164 max-h-164 overflow-y-auto">
        <div className="px-1">
          {/* HIDDEN IMAGE INPUT */}
          <input
            // @ts-ignore
            ref={coverImageSelectorRef}
            className="hidden"
            type="file"
            onChange={(e) => setCoverPhoto(e.target.files[0])}
            accept="image/x-png,image/jpeg"
          />
          {/* HIDDEN IMAGE INPUT */}
          <input
            // @ts-ignore
            ref={profileImageSelectorRef}
            className="hidden"
            type="file"
            onChange={(e) => setProfilePhoto(e.target.files[0])}
            accept="image/x-png,image/jpeg"
          />

          <Formik
            initialValues={initialValues}
            enableReinitialize={editMode}
            innerRef={formRef}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            <Form className="space-y-6 ">
              <div className=" overflow-hidden  bg-white dark:bg-gray-900">
                <div className="relative  group">
                  <div className="absolute top-0 right-0 p-4">
                    <AiOutlineEdit className="bg-gray-100   transition-all hover:bg-gray-300 duration-300 rounded-full p-2 text-gray-700 h-8 w-8" />
                  </div>
                  <img
                    alt=""
                    onClick={() => showFileExplorerForCover()}
                    src={
                      coverPhoto
                        ? editMode
                          ? coverPhoto
                          : URL.createObjectURL(coverPhoto)
                        : placeholder
                    }
                    className="w-full lg:h-36 sm:h-24 object-cover h-20"
                  />
                </div>
                <div className="flex  relative justify-start mr-8 ml-8 -mt-12">
                  <img
                    onClick={() => showFileExplorerForProfile()}
                    alt=""
                    src={
                      profilePhoto
                        ? editMode
                          ? profilePhoto
                          : URL.createObjectURL(profilePhoto)
                        : avatarPlaceholder
                    }
                    className=" border-solid  lg:h-24 lg:w-24 h-16 w-16  border-white border-2 -mt-3"
                  />
                </div>
              </div>
              <div className="px-8 space-y-4">
                <h3 className="dark:text-white text-gray-900 font-semibold ">
                  Details
                </h3>
                <FormInput
                  label="Event Name"
                  id="eventName"
                  name="eventName"
                  required
                />

                <FormSelector
                  label="Timezone"
                  required
                  name="timezone"
                  selectedItem={selectedTimeZone}
                  list={timezone.map((t) => ({ name: t.text, id: t.value }))}
                  placeholder="What is the purpose of this group?"
                />

                <div className="flex items-center justify-between w-full gap-x-2">
                  <div className="grid grid-cols-2 ">
                    <div className="mx-2">
                      <FormInput
                        name="startDate"
                        label="Start date"
                        type="date"
                      />
                    </div>
                    <div className="mx-2">
                      <FormInput
                        name="startTime"
                        label="Start time"
                        required
                        type="time"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 ">
                    <div className="mx-2">
                      <FormInput name="endDate" label="End date" type="date" />
                    </div>
                    <div className="mx-2">
                      <FormInput
                        name="endTime"
                        required
                        label="End time"
                        type="time"
                      />
                    </div>
                  </div>
                </div>

                <FormInput
                  label="Description"
                  required
                  id="eventDescription"
                  name="eventDescription"
                  placeholder="Ex. Topics, schedule, etc."
                  textarea
                  rows={2}
                  cols={255}
                />
              </div>

              {isError && (
                <div className="px-8">
                  <Error errors={[error.toString()]} />
                </div>
              )}
              <div className="flex p-4 items-center justify-end">
                <Button
                  rounded="rounded-full"
                  loading={upload.isLoading || isLoading}
                  disabled={upload.isLoading || isLoading}
                  gradient
                  size="lg"
                  type="submit"
                  label="Submit"
                />
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </Modal>
  )
}

export default CreateEvent
