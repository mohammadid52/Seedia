import Button from 'components/atoms/Button'
import Card from 'components/atoms/Card'
import DatePicker from 'components/atoms/DatePicker'
import Modal from 'components/atoms/Modal'
import NormalFormInput from 'components/atoms/NormalFormInput'
import { network } from 'helpers'
import { IParent } from 'interfaces/UniversalInterface'
import { isEmpty } from 'lodash'
import moment from 'moment'
import { nanoid } from 'nanoid'
import React, { useEffect, useState } from 'react'
import { AiOutlineEdit } from 'react-icons/ai'

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

const AdditionalInfo = ({
  secondary,
  userData,
  authUser,
  refetch,
}: {
  secondary: boolean
  authUser: boolean
  userData: IParent
  refetch: any
}) => {
  const [showModal, setShowModal] = useState(false)

  const initialState: any = {
    birthDate: '',
    twitter: '',
    facebook: '',
    instagram: '',
    github: '',
  }

  const [localFields, setLocalFields] = useState(initialState)

  useEffect(() => {
    if (authUser && !isEmpty(userData)) {
      function getUrl(type: string) {
        if (userData?.socialMedia) {
          return userData?.socialMedia.find((s) => s.name === type).url
        }
      }
      setLocalFields({
        ...localFields,
        birthDate: userData?.birthDate ? new Date(userData?.birthDate) : '',
        twitter: getUrl('twitter') || '',
        facebook: getUrl('facebook') || '',
        instagram: getUrl('instagram') || '',
        github: getUrl('github') || '',
      })
    }
  }, [authUser, userData])

  const onCancel = () => {
    if (unsavedChanges) {
    } else {
      setUnsavedChanges(false)
      if (!showModal) {
        setLocalFields(initialState)
      }
    }
    setShowModal(false)
  }
  const [unsavedChanges, setUnsavedChanges] = useState(false)

  const updateState = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setUnsavedChanges(true)
    setLocalFields({
      ...localFields,
      [name]: value,
    })
  }

  const [saving, setSaving] = useState(false)

  const onSave = async () => {
    try {
      setSaving(true)

      let updatedData: IParent = {
        ...userData,
        birthDate: localFields?.birthDate,
        socialMedia: [
          localFields?.twitter && {
            id: nanoid(24),
            name: 'twitter',
            url: localFields?.twitter,
          },
          localFields?.facebook && {
            id: nanoid(24),
            name: 'facebook',
            url: localFields?.facebook,
          },
          localFields?.instagram && {
            id: nanoid(24),
            name: 'instagram',
            url: localFields?.instagram,
          },
          localFields?.github && {
            id: nanoid(24),
            name: 'github',
            url: localFields?.github,
          },
        ].filter(Boolean),
      }

      await network.post('/user/update', {
        ...updatedData,
      })

      refetch()

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

  return (
    <>
      {authUser && showModal && (
        <Modal
          onClose={onCancel}
          open={showModal}
          disableBackdropClose={false}
          setOpen={() => setShowModal(false)}
          header="Edit Additional Info"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <DatePicker
              placeholder="1/1/2001"
              maxDate={new Date()}
              additionanProps={{
                peekNextMonth: true,
                showMonthDropdown: true,
                showYearDropdown: true,
                dropdownMode: 'select',
              }}
              minDate={new Date().setFullYear(1930)}
              label={'Add your birthdate'}
              showMonthYearPicker={false}
              date={localFields.birthDate}
              setDate={(date: string) =>
                setLocalFields({ ...localFields, birthDate: date })
              }
            />

            <NormalFormInput
              name="twitter"
              label="Add twitter handle id"
              placeholder="your twitter handle"
              value={localFields.twitter}
              onChange={updateState}
            />

            <NormalFormInput
              name="facebook"
              label="Add facebook handle id"
              placeholder="your facebook handle"
              value={localFields.facebook}
              onChange={updateState}
            />

            <NormalFormInput
              name="instagram"
              label="Add instagram handle id"
              placeholder="your instagram handle"
              value={localFields.instagram}
              onChange={updateState}
            />

            <NormalFormInput
              name="github"
              label="Add github handle id"
              placeholder="your github handle"
              value={localFields.github}
              onChange={updateState}
            />
          </div>
          <div className="mt-5 sm:mt-4 flex justify-end space-x-4 items-center">
            <Button gradient onClick={onSave} loading={saving} label="Save" />
          </div>
        </Modal>
      )}

      <Card
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
        secondary={secondary}
        cardTitle="Additional Info"
        content={
          <div className="space-y-4">
            <KeyValue
              label="Birthdate"
              text={moment(userData?.birthDate).format('LL')}
            />
            {userData?.socialMedia &&
              userData?.socialMedia?.map((media) => (
                <KeyValue key={media.id} label={media.name} text={media.url} />
              ))}
          </div>
        }
      />
    </>
  )
}

export default AdditionalInfo
