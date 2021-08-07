import React from 'react'
import CustomFooter from 'components/CustomFooter'
import DashboardHeader from 'pages/DashboardHeader'
import Cover from './Cover'
import About from './About'
import Background from './Background'
import Recommendations from './Recommendations'
import Following from './Following'
import PeopleAlsoViewed from './PeopleAlsoViewed'
import Layout from './Layout'

const Profile = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-800">
      <DashboardHeader />
      <div className="mx-auto min-h-screen my-8" style={{ maxWidth: '105rem' }}>
        <Cover />

        <div className="my-6">
          <Layout
            firstCol={<About />}
            secondCol={
              <div className="space-y-12">
                <Background />
                <Recommendations />
                <Following />
              </div>
            }
            thirdCol={<PeopleAlsoViewed />}
          />
        </div>
      </div>
      <CustomFooter />
    </div>
  )
}

export default Profile
