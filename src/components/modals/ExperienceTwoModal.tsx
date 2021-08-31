import NormalFormInput from 'components/atoms/NormalFormInput'
import { IExperience, IModalProps } from 'interfaces/UniversalInterface'
import { isEmpty, map, remove, update } from 'lodash'
import React, { Fragment, useEffect, useState } from 'react'
import { nanoid } from 'nanoid'
import Divider from 'components/atoms/Divider'
import { BiTrashAlt } from 'react-icons/bi'
import { wait } from 'utils/wait'
import { getAccessToken, network } from 'helpers'
import Button from 'components/atoms/Button'
import DatePicker from 'components/atoms/DatePicker'
import TextButton from 'components/atoms/TextButton'

const initialState: { experiences: IExperience[] } = {
  experiences: [],
}

const ExperienceTwoModal = ({
  userData,
  onCancel,
  setValues,
  setUnsavedChanges,
  setShowUnsaveModal,
}: IModalProps) => {
  const [localFields, setLocalFields] = useState(initialState)

  const { background } = userData || {}
  const { experiences = [] } = background || {}

  useEffect(() => {
    if (!isEmpty(userData)) {
      setLocalFields({ experiences: [...experiences] })
    }
  }, [])
  const addNewExperience = () => {
    const newExperience: IExperience = {
      id: nanoid(6),
      jobTitle: '',
      companyName: '',
      joinDate: '',
      leaveDate: '',
      description: '',
    }
    setLocalFields({
      ...localFields,
      experiences: [...localFields.experiences, newExperience],
    })
  }

  const onExperienceFieldUpdate = (
    e: React.ChangeEvent<HTMLInputElement>,
    idx: number
  ) => {
    const { value, id } = e.target
    setUnsavedChanges(true)
    update(localFields.experiences[idx], `${id}`, () => value)
    setLocalFields({ ...localFields })
  }

  const onExperienceSelectUpdate = (
    fieldName: string,
    name: string,
    idx: number
  ) => {
    setUnsavedChanges(true)
    update(localFields.experiences[idx], `${fieldName}`, () => name)
    setLocalFields({ ...localFields })
  }

  const getValue = (fieldName: string, idx: number): string => {
    // @ts-ignore
    return localFields.experiences[idx][fieldName]
  }
  const token = getAccessToken()

  const onExperienceRemove = (id: string) => {
    setUnsavedChanges(true)
    remove(localFields.experiences, (item) => item.id === id)
    setLocalFields({ ...localFields })
  }
  const [saving, setSaving] = useState(false)
  const onSave = async () => {
    try {
      setSaving(true)
      const { experiences } = localFields

      let updatedData = {
        ...userData,

        background: {
          ...background,
          experiences:
            localFields.experiences && localFields.experiences.length > 0
              ? [...localFields.experiences]
              : experiences,
        },
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

      // add data to local state
      onCancel()
      setShowUnsaveModal(false)
      setUnsavedChanges(false)
      wait(500).then(() => {
        setLocalFields({ ...initialState })
      })
    } catch (error) {
      console.error(error)
    } finally {
      setSaving(false)
    }
  }

  const showContent: boolean =
    localFields.experiences && localFields.experiences.length > 0

  return (
    <div className="">
      <div className="">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-4">
          {showContent ? (
            <>
              {map(localFields.experiences, (experience, idx: number) => (
                <Fragment key={idx}>
                  <NormalFormInput
                    id={`jobTitle`}
                    required
                    name="jobTitle"
                    value={getValue('jobTitle', idx)}
                    label={'Job title'}
                    placeholder="What was/is your role in the company? "
                    onChange={(e) => onExperienceFieldUpdate(e, idx)}
                  />
                  <NormalFormInput
                    id="companyName"
                    required
                    name="companyName"
                    value={getValue('companyName', idx)}
                    label={'Company name'}
                    placeholder="What was/is the company name? "
                    onChange={(e) => onExperienceFieldUpdate(e, idx)}
                  />

                  <DatePicker
                    required
                    placeholder="Started from"
                    label={'Join date'}
                    date={getValue('joinDate', idx)}
                    setDate={(date: string) =>
                      onExperienceSelectUpdate('joinDate', date, idx)
                    }
                  />
                  <DatePicker
                    required
                    placeholder="Left on"
                    label={'Leave date'}
                    date={getValue('leaveDate', idx)}
                    setDate={(date: string) =>
                      onExperienceSelectUpdate('leaveDate', date, idx)
                    }
                  />

                  <div className="col-span-4">
                    <NormalFormInput
                      id="description"
                      textarea
                      value={getValue('description', idx)}
                      name="description"
                      label={'Description'}
                      placeholder="Add a short description"
                      onChange={(e) => onExperienceFieldUpdate(e, idx)}
                    />
                  </div>
                  <div className="col-span-4">
                    <Divider
                      className="cursor-pointer hover:text-red-600 text-red-500"
                      withButton
                      Icon={BiTrashAlt}
                      onBtnClick={() => onExperienceRemove(experience.id)}
                    />
                  </div>
                </Fragment>
              ))}
            </>
          ) : null}
        </div>
        <div className=" flex items-center justify-start">
          <TextButton
            text="Add new experience"
            className="mx-auto"
            onClick={addNewExperience}
          />
        </div>
      </div>
      <div className="mt-5 sm:mt-4 flex justify-end space-x-4 items-center">
        <Button
          gradient
          loading={saving}
          disabled={saving}
          onClick={onSave}
          hidden={!showContent}
          label="Save"
        />
      </div>
    </div>
  )
}

export default ExperienceTwoModal
