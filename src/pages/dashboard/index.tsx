import React, { useEffect, useState } from 'react'
import Post from 'components/Post'
import SideCard from 'components/SideCard'
import DashboardHeader from 'pages/DashboardHeader'
import DashboardLayout from 'pages/DashboardLayout'
import ListCard from 'components/ListCard'
import PostInput from './PostInput'
import PersonalCard from './AboutMe'
import faker from 'faker'

const Dashboard = () => {
  const [users, setUsers] = useState([])

  const [user, setUser] = useState({})
  const [accountInfo, setAccountInfo] = useState({})

  useEffect(() => {
    const fetchAccountType = () =>
      window.localStorage.getItem('accountType') || 'Personal'

    const fetchUserInfo = () => {
      const json: any = window.localStorage.getItem('user')
      return JSON.parse(json) || {}
    }

    const fetchAccountInfo = () => {
      const accountType = fetchAccountType().toLocaleLowerCase()
      const fetchItemsByAccountType: any =
        window.localStorage.getItem(accountType)
      return JSON.parse(fetchItemsByAccountType) || {}
    }

    const user = fetchUserInfo()
    const accountInfo = fetchAccountInfo()
    setUser({ ...user })
    setAccountInfo({ ...accountInfo })

    return () => {
      fetchUserInfo()
      fetchAccountInfo()
    }
  }, [])

  const BASE_URL = 'https://dummyapi.io/data/api/'
  const APP_ID = '61059484a441674e99287b7f'

  const fetchUsers = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((json) => setUsers(json))
  }
  const fetchPosts = () => {
    setPostLoading(true)
    fetch(`${BASE_URL}post`, { headers: { 'app-id': APP_ID } })
      .then((response) => response.json())
      .then((json) => setPosts(json.data))
      .finally(() => {
        setPostLoading(false)
      })
    // .finally(() => setPostLoading(false))
  }

  useEffect(() => {
    fetchUsers()
    fetchPosts()
    return () => {
      fetchUsers()
      fetchPosts()
    }
  }, [])

  const [posts, setPosts] = useState([])
  const [postLoading, setPostLoading] = useState(false)

  const [collapsed] = useState(true)

  return (
    // <Sidebar>
    <div className="relative">
      <div className="">
        <div
          className={`h-auto flow-root transition-all duration-500 sidebar-${
            collapsed ? 'collapsed' : 'toggled'
          }`}
        >
          <DashboardHeader />
          <DashboardLayout
            firstColClass="md:hidden lg:block sm:hidden xl:block"
            firstCol={<PersonalCard user={user} accountInfo={accountInfo} />}
            secondCol={
              <div className="">
                <PostInput posts={posts} setPosts={setPosts} />
                <div className="relative">
                  <div className="py-8 px-4 grid grid-cols-2 gap-4 sm:grid-cols-2 ">
                    {users.slice(0, 2).map((user) => {
                      return (
                        <ListCard key={faker.datatype.uuid()} user={user} />
                      )
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
              <div className="">
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
