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
import jwt_decode from 'jwt-decode'
import { useDispatch } from 'react-redux'
import { loadUser } from 'state/Redux/Actions/authActions'
import PublicProfileCard from 'components/PublicProfileCard'

const getUniqId = (str?: string) => {
  if (str) {
    const arr = str.split('_')
    return arr[arr.length - 1]
  }
}

const Profile = ({ userData }: { userData: IParent }) => {
  const route: any = useRouter()
  const { viewMode, userId: userIdFromParam } = route?.match?.params

  const { setValues } = useUserContext()

  // #1 first get userId from params
  // #2 check user id from token decoded object
  // #3 if it matches then current user is authUser (owner of profile)
  const authUser =
    getUniqId(userIdFromParam) === userData.myId && viewMode === 'private'
  const token = getAccessToken()
  // @ts-ignore
  var decoded = jwt_decode(token)

  const checkOnlyId = getUniqId(userIdFromParam) === userData.myId

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

  const commonProps = { authUser, userData }

  return (
    <div className="bg-gray-100 dark:bg-gray-800">
      <Sidebar />
      <div className="flex">
        <div
          className="mx-auto min-h-screen pt-8 w-full"
          style={{ maxWidth: '110rem' }}
        >
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
                  {checkOnlyId && <PublicProfileCard userData={userData} />}
                  {checkOnlyId && <ProfileStrength {...commonProps} />}
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
