import React, { useEffect, useState } from 'react'
import Post from 'components/Post'
import SideCard from 'components/SideCard'
import DashboardLayout from 'pages/DashboardLayout'
import ListCard from 'components/ListCard'
import PostInput from './PostInput'
import PersonalCard from './AboutMe'
// import faker from 'faker'
import { IParent } from 'interfaces/UniversalInterface'

const Dashboard = ({ user, userData }: { user: any; userData: IParent }) => {
  const [users, setUsers] = useState([])

  const [posts, setPosts] = useState([])
  const [postLoading, setPostLoading] = useState(false)

  const [collapsed] = useState(true)

  return (
    // <Sidebar>
    <div className="relative dark:bg-gray-800 min-h-screen">
      <div className="">
        <div
          className={`h-auto flow-root  transition-all duration-500 sidebar-${
            collapsed ? 'collapsed' : 'toggled'
          }`}
        >
          <DashboardLayout
            firstColClass="md:hidden lg:block sm:hidden xl:block "
            firstCol={<PersonalCard userData={userData} />}
            secondCol={
              <div className="flex flex-col">
                <PostInput posts={posts} setPosts={setPosts} />
                <div className="relative">
                  <div className="py-8  grid grid-cols-2 gap-4 sm:grid-cols-2 ">
                    {users.slice(0, 2).map((user, idx) => {
                      return <ListCard key={idx} user={user} />
                    })}
                  </div>
                </div>
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
    </div>
    // </Sidebar>
  )
}

export default Dashboard
