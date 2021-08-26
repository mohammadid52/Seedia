import Card from 'components/atoms/Card'

import Button from 'components/atoms/Button'
import { AiOutlineEdit } from 'react-icons/ai'
import Modal from 'components/atoms/Modal'
import { useState } from 'react'

import NormalFormInput from 'components/atoms/NormalFormInput'
import Selector from 'components/atoms/Selector'
import { network } from 'helpers'
import { useUserContext } from 'context/UserContext'
import { isAvailable } from 'utils/wait'
import { isEmpty } from 'lodash'
import { IParent } from 'interfaces/UniversalInterface'

const About = ({
  userData,
  authUser,
}: {
  userData: IParent
  authUser: boolean
}) => {
  const { setValues, values } = useUserContext()
  const [showModal, setShowModal] = useState(false)

  const { company = {}, location = {} } = isEmpty(values) ? {} : values

  const initialState = {
    currentCompany: company?.currentCompany || company.latestCompany || '',
    previousCompany: company?.previousCompany || '',
    livesIn: location?.livesIn || '',
    maritalStatus: userData?.maritalStatus || 'Unmarried',
  }
  const [saving, setSaving] = useState(false)

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
      const { currentCompany, previousCompany, maritalStatus, livesIn } =
        localFields

      const updatedData = {
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
      delete updatedData._id
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

  return (
    <>
      <Modal
        onClose={onCancel}
        open={showModal}
        disableBackdropClose={false}
        setOpen={() => setShowModal(false)}
        header="Edit About"
      >
        <div>
          <div className="min-w-64 max-w-64 overflow-y-auto p-2 custom-scroll-mini darker my-4">
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
                  setLocalFields({ ...localFields, maritalStatus: status.name })
                }
                selectedItem={localFields.maritalStatus}
                list={[
                  { id: '0', name: 'Married' },
                  { id: '1', name: 'Single' },
                ]}
              />
            </div>
          </div>

          <div className="mt-5 sm:mt-4 flex justify-end space-x-4 items-center">
            <Button gradient onClick={onSave} label="Save" />
          </div>
        </div>
      </Modal>
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
          <div className="space-y-4">
            <div className="current-company">
              <span className="title block text-gray-400 text-sm">
                Current company
              </span>
              <span className="data block text-sm  text-gray-900 dark:text-white ">
                {company.currentCompany || company.latestCompany}
              </span>
            </div>
            <div className="current-company">
              <span className="title block text-gray-400 text-sm">
                Previous company
              </span>
              <span className="data block text-sm  text-gray-900 dark:text-white">
                {isAvailable('previousCompany', company)
                  ? company.previousCompany
                  : '-'}
              </span>
            </div>

            <div className="current-company">
              <span className="title block text-gray-400 text-sm">
                Lives In
              </span>
              <span className="data block text-sm  text-gray-900 dark:text-white">
                {isAvailable('livesIn', location) ? location.livesIn : '-'}
              </span>
            </div>
            <div className="current-company">
              <span className="title block text-gray-400 text-sm">
                Marital Status
              </span>
              <span className="data block text-sm  text-gray-900 dark:text-white">
                {isAvailable('maritalStatus', userData)
                  ? userData.maritalStatus
                  : '-'}
              </span>
            </div>
          </div>
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
