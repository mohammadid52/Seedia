import NormalFormInput from 'components/atoms/NormalFormInput'

import { IAward, IModalProps } from 'interfaces/UniversalInterface'
import { isEmpty, map, remove } from 'lodash'
import React, { useEffect, useState } from 'react'
import { BiTrashAlt } from 'react-icons/bi'
import { nanoid } from 'nanoid'
import { network } from 'helpers'
import { wait } from 'utils/wait'
import Button from 'components/atoms/Button'

const initialState: {
  awards: IAward[]
  awardName: string
  awardFor: string
} = {
  awards: [],
  awardName: '',
  awardFor: '',
}

const AwardsModal = ({
  userData,
  onCancel,
  setUnsavedChanges,
  setValues,
  setShowUnsaveModal,
}: IModalProps) => {
  const { background } = userData || {}
  const { awards = [] } = background || {}
  const [localFields, setLocalFields] = useState(initialState)
  useEffect(() => {
    if (!isEmpty(userData)) {
      setLocalFields((prev) => ({ ...prev, awards: [...awards] }))
    }
  }, [])

  const addAward = () => {
    const newAward: IAward = {
      id: nanoid(6),
      awardName: localFields.awardName,
      awardFor: localFields.awardFor,
    }
    setLocalFields({
      ...localFields,
      awards: [...localFields.awards, newAward],
      awardName: '',
      awardFor: '',
    })
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setLocalFields({ ...localFields, [name]: value })
  }

  const [saving, setSaving] = useState(false)

  const onSave = async () => {
    try {
      setSaving(true)

      let updatedData = {
        ...userData,

        background: {
          ...background,
          awards:
            localFields.awards && localFields.awards.length > 0
              ? [...localFields.awards]
              : awards,
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

  const onAwardRemove = (id?: string) => {
    setUnsavedChanges(true)
    remove(localFields.awards, (item) => item.id === id)
    setLocalFields({ ...localFields })
  }

  return (
    <div>
      <div className="overflow-y-auto min-w-132  custom-scroll-mini darker my-4">
        {localFields.awards && localFields.awards.length > 0 && (
          <ol className="space-y-6 list-disc p-4  ">
            {map(localFields.awards, (award, awardIdx) => (
              <li
                className="flex items-center relative on-hover-container text-gray-900 dark:text-white  cursor-pointer text-left"
                key={award.id}
              >
                <div className="w-96">
                  <span className="block truncate text-gray-900 dark:text-white text-lg font-medium">
                    {award.awardName}
                  </span>
                  <span className="block text-gray-600 dark:text-gray-500 text-sm font-medium">
                    {award.awardFor}
                  </span>
                </div>

                <span
                  onClick={() => onAwardRemove(award.id)}
                  className="absolute on-hover-item pr-4 right-0"
                >
                  <BiTrashAlt className="hover:bg-gray-700 p-2 h-8 w-8  rounded-md text-red-500" />
                </span>
              </li>
            ))}
          </ol>
        )}
      </div>
      <div className="">
        <h3 className="text-gray-900 dark:text-gray-500 mb-2">New Award:</h3>
        <div className="flex border border-gray-200 dark:border-gray-700 p-4 rounded-md items-center flex-col space-y-4">
          <NormalFormInput
            placeholder="Enter award name"
            value={localFields.awardName}
            onChange={onChange}
            fullWidth
            name="awardName"
          />
          <NormalFormInput
            placeholder="What's this award for?"
            value={localFields.awardFor}
            onChange={onChange}
            fullWidth
            name="awardFor"
          />
          <Button
            onClick={addAward}
            size="sm"
            gradient
            label="Add"
            disabled={
              localFields.awardName.length <= 3 ||
              localFields.awardFor.length <= 3
            }
            fullWidth
          />
        </div>
      </div>
      <div className="mt-5 sm:mt-4 flex justify-end space-x-4 items-center">
        <Button
          gradient
          label="Save"
          onClick={onSave}
          disabled={saving}
          loading={saving}
        />
      </div>
    </div>
  )
}

export default AwardsModal
