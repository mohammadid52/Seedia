import { useState } from 'react'
import CustomFooter from 'components/CustomFooter'
import Cover from 'pages/profile/Cover'
import About from 'pages/profile/About'
import Background from 'pages/profile/Background'
import Recommendations from 'pages/profile/Recommendations'
import Following from 'pages/profile/Following'
import PeopleAlsoViewed from 'pages/profile/PeopleAlsoViewed'
import Layout from 'pages/profile/Layout'
import { IProfileOne } from 'interfaces/UniversalInterface'
import { useSelector } from 'react-redux'
import { getAuth } from 'helpers'

const Profile = ({ user }: { user: IProfileOne }) => {
  const [userData, setUserData] = useState(user)
  const auth = useSelector((state) => getAuth(state))

  const _userData = auth.user.data
  return (
    <div className="bg-gray-100 dark:bg-gray-800">
      <div className="mx-auto min-h-screen pt-8" style={{ maxWidth: '105rem' }}>
        <Cover userData={_userData} data={userData.about} />

        <div className="my-6">
          <Layout
            firstCol={<About userData={_userData} data={userData.about} />}
            secondCol={
              <div className="space-y-12">
                <Background
                  setData={(data) =>
                    setUserData({ ...userData, background: data })
                  }
                  data={userData.background}
                />
                <Recommendations recommendation={user.recommendation} />
                <Following />
              </div>
            }
            thirdCol={<PeopleAlsoViewed data={userData.peopleAlsoViewed} />}
          />
        </div>
      </div>
      <CustomFooter />
    </div>
  )
}

export default Profile
