import { createGroup, uploadMultipleImages } from 'apis/mutations'
import placeholder from 'assets/svg/placeholder.png'
import Error from 'components/alerts/Error'
import Button from 'components/atoms/Button'
import FormInput from 'components/atoms/FormInput'
import { links } from 'constants/Links'
import { useNotifications } from 'context/NotificationContext'
import { Form, Formik } from 'formik'
import { IGroup, IParent } from 'interfaces/UniversalInterface'
import { isEmpty, map } from 'lodash'
import React, { useEffect, useRef, useState } from 'react'
import { AiOutlineEdit } from 'react-icons/ai'
import { useMutation } from 'react-query'
import { avatarPlaceholder } from 'state/Redux/constants'
import * as Yup from 'yup'

const CreateGroup = ({
  onSuccess,
  refetchGroup,
  groupData = null,
  userData,
}: {
  onSuccess?: () => void
  refetchGroup: any
  groupData?: IGroup
  userData: IParent
}) => {
  const validationSchema = Yup.object({
    groupName: Yup.string().required('Group Name is required').min(10).max(150),
    groupDescription: Yup.string()
      .required('Group Description is required')
      .min(10)
      .max(150),
  })

  // @ts-ignore
  const initialValues: IGroup = {
    groupName: groupData?.groupName || '',
    groupDescription: groupData?.groupDescription || '',
    groupRules: groupData?.groupRules || '',
  }

  const formRef = useRef()
  const { setNotification } = useNotifications()

  const { mutate, isLoading, isError, error, isSuccess } = useMutation(
    createGroup,
    {
      onSuccess: (data) => {
        const groupName = data?.data?.data?.groupName
        setNotification({
          show: true,
          title: `Dear ${userData.firstName}. You have successfully created the group ${groupName} `,
          buttonText: 'View',
          buttonUrl: links.viewStore(userData.profileUrl),
        })
        refetchGroup()
      },
    }
  )

  const upload = useMutation(uploadMultipleImages, {
    onSuccess: (a, b) => {
      const finalImageList: any[] = map(a.data.data, (img, idx: number) => img)
      // @ts-ignore
      if (formRef?.current && formRef?.current?.values) {
        mutate({
          // @ts-ignore
          ...formRef?.current?.values,
          coverPhoto: finalImageList.find(
            (img) => img.originalname === coverPhoto.name
          )?.location,

          profilePhoto: finalImageList.find(
            (img) => img.originalname === profilePhoto.name
          )?.location,
        })
      }
    },
  })

  useEffect(() => {
    if (isSuccess && upload.isSuccess) {
      onSuccess()
    }
  }, [isSuccess, upload.isSuccess])

  const uploadFunction = () => {
    const fd = new FormData()

    fd.append('images', profilePhoto)
    fd.append('images', coverPhoto)

    setTimeout(() => {
      upload.mutate(fd)
    }, 500)
  }

  const editMode = !isEmpty(groupData)

  useEffect(() => {
    if (editMode) {
      setCoverPhoto(groupData.coverPicture)
      setProfilePhoto(groupData.profilePicture)
    }
  }, [editMode])

  const onSubmit = async (values: any) => {
    uploadFunction()
  }

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

  return (
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
        enableReinitialize
        innerRef={formRef}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form className="space-y-6">
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
            <div className="flex  relative justify-start mr-8 ml-4 -mt-12">
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
                className=" border-solid lg:h-24 lg:w-24 h-16 w-16  border-white border-2 -mt-3"
              />
            </div>
          </div>
          <FormInput
            label="Group Name"
            id="groupName"
            name="groupName"
            required
            placeholder="Add group name"
          />

          <FormInput
            label="Description"
            id="groupDescription"
            name="groupDescription"
            placeholder="What is the purpose of this group?"
            textarea
            rows={2}
            cols={255}
          />
          <FormInput
            label="Group rules"
            id="groupRules"
            name="groupRules"
            placeholder="Set the tone and expectations of your group"
            textarea
            rows={2}
            cols={255}
          />

          <div className="flex  items-center justify-end">
            <Button
              type="submit"
              rounded="rounded-lg"
              loading={upload.isLoading || isLoading}
              disabled={upload.isLoading || isLoading}
              gradient
              size="lg"
              label="Submit"
            />
          </div>

          {isError && <Error errors={[error.toString()]} />}
        </Form>
      </Formik>
    </div>
  )
}

export default CreateGroup
