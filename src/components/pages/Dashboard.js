import React, { useState } from 'react'
import Post from '../Post'
import Header from '../HeaderV2'
import Sidebar from '../Sidebar'
import DashboardStyles from '../styles/DashboardStyles'
import SideCard from '../SideCard'
import ListCard from '../ListCard'
import Card from '../Card'

const PostInput = ({ setPosts, posts }) => {
    const [postText, setPostText] = useState('')

    const onCreatePost = () => {
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

        setPosts([...posts, post])
    }
    return (
        <Card className="p-4 pb-2  post-new-feed">
            <div>
                <div className="row">
                    <div className="left-col-panel flex items-center justify-between col-lg-12 col-sm-12 col-md-6 col">
                        <div>
                            <img
                                src="/logo.png"
                                alt=""
                                className="profile-img-small"
                            />
                        </div>
                        <input
                            value={postText}
                            onChange={(e) => setPostText(e.target.value)}
                            placeholder="Start a post"
                            className="focus:outline-none input-search-button focus:ring-1 "
                        />
                        <div className="text-white light ml-4">
                            <button
                                onClick={onCreatePost}
                                className="p-2.5 submit-post-btn focus:ring-gray-400 focus:ring-1 flex items-center justify-center  fed"
                            >
                                <svg
                                    stroke="currentColor"
                                    fill="none"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                    style={{
                                        width: 21,
                                        height: 21,
                                    }}
                                >
                                    <line x1="22" y1="2" x2="11" y2="13"></line>
                                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                                </svg>
                                <span className="ml-2 item-label">Send</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="row">
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
                                    <circle
                                        fill="#FFC107"
                                        cx="18"
                                        cy="17"
                                        r="2"
                                    ></circle>
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
                                    <polygon
                                        fill="#1976D2"
                                        points="30,28 20,22 20,34"
                                    ></polygon>
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
                                        <path
                                            fill="none"
                                            d="M0 0h24v24H0z"
                                        ></path>
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
                                        <path
                                            fill="none"
                                            d="M0 0h24v24H0z"
                                        ></path>
                                        <path d="M20 22H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1zm-1-2V4H5v16h14zM7 6h4v4H7V6zm0 6h10v2H7v-2zm0 4h10v2H7v-2zm6-9h4v2h-4V7z"></path>
                                    </g>
                                </svg>
                                <span className="item-label ml-4">
                                    Write articles
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Card>
    )
}

const Divider = () => <hr style={{ margin: 'revert' }} />

const Dashboard = () => {
    const themeToggler = (val) => setTheme(val)
    const [theme, setTheme] = useState('light')

    const INITIAL_POST = {
        user: {
            firstName: 'Mohammad',
            lastName: 'Dehgamwala',
            achievement: 'Founder and CEO of XYZ',
        },

        post: {
            type: 'text',
            content:
                'Software development is the process of conceiving, specifying, designing, programming, documenting, testing, and bug fixing involved in creating and maintaining applications, frameworks, or other software components',
            postedAt: new Date(),
            likeCount: 4,
            commentCount: 3,
        },
    }

    const [posts, setPosts] = useState([INITIAL_POST])

    const [collapsed, setCollapsed] = useState(true)

    return (
        <div className="relative">
            <div {...{ className: DashboardStyles }}>
                <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />

                <div
                    className={`h-auto flow-root transition-all duration-500 sidebar-${
                        collapsed ? 'collapsed' : 'toggled'
                    }`}
                >
                    <Header themeToggler={themeToggler} theme={theme} />
                    <div
                        className="mt-8 h-72 content-wrapper grid grid-cols-5 mx-auto gap-x-4"
                        style={{ maxWidth: '90rem' }}
                    >
                        {/* 1st col */}
                        <div className="px-2 col-span-1">
                            <Card>
                                <div className="css-169sghn light">
                                    <div className="profile-details-container card card-body">
                                        <div className="float-left text-center pl-0 pr-0 col-sm-12 col-lg-12">
                                            <div className="col- profile-image">
                                                <div className="feed-identity"></div>
                                                <div>
                                                    <img
                                                        src="/static/media/13RMS.45341eaf.png"
                                                        alt=""
                                                        className="profile-img-large"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="float-right profile-description pr-0 mb-0  col-sm-12 col-lg-12">
                                            <div className="float-left pr-0 mb-10 col-md-12">
                                                <div className="profile-name text-center card-title">
                                                    Welcome, test@gmail.com
                                                </div>
                                                <p
                                                    className="text-center add-photo light"
                                                    style={{
                                                        color: 'rgb(0, 115, 177)',
                                                    }}
                                                >
                                                    Add photo
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <Divider />

                                    <div className="profile-details-container card card-body">
                                        <div className="float-left pl-0 pr-0 d-flex col-sm-12 col-lg-12 justify-between">
                                            <div className="">
                                                <p className="mb-0">
                                                    connections
                                                </p>
                                                <h6 className="font-semibold">
                                                    Expand your network
                                                </h6>
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

                                    <div className="profile-details-container card card-body">
                                        <div className="float-left  pl-0 pr-0 col-sm-12 col-lg-12">
                                            <div className="">
                                                <p className="mb-0">
                                                    Get access to exclusive
                                                    tools and insights
                                                </p>
                                                <h6 className="font-semibold">
                                                    Try Premium 1 month for free
                                                </h6>
                                            </div>
                                        </div>
                                    </div>
                                    <Divider />

                                    <div className="profile-details-container my-items light card card-body">
                                        <div className="float-left  pl-0 pr-0 col-sm-12 col-lg-12">
                                            <div className="">
                                                <h6 className="font-semibold text-center">
                                                    My items
                                                </h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                            <Card>
                                <div>
                                    <div className="profile-details-container card card-body mb-8">
                                        <div className="float-left  pl-0 pr-0 col-sm-12 col-lg-12">
                                            <div className="col mb-2">
                                                <a href="/">Groups</a>
                                            </div>
                                            <div className="col mb-2 d-flex justify-content-between">
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
                                                <a href="/">
                                                    Followed hashtags
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <Divider />
                                    <div className="profile-details-container more-activities light card card-body">
                                        <div className="float-left  pl-0 pr-0 col-sm-12 col-lg-12">
                                            <div className="">
                                                <h6 className="text-base text-center">
                                                    Discover more
                                                </h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </div>

                        {/* 2nd col to 4th col */}
                        <div className="col-span-3">
                            <PostInput posts={posts} setPosts={setPosts} />
                            <div className="mb-8 col- card prof-list light">
                                <div className="py-8 px-4 flex-wrap css-ntfbdu flex justify-between light">
                                    <ListCard />
                                    <ListCard />
                                    <ListCard />
                                </div>
                            </div>
                            {posts.map((post) => (
                                <Post post={post} />
                            ))}
                        </div>

                        {/* 5th col */}
                        <div className="h-auto col-span-1">
                            <SideCard />
                            <SideCard />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
