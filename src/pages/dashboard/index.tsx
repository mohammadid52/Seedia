import Post from 'components/Post'
import Sidebar from 'components/Sidebar'
import SideCard from 'components/SideCard'
import { updateDocumentTitle } from 'helpers'
import { IParent, NavProps } from 'interfaces/UniversalInterface'
import DashboardHeader from 'pages/DashboardHeader'
import DashboardLayout from 'pages/DashboardLayout'
import Following from 'pages/profile/Following'
import { useEffect, useState } from 'react'
import PersonalCard from './AboutMe'
import PostInput from './PostInput'

interface DashboardProps extends NavProps {
  userData: IParent
}

const Dashboard = ({ userData }: DashboardProps) => {
  const [posts, setPosts] = useState([])
  const [postLoading] = useState(false)

  useEffect(() => {
    updateDocumentTitle('Dashboard')
  }, [])

  return (
    <div className="relative  dark:bg-gray-800 bg-gray-100 min-h-screen">
      <DashboardHeader userData={userData} />

      <Sidebar />

      <div className={`h-auto pt-4 flow-root  transition-all duration-500 `}>
        <DashboardLayout
          firstColClass="md:hidden max-h-152 lg:block sm:hidden xl:block "
          firstCol={<PersonalCard userData={userData} />}
          secondCol={
            <div className="flex gap-y-4 flex-col">
              <PostInput
                profilePicture={userData?.profilePicture}
                posts={posts}
                setPosts={setPosts}
              />

              {postLoading ? (
                <div className="p-4 text-center">loading</div>
              ) : (
                posts.map((post, idx) => <Post key={idx} post={post} />)
              )}
            </div>
          }
          thirdCol={
            <div className="space-y-12">
              <SideCard />
              <SideCard />
              <Following
                showSingleCard
                list={userData?.following}
                interests={userData?.background?.interests}
              />
            </div>
          }
        />
      </div>
    </div>
    // </Sidebar>
  )
}

export default Dashboard
