import Card from 'components/atoms/Card'
import CustomFooter from 'components/CustomFooter'
import Loading from 'components/Loading'
import ProfileStrength from 'components/ProfileStrength'
import PublicProfileCard from 'components/PublicProfileCard'
import Sidebar from 'components/Sidebar'
import { links } from 'constants/Links'
import { updateDocumentTitle } from 'helpers'
import useAccountType from 'hooks/useAccountType'
import { useRouter } from 'hooks/useRouter'
import useUser from 'hooks/useUser'
import { IParent } from 'interfaces/UniversalInterface'
import DashboardHeader from 'pages/DashboardHeader'
import GroupList from 'pages/groups/GroupList'
import About from 'pages/profile/About'
import AdditionalFeatures from 'pages/profile/AdditionalFeatures'
import Background from 'pages/profile/Background'
import Cover from 'pages/profile/Cover'
import Following from 'pages/profile/Following'
import Layout from 'pages/profile/Layout'
import PeopleAlsoViewed from 'pages/profile/PeopleAlsoViewed'
import Recommendations from 'pages/profile/Recommendations'
import { useEffect } from 'react'
import { useHistory } from 'react-router'
import { avatarPlaceholder } from 'state/Redux/constants'
import RandomUsers from './RandomUsers'
import { eclipse } from 'utils/functions'
import EmptyState from 'components/atoms/EmptyState'
import Activity from 'components/ProfileComponents/Activity'

const Profile = ({ userData }: { userData: IParent }) => {
  const route: any = useRouter()
  const { viewMode, userId: userIdFromParam, template } = route?.match?.params

  const { otherUserData, iAmOwnerOfThisProfile, isFetched, isLoading } =
    useUser(userIdFromParam, userData)
  const showAllButtons = iAmOwnerOfThisProfile && viewMode === 'private'

  const history = useHistory()

  useEffect(() => {
    if (!iAmOwnerOfThisProfile) {
      // I am not owner of this profile so fetch other user data
      updateDocumentTitle(otherUserData?.fullName)
    } else {
      updateDocumentTitle(userData?.fullName)
    }
  }, [iAmOwnerOfThisProfile])

  // @ts-ignore
  useEffect(() => {
    const templateFromUser = commonProps?.userData?.other?.template
    if (template !== templateFromUser && iAmOwnerOfThisProfile) {
      const changeTemplate = templateFromUser
      history.replace(
        links.getProfileById(
          commonProps?.userData.profileUrl,
          changeTemplate,
          viewMode
        )
      )
    }
  }, [userIdFromParam, template])

  const commonProps: { authUser: boolean; userData: IParent } = {
    authUser: showAllButtons,
    userData: iAmOwnerOfThisProfile ? userData : otherUserData,
  }
  const { isBusiness } = useAccountType(userData)

  if (isLoading && !isFetched) {
    return <Loading />
  }

  return (
    <div className="bg-gray-100 dark:bg-gray-900 smooth-scroll pt-24">
      <DashboardHeader userData={userData} />
      <Sidebar />
      <div className="flex">
        <div
          className="mx-auto min-h-screen pt-8 w-full"
          style={{ maxWidth: '90rem' }}
        >
          <Cover isBusiness={isBusiness} {...commonProps} />

          <div className="my-6">
            <Layout
              userData={userData}
              business={isBusiness}
              firstCol={
                <div className="space-y-8">
                  <About {...commonProps} />
                  {!isBusiness && iAmOwnerOfThisProfile && (
                    <AdditionalFeatures />
                  )}
                  {iAmOwnerOfThisProfile && <GroupList userId={userData._id} />}
                </div>
              }
              secondCol={
                <div className="space-y-8 py-0">
                  <Background {...commonProps} />
                  <Activity
                    userData={userData}
                    iAmOwnerOfThisProfile={iAmOwnerOfThisProfile}
                  />
                  <Recommendations
                    iAmOwnerOfThisProfile={iAmOwnerOfThisProfile}
                    {...commonProps}
                    recommendation={commonProps?.userData?.recommendation}
                  />
                  <Following
                    list={commonProps?.userData?.following}
                    interests={commonProps?.userData?.background?.interests}
                  />
                  <RandomUsers
                    skipList={commonProps?.userData?.following}
                    userData={userData}
                    list={userData.following}
                  />
                </div>
              }
              thirdCol={
                <div className="space-y-8">
                  {showAllButtons && <PublicProfileCard userData={userData} />}
                  {showAllButtons && <ProfileStrength {...commonProps} />}
                  <PeopleAlsoViewed {...commonProps} />
                </div>
              }
            />
          </div>
        </div>
      </div>
      <CustomFooter />
    </div>
  )
}

export default Profile
