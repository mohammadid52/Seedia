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
  about: {
    currentCompany: faker.company.companyName(),
    previoudCompany: faker.company.companyName(),
    livesIn: faker.address.cityName(),
    maritalStatus: 'Married',
  },

  background: {
    interests: [
      { name: 'Branding' },
      { name: 'Web Design' },
      { name: 'Mobile Design' },
      { name: 'Development' },
    ],
    summary: faker.lorem.paragraph(),
    experience: [
      {
        jobTitle: faker.name.jobTitle(),
        companyName: faker.company.companyName(),
        startedAt: faker.date.past().getFullYear().toString(),
        endedAt: faker.date.past().getFullYear().toString(),
        description: faker.lorem.paragraph(2),
      },
      {
        jobTitle: faker.name.jobTitle(),
        companyName: faker.company.companyName(),
        startedAt: faker.date.past().getFullYear().toString(),
        endedAt: faker.date.past().getFullYear().toString(),
        description: faker.lorem.paragraph(2),
      },
    ],
  },

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
            firstCol={<About data={user.about} />}
            secondCol={
              <div className="space-y-12">
                <Background data={user.background} />
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
