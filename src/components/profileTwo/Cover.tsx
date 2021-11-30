import Button from 'components/atoms/Button'
import { AiOutlineEdit } from 'react-icons/ai'
import Card from 'components/atoms/Card'
import Modal from 'components/atoms/Modal'
import { useNotifications } from 'context/NotificationContext'
import { useUserContext } from 'context/UserContext'
import { network } from 'helpers'
import useAccountType from 'hooks/useAccountType'
import { IParent } from 'interfaces/UniversalInterface'
import { noop } from 'lodash'
import React, { useEffect, useState } from 'react'
import { avatarPlaceholder } from 'state/Redux/constants'
import NormalFormInput from 'components/atoms/NormalFormInput'
import Selector from 'components/atoms/Selector'

const businessInitState = {
  businessName: '',
  fullName: '',
  email: '',
  relationshipToBusiness: '',
  address: '',
  typeOfBusiness: '',
}

const companyInitState = {
  fullName: '',
  email: '',
  jobTitle: '',
  currentCompany: '',
  address: '',
}

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

  // Edit personal info section
  const [showEditModal, setShowEditModal] = useState(false)
  const initialState = !isBusiness ? companyInitState : businessInitState

  const [localFields, setLocalFields] = useState<any>(initialState)

  useEffect(() => {
    if (!isBusiness) {
      setLocalFields({
        ...initialState,
        fullName: userData?.fullName || '',
        email: userData?.email || '',
        jobTitle: userData?.company?.jobTitle || '',
        currentCompany: userData?.company?.companyName || '',
        address: userData?.location?.address || '',
      })
    } else {
      setLocalFields({
        ...initialState,
        fullName: userData?.fullName || '',
        email: userData?.email || '',
        businessName: userData?.business?.name || '',
        address: userData?.location?.address || '',
        typeOfBusiness: userData?.business?.typeOfBusiness || '',
        relationshipToBusiness:
          userData?.business?.relationshipToBusiness || '',
      })
    }
  }, [userData])

  const updateState = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    setLocalFields({
      ...localFields,
      [name]: value,
    })
  }

  const onEditSave = async () => {
    try {
      let updatedData = {}
      if (!isBusiness) {
        updatedData = {
          ...userData,
          fullName: localFields.fullName,
          email: localFields.email,
          company: {
            ...userData.company,
            jobTitle: localFields.jobTitle,
            companyName: localFields.currentCompany,
          },
          location: {
            ...userData.location,
            address: localFields.address,
          },
        }
      } else {
        updatedData = {
          ...userData,
          fullName: localFields.fullName,
          email: localFields.email,
          business: {
            ...userData.business,
            name: localFields.businessName,
            relationshipToBusiness: localFields.relationshipToBusiness,
            typeOfBusiness: localFields.typeOfBusiness,
          },
          location: {
            ...userData.location,
            address: localFields.address,
          },
        }
      }

      setValues({ ...updatedData })
      if (!showEditModal) {
        setLocalFields(initialState)
      }
      await network.post('/user/update', {
        ...updatedData,
      })
      setNotification({
        show: true,
        title: `Profile updated successfully`,
      })
    } catch (error) {
      console.error(error)
      setNotification({
        show: true,
        title: `Something went wrong.`,
      })
    } finally {
      setShowEditModal(false)
    }
  }

  return (
    <div className="exportContent">
      {authUser && showEditModal && (
        <Modal
          onClose={() => setShowEditModal(false)}
          open={showEditModal}
          disableBackdropClose={false}
          setOpen={() => setShowEditModal(false)}
          header="Edit Personal Info"
        >
          <div>
            <div className="min-w-256 p-2 custom-scroll-mini darker my-4">
              {!isBusiness ? (
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <NormalFormInput
                    name="fullName"
                    required
                    label="Full name"
                    value={localFields.fullName}
                    onChange={updateState}
                  />
                  <NormalFormInput
                    name="email"
                    required
                    label="Email"
                    value={localFields.email}
                    onChange={updateState}
                  />
                  <NormalFormInput
                    name="currentCompany"
                    label="Current Company"
                    value={localFields.currentCompany}
                    onChange={updateState}
                  />
                  <NormalFormInput
                    name="jobTitle"
                    label="Job Title"
                    value={localFields.jobTitle}
                    onChange={updateState}
                  />
                  <NormalFormInput
                    name="address"
                    label="Address"
                    value={localFields.address}
                    onChange={updateState}
                  />
                </div>
              ) : (
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <NormalFormInput
                    name="fullName"
                    required
                    label="Your Fullname"
                    value={localFields.fullName}
                    onChange={updateState}
                  />
                  <NormalFormInput
                    name="email"
                    required
                    label="Email"
                    value={localFields.email}
                    onChange={updateState}
                  />
                  <NormalFormInput
                    name="businessName"
                    required
                    label="Business Company"
                    value={localFields.businessName}
                    onChange={updateState}
                  />
                  <NormalFormInput
                    name="address"
                    label="Business address"
                    value={localFields.address}
                    onChange={updateState}
                  />
                  <Selector
                    list={[
                      { name: 'Test business 1' },
                      { name: 'Test business 2' },
                    ]}
                    selectedItem={localFields.typeOfBusiness}
                    placeholder="Select type of business"
                    label="Type of business"
                    required
                    onSelect={(type) =>
                      setLocalFields({
                        ...localFields,
                        typeOfBusiness: type.name,
                      })
                    }
                  />
                  <Selector
                    list={[
                      { name: 'Owner' },
                      { name: 'CEO' },
                      { name: 'Human Resources Manager' },
                      { name: 'Business Administrator' },
                    ]}
                    selectedItem={localFields.relationshipToBusiness}
                    required
                    label="Relationship to business"
                    onSelect={(type) =>
                      setLocalFields({
                        ...localFields,
                        relationshipToBusiness: type.name,
                      })
                    }
                    placeholder="Select relationship"
                  />
                </div>
              )}
            </div>

            <div className="mt-5 sm:mt-4 flex justify-end space-x-4 items-center">
              <Button gradient onClick={onEditSave} label="Save" />
            </div>
          </div>
        </Modal>
      )}

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

            {/* Edit button here */}

            {authUser && (
              <div className="absolute ml-2 top-0 p-4 right-0">
                <Button
                  label="Edit"
                  onClick={() => setShowEditModal(true)}
                  Icon={AiOutlineEdit}
                  size="sm"
                  invert
                  gradient
                />
              </div>
            )}

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
                      <p>{userData?.business?.name}</p>
                      <p className="ml-2 dark:text-gray-400 text-gray-500 text-xs  break-words w-96">
                        {userData?.business?.name ? '- ' : ''}
                        {location?.address ? `${location?.address}, ` : ''}
                        {location?.city ? `${location?.city}, ` : ''}{' '}
                        {location?.state ? `${location?.state}, ` : ''}{' '}
                        {location?.country}
                      </p>
                    </div>
                  ) : (
                    <div className="dark:text-white text-gray-900 text-base font-medium border-b border-gray-200 dark:border-gray-600 pb-4 ">
                      {userData?.company?.jobTitle}
                      <p className="ml-2 dark:text-gray-400 text-gray-500 text-xs  break-words w-96">
                        {userData?.company?.jobTitle ? '- ' : ''}
                        {userData?.company?.companyName ||
                          userData?.company?.currentCompany}
                      </p>
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
                    {isBusiness
                      ? userData?.business?.typeOfBusiness && (
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
                        )
                      : (userData?.company?.companyName ||
                          userData?.company?.currentCompany) && (
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
                    {isBusiness
                      ? userData?.business?.relationshipToBusiness && (
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
                        )
                      : (userData?.location?.address ||
                          userData?.location?.livesIn) && (
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
