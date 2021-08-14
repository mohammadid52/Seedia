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

const Profile = ({ user }: { user: IProfileOne }) => {
  const [userData, setUserData] = useState(user)

  return (
    <div className="bg-gray-100 dark:bg-gray-800">
      <div className="mx-auto min-h-screen pt-8" style={{ maxWidth: '105rem' }}>
        <Cover data={userData.about} />

        <div className="my-6">
          <Layout
            firstCol={<About data={userData.about} />}
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
