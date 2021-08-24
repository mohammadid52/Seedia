import NormalFormInput from 'components/atoms/NormalFormInput'
import Selector from 'components/atoms/Selector'
import { IExperience, IModalProps } from 'interfaces/UniversalInterface'
import { map, remove, update } from 'lodash'
import React, { Fragment, useState } from 'react'
import { nanoid } from 'nanoid'
import { yearList } from 'values/values'
import Divider from 'components/atoms/Divider'
import { BiTrashAlt } from 'react-icons/bi'
import { wait } from 'utils/wait'
import { useUserContext } from 'context/UserContext'
import { network } from 'helpers'
import Button from 'components/atoms/Button'

const initialState: { experiences: IExperience[] } = {
  experiences: [],
}

const ExperienceTwoModal = ({
  userData,
  onCancel,
  setUnsavedChanges,
}: IModalProps) => {
  const [localFields, setLocalFields] = useState(initialState)
  const { setValues } = useUserContext()
  const { background } = userData || {}
  const { experiences = [] } = background || {}
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
    return experiences[idx][fieldName]
  }

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
      delete updatedData._id

      setValues({ ...updatedData })

      await network.post('/user/update', {
        ...updatedData,
      })

      // add data to local state
      onCancel()
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

  return (
    <div>
      <div className="divider dark:divider">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {localFields.experiences && localFields.experiences.length > 0 ? (
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
                  <Selector
                    key="joinDate"
                    required
                    selectedItem={getValue('joinDate', idx)}
                    list={yearList}
                    label={'Join date'}
                    placeholder="Started from"
                    onSelect={(item) => {
                      onExperienceSelectUpdate('joinDate', item.name, idx)
                    }}
                  />
                  <Selector
                    key="leaveDate"
                    required
                    selectedItem={getValue('leaveDate', idx)}
                    list={yearList}
                    label={'Leave date'}
                    placeholder="Left on"
                    onSelect={(item) => {
                      onExperienceSelectUpdate('leaveDate', item.name, idx)
                    }}
                  />
                  <div className="col-span-2">
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
                  <div className="col-span-2 ">
                    <Divider
                      withButton
                      Icon={BiTrashAlt}
                      onBtnClick={() => onExperienceRemove(experience.id)}
                    />
                  </div>
                </Fragment>
              ))}
            </>
          ) : null}
          <div className="col-span-2">
            <Button
              className="mx-auto"
              onClick={addNewExperience}
              label="Add new experience"
              bgColor="yellow"
              size="sm"
            />
          </div>
        </div>
      </div>
      <div className="mt-5 sm:mt-4 flex justify-end space-x-4 items-center">
        <Button
          gradient
          loading={saving}
          disabled={saving}
          onClick={onSave}
          label="Save"
        />
      </div>
    </div>
  )
}

export default ExperienceTwoModal
