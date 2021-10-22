import { makeGroupAdmin } from 'apis/mutations'
import { fetchGroupById, fetchGroups } from 'apis/queries'
import Button from 'components/atoms/Button'
import Card from 'components/atoms/Card'
import Modal from 'components/atoms/Modal'
import Title from 'components/atoms/Title'
import User from 'components/User'
import { links } from 'constants/Links'
import { IGroup, IGroupMember } from 'interfaces/UniversalInterface'
import { map } from 'lodash'
import React, { useState } from 'react'
import { useMutation, useQuery } from 'react-query'

const GroupModal = ({
  selectedGroup,
  setSelectedGroup,
  setShowGroupDetailsModal,
  showGroupDetailsModal,
  userId,
  groupId,
}: {
  selectedGroup?: any
  setSelectedGroup: any
  userId: string
  groupId: string
  setShowGroupDetailsModal: any
  showGroupDetailsModal: any
}) => {
  const { mutate } = useMutation(makeGroupAdmin, {
    onSuccess: (data) => {
      setSelectedGroup({ ...selectedGroup, admin: [...data.data.data] })
    },
  })

  const adminAction = (
    groupId: string,
    memberId: string,
    action: string = 'make'
  ) => {
    mutate({ groupId, memberId, action })
  }

  const { data, isLoading, isFetched } = useQuery(
    'group-data',
    () => fetchGroupById(groupId),
    { enabled: Boolean(showGroupDetailsModal) }
  )
  const groupData: IGroup = isFetched && !isLoading && data.data.data

  return (
    <Modal
      header={selectedGroup?.groupName}
      open={Boolean(showGroupDetailsModal)}
      setOpen={setShowGroupDetailsModal}
    >
      <div className="min-w-132">
        <Title
          size="text-lg"
          fontWeight="font-medium"
          className="tracking-wide"
          textColor="text-gray-900  dark:text-white "
        >
          {groupData?.members.length || 0} Group Member
          {groupData?.members.length > 1 ? 's' : ''}:
        </Title>
        {groupData && groupData?.members.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-4 mt-4 max-h-90vh overflow-y-auto gap-6">
            {map(groupData?.members, (member: IGroupMember) => {
              const iAmOwnerOfThisProfile = member._id === userId
              // @ts-ignore
              const admin = selectedGroup.admin
              const iAmAdmin = Boolean(admin.find((id: any) => id === userId))

              const isThisUser_Admin = Boolean(
                admin.find((id: any) => id === member._id)
              )

              const getBtnText = () => {
                switch (true) {
                  case iAmOwnerOfThisProfile:
                    return 'You'

                  case isThisUser_Admin:
                    return 'Remove admin'

                  case !isThisUser_Admin:
                    return 'Make admin'

                  default:
                    return 'View profile'
                }
              }

              return (
                <div>
                  <User
                    btnText={getBtnText()}
                    disableFollow={iAmOwnerOfThisProfile}
                    // @ts-ignore
                    user={member}
                    onBtnClick={() => {
                      if (iAmAdmin) {
                        adminAction(
                          groupData._id,
                          member._id,
                          isThisUser_Admin ? 'remove' : 'make'
                        )
                      }
                    }}
                    key={member._id}
                  />
                </div>
              )
            })}
          </div>
        )}
      </div>
    </Modal>
  )
}

const Group = ({ group }: { group: IGroup }) => {
  return (
    <div>
      <div className="hover:underline cursor-pointer">
        <a href={links.groupById(group._id)}>{group.groupName}</a>
      </div>
    </div>
  )
}

const GroupList = ({
  userId,
  secondary = false,
}: {
  userId: string
  secondary?: boolean
}) => {
  const { data, isLoading, isFetched, isError, error } = useQuery(
    'group-list',
    () => fetchGroups()
  )

  const groups: IGroup[] = isFetched && !isLoading && data.data.data

  return (
    <>
      <Card
        secondary={secondary}
        cardTitle="Your Groups"
        content={
          isLoading && !isFetched ? (
            <div>...</div>
          ) : isError ? (
            <p>{error}</p>
          ) : (
            <div className="flex flex-col dark:text-white text-gray-900 gap-y-6">
              {groups &&
                groups.length > 0 &&
                map(groups, (group) => <Group group={group} />)}

              <Button
                link={links.createGroup()}
                label="Create group"
                gradient
              />
            </div>
          )
        }
      />
    </>
  )
}

export default GroupList
