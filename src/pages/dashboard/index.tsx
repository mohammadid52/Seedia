import { useState } from 'react'
import Post from 'components/Post'
import SideCard from 'components/SideCard'
import DashboardLayout from 'pages/DashboardLayout'
import PostInput from './PostInput'
import PersonalCard from './AboutMe'
import { IParent } from 'interfaces/UniversalInterface'
import Sidebar from 'components/Sidebar'

const Dashboard = ({ userData }: { userData: IParent }) => {
  const [posts, setPosts] = useState([])
  const [postLoading] = useState(false)

  const [collapsed] = useState(true)

  return (
    <div className="relative  dark:bg-gray-800 bg-gray-100 min-h-screen">
      <Sidebar />

      <div
        className={`h-auto pt-4 flow-root  transition-all duration-500 sidebar-${
          collapsed ? 'collapsed' : 'toggled'
        }`}
      >
        <DashboardLayout
          firstColClass="md:hidden  lg:block sm:hidden xl:block "
          firstCol={<PersonalCard userData={userData} />}
          secondCol={
            <div className="flex flex-col">
              <PostInput
                profilePicture={userData?.profilePicture}
                posts={posts}
                setPosts={setPosts}
              />
              {/* <div className="relative">
                <div className="py-8  grid grid-cols-2 gap-4 sm:grid-cols-2 ">
                  {users.slice(0, 2).map((user, idx) => {
                    return <ListCard key={idx} user={user} />
                  })}
                </div>
              </div> */}
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
            </div>
          }
        />
      </div>
    </div>
    // </Sidebar>
  )
}

export default Dashboard
