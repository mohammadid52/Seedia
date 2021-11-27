import Modal from 'components/atoms/Modal'
import { links } from 'constants/Links'
import useAccountType from 'hooks/useAccountType'
import { IParent, IShortProfile } from 'interfaces/UniversalInterface'
import React from 'react'
import { avatarPlaceholder } from 'state/Redux/constants'

const UsersListModal = ({
  open,
  setOpen,
  title,
  userList,
}: {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  title: string
  userList: IShortProfile[]
}) => {
  const { getType } = useAccountType()

  const onUserClick = (user: IShortProfile) => {
    window.open(links.getProfile(user), '_blank')
  }
  return (
    <Modal header={title} open={open} setOpen={setOpen}>
      {userList.map((user: IParent) => {
        const { isBusiness, isPersonal } = getType(user)

        return (
          <div
            key={user._id}
            className={`p-2 py-4 relative cursor-pointer border-b border-gray-200 dark:border-gray-700 dark:hover:bg-gray-800 hover:bg-gray-100 transition-all`}
            onClick={() => onUserClick(user)}
          >
            <div className="flex  cursor-pointer items-center ">
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
          </div>
        )
      })}
    </Modal>
  )
}

export default UsersListModal
