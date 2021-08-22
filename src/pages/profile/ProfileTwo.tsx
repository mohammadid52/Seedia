import React from 'react'
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
import { IProfileTwo } from 'interfaces/UniversalInterface'

const ProfileTwo = ({ user }: { user: IProfileTwo }) => {
  const headerRef = React.useRef()
  const headerVisible = useOnScreen(headerRef)

  return (
    <div className="bg-gray-100 dark:bg-gray-800 smooth-scroll">
      <Header headerRef={headerRef} about={user.about} />
      <div className="mx-auto min-h-screen pt-8" style={{ maxWidth: '105rem' }}>
        <Layout
          firstCol={
            <div className="fixed ">
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
              <Cover about={user.about} />
              <Experiences experience={user.experiences} />
              <div className="grid-cols-1 grid  sm:grid-cols-2 lg:grid-cols-2">
                <Skills skills={user.skills} />
                <Awards awards={user.awards} />
              </div>
              <Education data={user.education} />
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
                <Languages languages={user.languages} />
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
