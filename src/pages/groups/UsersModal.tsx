import React from 'react'
import Modal from 'components/atoms/Modal'
import { IParent } from 'interfaces/UniversalInterface'
import { useQuery } from 'react-query'
import { fetchShortUsers, fetchUsers } from 'apis/queries'
import { map } from 'lodash'
import User from 'components/User'

const UsersModal = ({
  show,
  setShow,
  onSelectUser,
  userData,
  members,
}: {
  onSelectUser?: (userId: string) => void
  show: boolean
  members?: string[]
  userData: IParent
  setShow: React.Dispatch<React.SetStateAction<boolean>>
}) => {
  console.log('🚀 ~ file: UsersModal.tsx ~ line 22 ~ members', members)
  const config = {
    users: userData.following,
  }
  const { data, isLoading, isFetched } = useQuery('friends-profiles-2', () =>
    fetchUsers(config)
  )

  const friends: IParent[] = isFetched && !isLoading && data.data.data
  return (
    <Modal open={show} setOpen={setShow}>
      {friends && friends.length > 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-4 m-8 max-h-90vh overflow-y-auto gap-6">
          {map(friends, (friend) => {
            const alreadyAdded =
              members && members.find((member) => member === friend._id)
            return (
              <div>
                <User
                  btnText={alreadyAdded ? 'Remove' : 'Add'}
                  user={friend}
                  onBtnClick={() => {
                    onSelectUser(friend._id)
                  }}
                  key={friend._id.toString()}
                />
              </div>
            )
          })}
        </div>
      )}
    </Modal>
  )
}

export default UsersModal
