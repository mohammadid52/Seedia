import CustomFooter from 'components/CustomFooter'
import Cover from 'pages/profile/Cover'
import About from 'pages/profile/About'
import Background from 'pages/profile/Background'
import Recommendations from 'pages/profile/Recommendations'
import Following from 'pages/profile/Following'
import PeopleAlsoViewed from 'pages/profile/PeopleAlsoViewed'
import Layout from 'pages/profile/Layout'
import { IParent } from 'interfaces/UniversalInterface'
import { useRouter } from 'hooks/useRouter'
import { getAccessToken, network } from 'helpers'
import { useEffect } from 'react'
import { useUserContext } from 'context/UserContext'
import ProfileStrength from 'components/ProfileStrength'
import Sidebar from 'components/Sidebar'

const Profile = ({ userData }: { userData: IParent }) => {
  const route: any = useRouter()
  const userIdFromParam = route?.match?.params?.userId

  const { setValues } = useUserContext()
  const myId = userData._id

  // #1 first get userId from params
  // #2 check user id from token decoded object
  // #3 if it matches then current user is authUser (owner of profile)
  const authUser = userIdFromParam === userData._id
  const token = getAccessToken()

  const getProfileById = async () => {
    if (!authUser) {
      const { data } = await network.post(
        '/user/getById/' + userIdFromParam,
        {},
        {
          headers: { Authorization: token },
        }
      )
      setValues({ ...data.data, _id: myId })
    } else {
      setValues({ ...userData })
    }
  }

  useEffect(() => {
    getProfileById()
  }, [userIdFromParam])

  const commonProps = { authUser, userData }

  return (
    <div className="bg-gray-100 dark:bg-gray-800">
      <Sidebar />
      <div className="flex">
        <div className="mx-auto min-h-screen pt-8 max-w-440">
          <Cover {...commonProps} />

          <div className="my-6">
            <Layout
              firstCol={
                <div className="space-y-12">{<About {...commonProps} />}</div>
              }
              secondCol={
                <div className="space-y-12">
                  <Background {...commonProps} />
                  <Recommendations
                    {...commonProps}
                    recommendation={userData.recommendation}
                  />
                  <Following
                    list={userData.following}
                    interests={userData?.background?.interests}
                  />
                </div>
              }
              thirdCol={
                <div className="space-y-12">
                  {authUser && <ProfileStrength {...commonProps} />}
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
