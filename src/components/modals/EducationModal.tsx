import { IEducation, IModalProps } from 'interfaces/UniversalInterface'
import React, { Fragment, useEffect, useState } from 'react'
import { nanoid } from 'nanoid'
import { getAccessToken, network } from 'helpers'
import NormalFormInput from 'components/atoms/NormalFormInput'
import { isEmpty, map, remove, update } from 'lodash'
import Button from 'components/atoms/Button'
import { wait } from 'utils/wait'
import DatePicker from 'components/atoms/DatePicker'
import Divider from 'components/atoms/Divider'
import { BiTrashAlt } from 'react-icons/bi'
import TextButton from 'components/atoms/TextButton'

const initialState: {
  education: IEducation[]
  from: string
  to: string
  degree: string
  name: string
} = {
  education: [],
  from: '',
  to: '',
  degree: '',
  name: '',
}

const EducationModal = ({
  userData,
  onCancel,
  setUnsavedChanges,
  setValues,
  setShowUnsaveModal,
}: IModalProps) => {
  const { background } = userData || {}
  const { education = [] } = background || {}

  const [localFields, setLocalFields] = useState(initialState)

  useEffect(() => {
    if (!isEmpty(userData)) {
      setLocalFields((prev) => ({
        ...prev,
        education: [...education],
      }))
    }
  }, [])

  const addEducation = () => {
    const newEdObj: IEducation = {
      id: nanoid(6),
      from: localFields.from,
      to: localFields.to,
      degree: localFields.degree,
      name: localFields.name,
    }
    setLocalFields({
      ...initialState,
      education: [...localFields.education, newEdObj],
    })
  }
  const showContent: boolean =
    localFields.education && localFields.education.length > 0

  const [saving, setSaving] = useState(false)

  const token = getAccessToken()

  const onSave = async () => {
    try {
      setSaving(true)

      let updatedData = {
        ...userData,

        background: {
          ...background,
          education:
            localFields.education && localFields.education.length > 0
              ? [...localFields.education]
              : education,
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
      setUnsavedChanges(false)
      setShowUnsaveModal(false)
      wait(500).then(() => {
        setLocalFields({ ...initialState })
      })
    } catch (error) {
      console.error(error)
    } finally {
      setSaving(false)
    }
  }

  const onEducationRemove = (id: string) => {
    setUnsavedChanges(true)
    remove(localFields.education, (item) => item.id === id)
    setLocalFields({ ...localFields })
  }

  const onEducationSelectUpdate = (
    fieldName: string,
    name: string,
    idx: number
  ) => {
    setUnsavedChanges(true)
    update(localFields.education[idx], `${fieldName}`, () => name)
    setLocalFields({ ...localFields })
  }
  const getValue = (fieldName: string, idx: number): string => {
    // @ts-ignore
    return localFields.education[idx][fieldName]
  }

  const onEducationFieldUpdate = (
    e: React.ChangeEvent<HTMLInputElement>,
    idx: number
  ) => {
    const { value, name } = e.target
    setUnsavedChanges(true)
    update(localFields.education[idx], `${name}`, () => value)
    setLocalFields({ ...localFields })
  }

  return (
    <div>
      <div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-4">
          {localFields.education && localFields.education.length > 0 ? (
            <>
              {map(localFields.education, (_education, idx: number) => (
                <Fragment key={idx}>
                  <NormalFormInput
                    placeholder="Institution name"
                    required
                    value={getValue('name', idx)}
                    name="name"
                    label={'Institution name'}
                    onChange={(e) => onEducationFieldUpdate(e, idx)}
                  />
                  <NormalFormInput
                    name="degree"
                    required
                    value={getValue('degree', idx)}
                    label={'Degree'}
                    placeholder="Degree"
                    onChange={(e) => onEducationFieldUpdate(e, idx)}
                  />

                  <DatePicker
                    required
                    placeholder="Started from"
                    label={'Join date'}
                    date={getValue('joinDate', idx)}
                    setDate={(date: string) =>
                      onEducationSelectUpdate('joinDate', date, idx)
                    }
                  />
                  <DatePicker
                    required
                    placeholder="Left on"
                    label={'Leave date'}
                    date={getValue('leaveDate', idx)}
                    setDate={(date: string) =>
                      onEducationSelectUpdate('leaveDate', date, idx)
                    }
                  />

                  <div className="col-span-4 ">
                    <Divider
                      className="cursor-pointer hover:text-red-600 text-red-500"
                      withButton
                      Icon={BiTrashAlt}
                      onBtnClick={() => onEducationRemove(_education.id)}
                    />
                  </div>
                </Fragment>
              ))}
            </>
          ) : null}
        </div>
        <div className=" flex items-center justify-start">
          <TextButton
            text="Add new education"
            className="mx-auto"
            onClick={addEducation}
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

export default EducationModal
