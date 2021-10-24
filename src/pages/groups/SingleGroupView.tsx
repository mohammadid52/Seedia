import { fetchGroupById } from 'apis/queries'
import Button from 'components/atoms/Button'
import Card from 'components/atoms/Card'
import Meta from 'components/atoms/Meta/Meta'
import Title from 'components/atoms/Title'
import Loading from 'components/Loading'
import { links } from 'constants/Links'
import NarrowLayout from 'containers/NarrowLayout'
import { IGroup, IParent } from 'interfaces/UniversalInterface'
import { remove } from 'lodash'
import UsersModal from 'pages/groups/UsersModal'
import { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { useHistory, useParams } from 'react-router'
import { avatarPlaceholder } from 'state/Redux/constants'
import { eclipse } from 'utils/functions'

const SingleGroupView = ({ userData }: { userData: IParent }) => {
  const params: any = useParams()
  const groupId = params.groupId

  // check if the current user is a member of group
  const verifyMember = () => {
    let isMember = false
    if (groupId) {
      if (
        !userData ||
        userData?.groups === undefined ||
        userData?.groups?.length === 0
      ) {
        isMember = false
      } else if (userData.groups.includes(groupId)) {
        isMember = true
      } else {
        isMember = false
      }
    } else {
      isMember = false
    }
    return isMember
  }

  const history = useHistory()

  const isMember = verifyMember()
  useEffect(() => {
    if (!isMember) {
      history.push(links.FEED)
    }
  }, [groupId, isMember])

  const { data, isLoading, isFetched } = useQuery('group-data', () =>
    fetchGroupById(groupId)
  )
  const groupData: IGroup = isFetched && !isLoading && data.data.data

  const [showUsersModal, setShowUsersModal] = useState(false)
  const [members, setMembers] = useState<string[]>([])

  useEffect(() => {
    const _members: any = groupData.members

    if (_members && _members?.length > 0) {
      setMembers([..._members.map((m: any) => m._id)])
    }
  }, [])

  if (isLoading && !isFetched) {
    return <Loading />
  }

  // @ts-ignore
  const admin = groupData.admin
  const iAmAdmin = Boolean(admin.find((id: any) => id === userData._id))

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
    isMember && (
      <NarrowLayout
        customParentMaxWidth="max-w-360 relative"
        customMaxWidth="max-w-360"
      >
        <UsersModal
          onSelectUser={onSelectUser}
          show={showUsersModal}
          userData={userData}
          // @ts-ignore
          members={members}
          setShow={setShowUsersModal}
        />
        <Meta
          pageTitle={`${groupData.groupName} | Groups | 13RMS`}
          title={`${groupData.groupName} | Groups | 13RMS`}
        />
        <Card
          content={
            <div className="relative">
              <div className="mb-6">
                <img
                  className="lg:h-96 h-48 w-full rounded-xl  object-cover"
                  src={
                    groupData?.coverPicture
                      ? groupData?.coverPicture
                      : 'https://source.unsplash.com/1600x900/?nature,water'
                  }
                  alt=""
                />
              </div>
              <div className="flex items-end justify-between">
                <div className="flex items-center col-span-5">
                  <div className="mr-4">
                    <span className="sr-only">13RMS</span>
                    <img
                      className="h-16 w-16 sm:h-24 sm:w-24 cursor-pointer rounded-full shadow-xl"
                      src={
                        groupData?.profilePicture
                          ? groupData?.profilePicture
                          : avatarPlaceholder
                      }
                      alt=""
                    />
                  </div>
                  <div>
                    <Title fontWeight="font-semibold" className="">
                      {groupData.groupName}
                    </Title>
                    <Title
                      size="text-base"
                      textColor="text-gray-400 dark:text-gray-400"
                      className="mt-0 max-w-256"
                    >
                      {eclipse(groupData.groupDescription, 300)}
                    </Title>
                  </div>
                </div>
                <div className="flex items-end flex-col space-y-1    dark:text-gray-500 text-gray-600">
                  <p>{members.length || 0} members</p>
                  {iAmAdmin && (
                    <Button
                      label="Add new member"
                      //   link={websiteUrl}
                      onClick={() => setShowUsersModal(true)}
                      gradient
                      className="px-6"
                    />
                  )}
                </div>
              </div>
            </div>
          }
        />
      </NarrowLayout>
    )
  )
}

export default SingleGroupView
