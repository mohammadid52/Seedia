import React from 'react'
import CustomFooter from 'components/CustomFooter'
import Cover from './Cover'
import About from './About'
import Background from './Background'
import Recommendations from './Recommendations'
import Following from './Following'
import PeopleAlsoViewed from './PeopleAlsoViewed'
import Layout from './Layout'
import faker from 'faker'

const user = {
  peopleAlsoViewed: [
    {
      image: faker.image.avatar(),
      fullName: faker.name.findName(),
      jobType: faker.name.jobType(),
    },
    {
      image: faker.image.avatar(),
      fullName: faker.name.findName(),
      jobType: faker.name.jobType(),
    },
    {
      image: faker.image.avatar(),
      fullName: faker.name.findName(),
      jobType: faker.name.jobType(),
    },
    {
      image: faker.image.avatar(),
      fullName: faker.name.findName(),
      jobType: faker.name.jobType(),
    },
    {
      image: faker.image.avatar(),
      fullName: faker.name.findName(),
      jobType: faker.name.jobType(),
    },
    {
      image: faker.image.avatar(),
      fullName: faker.name.findName(),
      jobType: faker.name.jobType(),
    },
    {
      image: faker.image.avatar(),
      fullName: faker.name.findName(),
      jobType: faker.name.jobType(),
    },
    {
      image: faker.image.avatar(),
      fullName: faker.name.findName(),
      jobType: faker.name.jobType(),
    },
  ],
}

const Profile = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-800">
      <div className="mx-auto min-h-screen pt-8" style={{ maxWidth: '105rem' }}>
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
            thirdCol={<PeopleAlsoViewed data={user.peopleAlsoViewed} />}
          />
        </div>
      </div>
      <CustomFooter />
    </div>
  )
}

export default Profile
