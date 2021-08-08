import Button from 'components/atoms/Button'
import { useState } from 'react'

const PostInput = ({ setPosts, posts }: { posts: any; setPosts: any }) => {
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
    <div className="p-4 post-new-feed">
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
    </div>
  )
}

export default PostInput
