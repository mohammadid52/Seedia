import CustomFooter from 'components/CustomFooter'
import Cover from 'pages/profile/Cover'
import About from 'pages/profile/About'
import Background from 'pages/profile/Background'
import Recommendations from 'pages/profile/Recommendations'
import Following from 'pages/profile/Following'
import PeopleAlsoViewed from 'pages/profile/PeopleAlsoViewed'
import Layout from 'pages/profile/Layout'
import { IParent, IProfileOne } from 'interfaces/UniversalInterface'
import { useRouter } from 'hooks/useRouter'

const Profile = ({
  user,
  userData,
}: {
  user: IProfileOne
  userData: IParent
}) => {
  const route: any = useRouter()
  const userIdFromParam = route?.match?.params?.userId

  // #1 first get userId from params
  // #2 check user id from token decoded object
  // #3 if it matches then current user is authUser (owner of profile)
  const authUser = userIdFromParam === userData._id
  return (
    <div className="bg-gray-100 dark:bg-gray-800">
      <div className="mx-auto min-h-screen pt-8 max-w-440">
        <Cover about={userData} company={userData?.company} data={user.about} />

        <div className="my-6">
          <Layout
            firstCol={<About authUser={authUser} userData={userData} />}
            secondCol={
              <div className="space-y-12">
                <Background authUser={authUser} userData={userData} />
                <Recommendations recommendation={user.recommendation} />
                <Following />
              </div>
            }
            thirdCol={<PeopleAlsoViewed data={user.peopleAlsoViewed} />}
          />
        </div>
      </div>
      <CustomFooter />
    </div>
  )
}

export default Profile
