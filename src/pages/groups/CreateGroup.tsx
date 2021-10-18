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
import { useEffect, useState } from 'react'
import { useMutation } from 'react-query'
import remove from 'lodash/remove'
import map from 'lodash/map'
import { useHistory } from 'react-router-dom'
import * as Yup from 'yup'
import UsersModal from 'pages/groups/UsersModal'

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
    mutate(values)
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

  return (
    <NarrowLayout>
      <UsersModal
        onSelectUser={onSelectUser}
        show={showUsersModal}
        userData={userData}
        members={members}
        setShow={setShowUsersModal}
      />
      <Meta pageTitle="Create Group | groups | 13RMS" />
      <Title fontWeight="font-bold mb-8">Create Group</Title>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form className="space-y-8">
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
