import { useState, useEffect } from 'react'
import { IParent } from 'interfaces/UniversalInterface'
import Button from 'components/atoms/Button'
import Divider from 'components/atoms/Divider'
import moment from 'moment'
import { getAccessToken, network, updateDocumentTitle } from 'helpers'
import { useUserContext } from 'context/UserContext'
import { wait } from 'utils/wait'
import Modal from 'components/atoms/Modal'
import { logOut } from 'state/Redux/Actions/authActions'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

export default function Settings({ userData }: { userData: IParent }) {
  const currentTemplate = userData.other?.template || 1

  useEffect(() => {
    updateDocumentTitle('Settings', true)
  }, [])

  const [changingTemplate, setChangingTemplate] = useState(false)

  const { setValues } = useUserContext()

  const token = getAccessToken()

  const history = useHistory()

  const changeTemplate = () => {
    setChangingTemplate(true)
    try {
      let updatedData = {
        ...userData,
        other: {
          ...userData.other,
          template: currentTemplate === 1 ? 2 : 1,
        },
      }
      //@ts-ignore
      delete updatedData.password

      setValues({ ...updatedData })
      wait(1000).then(async () => {
        await network.post(
          '/user/update',
          {
            ...updatedData,
          },
          {
            headers: { Authorization: token },
          }
        )
      })
    } catch (error) {
      console.error(error.message)
    } finally {
      setChangingTemplate(false)
    }
  }

  const [showDeleteModal, setShowDeleteModal] = useState(false)

  const dispatch = useDispatch()

  const deleteAccount = async () => {
    try {
      await network.delete('/user', {
        headers: { Authorization: token },
      })
      dispatch(logOut(history))
    } catch (error) {
      console.error(error.message)
    }
  }

  return (
    <div className="bg-white dark:bg-gray-800 h-screen">
      <Modal
        header="Delete Account"
        open={showDeleteModal}
        setOpen={() => setShowDeleteModal(false)}
      >
        <div className="min-h-32 min-w-96">
          <div className="mb-8">
            <h1 className="text-lg dark:text-white text-gray-900 min-w-96">
              Are you sure you want to delete your account?
            </h1>
            <p className="text-gray-500 ">You won't able to recover it</p>
          </div>

          <div className="mt-5 sm:mt-4 flex justify-end space-x-4 items-center">
            <Button
              secondary
              bgColor="gray"
              onClick={() => {
                setShowDeleteModal(false)
              }}
              invert
              label="No thanks"
            />
            <Button
              primary
              style={{ background: 'red' }}
              label="Delete"
              onClick={deleteAccount}
            />
          </div>
        </div>
      </Modal>
      <main className="bg-white dark:bg-gray-800 max-w-lg mx-auto pt-10 pb-12 px-4 lg:pb-16">
        <form>
          <div className="space-y-6">
            <div>
              <h1 className="text-base leading-6 font-medium dark:text-white text-gray-900">
                Profile Settings
              </h1>
              <p className="mt-1 text-xs text-gray-500 ">
                You can change your profile settings here.
              </p>
            </div>
            <div>
              <Button
                invert
                onClick={changeTemplate}
                disabled={changingTemplate}
                loading={changingTemplate}
                loadingText={`Changing template to ${
                  currentTemplate === 1 ? 'Two' : 'One'
                }`}
                secondary
                bgColor="gray"
                style={{ color: 'teal' }}
                label={`Change template to ${
                  currentTemplate === 1 ? 'Two' : 'One'
                }`}
              />
            </div>

            <Divider />
            <div>
              <h1 className="text-base leading-6 font-medium dark:text-white text-gray-900">
                Account Settings
              </h1>
              <p className="mt-1 text-xs text-gray-500 ">
                You can change your account settings here.
              </p>
            </div>
            <div>
              <Button
                invert
                onClick={() => setShowDeleteModal(true)}
                secondary
                style={{ color: '#F87171' }}
                bgColor="gray"
                label="Delete this account"
              />
            </div>

            <p className="text-sm text-gray-500">
              This account was created on{' '}
              <time dateTime="2017-01-05T20:35:40" className="font-semibold">
                {userData.other?.createdOn
                  ? moment(userData.other?.createdOn).format('LL')
                  : 'January 5, 2017, 8:35:40 PM'}
              </time>
              .
            </p>
            <Divider withButton text="End" />

            <Button onClick={history.goBack} gradient label={'GO BACK'} />
          </div>
        </form>
      </main>
    </div>
  )
}
