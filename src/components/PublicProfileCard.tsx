import { links } from 'constants/Links'
import { useUserContext } from 'context/UserContext'
import { getAccessToken, network } from 'helpers'
import { IParent } from 'interfaces/UniversalInterface'
import { useEffect, useState } from 'react'
import { useHistory, useRouteMatch } from 'react-router-dom'
import Button from './atoms/Button'
import Card from './atoms/Card'
import Modal from './atoms/Modal'
import NormalFormInput from './atoms/NormalFormInput'

const getMiddles = (str?: string) => {
  if (str) {
    const onlyName = str.split('_')
    onlyName.pop()
    return onlyName.join('_')
  }
  return ''
}

const getNanoId = (str?: string) => {
  if (str) {
    const arr = str.split('_')
    return arr[arr.length - 1]
  }
  return ''
}

const PublicProfileCard = ({
  secondary,
  userData,
}: {
  secondary?: boolean
  userData?: IParent
}) => {
  const profileUrl = userData?.profileUrl
  const match = useRouteMatch()

  const [initalFields, setInitalFields] = useState({
    profileUrl: '',
  })

  useEffect(() => {
    const middles = getMiddles(profileUrl)
    if (profileUrl) {
      setInitalFields({ profileUrl: middles })
      return () => {
        setInitalFields({ profileUrl: middles })
      }
    }
  }, [profileUrl])

  const [unsavedChanges, setUnsavedChanges] = useState(false)

  const [showUnsaveModal, setShowUnsaveModal] = useState(false)

  const [showEditProfileUrlModal, setShowEditProfileUrlModal] = useState(false)

  const onCancel = () => {
    if (unsavedChanges) {
      setShowUnsaveModal(true)
    } else {
      setShowUnsaveModal(false)

      setUnsavedChanges(false)
    }
    setShowEditProfileUrlModal(false)
  }

  const [saving, setSaving] = useState(false)

  const { setValues } = useUserContext()
  const token = getAccessToken()
  const history = useHistory()

  const onSave = async () => {
    if (initalFields.profileUrl.length > 6) {
      try {
        let updatedData = {
          ...userData,
          profileUrl: `${initalFields.profileUrl}_${getNanoId(profileUrl)}`,
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
        history.push(
          links.getProfileById(
            updatedData.profileUrl,
            userData?.other?.template
          )
        )
        window.location.reload()
      } catch (error) {
        console.error(error.message)
      } finally {
        setSaving(false)
        setShowEditProfileUrlModal(false)
      }
    }
  }

  const new_url = `${process.env.REACT_APP_BASE_URL}/${
    initalFields.profileUrl
  }_${getNanoId(profileUrl)}`

  return (
    <>
      {showEditProfileUrlModal && (
        <Modal
          open={showEditProfileUrlModal}
          onClose={onCancel}
          setOpen={() => setShowEditProfileUrlModal(false)}
          header={'Edit url'}
        >
          <div className="">
            <div className="overflow-y-auto min-w-132 custom-scroll-mini darker my-4 px-1">
              <>
                <NormalFormInput
                  value={initalFields.profileUrl}
                  onChange={(e: any) =>
                    setInitalFields((prev) => ({
                      ...prev,
                      profileUrl: e.target.value,
                    }))
                  }
                  label="Enter new url"
                  name="profileUrl"
                />
                <div>
                  <p className="mt-4 text-gray-800  dark:text-gray-400">
                    New url: {new_url}
                  </p>
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
              </>
            </div>
          </div>
        </Modal>
      )}
      <Card
        className="mb-0"
        secondary={secondary}
        cardTitle="Others"
        content={
          <ul className="min-h-20  flex items-start flex-col gap-y-4 justify-center">
            <li
              onClick={() => setShowEditProfileUrlModal(true)}
              className="dark:text-gray-400 cursor-pointer hover:underline link-hover"
            >
              Edit profile url
            </li>
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href={`${match.url.replace('/private', '/public')}`}
                className="dark:text-gray-400 hover:underline link-hover"
              >
                View profile as other
              </a>
            </li>
          </ul>
        }
      />
      {showUnsaveModal && (
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
                secondary
                bgColor="gray"
                onClick={() => {
                  setShowUnsaveModal(false)
                  setShowEditProfileUrlModal(true)
                }}
                invert
                label="No thanks"
              />
              <Button
                gradient
                label="Discard"
                onClick={() => {
                  setShowUnsaveModal(false)
                  // setLocalFields({ ...initialState })
                }}
              />
            </div>
          </>
        </Modal>
      )}
    </>
  )
}

export default PublicProfileCard
