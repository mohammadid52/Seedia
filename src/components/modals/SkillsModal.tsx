import Button from 'components/atoms/Button'
import NormalFormInput from 'components/atoms/NormalFormInput'
import Selector from 'components/atoms/Selector'
import { network } from 'helpers'
import {
  IModalProps,
  ISkill,
  SkillStrength,
} from 'interfaces/UniversalInterface'
import { isEmpty, map, remove } from 'lodash'
import { nanoid } from 'nanoid'
import React, { useEffect, useState } from 'react'
import { BiTrashAlt } from 'react-icons/bi'
import { wait } from 'utils/wait'
import { skillsStrength } from 'values/values'

const initialState: {
  skills: ISkill[]
  skillText: string
  skillStrength: SkillStrength
} = {
  skills: [],
  skillText: '',
  skillStrength: 'Average',
}

const SkillsModal = ({
  userData,
  onCancel,
  setUnsavedChanges,
  setValues,
  setShowUnsaveModal,
}: IModalProps) => {
  const { background } = userData || {}
  const { skills = [] } = background || {}

  const [localFields, setLocalFields] = useState({ ...initialState })

  useEffect(() => {
    if (!isEmpty(userData)) {
      setLocalFields({
        skillText: '',
        skills: [...skills],
        skillStrength: 'Average',
      })
    }
  }, [])
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUnsavedChanges(true)
    const { name, value } = e.target
    setLocalFields({ ...localFields, [name]: value })
  }
  const onStrengthChange = (item: any) => {
    setUnsavedChanges(true)

    setLocalFields({ ...localFields, skillStrength: item.name })
  }

  const onSkillAdd = () => {
    const skill = {
      id: nanoid(6),
      name: localFields.skillText,
      strength: localFields.skillStrength,
    }
    setLocalFields({
      ...localFields,
      skills: [...localFields.skills, skill],
      skillText: '',
      skillStrength: 'Average',
    })
  }

  const [saving, setSaving] = useState(false)
  const onSave = async () => {
    try {
      setSaving(true)

      let updatedData = {
        ...userData,

        background: {
          ...background,
          skills:
            localFields.skills && localFields.skills.length > 0
              ? [...localFields.skills]
              : skills,
        },
      }
      //@ts-ignore
      delete updatedData.password

      setValues({ ...updatedData })

      await network.post('/user/update', {
        ...updatedData,
      })

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

  const onSkillRemove = (id: string) => {
    setUnsavedChanges(true)
    remove(localFields.skills, (item) => item.id === id)
    setLocalFields({ ...localFields })
  }

  return (
    <div className="min-h-156 relative min-w-160 overflow-x-hidden">
      <div className="my-2">
        <div className="overflow-y-auto max-h-112  custom-scroll-mini darker">
          {localFields.skills && localFields.skills.length > 0 && (
            <ul className="gap-6 grid grid-cols-3 list-disc py-4 ">
              {map(localFields.skills, (skill, idx: number) => {
                return (
                  <li
                    className="border border-gray-200 rounded-lg dark:border-gray-700 text-gray-900 on-hover-container p-4  relative dark:text-white flex items-center  cursor-pointer text-left"
                    key={skill.name + idx}
                  >
                    {skill.name}{' '}
                    <span className="text-sm text-gray-400 dark:text-gray-500 ml-2">
                      ({skill?.strength || 'Average'})
                    </span>
                    <span
                      onClick={() => onSkillRemove(skill.id)}
                      className="absolute on-hover-item pr-4 right-0"
                    >
                      <BiTrashAlt className="hover:bg-gray-600 p-2 h-8 w-8  rounded-md text-red-500" />
                    </span>
                  </li>
                )
              })}
            </ul>
          )}
        </div>
      </div>
      <div className="absolute bottom-0 right-0 left-0">
        <div className="divider dark:divider mx-4 ">
          <h3 className="text-gray-900 dark:text-gray-500 mb-2">New Skill:</h3>
          <div className="flex items-center space-x-2">
            <NormalFormInput
              name="skillText"
              placeholder="Enter new skill"
              value={localFields.skillText}
              onChange={onChange}
            />
            <Selector
              list={skillsStrength}
              placeholder="Select strength"
              onSelect={onStrengthChange}
              selectedItem={localFields.skillStrength}
            />

            <Button
              onClick={onSkillAdd}
              disabled={localFields.skillText.length <= 3}
              gradient
              label="Add"
            />
          </div>
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
    </div>
  )
}

export default SkillsModal
