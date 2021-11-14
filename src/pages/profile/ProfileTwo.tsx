import Button from 'components/atoms/Button'
import Card from 'components/atoms/Card'
import Meta from 'components/atoms/Meta/Meta'
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
import EmptyState from 'components/atoms/EmptyState'
import { links } from 'constants/Links'
import { useUserContext } from 'context/UserContext'
import useAccountType from 'hooks/useAccountType'
import { useRouter } from 'hooks/useRouter'
import useUser from 'hooks/useUser'
import { IParent } from 'interfaces/UniversalInterface'
import DashboardHeader from 'pages/DashboardHeader'
import AdditionalFeatures from 'pages/profile/AdditionalFeatures'
import Layout from 'pages/profile/Layout'
import PeopleAlsoViewed from 'pages/profile/PeopleAlsoViewed'
import Recommendations from 'pages/profile/Recommendations'
import { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import * as constants from 'state/Redux/constants'
import Following from './Following'
import BottomCard from 'components/BottomCard'
import { isEmpty } from 'lodash'
import AdditionalInfo from 'components/AdditionalInfo'

const ProfileTwo = ({ userData }: { userData: IParent }) => {
  const [showModal, setShowModal] = useState({ show: false, type: '' })
  const route: any = useRouter()

  const { viewMode = 'public', userId: userIdFromParam } = route?.match?.params

  const {
    otherUserData,
    iAmOwnerOfThisProfile,
    isFetched,
    isLoading,
    refetch: refetchProfile,
  } = useUser(userIdFromParam, userData)
  const showAllButtons = iAmOwnerOfThisProfile && viewMode === 'private'

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

  const commonBlockProps2 = {
    authUser: showAllButtons,
    userData: iAmOwnerOfThisProfile ? userData : otherUserData,
  }
  const { isBusiness, getType } = useAccountType(commonBlockProps2.userData)

  const history = useHistory()

  const user = commonProps?.userData
  useEffect(() => {
    if (!isEmpty(user)) {
      history.push(
        links.getProfile(
          user,
          iAmOwnerOfThisProfile ? viewMode === 'private' : false
        )
      )
    }
  }, [user])

  if (isLoading && !isFetched) {
    return <Loading />
  }

  return (
    <div className="bg-gray-100 dark:bg-gray-900 smooth-scroll min-h-screen pt-12">
      <DashboardHeader userData={userData} />
      {!isEmpty(user) ? (
        <div>
          <Meta
            pageTitle={`${user.fullName} | 13RMS`}
            userName={user.fullName}
            pageUrl={links.getProfile(user)}
            imageUrl={user?.profilePicture}
            pageType="social media"
            title={`${user.fullName} | 13RMS`}
            keywords={`profile,${user.fullName},13RMS,tradingpost, linkedin,instagram,facebook`}
          />
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
          <div className="mx-auto min-h-screen  max-w-440">
            <Layout
              hideBorders
              userData={userData}
              business={isBusiness}
              firstCol={
                <div className="space-y-12">
                  <AdditionalInfo
                    refetch={refetchProfile}
                    secondary
                    {...commonProps}
                  />
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

                  {/* {iAmOwnerOfThisProfile && ( */}
                  <AdditionalFeatures
                    iAmOwnerOfThisProfile={iAmOwnerOfThisProfile}
                    userData={userData}
                    otherUserData={otherUserData}
                    refetchProfile={refetchProfile}
                    isBusiness={getType(user).isBusiness}
                  />
                  {/* )} */}
                  {iAmOwnerOfThisProfile && (
                    <DiscoverCard
                      extraItems={[{ link: links.myItems(), name: 'My items' }]}
                    />
                  )}
                </div>
              }
              secondCol={
                <div className="flex flex-col space-y-12">
                  <Cover authUser={iAmOwnerOfThisProfile} userData={user} />

                  <Experiences {...commonBlockProps} />

                  <div className="grid-cols-1 grid space-x-6 sm:grid-cols-2 px-0 ">
                    <Skills {...commonBlockProps} />
                    <Awards {...commonBlockProps} />
                  </div>

                  {!isBusiness && <Education {...commonBlockProps} />}
                  <Activity
                    userData={commonBlockProps.userData}
                    iAmOwnerOfThisProfile={iAmOwnerOfThisProfile}
                  />
                  <Recommendations
                    secondary
                    iAmOwnerOfThisProfile={iAmOwnerOfThisProfile}
                    {...commonProps}
                    recommendation={commonProps?.userData?.recommendation}
                  />

                  {/* {!isBusiness && ( */}
                  <div className="grid-cols-1 grid   ">
                    <Languages {...commonBlockProps} />
                  </div>
                  {/* )} */}
                  {iAmOwnerOfThisProfile && (
                    <Following
                      list={userData.following}
                      interests={userData?.background?.interests}
                    />
                  )}
                </div>
              }
              thirdCol={
                <div className="space-y-12">
                  {iAmOwnerOfThisProfile && viewMode === 'public' && (
                    <Button
                      gradient
                      fullWidth
                      label="Edit profile"
                      target=""
                      className="mb-6"
                      link={links.getProfile(userData, true)}
                    />
                  )}
                  {showAllButtons && (
                    <div className="">
                      <PublicProfileCard secondary userData={userData} />
                    </div>
                  )}
                  {showAllButtons && (
                    <ProfileStrength secondary {...commonBlockProps2} />
                  )}
                  <div className="xl:hidden space-y-12 block">
                    <AdditionalInfo
                      refetch={refetchProfile}
                      secondary
                      {...commonProps}
                    />
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

                    {/* {iAmOwnerOfThisProfile && ( */}
                    <AdditionalFeatures
                      iAmOwnerOfThisProfile={iAmOwnerOfThisProfile}
                      userData={userData}
                      otherUserData={otherUserData}
                      refetchProfile={refetchProfile}
                      isBusiness={getType(user).isBusiness}
                    />
                    {/* )} */}
                    {iAmOwnerOfThisProfile && (
                      <DiscoverCard
                        extraItems={[
                          { link: links.myItems(), name: 'My items' },
                        ]}
                      />
                    )}
                  </div>
                  {iAmOwnerOfThisProfile && (
                    <PeopleAlsoViewed
                      // showSingleCard={false}
                      {...commonBlockProps2}
                      secondary
                    />
                  )}
                </div>
              }
            />
          </div>
          {!iAmOwnerOfThisProfile && (
            <BottomCard
              myFollowings={userData.following}
              userData={otherUserData}
            />
          )}
          <CustomFooter />

          {/* {showUnsaveModal && (
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
          )} */}
        </div>
      ) : (
        <div className="flex items-center  overflow-hidden  max-h-screen min-h-96   justify-center">
          <EmptyState
            hideBorders
            title="Oops Can't find user."
            subtitle={`Please check url`}
            iconUrl={'/question.png'}
          />
        </div>
      )}
    </div>
  )
}

export default ProfileTwo
