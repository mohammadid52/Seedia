import React from 'react'

import faker from 'faker'
import Layout from 'pages/profile/Layout'
import Header from 'components/profileTwo/Header'
import Cover from 'components/profileTwo/Cover'
import Card from 'components/atoms/Card'
import CustomFooter from 'components/CustomFooter'
import Shortcuts from 'components/profileTwo/Shortcuts'
import Experiences from 'components/profileTwo/Experiences'
import Skills from 'components/profileTwo/Skills'
import Awards from 'components/profileTwo/Awards'
import Education from 'components/profileTwo/Education'
import Languages from 'components/profileTwo/Languages'
import PeopleAlsoViewed from './PeopleAlsoViewed'
import useOnScreen from 'hooks/useOnScreen'

const user = {
  fullName: faker.name.findName(),
  email: faker.internet.email(),
  companyName: faker.company.companyName(),
  companyAddress: faker.address.secondaryAddress(),
  jobTitle: faker.name.jobTitle(),
  userImage: faker.image.avatar(),
  experience: [
    {
      jobTitle: faker.name.jobTitle(),
      companyName: faker.company.companyName(),
      companyAddress: `${faker.address.city()}, ${faker.address.country()}`,
      from: `${faker.date.past().getFullYear()}`,
      to: `${faker.date.past().getFullYear()}`,
    },
    {
      jobTitle: faker.name.jobTitle(),
      companyName: faker.company.companyName(),
      companyAddress: `${faker.address.city()}, ${faker.address.country()}`,
      from: `${faker.date.past().getFullYear()}`,
      to: `${faker.date.past().getFullYear()}`,
    },
    {
      jobTitle: faker.name.jobTitle(),
      companyName: faker.company.companyName(),
      companyAddress: `${faker.address.city()}, ${faker.address.country()}`,
      from: `${faker.date.past().getFullYear()}`,
      to: `${faker.date.past().getFullYear()}`,
    },
  ],
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
  education: [
    {
      from: `${faker.date.past().getFullYear()}`,
      to: `${faker.date.past().getFullYear()}`,
      name: `Massachusetts Institue of Technology (MIT)`,
      degree:
        'Master of Fine Arts,Design and Technology, 77 Massachusetts Ave, USA',
    },
    {
      from: `${faker.date.past().getFullYear()}`,
      to: `${faker.date.past().getFullYear()}`,
      name: `Stanford University`,
      degree: 'Bachelor of Fine Arts,Stanford, USA',
    },
  ],
}

const ProfileTwo = () => {
  const headerRef = React.useRef()
  const headerVisible = useOnScreen(headerRef)

  return (
    <div className="bg-gray-100 dark:bg-gray-800 smooth-scroll">
      <Header headerRef={headerRef} user={user} />
      <div className="mx-auto min-h-screen pt-8" style={{ maxWidth: '105rem' }}>
        <Layout
          firstCol={
            <div className="fixed">
              <Card
                style={{
                  transform: headerVisible
                    ? 'translateY(0)'
                    : 'translateY(-13rem)',
                }}
                className={`w-60 transition-transform duration-200`}
                secondary
                cardTitle="Shortcuts"
                content={
                  <div>
                    <Shortcuts />
                  </div>
                }
              />
            </div>
          }
          secondCol={
            <div className="space-y-12">
              <Cover user={user} />
              <Experiences experience={user.experience} />
              <div className="grid-cols-1 grid  sm:grid-cols-2 lg:grid-cols-2">
                <Skills />
                <Awards />
              </div>
              <Education data={user.education} />
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
                <Languages />
              </div>
            </div>
          }
          thirdCol={<PeopleAlsoViewed data={user.peopleAlsoViewed} secondary />}
        />
      </div>
      <CustomFooter />
    </div>
  )
}

export default ProfileTwo
