import { createGroup } from 'apis/mutations'
import Error from 'components/alerts/Error'
import Button from 'components/atoms/Button'
import FormInput from 'components/atoms/FormInput'
import Meta from 'components/atoms/Meta/Meta'
import Title from 'components/atoms/Title'
import { links } from 'constants/Links'
import NarrowLayout from 'containers/NarrowLayout'
import { Form, Formik } from 'formik'
import { IGroup, IParent } from 'interfaces/UniversalInterface'
import remove from 'lodash/remove'
import UsersModal from 'pages/groups/UsersModal'
import { useEffect, useRef, useState } from 'react'
import { useMutation } from 'react-query'
import { useHistory } from 'react-router-dom'
import { avatarPlaceholder } from 'state/Redux/constants'
import * as Yup from 'yup'

const CreateGroup = ({ userData }: { userData: IParent }) => {
  const validationSchema = Yup.object({
    groupName: Yup.string().required('Group Name is required').min(10).max(150),
  })

  // @ts-ignore
  const initialValues: IGroup = {
    groupName: '',
    groupDescription: '',
    members: [],
  }

  const { mutate, isLoading, isError, error, isSuccess } =
    useMutation(createGroup)

  const history = useHistory()

  const [members, setMembers] = useState<string[]>([])

  useEffect(() => {
    if (isSuccess) {
      history.push(
        links.getProfileById(
          userData.profileUrl,
          userData?.other?.template || 1
        )
      )
    }
  }, [isSuccess])

  const onSubmit = async (values: any) => {
    if (members.length > 0) {
      mutate({ ...values, members })
    }
  }

  const [showUsersModal, setShowUsersModal] = useState(false)

  const onSelectUser = (userId: string) => {
    const alreadyAdded = members && members.find((member) => member === userId)
    if (alreadyAdded) {
      remove(members, (member) => member === userId)
      setMembers((prev: string[]) => [...prev])
    } else {
      members.push(userId)
      setMembers((prev: string[]) => [...prev])
    }
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
    <NarrowLayout>
      <UsersModal
        onSelectUser={onSelectUser}
        show={showUsersModal}
        userData={userData}
        members={members}
        setShow={setShowUsersModal}
      />
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
      <Meta pageTitle="Create Group | groups | 13RMS" />
      <Title fontWeight="font-bold mb-8">Create Group</Title>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form className="space-y-8">
          <div className="flex items-center flex-col space-y-4   justify-center">
            <img
              onClick={() => showFileExplorerForCover()}
              className=" cursor-pointer h-96 rounded-lg w-full shadow-xl"
              src={
                coverPhoto
                  ? URL.createObjectURL(coverPhoto)
                  : 'https://picsum.photos/200/300'
              }
              alt=""
            />
          </div>

          <div className="grid grid-cols-4 gap-4">
            <div>
              <img
                onClick={() => showFileExplorerForProfile()}
                className="border-gradient border-transparent border-4 h-36 w-36 sm:h-40 sm:w-40 cursor-pointer rounded-full shadow-xl"
                src={
                  profilePhoto
                    ? URL.createObjectURL(profilePhoto)
                    : avatarPlaceholder
                }
                alt=""
              />
            </div>
            <div className="col-span-3 space-y-4">
              <FormInput
                label="Group Name"
                id="groupName"
                name="groupName"
                required
                placeholder="Add group name"
              />

              <FormInput
                label="Group Description"
                id="groupDescription"
                name="groupDescription"
                placeholder="Add group description"
                textarea
                rows={4}
                cols={255}
              />
            </div>
          </div>
          <div className="w-full flex flex-col gap-y-4 items-center justify-between ">
            {members && members.length > 0 && (
              <div className="border h-12 dark:border-gray-700 border-gray-400 rounded-lg w-full">
                {/* {map(members, (member) => ())} */}
              </div>
            )}
            <Button
              rounded="rounded-lg"
              loading={isLoading}
              onClick={() => setShowUsersModal(true)}
              gradient
              invert
              className="w-full"
              size="lg"
              label="Add member"
            />
          </div>

          <div className="flex items-center justify-end">
            <Button
              type="submit"
              rounded="rounded-lg"
              loading={isLoading}
              gradient
              size="lg"
              label="Submit"
            />
          </div>

          {isError && <Error errors={[error.toString()]} />}
        </Form>
      </Formik>
    </NarrowLayout>
  )
}

export default CreateGroup
