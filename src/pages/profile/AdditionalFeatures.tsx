/* eslint-disable quotes */
import { saveProfile } from 'apis/mutations'
import errorAnimation from 'assets/animation/error.json'
import successAnimation from 'assets/animation/success.json'
import Button from 'components/atoms/Button'
import Card from 'components/atoms/Card'
import EmptyState from 'components/atoms/EmptyState'
import Modal from 'components/atoms/Modal'
import { links } from 'constants/Links'
import { useNotifications } from 'context/NotificationContext'
import { IParent } from 'interfaces/UniversalInterface'
import { useState } from 'react'
import { useMutation } from 'react-query'
import animation from 'assets/animation/searching-user.json'
import { wait } from 'utils/wait'
const AdditionalFeatures = ({
  isBusiness,
  userData,
  otherUserData,
  iAmOwnerOfThisProfile,
  refetchProfile,
}: {
  isBusiness: boolean
  userData: IParent
  otherUserData?: IParent
  iAmOwnerOfThisProfile: boolean
  refetchProfile: any
}) => {
  const { setNotification } = useNotifications()

  const { mutate } = useMutation(saveProfile, {
    onSuccess: (data) => {
      const action = data.data.data
      setSaved((prev) => !prev)
      setNotification({
        show: true,
        title: `${otherUserData.fullName}'s Profile ${
          action === 'save' ? 'added to' : 'remove from'
        } saved list`,
        buttonText: 'View',
        buttonUrl: links.myItems(),
      })
      refetchProfile()
    },
  })

  const _saveProfile = () => {
    mutate({
      targetId: otherUserData._id,
      action: alreadySaved ? 'unsave' : 'save',
    })
  }

  const alreadySaved = Boolean(
    userData.savedProfiles &&
      userData?.savedProfiles.find((d) => d === otherUserData._id)
  )

  const [saved, setSaved] = useState(alreadySaved)

  const [showResumeValidityModal, setShowResumeValidityModal] = useState(false)

  const [error, setError] = useState('')

  function checkValidity(): boolean {
    setIsChecking(true)
    let isValid = true
    if (userData) {
      const { background } = userData
      if (!userData?.profileUrl) {
        setError('Please add your profile picture')
        isValid = false
      } else if (!background?.summary) {
        setError('Please add summary')
        isValid = false
      } else if (!userData.birthDate) {
        setError('Please add birthdate')
        isValid = false
      } else if (!background?.skills) {
        setError('Please add skills')
        isValid = false
      } else if (!background?.experiences) {
        setError('Please add experiences')
        isValid = false
      } else if (!isBusiness && !background?.education) {
        setError('Please add education')
        isValid = false
      } else if (!userData?.socialMedia) {
        setError('Please add atleast one social media link')
        isValid = false
      } else {
        isValid = true
        setError('')
      }
    }
    setIsSuccess(false)
    wait(3000).then(() => setIsChecking(false))

    return isValid
  }

  const onResumeBtnClick = () => {
    const isValid = checkValidity()

    if (isValid) {
      setIsSuccess(true)
    } else {
      setIsSuccess(false)
    }
    setShowResumeValidityModal(true)
  }

  const onAdd = () => {
    setShowResumeValidityModal(false)
  }

  const [isSuccess, setIsSuccess] = useState(false)

  const [isChecking, setIsChecking] = useState(false)

  return (
    <>
      <Modal
        open={showResumeValidityModal}
        setOpen={setShowResumeValidityModal}
      >
        <div className="min-w-112 max-w-122 min-h-112">
          {isChecking ? (
            <EmptyState
              title="Verifying data"
              subtitle="Checking required fields..."
              animation={animation}
            />
          ) : error ? (
            <EmptyState
              showEditOption
              title="Error"
              subtitle={error}
              btnText="Add now"
              onBtnClick={() => onAdd()}
              animation={errorAnimation}
            />
          ) : isSuccess ? (
            <EmptyState
              showEditOption
              title="Hurrah"
              subtitle={'You can see your resume now'}
              btnText="See resume"
              onBtnClick={() =>
                window.open(links.seeResume(userData.profileUrl), '_blank')
              }
              animation={successAnimation}
            />
          ) : (
            <div />
          )}
        </div>
      </Modal>
      <Card
        // className={`${!isBusiness && iAmOwnerOfThisProfile ? 'block' : 'hidden'}`}
        cardTitle="Additional Features"
        content={
          <div className="flex flex-col gap-y-6">
            <Button onClick={onResumeBtnClick} label={'See resume'} gradient />
            {!isBusiness && iAmOwnerOfThisProfile && (
              <>
                <Button
                  link={links.viewMyRequests()}
                  label="View My Requests"
                  gradient
                />
              </>
            )}
            {!iAmOwnerOfThisProfile && (
              <Button
                onClick={() => _saveProfile()}
                label={saved ? 'Unsave profile' : 'Save profile'}
                gradient
              />
            )}
          </div>
        }
      />
    </>
  )
}

export default AdditionalFeatures
