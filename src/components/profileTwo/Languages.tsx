import { useEffect, useState } from 'react'
import Button from 'components/atoms/Button'
import Card from 'components/atoms/Card'
import Modal from 'components/atoms/Modal'
import NormalFormInput from 'components/atoms/NormalFormInput'
import Selector from 'components/atoms/Selector'
import { ILanguage, IParent } from 'interfaces/UniversalInterface'
import { isEmpty, map, remove } from 'lodash'
import { AiOutlineEdit } from 'react-icons/ai'
import { BiTrashAlt } from 'react-icons/bi'
import EmptyState from 'components/atoms/EmptyState'
import { PlusIcon } from '@heroicons/react/solid'
import { useUserContext } from 'context/UserContext'
import { nanoid } from 'nanoid'
import { network } from 'helpers'
import { wait } from 'utils/wait'

const languageKnownLevel = [
  { name: 'Beginner', id: '1' },
  { name: 'Intermediate', id: '2' },
  { name: 'Fluent', id: '3' },
]

const initialState: {
  languages: ILanguage[]
  langName: string
  langLevel: string
} = {
  languages: [],
  langName: '',
  langLevel: languageKnownLevel[1].name,
}

const Languages = ({ userData }: { userData?: IParent }) => {
  const [showModal, setShowModal] = useState(false)

  const { background } = userData || {}
  const { languages = [] } = background || {}

  const [localFields, setLocalFields] = useState(initialState)

  useEffect(() => {
    if (!isEmpty(background)) {
      setLocalFields((prev) => ({
        ...prev,
        languages,
        langLevel: languageKnownLevel[1].name,
      }))
    }
  }, [background])

  const addLanguage = () => {
    const newLangauge: ILanguage = {
      id: nanoid(6),
      langName: localFields.langName,
      langLevel: localFields.langLevel,
    }
    setLocalFields({
      ...localFields,
      languages: [...localFields.languages, newLangauge],
      langName: '',
      langLevel: '',
    })
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setLocalFields({ ...localFields, [name]: value })
  }

  const [unsavedChanges, setUnsavedChanges] = useState(false)

  const [showUnsaveModal, setShowUnsaveModal] = useState(false)

  const [saving, setSaving] = useState(false)
  const { setValues } = useUserContext()

  const onSave = async () => {
    try {
      setSaving(true)

      let updatedData = {
        ...userData,

        background: {
          ...background,
          languages:
            localFields.languages && localFields.languages.length > 0
              ? [...localFields.languages]
              : languages,
        },
      }
      //@ts-ignore
      delete updatedData._id

      setValues({ ...updatedData })

      await network.post('/user/update', {
        ...updatedData,
      })

      // add data to local state
      setShowModal(false)
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
  const onCancel = () => {
    if (unsavedChanges) {
      setShowUnsaveModal(true)
    } else {
      setShowUnsaveModal(false)

      setUnsavedChanges(false)
      wait(500).then(() => {
        setLocalFields({ ...initialState })
      })
    }
    setShowModal(false)
  }

  const onLanguageRemove = (id: string) => {
    setUnsavedChanges(true)
    remove(localFields.languages, (item) => item.id === id)
    setLocalFields({ ...localFields })
  }

  const onLanguageLevelUpdate = (item: any) => {
    setUnsavedChanges(true)

    setLocalFields({ ...localFields, langLevel: item.name })
  }

  return (
    <>
      <Modal
        open={showModal}
        onClose={onCancel}
        setOpen={setShowModal}
        header="Edit Languages"
      >
        <div>
          <div
            style={{
              maxHeight: '15rem',
              minHeight: '20rem',
            }}
            className="overflow-y-auto min-w-132  custom-scroll-mini darker my-4"
          >
            {localFields.languages && localFields.languages.length > 0 && (
              <ol className="space-y-6 list-disc p-4 ">
                {map(localFields.languages, (lang, langIdx) => (
                  <li
                    className="flex items-center on-hover-container relative text-gray-900 dark:text-white  cursor-pointer text-left"
                    key={lang.id}
                  >
                    <div className="">
                      <span className="block text-gray-900 dark:text-white text-lg font-medium">
                        {lang.langName}
                      </span>
                      <span className="block text-gray-600 dark:text-gray-500 text-sm font-medium">
                        {lang.langLevel}
                      </span>
                    </div>

                    <span
                      onClick={() => onLanguageRemove(lang.id)}
                      className="absolute on-hover-item  pr-4 right-0"
                    >
                      <BiTrashAlt className="hover:bg-gray-700 p-2 h-8 w-8  rounded-md text-red-500" />
                    </span>
                  </li>
                ))}
              </ol>
            )}
          </div>
          <div className="">
            <h3 className="text-gray-900 dark:text-gray-500 mb-2">
              New Language:
            </h3>
            <div className="flex border border-gray-200 dark:border-gray-700 p-4 rounded-md items-center flex-col space-y-2">
              <div className="flex items-center gap-x-2">
                <NormalFormInput
                  placeholder="Enter new language"
                  value={localFields.langName}
                  onChange={onChange}
                  name="langName"
                  fullWidth
                />

                <Selector
                  list={languageKnownLevel}
                  placeholder="Select level"
                  onSelect={onLanguageLevelUpdate}
                  selectedItem={localFields.langLevel}
                />
              </div>
              <Button
                onClick={addLanguage}
                disabled={
                  localFields.langName.length <= 3 || !localFields.langLevel
                }
                size="sm"
                gradient
                label="Add"
                fullWidth
              />
            </div>
          </div>
          <div className="mt-5 sm:mt-4 flex justify-end space-x-4 items-center">
            <Button
              disabled={saving}
              loading={saving}
              onClick={onSave}
              gradient
              label="Save"
            />
          </div>
        </div>
      </Modal>
      <Card
        secondary
        withCardHeadings={
          languages &&
          languages.length > 0 && (
            <>
              <Button
                secondary
                onClick={() => setShowModal(true)}
                className="mr-3"
                invert
                bgColor="gray"
                Icon={AiOutlineEdit}
                size="sm"
                label={'Edit'}
              />
            </>
          )
        }
        id="language"
        cardTitle="Languages"
        content={
          <div
            style={{ maxHeight: '15rem', minHeight: '20rem' }}
            className="overflow-y-auto  custom-scroll-mini"
          >
            <ol className="space-y-6 list-disc px-8 py-4 ">
              {languages && languages.length > 0 ? (
                map(languages, (lang, awardIdx) => (
                  <li
                    className="text-gray-900 dark:text-white  cursor-pointer text-left"
                    key={awardIdx}
                  >
                    <span className="block text-gray-900 dark:text-white text-lg font-medium">
                      {lang.langName}
                    </span>
                    <span className="block text-gray-600 dark:text-gray-500 text-sm font-medium">
                      {lang.langLevel}
                    </span>
                  </li>
                ))
              ) : (
                <EmptyState
                  title="No languages"
                  subtitle="Show everyone what languages you know"
                  btnText="Add languages"
                  BtnIcon={PlusIcon}
                  onBtnClick={() => {
                    setShowModal(true)
                  }}
                  iconUrl={'/translation.png'}
                />
              )}
            </ol>
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
                setLocalFields({ ...initialState })
              }}
            />
          </div>
        </>
      </Modal>
    </>
  )
}

export default Languages
