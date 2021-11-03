import { PlusIcon } from '@heroicons/react/solid'
import Button from 'components/atoms/Button'
import Card from 'components/atoms/Card'
import Divider from 'components/atoms/Divider'
import EmptyState from 'components/atoms/EmptyState'
import Modal from 'components/atoms/Modal'
import NormalFormInput from 'components/atoms/NormalFormInput'
import Section from 'components/atoms/Section'
import Selector from 'components/atoms/Selector'
import { useUserContext } from 'context/UserContext'
import { getAccessToken, network } from 'helpers'
import useAccountType from 'hooks/useAccountType'
import {
  IBackground,
  IExperience,
  IParent,
} from 'interfaces/UniversalInterface'
import { map, remove, update } from 'lodash'
import { nanoid } from 'nanoid'
import { Fragment, useState } from 'react'
import { AiOutlineEdit } from 'react-icons/ai'
import { BiTrashAlt } from 'react-icons/bi'
import { CgDetailsMore } from 'react-icons/cg'
import { isAvailable } from 'utils/wait'
import { yearList } from 'values/values'

const ModalContentByType = ({
  type,
  localFields,
  onChange,
  onExperienceSelectUpdate,
  onExperienceFieldUpdate,
  getValue,
  onInterestAdd,
  onExperienceRemove,
  addNewExperience,
}: {
  type: string
  localFields: ILocalFields
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onInterestAdd: () => void
  getValue: (fieldName: string, idx: number) => string
  onExperienceFieldUpdate: (
    e: React.ChangeEvent<HTMLInputElement>,
    idx: number
  ) => void
  onExperienceSelectUpdate: (
    fieldName: string,
    itemName: string,
    idx: number
  ) => void
  onExperienceRemove: (id: string) => void
  addNewExperience: () => void
}) => {
  switch (type) {
    case 'summary':
      return (
        <Section
          sectionTitle="Summary"
          Icon={CgDetailsMore}
          content={
            <>
              <NormalFormInput
                value={localFields.summary}
                id={'summary'}
                textarea
                gridClass="col-span-2"
                onChange={onChange}
                placeholder="Tell everyone about yourself"
              />
            </>
          }
        />
      )
    case 'interests':
      return (
        <Section
          sectionTitle="Interests"
          Icon={CgDetailsMore}
          content={
            <>
              <div className="flex flex-col items-start gap-y-4">
                <div className="gap-x-4 gap-y-4 flex items-center flex-wrap">
                  {localFields.interests && localFields.interests.length > 0 ? (
                    map(localFields.interests, (interest: any, idx: number) => (
                      <Button
                        key={interest + '-' + idx}
                        gradient
                        invert
                        bgColor="pink"
                        label={interest.name}
                      />
                    ))
                  ) : (
                    <p className="text-gray-600 dark:text-gray-400">
                      Please add interest
                    </p>
                  )}
                </div>
                <div className="flex items-center gap-x-4 ">
                  <NormalFormInput
                    value={localFields.interest}
                    id="interest"
                    placeholder="Enter interest name"
                    gridClass="col-span-2"
                    onChange={onChange}
                  />
                  <Button
                    gradient
                    size="sm"
                    className=""
                    onClick={onInterestAdd}
                    bgColor="pink"
                    label={'+ Add'}
                  />
                </div>
              </div>
            </>
          }
        />
      )
    case 'experiences':
      return (
        <Section
          sectionTitle="Experiences"
          key="experience-edit-tab-52"
          Icon={CgDetailsMore}
          content={
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {localFields.experiences && localFields.experiences.length > 0 ? (
                <>
                  {map(localFields.experiences, (experience, idx: number) => (
                    <Fragment key={idx}>
                      <NormalFormInput
                        id={`jobTitle-${idx}`}
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
          }
        />
      )
    default:
      return <div>Error</div>
  }
}

interface ILocalFields extends IBackground {
  interest: string
}

const Background = ({
  userData,
  authUser,
}: {
  userData?: IParent
  authUser: boolean
}) => {
  const [showModal, setShowModal] = useState({ show: false, type: '' })

  const { setValues } = useUserContext()

  const [saving, setSaving] = useState(false)

  const onChange = (e: any) => {
    setUnsavedChanges(true)
    const { value, id } = e.target
    setLocalFields({ ...localFields, [id]: value })
  }

  // @ts-ignore
  const { background } = userData

  const initialState = {
    interest: '',
    // @ts-ignore
    interests: [],
    summary: '',
    // @ts-ignore
    experiences: [],
  }
  const [localFields, setLocalFields] = useState<ILocalFields>(initialState)
  const token = getAccessToken()

  const onInterestAdd = () => {
    if (localFields.interest) {
      setUnsavedChanges(true)
      setLocalFields({
        ...localFields,
        interests: [
          ...localFields.interests,
          { name: localFields.interest, id: nanoid(12) },
        ],
        interest: '',
      })
    }
  }

  const addOnTrigger = (type: string) => {
    if (type === 'summary') {
      setLocalFields({ ...localFields, summary: background?.summary || '' })
    } else if (type === 'interests') {
      setLocalFields({
        ...localFields,
        interests: [...background?.interests] || [],
      })
    } else if (type === 'experiences') {
      setLocalFields({
        ...localFields,
        experiences: [...background?.experiences] || [],
      })
    }
  }

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
      // @ts-ignore
      experiences: [...localFields.experiences, newExperience],
    })
  }

  const onSave = async () => {
    try {
      setSaving(true)
      const { summary, interests } = localFields

      let updatedData = { ...userData }
      if (showModal.type === 'summary') {
        updatedData = {
          ...userData,
          // @ts-ignore

          background: {
            ...background,
            summary,
          },
        }
      } else if (showModal.type === 'interests') {
        updatedData = {
          ...userData,
          // @ts-ignore

          background: {
            ...background,
            interests,
          },
        }
      } else if (showModal.type === 'experiences') {
        updatedData = {
          ...userData,
          // @ts-ignore
          background: {
            ...background,
            experiences:
              localFields.experiences && localFields.experiences.length > 0
                ? [...localFields.experiences]
                : background?.experiences,
          },
        }
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
      setShowModal({ ...showModal, show: false })
      setUnsavedChanges(false)
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
      if (!showModal.show) {
        setLocalFields(initialState)
      }
    }
    setShowModal({ ...showModal, show: false })
  }

  const [unsavedChanges, setUnsavedChanges] = useState(false)

  const [showUnsaveModal, setShowUnsaveModal] = useState(false)

  const onExperienceFieldUpdate = (
    e: React.ChangeEvent<HTMLInputElement>,
    idx: number
  ) => {
    const { value, id } = e.target
    setUnsavedChanges(true)
    if (localFields?.experiences && localFields?.experiences.length > 0) {
      update(localFields?.experiences[idx], `${id}`, () => value)
    }
    setLocalFields({ ...localFields })
  }

  const onExperienceSelectUpdate = (
    fieldName: string,
    name: string,
    idx: number
  ) => {
    setUnsavedChanges(true)
    if (localFields?.experiences && localFields?.experiences.length > 0) {
      update(localFields?.experiences[idx], `${fieldName}`, () => name)
    }
    setLocalFields({ ...localFields })
  }

  const getValue = (fieldName: string, idx: number): string => {
    // @ts-ignore
    return localFields.experiences[idx][fieldName]
  }

  const onExperienceRemove = (id: string) => {
    setUnsavedChanges(true)
    if (localFields?.experiences && localFields?.experiences.length > 0) {
      remove(localFields.experiences, (item) => item.id === id)
    }
    setLocalFields({ ...localFields })
  }

  const { isBusiness } = useAccountType(userData)

  return (
    <>
      {showModal.show && (
        <Modal
          disableBackdropClose={false}
          open={showModal.show}
          onClose={onCancel}
          setOpen={() => setShowModal({ show: false, type: '' })}
          header="Edit Background"
        >
          <div>
            <div className="overflow-y-hidden min-h-64 min-w-256 p-2 custom-scroll-mini darker my-4 max-h-full">
              <div className="space-y-12 ">
                <ModalContentByType
                  addNewExperience={addNewExperience}
                  onChange={onChange}
                  onExperienceSelectUpdate={onExperienceSelectUpdate}
                  onExperienceFieldUpdate={onExperienceFieldUpdate}
                  onExperienceRemove={onExperienceRemove}
                  localFields={localFields}
                  onInterestAdd={onInterestAdd}
                  getValue={getValue}
                  type={showModal.type}
                />
              </div>
            </div>

            <div className="mt-5 sm:mt-4 flex justify-end space-x-4 items-center">
              <Button
                gradient
                disabled={saving}
                label="Save"
                onClick={onSave}
                loading={saving}
              />
            </div>
          </div>
        </Modal>
      )}
      <Card
        cardTitle="Background"
        content={
          <div className="space-y-10">
            <Section
              sectionTitle="Summary"
              Icon={CgDetailsMore}
              withSectionHeadings={
                authUser &&
                background?.summary && (
                  <div>
                    <Button
                      secondary
                      invert
                      bgColor="gray"
                      onClick={() => {
                        addOnTrigger('summary')
                        setShowModal({ show: true, type: 'summary' })
                      }}
                      Icon={AiOutlineEdit}
                      size="sm"
                      label={'Edit'}
                    />
                  </div>
                )
              }
              content={
                <div>
                  {isAvailable('summary', background) ? (
                    <p>{background?.summary}</p>
                  ) : (
                    <EmptyState
                      title="No summary found"
                      subtitle="Add something about yourself."
                      btnText="Add summary"
                      onBtnClick={() =>
                        setShowModal({ show: true, type: 'summary' })
                      }
                      showEditOption={authUser}
                      BtnIcon={PlusIcon}
                      iconUrl={'/summary.png'}
                    />
                  )}
                </div>
              }
            />
            {!isBusiness && (
              <Section
                sectionTitle="Interests"
                Icon={CgDetailsMore}
                withSectionHeadings={
                  background?.interests &&
                  background?.interests.length > 0 &&
                  authUser && (
                    <div>
                      <Button
                        secondary
                        invert
                        bgColor="gray"
                        onClick={() => {
                          addOnTrigger('interests')
                          setShowModal({ show: true, type: 'interests' })
                        }}
                        Icon={AiOutlineEdit}
                        size="sm"
                        label={'Edit'}
                      />
                    </div>
                  )
                }
                content={
                  <div>
                    {background?.interests &&
                    background?.interests.length > 0 ? (
                      <div className="flex items-center flex-wrap justify-start gap-x-4">
                        {map(
                          background?.interests,
                          (interest: any, idx: number) => (
                            <Button
                              key={interest.id}
                              className="pointer-events-none"
                              gradient
                              invert
                              bgColor="pink"
                              label={interest.name}
                            />
                          )
                        )}
                      </div>
                    ) : (
                      <EmptyState
                        title="No interests added"
                        subtitle="Get started by adding your interests to your profile."
                        btnText="Add interests"
                        BtnIcon={PlusIcon}
                        showEditOption={authUser}
                        iconUrl={'/interest.png'}
                        onBtnClick={() =>
                          setShowModal({ show: true, type: 'interests' })
                        }
                      />
                    )}
                  </div>
                }
              />
            )}
            <Section
              sectionTitle="Experiences"
              Icon={CgDetailsMore}
              withSectionHeadings={
                authUser &&
                background?.experiences &&
                background?.experiences.length > 0 && (
                  <div>
                    <Button
                      secondary
                      invert
                      bgColor="gray"
                      onClick={() => {
                        addOnTrigger('experiences')
                        setShowModal({ show: true, type: 'experiences' })
                      }}
                      Icon={AiOutlineEdit}
                      size="sm"
                      label={'Edit'}
                    />
                  </div>
                )
              }
              content={
                <div className="space-y-8">
                  {background?.experiences &&
                  background?.experiences.length > 0 ? (
                    map(background?.experiences, (exp, idx: number) => {
                      return (
                        <div
                          key={idx}
                          className={` ${
                            idx !== 1
                              ? 'border-b border-gray-200 dark:border-gray-600 pb-4'
                              : ''
                          }`}
                        >
                          <h4 className="job_title font-medium dark:text-white text-gray-900">
                            {exp.jobTitle}
                          </h4>
                          <h5 className="company_name link-hover block text-left cursor-pointer ">
                            {exp.companyName}
                          </h5>
                          <span className="job_duration text-gray-300 font-semibold text-sm">
                            {exp.joinDate} - {exp.leaveDate}
                          </span>
                          <p className="company_description text-gray-400 mt-3">
                            {exp.description}
                          </p>
                        </div>
                      )
                    })
                  ) : (
                    <EmptyState
                      title="No experience"
                      subtitle="Get started by adding a new experience to your profile."
                      btnText="Add experience"
                      BtnIcon={PlusIcon}
                      showEditOption={authUser}
                      onBtnClick={() => {
                        if (
                          background?.experiences &&
                          background?.experiences.length === 0
                        ) {
                          addNewExperience()
                        }
                        setShowModal({ show: true, type: 'experiences' })
                      }}
                      iconUrl={'/experience.png'}
                    />
                  )}
                </div>
              }
            />
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
                setShowModal({ ...showModal, show: true })
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
            />
          </div>
        </>
      </Modal>
    </>
  )
}

export default Background
