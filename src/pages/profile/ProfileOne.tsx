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
import { network } from 'helpers'
import { useEffect } from 'react'
import { useUserContext } from 'context/UserContext'
import ProfileStrength from 'components/ProfileStrength'

const Profile = ({ userData }: { userData: IParent }) => {
  const route: any = useRouter()
  const userIdFromParam = route?.match?.params?.userId

  const { setValues } = useUserContext()
  const myId = userData._id

  // #1 first get userId from params
  // #2 check user id from token decoded object
  // #3 if it matches then current user is authUser (owner of profile)
  const authUser = userIdFromParam === userData._id
  const getProfileById = async () => {
    if (!authUser) {
      const { data } = await network.post('/user/getById/' + userIdFromParam)
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
      <div className="mx-auto min-h-screen pt-8 max-w-440">
        <Cover {...commonProps} />

        <div className="my-6">
          <Layout
            firstCol={
              <div className="space-y-12">{<About {...commonProps} />}</div>
            }
            secondCol={
              <div className="space-y-12">
                {authUser && <ProfileStrength {...commonProps} />}
                <Background {...commonProps} />
                <Recommendations recommendation={userData.recommendation} />
                <Following
                  list={userData.following}
                  interests={userData?.background?.interests}
                />
              </div>
            }
            thirdCol={<PeopleAlsoViewed {...commonProps} />}
          />
        </div>
      </div>
      <CustomFooter />
    </div>
  )
}

export default Profile
