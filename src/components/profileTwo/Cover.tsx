import Button from 'components/atoms/Button'
import Card from 'components/atoms/Card'
import Modal from 'components/atoms/Modal'
import { useNotifications } from 'context/NotificationContext'
import { useUserContext } from 'context/UserContext'
import { network } from 'helpers'
import useAccountType from 'hooks/useAccountType'
import { IParent } from 'interfaces/UniversalInterface'
import { noop } from 'lodash'
import React, { useState } from 'react'
import { avatarPlaceholder } from 'state/Redux/constants'

const Cover = ({
  userData,
  authUser,
}: {
  authUser: boolean
  userData?: IParent
}) => {
  const [saving, setSaving] = useState(false)
  const [showModal, setShowModal] = useState(false)

  const [_image, setImage] = useState('')

  const onImageSelect = (e: any) => {
    const img = e.target.files[0]
    setImage(img)
    setShowModal(true)
  }
  const { setValues } = useUserContext()

  const { setNotification } = useNotifications()

  const onSave = async () => {
    setSaving(true)

    const fd = new FormData()
    fd.append('image', _image)

    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }

    try {
      const { data } = await network.post('/uploadImage', fd, config)

      if (data && data.data && data.data.location) {
        const updatedData = {
          ...userData,
          profilePicture: data.data.location,
        }
        //@ts-ignore
        delete updatedData.password

        setValues({ ...updatedData })

        await network.post('/user/update', {
          ...updatedData,
        })
        setShowModal(false)

        setNotification({
          show: true,
          title: `Profile photo changed successfully`,
        })
      }
    } catch (error) {
      console.error(error.message)
    }
    setSaving(false)
  }

  const showFileExplorerForProfile = () =>
    //@ts-ignore
    profileImageSelectorRef?.current?.click()

  const profileImageSelectorRef = React.useRef()

  const isBusiness = useAccountType(userData)
  const { location } = userData

  return (
    <div className="exportContent">
      {authUser && (
        <Modal
          header={`Profile Photo`}
          disableBackdropClose
          open={showModal}
          setOpen={setShowModal}
        >
          <div className={`sm:min-w-64 sm:min-h-64`}>
            <div
              className={`relative min-h-48 flex items-center justify-center`}
            >
              {_image && (
                <img
                  className={`shadow-xl md:h-32 md:w-32 sm:h-12 sm:w-12 rounded-full`}
                  // @ts-ignore
                  src={URL.createObjectURL(_image)}
                  alt="People working on laptops"
                />
              )}
            </div>
            <div className="mt-5 sm:mt-4 flex justify-end  items-center">
              <Button
                gradient
                loading={saving}
                disabled={saving}
                onClick={onSave}
                label="Save"
              />
            </div>
          </div>
        </Modal>
      )}
      <Card
        content={
          <div className="flex items-center justify-start">
            <div className="flex-grow">
              <span className="sr-only">13RMS</span>
              <img
                onClick={() => (authUser ? showFileExplorerForProfile() : noop)}
                className="border-gradient border-transparent border-4 h-36 w-36 sm:h-40 sm:w-40 cursor-pointer rounded-full shadow-xl"
                src={
                  userData?.profilePicture
                    ? userData?.profilePicture
                    : avatarPlaceholder
                }
                alt=""
              />
            </div>
            {/* HIDDEN IMAGE INPUT */}
            <input
              // @ts-ignore
              ref={profileImageSelectorRef}
              className="hidden"
              type="file"
              onChange={(e) => (authUser ? onImageSelect(e) : noop)}
              accept="image/x-png,image/jpeg"
            />
            <div className="ml-4 max-w-256 border-l border-gray-200 dark:border-gray-600">
              <div className="overflow-hidden">
                <div className=" px-4 pb-5 sm:px-6">
                  {isBusiness ? (
                    <div className="dark:text-white text-gray-900 text-base font-medium border-b border-gray-200 dark:border-gray-600 pb-4 ">
                      {userData?.business?.name}{' '}
                      <span className="ml-2 dark:text-gray-400 text-gray-500 text-xs">
                        - {location?.address}, {location?.city},{' '}
                        {location?.state} {location?.country}
                      </span>
                    </div>
                  ) : (
                    <div className="dark:text-white text-gray-900 text-base font-medium border-b border-gray-200 dark:border-gray-600 pb-4 ">
                      {userData?.company?.jobTitle}{' '}
                      <span className="ml-2 dark:text-gray-400 text-gray-500 text-xs">
                        -{' '}
                        {userData?.company?.companyName ||
                          userData?.company?.currentCompany}
                      </span>
                    </div>
                  )}

                  <dl className="pt-4 grid grid-cols-1 gap-x-2 gap-y-8 sm:grid-cols-2">
                    <div className="sm:col-span-1">
                      <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        Full name
                      </dt>
                      <dd
                        title={userData?.fullName}
                        className="mt-1 text-sm text-gray-900 dark:text-white"
                      >
                        {userData?.fullName}
                      </dd>
                    </div>

                    <div className="sm:col-span-1">
                      <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        Email address
                      </dt>
                      <dd
                        title={userData?.email}
                        className="mt-1 text-sm max-w-56 break-words  text-gray-900 dark:text-white"
                      >
                        {userData?.email}
                      </dd>
                    </div>
                    {isBusiness ? (
                      <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                          Business type
                        </dt>
                        <dd
                          title={userData?.business?.typeOfBusiness}
                          className="mt-1 text-sm text-gray-900 dark:text-white"
                        >
                          {userData?.business?.typeOfBusiness}
                        </dd>
                      </div>
                    ) : (
                      <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                          Company
                        </dt>
                        <dd
                          title={
                            userData?.company?.companyName ||
                            userData?.company?.currentCompany
                          }
                          className="mt-1 text-sm text-gray-900 dark:text-white"
                        >
                          {userData?.company?.companyName ||
                            userData?.company?.currentCompany}
                        </dd>
                      </div>
                    )}
                    {isBusiness ? (
                      <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                          Relationship to business
                        </dt>
                        <div
                          title={userData?.business?.relationshipToBusiness}
                          className="mt-1 text-sm text-gray-900 dark:text-white"
                        >
                          {userData?.business?.relationshipToBusiness}
                        </div>
                      </div>
                    ) : (
                      <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                          Company address
                        </dt>
                        <dd
                          title={
                            userData?.location?.address ||
                            userData?.location?.livesIn
                          }
                          className="mt-1 text-sm text-gray-900 dark:text-white"
                        >
                          {userData?.location?.address ||
                            userData?.location?.livesIn}
                        </dd>
                      </div>
                    )}
                  </dl>
                </div>
              </div>
            </div>
          </div>
        }
      />
    </div>
  )
}

export default Cover
