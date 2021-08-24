import { IModalProps, ISkill } from 'interfaces/UniversalInterface'
import React, { useEffect, useState } from 'react'
import { nanoid } from 'nanoid'
import { useUserContext } from 'context/UserContext'
import { network } from 'helpers'
import { wait } from 'utils/wait'
import { isEmpty, map, remove } from 'lodash'
import Button from 'components/atoms/Button'
import NormalFormInput from 'components/atoms/NormalFormInput'
import { BiTrashAlt } from 'react-icons/bi'

const initialState: { skills: ISkill[]; skillText: string } = {
  skills: [],
  skillText: '',
}

const SkillsModal = ({
  userData,
  onCancel,
  setUnsavedChanges,
  setValues,
}: IModalProps) => {
  const { background } = userData || {}
  const { skills = [] } = background || {}

  const [localFields, setLocalFields] = useState(initialState)

  useEffect(() => {
    if (!isEmpty(background)) {
      setLocalFields((prev) => ({ ...prev, skills }))
    }
  }, [background])
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setLocalFields({ ...localFields, [name]: value })
  }

  const onSkillAdd = () => {
    const skill = {
      id: nanoid(6),
      name: localFields.skillText,
    }
    setLocalFields({
      ...localFields,
      skills: [...localFields.skills, skill],
      skillText: '',
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

  const onSkillRemove = (id: string) => {
    setUnsavedChanges(true)
    remove(localFields.skills, (item) => item.id === id)
    setLocalFields({ ...localFields })
  }
  return (
    <div>
      <div className="my-2">
        <div
          style={{ maxHeight: '15rem' }}
          className="overflow-y-auto  custom-scroll-mini darker"
        >
          {localFields.skills && localFields.skills.length > 0 && (
            <ul className="gap-y-6 list-disc py-4 ">
              {map(localFields.skills, (skill, idx: number) => {
                return (
                  <li
                    className="list-disc text-gray-900 on-hover-container p-4  relative dark:text-white flex items-center  cursor-pointer text-left"
                    key={skill.name + idx}
                  >
                    {skill.name}
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
      <div className="divider dark:divider mx-4 ">
        <h3 className="text-gray-900 dark:text-gray-500 mb-2">New Skill:</h3>
        <div className="flex items-center space-x-2">
          <NormalFormInput
            name="skillText"
            placeholder="Enter new skill"
            value={localFields.skillText}
            onChange={onChange}
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
  )
}

export default SkillsModal
