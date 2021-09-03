import Layout from 'pages/profile/Layout'
import Cover from 'components/profileTwo/Cover'
import Card from 'components/atoms/Card'
import CustomFooter from 'components/CustomFooter'
import Shortcuts from 'components/profileTwo/Shortcuts'
import Experiences from 'components/profileTwo/Experiences'
import Skills from 'components/profileTwo/Skills'
import Awards from 'components/profileTwo/Awards'
import Education from 'components/profileTwo/Education'
import Languages from 'components/profileTwo/Languages'
import PeopleAlsoViewed from 'pages/profile/PeopleAlsoViewed'
import { IParent } from 'interfaces/UniversalInterface'
import { useEffect, useState } from 'react'
import Modal from 'components/atoms/Modal'
import Button from 'components/atoms/Button'

import * as constants from 'state/Redux/constants'
import ExperienceTwoModal from 'components/modals/ExperienceTwoModal'
import SkillsModal from 'components/modals/SkillsModal'
import { useUserContext } from 'context/UserContext'
import AwardsModal from 'components/modals/AwardsModal'
import LanguagesModal from 'components/modals/LanguagesModal'
import EducationModal from 'components/modals/EducationModal'
import { useRouter } from 'hooks/useRouter'
import { getAccessToken, network } from 'helpers'
import ProfileStrength from 'components/ProfileStrength'
import ProductsDetails from 'components/profileTwo/ProductsDetails'
import Sidebar from 'components/Sidebar'
import Following from './Following'
import jwt_decode from 'jwt-decode'
import { useDispatch } from 'react-redux'
import { loadUser } from 'state/Redux/Actions/authActions'
import PublicProfileCard from 'components/PublicProfileCard'

const ProfileTwo = ({ userData }: { userData: IParent }) => {
  const [showModal, setShowModal] = useState({ show: false, type: '' })
  const route: any = useRouter()

  const { viewMode, userId: userIdFromParam } = route?.match?.params

  // #1 first get userId from params
  // #2 check user id from token decoded object
  // #3 if it matches then current user is authUser (owner of profile)
  const authUser = userIdFromParam === userData.myId && viewMode === 'private'

  const token = getAccessToken()
  // @ts-ignore
  var decoded = jwt_decode(token)

  const getProfileById = async () => {
    if (!authUser) {
      const { data } = await network.post(
        '/user/getById/' + userIdFromParam,
        {},
        {
          headers: { Authorization: token },
        }
      )

      // @ts-ignore
      setValues({ ...data.data, myId: decoded.id })
    } else {
      // @ts-ignore
      setValues({ ...userData, myId: decoded.id })
    }
  }

  const dispatch = useDispatch()

  useEffect(() => {
    getProfileById()
    return () => {
      dispatch(loadUser())
    }
  }, [userIdFromParam])

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
  const commonBlockProps = { setShowModal, userData, showEditOption: authUser }

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

  const commonBlockProps2 = { authUser, userData }

  return (
    <div className="bg-gray-100 dark:bg-gray-800 smooth-scroll">
      <Sidebar />
      <div className="">
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
            <div className="space-y-12">
              <Cover {...commonBlockProps2} />

              {!isBusiness && <Experiences {...commonBlockProps} />}
              {!isBusiness && (
                <div className="grid-cols-1 grid  sm:grid-cols-2 lg:grid-cols-2">
                  <Skills {...commonBlockProps} />
                  <Awards {...commonBlockProps} />
                </div>
              )}
              {!isBusiness && <Education {...commonBlockProps} />}
              {!isBusiness && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
                  <Languages {...commonBlockProps} />
                </div>
              )}

              {isBusiness && <ProductsDetails />}
            </div>
          }
          thirdCol={
            <div className="">
              {userIdFromParam === userData.myId && (
                <PublicProfileCard secondary />
              )}
              {authUser && <ProfileStrength secondary {...commonBlockProps2} />}
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
                // setLocalFields({ ...initialState })
              }}
            />
          </div>
        </>
      </Modal>
    </div>
  )
}

export default ProfileTwo
