import Button from 'components/atoms/Button'
import Card from 'components/atoms/Card'
import Modal from 'components/atoms/Modal'
import CustomFooter from 'components/CustomFooter'
import DiscoverCard from 'components/DiscoverButton'
import Loading from 'components/Loading'
import AwardsModal from 'components/modals/AwardsModal'
import EducationModal from 'components/modals/EducationModal'
import ExperienceTwoModal from 'components/modals/ExperienceTwoModal'
import LanguagesModal from 'components/modals/LanguagesModal'
import SkillsModal from 'components/modals/SkillsModal'
import Activity from 'components/ProfileComponents/Activity'
import ProfileStrength from 'components/ProfileStrength'
import Awards from 'components/profileTwo/Awards'
import Cover from 'components/profileTwo/Cover'
import Education from 'components/profileTwo/Education'
import Experiences from 'components/profileTwo/Experiences'
import Languages from 'components/profileTwo/Languages'
import Shortcuts from 'components/profileTwo/Shortcuts'
import Skills from 'components/profileTwo/Skills'
import PublicProfileCard from 'components/PublicProfileCard'
import Sidebar from 'components/Sidebar'
import { links } from 'constants/Links'
import { useUserContext } from 'context/UserContext'
import { updateDocumentTitle } from 'helpers'
import useAccountType from 'hooks/useAccountType'
import { useRouter } from 'hooks/useRouter'
import useUser from 'hooks/useUser'
import { IParent } from 'interfaces/UniversalInterface'
import DashboardHeader from 'pages/DashboardHeader'
import GroupList from 'pages/groups/GroupList'
import AdditionalFeatures from 'pages/profile/AdditionalFeatures'
import Layout from 'pages/profile/Layout'
import PeopleAlsoViewed from 'pages/profile/PeopleAlsoViewed'
import Recommendations from 'pages/profile/Recommendations'
import { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import * as constants from 'state/Redux/constants'
import Following from './Following'

const ProfileTwo = ({ userData }: { userData: IParent }) => {
  const [showModal, setShowModal] = useState({ show: false, type: '' })
  const route: any = useRouter()

  const { viewMode, userId: userIdFromParam, template } = route?.match?.params

  const { otherUserData, iAmOwnerOfThisProfile, isFetched, isLoading } =
    useUser(userIdFromParam, userData)
  const showAllButtons = iAmOwnerOfThisProfile && viewMode === 'private'

  useEffect(() => {
    if (!iAmOwnerOfThisProfile) {
      // I am not owner of this profile so fetch other user data
      updateDocumentTitle(otherUserData?.fullName)
    } else {
      updateDocumentTitle(userData.fullName)
    }
  }, [iAmOwnerOfThisProfile])

  const [unsavedChanges, setUnsavedChanges] = useState(false)

  const [showUnsaveModal, setShowUnsaveModal] = useState(false)
  const { setValues } = useUserContext()

  const onCancel = () => {
    if (unsavedChanges) {
      setShowUnsaveModal(true)
    } else {
      setShowUnsaveModal(false)

      setUnsavedChanges(false)
    }
    setShowModal({ ...showModal, show: false })
  }
  const commonBlockProps = {
    setShowModal,
    userData: iAmOwnerOfThisProfile ? userData : otherUserData,

    showEditOption: showAllButtons,
  }

  const commonProps = {
    authUser: showAllButtons,
    userData: iAmOwnerOfThisProfile ? userData : otherUserData,
  }

  const commonModalProps = {
    ...commonBlockProps,
    onCancel,
    setUnsavedChanges,
    setValues,
    setShowUnsaveModal,
  }

  const renderModalContentByType = (type: string) => {
    switch (type) {
      case constants.PROFILE_TWO_EXPERIENCE:
        return <ExperienceTwoModal {...commonModalProps} />
      case constants.SKILLS:
        return <SkillsModal {...commonModalProps} />
      case constants.AWARDS:
        return <AwardsModal {...commonModalProps} />
      case constants.EDUCATION:
        return <EducationModal {...commonModalProps} />
      case constants.LANGUAGES:
        return <LanguagesModal {...commonModalProps} />

      default:
        return <div>No modal found. {type}</div>
    }
  }

  const renderModalHeader = (type: string) => {
    switch (type) {
      case constants.PROFILE_TWO_EXPERIENCE:
        return `Edit Experiences`
      case constants.SKILLS:
        return `Edit Skills`
      case constants.AWARDS:
        return `Edit Awards`
      case constants.EDUCATION:
        return `Edit Education`
      case constants.LANGUAGES:
        return `Edit Languages`

      default:
        return `Edit`
    }
  }

  const { isBusiness } = useAccountType(userData)

  const commonBlockProps2 = {
    authUser: showAllButtons,
    userData: iAmOwnerOfThisProfile ? userData : otherUserData,
  }
  const history = useHistory()

  // @ts-ignore
  useEffect(() => {
    const templateFromUser = commonProps?.userData?.other?.template
    if (template !== templateFromUser) {
      const changeTemplate = templateFromUser
      history.push(
        links.getProfileById(
          commonProps?.userData?.profileUrl,
          changeTemplate,
          viewMode
        )
      )
    }
  }, [userIdFromParam, template])

  if (isLoading && !isFetched) {
    return <Loading />
  }

  return (
    <div className="bg-gray-100 dark:bg-gray-900 smooth-scroll pt-24">
      <DashboardHeader userData={userData} />

      <Sidebar />
      <div className="">
        {showModal.show && (
          <Modal
            open={showModal.show}
            onClose={onCancel}
            setOpen={() => setShowModal({ show: false, type: '' })}
            header={renderModalHeader(showModal.type)}
          >
            <div className="">
              <div className="overflow-y-auto min-w-132  custom-scroll-mini darker my-4 px-1">
                {renderModalContentByType(showModal.type)}
              </div>
            </div>
          </Modal>
        )}
      </div>

      {/* stylelint-disabled  */}
      <div className="mx-auto min-h-screen pt-8 max-w-440">
        <Layout
          hideBorders
          userData={userData}
          business={isBusiness}
          firstCol={
            <div className="space-y-12">
              <Card
                className={` transition-transform duration-200`}
                secondary
                cardTitle="Shortcuts"
                content={
                  <div>
                    <Shortcuts />
                  </div>
                }
              />
              {!isBusiness && iAmOwnerOfThisProfile && <AdditionalFeatures />}
              {iAmOwnerOfThisProfile && <DiscoverCard />}
            </div>
          }
          secondCol={
            <div className="flex flex-col space-y-12">
              <Cover {...commonBlockProps2} />

              {!isBusiness && <Experiences {...commonBlockProps} />}
              {!isBusiness && (
                <div className="grid-cols-1 grid space-x-6 sm:grid-cols-2 px-0 ">
                  <Skills {...commonBlockProps} />
                  <Awards {...commonBlockProps} />
                </div>
              )}
              {!isBusiness && <Education {...commonBlockProps} />}
              <Activity
                userData={userData}
                iAmOwnerOfThisProfile={iAmOwnerOfThisProfile}
              />
              <Recommendations
                secondary
                iAmOwnerOfThisProfile={iAmOwnerOfThisProfile}
                {...commonProps}
                recommendation={commonProps?.userData?.recommendation}
              />

              {!isBusiness && (
                <div className="grid-cols-1 grid  sm:grid-cols-2 ">
                  <Languages {...commonBlockProps} />
                </div>
              )}
            </div>
          }
          thirdCol={
            <div className="">
              {showAllButtons && (
                <div className="mb-12">
                  <PublicProfileCard secondary userData={userData} />
                </div>
              )}
              {showAllButtons && (
                <ProfileStrength secondary {...commonBlockProps2} />
              )}
              <div className="xl:hidden block">
                <Card
                  className={`transition-transform duration-200`}
                  secondary
                  cardTitle="Shortcuts"
                  content={
                    <div>
                      <Shortcuts />
                    </div>
                  }
                />
              </div>
              <Following
                showSingleCard
                list={userData.following}
                interests={userData?.background?.interests}
              />
              <PeopleAlsoViewed {...commonBlockProps2} secondary />
            </div>
          }
        />
      </div>
      <CustomFooter />

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
                }}
              />
            </div>
          </>
        </Modal>
      )}
    </div>
  )
}

export default ProfileTwo
