import React, { useEffect, useState } from 'react'
import Post from 'components/Post'

import SideCard from 'components/SideCard'

import Card from 'components/Card'
import Button from 'components/atoms/Button'
import DashboardHeader from 'pages/DashboardHeader'
import DashboardLayout from 'pages/DashboardLayout'
import ListCard from 'components/ListCard'

const PostInput = ({ setPosts, posts }) => {
  const [postText, setPostText] = useState('')

  const onCreatePost = () => {
    if (postText.trim().length > 0) {
      const post = {
        user: {
          firstName: 'Mohammad',
          lastName: 'Dehgamwala',
          achievement: 'Founder and CEO of XYZ',
        },

        post: {
          type: 'text',
          content: postText,
          postedAt: new Date(),
          likeCount: 4,
          commentCount: 3,
        },
      }
      setPostText('')
      setPosts([...posts, post])
    }
  }
  return (
    <Card className="p-4 post-new-feed">
      <div>
        <div className="">
          <div className="left-col-panel flex items-center justify-between col-lg-12 col-sm-12 col-md-6 col">
            <div className="flex w-full">
              <img src="/logo.png" alt="" className="h-14 w-auto" />
              <input
                value={postText}
                onChange={(e) => setPostText(e.target.value)}
                placeholder="Start a post"
                className="ml-4 focus:outline-none input-search-button focus:ring-1 border-1 border-gray-300 leading-tight h-12 pl-6 rounded-full w-full"
              />
            </div>
            <div className="text-white light ml-4">
              <Button
                rounded="rounded-full"
                onClick={onCreatePost}
                label={'Send'}
                gradient
              />
            </div>
          </div>
        </div>
        <div className="">
          <div className="left-col-panel col-lg-12 col-sm-12 col-md-6 d-flex justify-content-between mt-4 col">
            <div>
              <button className="post-options">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  version="1"
                  viewBox="0 0 48 48"
                  enableBackground="new 0 0 48 48"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    width: 21,
                    height: 21,
                  }}
                >
                  <rect
                    x="12.3"
                    y="12.3"
                    transform="matrix(.948 .318 -.318 .948 9.725 -6.994)"
                    fill="#64B5F6"
                    width="28"
                    height="28"
                  ></rect>
                  <rect
                    x="15.6"
                    y="15.4"
                    transform="matrix(.951 .31 -.31 .951 9.176 -6.977)"
                    fill="#1E88E5"
                    width="22"
                    height="20"
                  ></rect>
                  <rect
                    x="8.1"
                    y="8.1"
                    transform="matrix(.983 .181 -.181 .983 4.385 -3.65)"
                    fill="#90CAF9"
                    width="28"
                    height="28"
                  ></rect>
                  <rect
                    x="11.3"
                    y="11.2"
                    transform="matrix(.985 .175 -.175 .985 4.048 -3.566)"
                    fill="#42A5F5"
                    width="22"
                    height="20"
                  ></rect>
                  <rect
                    x="4"
                    y="4"
                    fill="#BBDEFB"
                    width="28"
                    height="28"
                  ></rect>
                  <rect
                    x="7"
                    y="7"
                    fill="#4CAF50"
                    width="22"
                    height="20"
                  ></rect>
                  <path
                    fill="#fff"
                    d="M16,13c0-1.1,0.9-2,2-2s2,0.9,2,2s-2,4-2,4S16,14.1,16,13z"
                  ></path>
                  <path
                    fill="#fff"
                    d="M20,21c0,1.1-0.9,2-2,2s-2-0.9-2-2s2-4,2-4S20,19.9,20,21z"
                  ></path>
                  <path
                    fill="#fff"
                    d="M13.5,16.7c-1-0.6-1.3-1.8-0.7-2.7c0.6-1,1.8-1.3,2.7-0.7c1,0.6,2.5,3.7,2.5,3.7S14.5,17.3,13.5,16.7z"
                  ></path>
                  <path
                    fill="#fff"
                    d="M22.5,17.3c1,0.6,1.3,1.8,0.7,2.7c-0.6,1-1.8,1.3-2.7,0.7C19.5,20.2,18,17,18,17S21.5,16.7,22.5,17.3z"
                  ></path>
                  <path
                    fill="#fff"
                    d="M22.5,16.7c1-0.6,1.3-1.8,0.7-2.7c-0.6-1-1.8-1.3-2.7-0.7C19.5,13.8,18,17,18,17S21.5,17.3,22.5,16.7z"
                  ></path>
                  <path
                    fill="#fff"
                    d="M13.5,17.3c-1,0.6-1.3,1.8-0.7,2.7c0.6,1,1.8,1.3,2.7,0.7c1-0.6,2.5-3.7,2.5-3.7S14.5,16.7,13.5,17.3z"
                  ></path>
                  <circle fill="#FFC107" cx="18" cy="17" r="2"></circle>
                </svg>
                <span className="item-label ml-4">Photo</span>
              </button>
            </div>
            <div>
              <button className="post-options">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  version="1"
                  viewBox="0 0 48 48"
                  enableBackground="new 0 0 48 48"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    width: 21,
                    height: 21,
                  }}
                >
                  <polygon
                    fill="#90CAF9"
                    points="40,45 8,45 8,3 30,3 40,13"
                  ></polygon>
                  <polygon
                    fill="#E1F5FE"
                    points="38.5,14 29,14 29,4.5"
                  ></polygon>
                  <polygon fill="#1976D2" points="30,28 20,22 20,34"></polygon>
                </svg>
                <span className="item-label ml-4">Video</span>
              </button>
            </div>
            <div>
              <button className="post-options">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    width: 21,
                    height: 21,
                  }}
                >
                  <g>
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M17 3h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4V1h2v2h6V1h2v2zM4 9v10h16V9H4zm2 4h5v4H6v-4z"></path>
                  </g>
                </svg>
                <span className="item-label ml-4">Event</span>
              </button>
            </div>
            <div>
              <button className="post-options">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    width: 21,
                    height: 21,
                  }}
                >
                  <g>
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M20 22H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1zm-1-2V4H5v16h14zM7 6h4v4H7V6zm0 6h10v2H7v-2zm0 4h10v2H7v-2zm6-9h4v2h-4V7z"></path>
                  </g>
                </svg>
                <span className="item-label ml-4">Write articles</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}

