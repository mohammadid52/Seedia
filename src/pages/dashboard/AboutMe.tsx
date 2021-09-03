import Button from 'components/atoms/Button'
import Card from 'components/atoms/Card'
import Modal from 'components/atoms/Modal'
import { links } from 'constants/Links'
import { useUserContext } from 'context/UserContext'
import { getAccessToken, network } from 'helpers'
import { IParent } from 'interfaces/UniversalInterface'
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

const PersonalCard = ({
  className,

  userData,
}: {
  className?: string
  userData?: IParent
}) => {
  const [showModal, setShowModal] = useState(false)
  const [saving, setSaving] = useState(false)
  const token = getAccessToken()

  const [_image, setImage] = useState('')

  const onImageSelect = (e: any) => {
    const img = e.target.files[0]
    setImage(img)
    setShowModal(true)
  }

  const { setValues } = useUserContext()

  const history = useHistory()

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

      if (data && data.data && data.data.location) {
        const updatedData = {
          ...userData,
          profilePicture: data.data.location,
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
      }
    } catch (error) {
      console.error(error.message)
    } finally {
      setShowModal(false)
    }
    setSaving(false)
  }

  const showFileExplorerForProfile = () =>
    //@ts-ignore
    profileImageSelectorRef?.current?.click()

  const profileImageSelectorRef = React.useRef()

  return (
    <>
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
      {/* HIDDEN IMAGE INPUT */}
      <input
        // @ts-ignore
        ref={profileImageSelectorRef}
        className="hidden"
        type="file"
        onChange={onImageSelect}
        accept="image/x-png,image/jpeg"
      />
      <Card
        cardTitle="About"
        content={
          <div className={`${className}`}>
            <div>
              <div className="">
                <div className="border-b mb-2 pb-2 border-gray-200 dark:border-gray-600">
                  <div className="flex items-center justify-center mb-4">
                    <img
                      className={`${
                        !userData?.profilePicture ? '' : ''
                      } h-16 w-16 border-gradient border-2 border-transparent rounded-full`}
                      src={
                        userData?.profilePicture
                          ? userData?.profilePicture
                          : 'https://robohash.org/honey?set=set1'
                      }
                      alt={userData?.fullName}
                    />
                  </div>

                  <div className="">
                    <div className="text-center">
                      <div
                        onClick={() =>
                          history.push(
                            links.getProfileById(
                              userData?.myId,
                              userData?.other?.template || 1
                            )
                          )
                        }
                        className="mt-4 mb-1 text-base hover:underline cursor-pointer  font-extrabold text-center dark:text-white"
                      >
                        {userData?.fullName}
                      </div>

                      <p className="dark:text-gray-400 mb-2 text-sm text-center">
                        {userData?.company?.jobTitle}
                      </p>

                      <p
                        onClick={showFileExplorerForProfile}
                        className="link-hover tracking-wide cursor-pointer text-center text-blue-600"
                      >
                        Change photo
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-gray-900 dark:text-white">connections</p>
                  <h6 className="font-semibold text-gray-900 dark:text-white">
                    Expand your network
                  </h6>
                </div>

                <div className=" hidden">
                  <div className="">
                    <p className="mb-2 text-gray-900 dark:text-white">
                      Get access to exclusive tools and insights
                    </p>
                    <h6 className="font-semibold text-gray-900 dark:text-white">
                      Try Premium 1 month for free
                    </h6>
                  </div>
                </div>

                <div className=" hover:bg-gray-100 dark:hover:bg-gray-600 py-2 rounded-md cursor-pointer overflow-hidden">
                  <div className="">
                    <h6 className="cursor-pointer text-gray-900 dark:text-white font-semibold text-center">
                      My items
                    </h6>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="gap-y-2 flex flex-col mt-4 mb-8">
                <div className="hover:underline cursor-pointer">
                  <a href="/" className="dark:text-white text-gray-900">
                    Groups
                  </a>
                </div>
                <div className="flex cursor-pointer items-center hover:underline">
                  <a href="/" className="dark:text-white text-gray-900">
                    Events
                  </a>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-gray-900 dark:text-white ml-2 text-xl "
                  >
                    <defs></defs>
                    <path d="M474 152m8 0l60 0q8 0 8 8l0 704q0 8-8 8l-60 0q-8 0-8-8l0-704q0-8 8-8Z"></path>
                    <path d="M168 474m8 0l672 0q8 0 8 8l0 60q0 8-8 8l-672 0q-8 0-8-8l0-60q0-8 8-8Z"></path>
                  </svg>
                </div>
                <div className="cursor-pointer hover:underline">
                  <a href="/" className="dark:text-white text-gray-900">
                    Followed hashtags
                  </a>
                </div>
              </div>

              <div className=" hover:bg-gray-100 dark:hover:bg-gray-600 py-2 rounded-md cursor-pointer overflow-hidden">
                <div className="">
                  <h6 className="cursor-pointer text-gray-900 dark:text-white font-semibold text-center">
                    Discover more
                  </h6>
                </div>
              </div>
            </div>
          </div>
        }
      />
    </>
  )
}
export default PersonalCard
