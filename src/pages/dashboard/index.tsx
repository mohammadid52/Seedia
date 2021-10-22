import Loading from 'components/Loading'
import Sidebar from 'components/Sidebar'
import SideCard from 'components/SideCard'
import useUser from 'hooks/useUser'
import { IParent, NavProps } from 'interfaces/UniversalInterface'
import ListPosts from 'pages/dashboard/ListPosts'
import DashboardHeader from 'pages/DashboardHeader'
import DashboardLayout from 'pages/DashboardLayout'
import GroupList from 'pages/groups/GroupList'
import { useState } from 'react'
import PersonalCard from './AboutMe'
import PostInput from './PostInput'

interface DashboardProps extends NavProps {
  userData: IParent
}

const Dashboard = ({ userData }: DashboardProps) => {
  const [posts, setPosts] = useState([])

  const { isFetched, isLoading } = useUser(userData._id, userData)

  if (isLoading && !isFetched) {
    return <Loading />
  }

  return (
    <div className="relative  dark:bg-gray-900 bg-gray-100 min-h-screen ">
      <DashboardHeader userData={userData} />

      <Sidebar />

      <div
        className={`h-auto pt-4 relative flow-root  transition-all duration-500 `}
      >
        <DashboardLayout
          firstColClass={`md:hidden   max-h-152 lg:block sm:hidden xl:block `}
          firstCol={
            <div className="flex flex-col gap-y-12">
              <PersonalCard userData={userData} />
              <GroupList secondary userId={userData._id} />
            </div>
          }
          secondCol={
            <div
              className="flex gap-y-4 mx-auto  flex-col"
              style={{ maxWidth: '40rem' }}
            >
              <PostInput
                profilePicture={userData?.profilePicture}
                posts={posts}
                setPosts={setPosts}
              />
              <ListPosts />
            </div>
          }
          thirdCol={
            <div className="space-y-12">
              <SideCard />
              <SideCard />
              {/* <Following
                showSingleCard
                list={userData?.following}
                interests={userData?.background?.interests}
              /> */}
            </div>
          }
        />
      </div>
    </div>
    // </Sidebar>
  )
}

export default Dashboard