const Divider = () => <hr style={{ margin: 'revert' }} />

const PersonalCard = ({ className }) => {
  return (
    <div className={`px-2 ${className}`}>
      <Card>
        <div className="light">
          <div className="p-4 overflow-hidden relative">
            <div className="float-left text-center pl-0 pr-0 col-sm-12 col-lg-12">
              <div className="col- profile-image">
                <div className="feed-identity"></div>
                <span className="inline-block ">
                  <img
                    className="h-16 w-16 rounded-full z-20"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </span>
              </div>
            </div>
            <div className="float-right profile-description pr-0 mb-0  col-sm-12 col-lg-12">
              <div className="float-left pr-0  col-md-12">
                <div className="mt-4 mb-1 text-base hover:underline  font-extrabold text-center">
                  Mohammad Dehgamwala
                </div>

                <p className="pb-0 text-sm text-center">Web developer</p>

                <p className="link-hover pb-0 mb-0 tracking-wide cursor-pointer text-center add-photo light">
                  Change photo
                </p>
              </div>
            </div>
          </div>
          <Divider />

          <div className="p-4 overflow-hidden">
            <div className="float-left pl-0 pr-0 d-flex col-sm-12 col-lg-12 justify-between">
              <div className="">
                <p className="mb-0">connections</p>
                <h6 className="font-semibold">Expand your network</h6>
              </div>
              <div>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 1024 1024"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-black text-xl"
                >
                  <path d="M678.3 642.4c24.2-13 51.9-20.4 81.4-20.4h.1c3 0 4.4-3.6 2.2-5.6a371.67 371.67 0 0 0-103.7-65.8c-.4-.2-.8-.3-1.2-.5C719.2 505 759.6 431.7 759.6 349c0-137-110.8-248-247.5-248S264.7 212 264.7 349c0 82.7 40.4 156 102.6 201.1-.4.2-.8.3-1.2.5-44.7 18.9-84.8 46-119.3 80.6a373.42 373.42 0 0 0-80.4 119.5A373.6 373.6 0 0 0 137 888.8a8 8 0 0 0 8 8.2h59.9c4.3 0 7.9-3.5 8-7.8 2-77.2 32.9-149.5 87.6-204.3C357 628.2 432.2 597 512.2 597c56.7 0 111.1 15.7 158 45.1a8.1 8.1 0 0 0 8.1.3zM512.2 521c-45.8 0-88.9-17.9-121.4-50.4A171.2 171.2 0 0 1 340.5 349c0-45.9 17.9-89.1 50.3-121.6S466.3 177 512.2 177s88.9 17.9 121.4 50.4A171.2 171.2 0 0 1 683.9 349c0 45.9-17.9 89.1-50.3 121.6C601.1 503.1 558 521 512.2 521zM880 759h-84v-84c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v84h-84c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h84v84c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-84h84c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z"></path>
                </svg>
              </div>
            </div>
          </div>
          <Divider />

          <div className="p-4 overflow-hidden">
            <div className="float-left  pl-0 pr-0 col-sm-12 col-lg-12">
              <div className="">
                <p className="mb-2">
                  Get access to exclusive tools and insights
                </p>
                <h6 className="font-semibold">Try Premium 1 month for free</h6>
              </div>
            </div>
          </div>
          <Divider />

          <div className="p-4 hover:bg-gray-100 cursor-pointer overflow-hidden">
            <div className="float-left  pl-0 pr-0 col-sm-12 col-lg-12">
              <div className="">
                <h6 className="cursor-pointer font-semibold text-center">
                  My items
                </h6>
              </div>
            </div>
          </div>
        </div>
      </Card>
      <Card>
        <div>
          <div className="p-4 overflow-hidden mb-8">
            <div className="float-left  pl-0 pr-0 col-sm-12 col-lg-12">
              <div className="col mb-2 ml-0">
                <a href="/">Groups</a>
              </div>
              <div className="col mb-2 d-flex justify-content-between ml-0">
                <a href="/">Events</a>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  t="1551322312294"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-black text-xl "
                >
                  <defs></defs>
                  <path d="M474 152m8 0l60 0q8 0 8 8l0 704q0 8-8 8l-60 0q-8 0-8-8l0-704q0-8 8-8Z"></path>
                  <path d="M168 474m8 0l672 0q8 0 8 8l0 60q0 8-8 8l-672 0q-8 0-8-8l0-60q0-8 8-8Z"></path>
                </svg>
              </div>
              <div className="mb-2">
                <a href="/">Followed hashtags</a>
              </div>
            </div>
          </div>
          <Divider />
          <div className="p-4 hover:bg-gray-100 cursor-pointer overflow-hidden">
            <div className="float-left  pl-0 pr-0 col-sm-12 col-lg-12">
              <div className="">
                <h6 className="cursor-pointer font-semibold text-center">
                  Discover more
                </h6>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}

const Dashboard = () => {
  const [users, setUsers] = useState([])
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
            firstCol={<PersonalCard />}
            secondCol={
              <div className="">
                <PostInput posts={posts} setPosts={setPosts} />
                <Card className="relative">
                  <div className="py-8 px-4 grid grid-cols-2 gap-4 sm:grid-cols-2 ">
                    {users.slice(0, 2).map((user) => {
                      return <ListCard key={user.id} user={user} />
                    })}
                  </div>
                </Card>
                {postLoading ? (
                  <Card className="p-4 text-center">loading</Card>
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

// <div
//           className="mt-8 content-wrapper grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-x-4 mx-auto"
//           style={{ maxWidth: '90rem' }}
//         >
//           {/* 1st col */}
//           <PersonalCard />

//           {/* 2nd col to 4th col */}
// <div className="second-col col-span-1">
//   <PostInput posts={posts} setPosts={setPosts} />
//   <Card className="relative">
//     <div className="py-8 px-4 flex-wrap flex justify-center light space-x-2">
//       <ListCard
//         imgUrl={
//           'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
//         }
//       />
//       <ListCard
//         imgUrl={
//           'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
//         }
//       />
//       <ListCard
//         imgUrl={
//           'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80'
//         }
//       />
//     </div>
//   </Card>
//   {posts.map((post) => (
//     <Post post={post} />
//   ))}
// </div>

//           {/* 5th col */}

// <div className=" hidden lg:block  h-auto">
//   <SideCard />
//   <SideCard />
// </div>
//         </div>
