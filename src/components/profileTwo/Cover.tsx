import Button from 'components/atoms/Button'
import Card from 'components/atoms/Card'
import Modal from 'components/atoms/Modal'
import { useUserContext } from 'context/UserContext'
import { getAccessToken, network } from 'helpers'
import { IAbout, IParent } from 'interfaces/UniversalInterface'
import React, { useState } from 'react'
import getImageURL from 'utils/getImageURL'

const Cover = ({ about, userData }: { about: IAbout; userData?: IParent }) => {
  const [saving, setSaving] = useState(false)
  const [showModal, setShowModal] = useState(false)

  const [_image, setImage] = useState('')

  const onImageSelect = (e: any) => {
    const img = e.target.files[0]
    setImage(img)
    setShowModal(true)
  }
  const { setValues } = useUserContext()
  const token = getAccessToken()

  const onSave = async () => {
    setSaving(true)

    const fd = new FormData()
    fd.append('image', _image)

    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: token,
      },
    }

    try {
      const { data } = await network.post('/uploadImage', fd, config)

      if (data && data.data && data.data.filename) {
        const updatedData = {
          ...userData,
          profilePicture: data.data.filename,
        }
        //@ts-ignore
        delete updatedData.password

        setValues({ ...updatedData })

        await network.post(
          '/user/update',
          {
            ...updatedData,
          },
          {
            headers: { Authorization: token },
          }
        )
        setShowModal(false)
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

  const isBusiness = userData?.other?.accountType === 'business'

  return (
    <div className="">
      <Modal
        header={`Profile Photo`}
        disableBackdropClose
        open={showModal}
        setOpen={setShowModal}
      >
        <div className={`sm:min-w-64 sm:min-h-64`}>
          <div className={`relative min-h-48 flex items-center justify-center`}>
            {_image && (
              <img
                className={`shadow-xl md:h-32 md:w-32 sm:h-12 sm:w-12 rounded-full`}
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
      <Card
        content={
          <div className="flex items-center justify-start">
            <div className="">
              <span className="sr-only">13RMS</span>
              <img
                onClick={showFileExplorerForProfile}
                className="border-gradient border-transparent border-4 h-36 w-36 xs:h-56 xs:w-56 sm:w-48 cursor-pointer sm:h-full sm:w-42 rounded-full shadow-xl"
                src={
                  userData?.profilePicture
                    ? getImageURL(userData?.profilePicture)
                    : 'https://robohash.org/honey?set=set1'
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
              onChange={onImageSelect}
              accept="image/x-png,image/jpeg"
            />
            <div className="ml-4 max-w-256">
              <div className="overflow-hidden">
                <div className=" px-4 pb-5 sm:px-6">
                  {isBusiness ? (
                    <div className="dark:text-white text-gray-900 text-xl font-medium border-b border-gray-200 dark:border-gray-600 pb-4 ">
                      {userData?.business?.name}{' '}
                      <span className="ml-2 dark:text-gray-400 text-gray-500 text-sm">
                        - {userData?.location?.address}
                      </span>
                    </div>
                  ) : (
                    <div className="dark:text-white text-gray-900 text-xl font-medium border-b border-gray-200 dark:border-gray-600 pb-4 ">
                      {userData?.company?.jobTitle}{' '}
                      <span className="ml-2 dark:text-gray-400 text-gray-500 text-sm">
                        -{' '}
                        {userData?.company?.companyName ||
                          userData?.company?.currentCompany}
                      </span>
                    </div>
                  )}

                  <dl className="pt-4 grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                    <div className="sm:col-span-1">
                      <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        Full name
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 dark:text-white">
                        {userData?.fullName}
                      </dd>
                    </div>

                    <div className="sm:col-span-1">
                      <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        Email address
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 dark:text-white">
                        {userData?.email}
                      </dd>
                    </div>
                    {isBusiness ? (
                      <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                          Business type
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 dark:text-white">
                          {userData?.business?.typeOfBusiness}
                        </dd>
                      </div>
                    ) : (
                      <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                          Company
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 dark:text-white">
                          {userData?.company?.companyName ||
                            userData?.company?.currentCompany}
                        </dd>
                      </div>
                    )}
                    {isBusiness ? (
                      <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                          Company address
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 dark:text-white">
                          {userData?.location?.address ||
                            userData?.location?.livesIn}
                        </dd>
                      </div>
                    ) : (
                      <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                          Relationship to business
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 dark:text-white">
                          {userData?.business?.relationshipToBusiness}
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
