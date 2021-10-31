import { XIcon } from '@heroicons/react/solid'
import { sendInvite } from 'apis/mutations'
import { fetchUsers } from 'apis/queries'
import Error from 'components/alerts/Error'
import Button from 'components/atoms/Button'
import Modal from 'components/atoms/Modal'
import Spinner from 'components/Spinner'
import useAccountType from 'hooks/useAccountType'
import { IGroup, IParent } from 'interfaces/UniversalInterface'
import { findIndex, remove } from 'lodash'
import React, { useEffect, useState } from 'react'
import { useMutation, useQuery } from 'react-query'
import { avatarPlaceholder } from 'state/Redux/constants'

const InviteUserModal = ({
  open,
  setOpen,
  followingList,
  group,
  refetchGroup,
}: {
  open: boolean
  group: IGroup
  followingList: string[]
  refetchGroup: any
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}) => {
  const [selectedUsers, setSelectedUsers] = useState<IParent[]>([])

  const config = {
    users: followingList,
  }
  const { data, isFetched, isLoading, isSuccess } = useQuery(`user-list`, () =>
    fetchUsers(config)
  )

  const {
    mutate,
    isLoading: sendingInvites,
    error: errorSendingInvites,
  } = useMutation(sendInvite, {
    onSuccess: () => {
      setOpen(false)
      unselectAll()
      refetchGroup()
    },
  })

  const onUserClick = (user: IParent) => {
    const selectedIdx = findIndex(selectedUsers, ['_id', user._id])
    if (selectedIdx !== -1) {
      // selected
      remove(selectedUsers, ['_id', user._id])
    } else {
      selectedUsers.unshift(user)

      // not selected
    }
    setSelectedUsers([...selectedUsers])
  }

  const unselectAll = () => {
    setSelectedUsers([])
  }

  const unselect = (userId: string) => {
    remove(selectedUsers, ['_id', userId])
    setSelectedUsers([...selectedUsers])
  }

  const users: IParent[] =
    !isLoading && isFetched && isSuccess ? data.data.data.users : []

  const [localUsers, setLocalUsers] = useState<IParent[]>([])
  useEffect(() => {
    if (users && users.length > 0) {
      setLocalUsers([...users])
    }
  }, [users])

  const { getType } = useAccountType()

  const onSendInvite = () => {
    const targetIdArray = selectedUsers.map((user) => user._id)
    mutate({ targetIdArray, groupId: group._id })
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toLowerCase()
    let searchedList = users.filter((user) => {
      return (
        user.firstName.toLowerCase().includes(value) ||
        user.lastName.toLowerCase().includes(value) ||
        user.fullName.toLowerCase().includes(value)
      )
    })
    setLocalUsers([...searchedList])
  }

  return (
    <Modal
      fixedBottom={
        <div>
          {!isLoading && isFetched && (
            <div className="flex items-center justify-end  p-4">
              <Button
                label={`Invite ${
                  selectedUsers.length > 0 ? selectedUsers.length : ''
                }`}
                size="lg"
                loading={sendingInvites}
                loadingText="Sending invites"
                onClick={() => onSendInvite()}
                disabled={selectedUsers.length <= 0}
                gradient
                rounded="rounded-full"
              />
            </div>
          )}
        </div>
      }
      header="Invite connections"
      open={open}
      setOpen={setOpen}
    >
      <div className="lg:min-w-160 min-w-132 max-w-256">
        {!isLoading && isFetched ? (
          <div>
            <div className="w-full">
              <input
                type="search"
                placeholder="Search by name"
                className="w-full py-2 px-4 outline-none border-none focus:ring-1 text-gray-600 dark:text-gray-400 text-sm focus:ring-yellow-500 bg-transparent h-full"
                onChange={onChange}
              />
            </div>
            <div className="grid grid-cols-5 p-2 border-t border-gray-200 dark:border-gray-800">
              <div className="col-span-3 min-h-136 pb-12  max-h-136 flex flex-col  overflow-y-scroll overflow-x-hidden ">
                {localUsers.map((user: IParent) => {
                  const { isBusiness, isPersonal } = getType(user)
                  const alreadyMember = Boolean(
                    // @ts-ignore
                    group.members.find((g) => g._id === user._id)
                  )
                  const requestSent = Boolean(
                    // @ts-ignore
                    group.requests.find((g) => g === user._id)
                  )
                  return (
                    <div
                      key={user._id}
                      className={`p-2 py-4 relative cursor-pointer border-b border-gray-200 dark:border-gray-700 ${
                        alreadyMember || requestSent
                          ? 'dark:bg-gray-800 opacity-75 bg-gray-100 pointer-events-none'
                          : 'dark:hover:bg-gray-800 hover:bg-gray-100'
                      }  transition-all`}
                      onClick={() => onUserClick(user)}
                    >
                      <div className="flex  cursor-pointer items-center ">
                        <input
                          id="users"
                          // onChange={(e) => onUserClick(user)}
                          name="candidates"
                          checked={Boolean(
                            selectedUsers.find((d) => d._id === user._id)
                          )}
                          type="checkbox"
                          className="focus:ring-yellow-500 mr-4 h-5 w-5 text-yellow-600 border-gray-300 rounded"
                        />
                        <img
                          src={user.profilePicture || avatarPlaceholder}
                          alt=""
                          className="rounded-full mr-2 h-12 w-12"
                        />
                        <div>
                          <h4 className="dark:text-white text-gray-900">
                            {user.fullName}
                          </h4>
                          <p className="dark:text-gray-500 text-gray-600 text-sm">
                            {isBusiness
                              ? user?.business?.name
                              : isPersonal
                              ? user?.company?.companyName
                              : user?.background?.education &&
                                user?.background?.education[0].name}
                          </p>
                        </div>
                      </div>
                      {(alreadyMember || requestSent) && (
                        <p className="absolute text-xs italic dark:text-gray-500 text-gray-400 bottom-1 right-2 ">
                          {alreadyMember ? 'Already member' : 'Request sent'}
                        </p>
                      )}
                    </div>
                  )
                })}
              </div>
              <div className="col-span-2 ml-2">
                <div className="border-b text-sm border-gray-200 dark:border-gray-800  text-gray-500 dark:text-gray-400 p-4 flex items-center justify-between">
                  <p>{selectedUsers.length} selected</p>
                  <button
                    onClick={unselectAll}
                    className="font-medium dark:text-gray-300"
                  >
                    Unselect all
                  </button>
                </div>
                <div className="p-4 pr-0 flex flex-col gap-y-4 max-w-56 min-w-56  max-h-136 pb-20 overflow-y-scroll mx-2">
                  {selectedUsers &&
                    selectedUsers.length > 0 &&
                    selectedUsers.map((user: IParent) => (
                      <div className="flex  items-center  justify-between">
                        <div className="flex items-center">
                          <img
                            src={user.profilePicture || avatarPlaceholder}
                            alt=""
                            className="rounded-full mr-2 h-8 w-8"
                          />
                          <h4 className="dark:text-white">{user.fullName}</h4>
                        </div>
                        <div
                          onClick={() => unselect(user._id)}
                          className="dark:hover:bg-gray-700 transition-all rounded-full p-0.5"
                        >
                          <XIcon
                            className="cursor-pointer h-5 w-5   dark:text-gray-400"
                            aria-hidden="true"
                          />
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center">
            <Spinner />
          </div>
        )}
        <div>
          {errorSendingInvites && (
            <Error errors={[errorSendingInvites.toString()]} />
          )}
        </div>
      </div>
    </Modal>
  )
}

export default InviteUserModal
