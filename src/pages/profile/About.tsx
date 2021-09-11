//@ts-nocheck
import Card from 'components/atoms/Card'

import Button from 'components/atoms/Button'
import { AiOutlineEdit } from 'react-icons/ai'
import Modal from 'components/atoms/Modal'
import { useEffect, useState } from 'react'

import NormalFormInput from 'components/atoms/NormalFormInput'
import Selector from 'components/atoms/Selector'
import { network } from 'helpers'
import { useUserContext } from 'context/UserContext'
import { isEmpty } from 'lodash'
import { IParent } from 'interfaces/UniversalInterface'

const About = ({
  userData,
  authUser,
}: {
  userData?: IParent
  authUser: boolean
}) => {
  const { setValues, values } = useUserContext()
  const [showModal, setShowModal] = useState(false)

  const {
    company = {},
    location = {},
    business = {},
  } = isEmpty(values) ? {} : values

  const businessInitState = {
    businessName: '',
    address: '',
    email: '',
    additionalInfo: '',
  }

  const companyInitState = {
    currentCompany: '',
    previousCompany: '',
    livesIn: '',
    maritalStatus: '',
  }

  const accountType = userData?.other?.accountType
  const isBusiness = accountType === 'business'
  useEffect(() => {
    if (!isEmpty(userData)) {
      if (!isBusiness) {
        setLocalFields({
          currentCompany:
            company?.currentCompany || company.latestCompany || '',
          previousCompany: company?.previousCompany || '',
          livesIn: location?.livesIn || '',
          maritalStatus: userData?.maritalStatus || 'Unmarried',
        })
      } else {
        setLocalFields({
          businessName: business?.name,
          address: location?.address,
          email: business?.email,
          additionalInfo: business?.additionalInfo,
        })
      }
    }
  }, [])

  const [saving, setSaving] = useState(false)

  const initialState = !isBusiness ? companyInitState : businessInitState

  const [localFields, setLocalFields] = useState(initialState)

  const updateState = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setUnsavedChanges(true)
    setLocalFields({
      ...localFields,
      [name]: value,
    })
  }

  const onSave = async () => {
    try {
      setSaving(true)
      // @ts-ignore
      const {
        currentCompany,
        address,
        previousCompany,
        maritalStatus,
        businessName,
        livesIn,
        email,
        additionalInfo,
      } = localFields

      let updatedData = { ...userData }

      if (!isBusiness) {
        updatedData = {
          ...userData,
          maritalStatus,
          company: {
            ...company,
            currentCompany,
            previousCompany,
          },
          location: {
            ...location,
            livesIn,
          },
        }
      } else {
        updatedData = {
          ...userData,

          business: {
            ...business,
            businessName,
            email,
            additionalInfo,
          },
          location: {
            ...location,
            address,
          },
        }
      }
      //@ts-ignore
      delete updatedData.password
      setValues({ ...updatedData })

      await network.post('/user/update', {
        ...updatedData,
      })

      // add data to local state
      setShowModal(false)
      setUnsavedChanges(false)
      if (!showModal) {
        setLocalFields(initialState)
      }
    } catch (error) {
      console.error(error)
    } finally {
      setSaving(false)
    }
  }

  const onCancel = () => {
    if (unsavedChanges) {
      setShowUnsaveModal(true)
    } else {
      setShowUnsaveModal(false)

      setUnsavedChanges(false)
      if (!showModal) {
        setLocalFields(initialState)
      }
    }
    setShowModal(false)
  }
  const [unsavedChanges, setUnsavedChanges] = useState(false)

  const [showUnsaveModal, setShowUnsaveModal] = useState(false)

  const KeyValue = ({ label, text }: { label: string; text: string }) => {
    return (
      <div id={label}>
        <span className="title block text-gray-400 text-sm">{label}</span>
        <span
          title={text}
          className="truncate data block text-sm  text-gray-900 dark:text-white"
        >
          {text}
        </span>
      </div>
    )
  }

  return (
    <>
      {showModal && (
        <Modal
          onClose={onCancel}
          open={showModal}
          disableBackdropClose={false}
          setOpen={() => setShowModal(false)}
          header="Edit About"
        >
          <div>
            <div className="min-w-256  overflow-y-auto p-2 custom-scroll-mini darker my-4">
              {!isBusiness ? (
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <NormalFormInput
                    name="currentCompany"
                    label="Current company name"
                    value={localFields.currentCompany}
                    onChange={updateState}
                  />
                  <NormalFormInput
                    name="previousCompany"
                    label="Previous company name"
                    value={localFields.previousCompany}
                    onChange={updateState}
                  />
                  <NormalFormInput
                    name="livesIn"
                    label="Lives in"
                    value={localFields.livesIn}
                    onChange={updateState}
                  />
                  <Selector
                    label="Marital Status"
                    onSelect={(status) =>
                      setLocalFields({
                        ...localFields,
                        maritalStatus: status.name,
                      })
                    }
                    selectedItem={localFields.maritalStatus}
                    list={[
                      { id: '0', name: 'Married' },
                      { id: '1', name: 'Single' },
                    ]}
                  />
                </div>
              ) : (
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <NormalFormInput
                    name="businessName"
                    label="Business name"
                    value={localFields.businessName}
                    onChange={updateState}
                  />
                  <NormalFormInput
                    name="address"
                    label="Business address"
                    value={localFields.address}
                    onChange={updateState}
                  />
                  <NormalFormInput
                    name="email"
                    label="Business email"
                    value={localFields.email}
                    onChange={updateState}
                  />
                  <NormalFormInput
                    name="email"
                    label="Additional info"
                    value={localFields.additionalInfo}
                    onChange={updateState}
                  />
                </div>
              )}
            </div>

            <div className="mt-5 sm:mt-4 flex justify-end space-x-4 items-center">
              <Button gradient onClick={onSave} label="Save" />
            </div>
          </div>
        </Modal>
      )}
      <Card
        cardTitle="About"
        withCardHeadings={
          authUser && (
            <>
              <Button
                secondary
                invert
                bgColor="gray"
                onClick={() => setShowModal(true)}
                Icon={AiOutlineEdit}
                size="sm"
                label={'Edit'}
              />
            </>
          )
        }
        content={
          !isBusiness ? (
            <div className="space-y-4">
              <KeyValue
                label="Current company"
                text={company?.currentCompany}
              />
              <KeyValue
                label="Previous company"
                text={company.previousCompany}
              />
              <KeyValue label="Lives In" text={location?.livesIn} />
              <KeyValue label="Marital Status" text={userData?.maritalStatus} />
            </div>
          ) : (
            <div className="space-y-4">
              <KeyValue label="Business name" text={business?.name} />
              <KeyValue label="Address" text={location?.address} />
              <KeyValue label="Business email" text={business?.email} />
              <KeyValue
                label="Additional info"
                text={business?.additionalInfo}
              />
            </div>
          )
        }
      />
      <Modal
        hideCloseBtn
        header="Discard changes"
        open={showUnsaveModal}
        setOpen={setShowUnsaveModal}
      >
        <>
          <h1 className="text-lg dark:text-white text-gray-900 min-w-96">
            You have unsaved changes
          </h1>
          <p className="text-gray-500 ">Do you want to save it?</p>

          <div className="mt-5 sm:mt-4 flex justify-end space-x-4 items-center">
            <Button
              gradient
              onClick={() => {
                setShowUnsaveModal(false)
                setShowModal(true)
              }}
              invert
              label="No thanks"
            />
            <Button
              gradient
              label="Discard"
              onClick={() => {
                setShowUnsaveModal(false)
                setLocalFields(initialState)
              }}
              loading={saving}
            />
          </div>
        </>
      </Modal>
    </>
  )
}

export default About
