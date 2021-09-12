import CustomFooter from 'components/CustomFooter'
import Loading from 'components/Loading'
import ProfileStrength from 'components/ProfileStrength'
import PublicProfileCard from 'components/PublicProfileCard'
import Sidebar from 'components/Sidebar'
import { getUniqId, network, updateDocumentTitle } from 'helpers'
import { useRouter } from 'hooks/useRouter'
import { IParent } from 'interfaces/UniversalInterface'
import DashboardHeader from 'pages/DashboardHeader'
import About from 'pages/profile/About'
import Background from 'pages/profile/Background'
import Cover from 'pages/profile/Cover'
import Following from 'pages/profile/Following'
import Layout from 'pages/profile/Layout'
import PeopleAlsoViewed from 'pages/profile/PeopleAlsoViewed'
import Recommendations from 'pages/profile/Recommendations'
import { useEffect, useState } from 'react'
import RandomUsers from './RandomUsers'

const Profile = ({ userData }: { userData: IParent }) => {
  const route: any = useRouter()
  const { viewMode, userId: userIdFromParam } = route?.match?.params

  const iAmOwnerOfThisProfile = getUniqId(userIdFromParam) === userData._id

  const showAllButtons = iAmOwnerOfThisProfile && viewMode === 'private'

  const [otherUserData, setOtherUserData] = useState<IParent>(userData)

  useEffect(() => {
    if (!iAmOwnerOfThisProfile) {
      // I am not owner of this profile so fetch other user data
      fetchOtherUser()
    } else {
      updateDocumentTitle(userData.fullName)
    }
  }, [iAmOwnerOfThisProfile])

  const [fetchingData, setFetchingData] = useState(false)

  const fetchOtherUser = async () => {
    try {
      setFetchingData(true)
      const { data } = await network.post('/user/getById/' + userIdFromParam)
      setOtherUserData({ ...data.data })
      updateDocumentTitle(data.data.fullName)
    } catch (error) {
      // @ts-ignore
      console.error(error.message)
    } finally {
      setFetchingData(false)
    }
  }

  const commonProps = {
    authUser: showAllButtons,
    userData: iAmOwnerOfThisProfile ? userData : otherUserData,
  }

  return fetchingData ? (
    <Loading />
  ) : (
    <div className="bg-gray-100 dark:bg-gray-800">
      <DashboardHeader userData={userData} />
      <Sidebar />
      <div className="flex">
        <div
          className="mx-auto min-h-screen pt-8 w-full"
          style={{ maxWidth: '90rem' }}
        >
          <Cover {...commonProps} />

          <div className="my-6">
            <Layout
              firstCol={
                <div className="space-y-8">{<About {...commonProps} />}</div>
              }
              secondCol={
                <div className="space-y-8 py-0">
                  <Background {...commonProps} />
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
