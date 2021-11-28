import { Transition } from '@headlessui/react'
import Button from 'components/atoms/Button'
import NormalFormInput from 'components/atoms/NormalFormInput'
import { useField } from 'formik'
import find from 'lodash/find'
import map from 'lodash/map'
import remove from 'lodash/remove'
import { nanoid } from 'nanoid'
import React, { useEffect, useState } from 'react'
import { MdCancel } from 'react-icons/md'

const FormTagsInput = ({
  name,
  className = '',
}: {
  name: string
  className?: string
}) => {
  const [tagField, setTagField] = useState('')
  const [field, meta, helpers] = useField(name)

  const [tags, setTags] = useState<{ name: string; id: string }[]>([
    ...field.value,
  ])

  const { setTouched, setError: $setError, setValue } = helpers

  const onAdd = () => {
    if (tagField.length >= 3) {
      const exist = find(
        tags,
        (d) => d.name.toLowerCase() === tagField.toLowerCase()
      )
      if (!exist) {
        setError('')
        tags.push({ name: tagField, id: nanoid(4) })
        setTags(tags)
        setValue(tags)
        setTouched(true)
        $setError(undefined)
        setTagField('')
      } else {
        setError(`Tag: ${tagField} already exists`)
      }
    } else {
      setError(`Tag must be at least 3 characters`)
    }
  }

  const [error, setError] = useState('')

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTagField(e.target.value)
    setError(``)
  }

  const onRemove = (tagId: string) => {
    remove(tags, (tag) => tag.id === tagId)
    setTags((prev) => [...prev])
  }

  return (
    <div className={className}>
      <>
        <div className="flex flex-col items-start gap-y-4">
          <div
            className={`flex ${
              error ? 'items-center' : 'items-end'
            } gap-x-4 w-full`}
          >
            <NormalFormInput
              error={error}
              label="Add Tags/Keywords"
              value={tagField}
              id="tags"
              placeholder="Enter tag"
              className="w-full"
              onChange={onChange}
            />
            <Button
              gradient
              size="lg"
              invert
              className=""
              onClick={onAdd}
              bgColor="pink"
              label={'+ Add'}
            />
          </div>
          <Transition
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
            show={tags && tags.length > 0}
          >
            <div className="gap-x-4 gap-y-4 flex items-center w-full flex-wrap">
              {map(tags, (tag: any, idx: number) => (
                <div
                  className="gradient-text on-hover-container border border-gray-200 dark:border-gray-600   px-3 py-2 text-xs rounded-md shadow-md cursor-pointer relative"
                  key={tag + '-' + idx}
                >
                  {tag.name}
                  <div
                    onClick={() => onRemove(tag.id)}
                    className="absolute on-hover-item  -top-2 -right-2  flex items-center"
                  >
                    <MdCancel
                      className="h-5 w-5 text-red-500"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              ))}
            </div>
          </Transition>
        </div>
      </>
    </div>
  )
}

export default FormTagsInput
