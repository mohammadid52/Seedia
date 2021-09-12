import Button from 'components/atoms/Button'
import Card from 'components/atoms/Card'
import Modal from 'components/atoms/Modal'
import CustomFooter from 'components/CustomFooter'
import Loading from 'components/Loading'
import AwardsModal from 'components/modals/AwardsModal'
import EducationModal from 'components/modals/EducationModal'
import ExperienceTwoModal from 'components/modals/ExperienceTwoModal'
import LanguagesModal from 'components/modals/LanguagesModal'
import SkillsModal from 'components/modals/SkillsModal'
import ProfileStrength from 'components/ProfileStrength'
import Awards from 'components/profileTwo/Awards'
import Cover from 'components/profileTwo/Cover'
import Education from 'components/profileTwo/Education'
import Experiences from 'components/profileTwo/Experiences'
import Languages from 'components/profileTwo/Languages'
import ProductsDetails from 'components/profileTwo/ProductsDetails'
import Shortcuts from 'components/profileTwo/Shortcuts'
import Skills from 'components/profileTwo/Skills'
import PublicProfileCard from 'components/PublicProfileCard'
import Sidebar from 'components/Sidebar'
import { useUserContext } from 'context/UserContext'
import { getUniqId, network } from 'helpers'
import { useRouter } from 'hooks/useRouter'
import { IParent } from 'interfaces/UniversalInterface'
import DashboardHeader from 'pages/DashboardHeader'
import Layout from 'pages/profile/Layout'
import PeopleAlsoViewed from 'pages/profile/PeopleAlsoViewed'
import { useEffect, useState } from 'react'
import * as constants from 'state/Redux/constants'
import Following from './Following'

const ProfileTwo = ({ userData }: { userData: IParent }) => {
  const [showModal, setShowModal] = useState({ show: false, type: '' })
  const route: any = useRouter()

  const { viewMode, userId: userIdFromParam } = route?.match?.params

  const iAmOwnerOfThisProfile = getUniqId(userIdFromParam) === userData._id
  const showAllButtons = iAmOwnerOfThisProfile && viewMode === 'private'
  const [fetchingData, setFetchingData] = useState(false)

  const [otherUserData, setOtherUserData] = useState<IParent>()

  useEffect(() => {
    if (!iAmOwnerOfThisProfile) {
      // I am not owner of this profile so fetch other user data
      fetchOtherUser()
    }
  }, [iAmOwnerOfThisProfile])

  const fetchOtherUser = async () => {
    try {
      setFetchingData(true)
      const { data } = await network.post('/user/getById/' + userIdFromParam)
      setOtherUserData({ ...data.data })
    } catch (error) {
      // @ts-ignore
      console.error(error.message)
    } finally {
      setFetchingData(false)
    }
  }

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

  const isBusiness = userData?.other?.accountType === 'business'

  const commonBlockProps2 = {
    authUser: showAllButtons,
    userData: iAmOwnerOfThisProfile ? userData : otherUserData,
  }

  return fetchingData ? (
    <Loading />
  ) : (
    <div className="bg-gray-100 dark:bg-gray-800 smooth-scroll">
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
          firstCol={
            <div className="">
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
            </div>
          }
          secondCol={
            <div className="flex flex-col">
              <Cover {...commonBlockProps2} />

              {!isBusiness && <Experiences {...commonBlockProps} />}
              {!isBusiness && (
                <div className="grid-cols-1 grid  sm:grid-cols-2 px-6 ">
                  <Skills {...commonBlockProps} />
                  <Awards {...commonBlockProps} />
                </div>
              )}
              {!isBusiness && <Education {...commonBlockProps} />}
              {isBusiness && <ProductsDetails />}
              {!isBusiness && (
                <div className="grid-cols-1 grid  sm:grid-cols-2 px-6">
                  <Languages {...commonBlockProps} />
                </div>
              )}
            </div>
          }
          thirdCol={
            <div className="">
              {showAllButtons && (
                <PublicProfileCard secondary userData={userData} />
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
