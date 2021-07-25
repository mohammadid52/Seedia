import moment from 'moment'
import React, { useState } from 'react'
import {
  AiOutlineComment,
  AiOutlineLike,
  AiOutlineSend,
  AiTwotoneLike,
} from 'react-icons/ai'
import { RiShareForwardLine } from 'react-icons/ri'

const Card = ({ children, className }) => {
  return (
    <div
      className={`${className} mb-8 border-1 border-gray-300 rounded-2xl light overflow-hidden`}
      style={{ borderRadius: '0.9rem !important' }}
    >
      {children}
    </div>
  )
}
const Post = ({ post }) => {
  const { user, post: _post } = post

  // fake states
  const [liked, setLiked] = useState(false)

  return (
    <Card className="profile-feed light mb-8 p-3 pb-2">
      <div className="css-16j7msu light">
        <div className="flex items-start mb-3 justify-start">
          <div className="">
            <div>
              <span class="sr-only">
                {user.firstName} {user.lastName}
              </span>
              <span className="inline-block relative">
                <img
                  className="h-10 w-10 rounded-full"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
                <span className="absolute top-0 right-0 block h-2.5 w-2.5 rounded-full ring-2 ring-white bg-green-400" />
              </span>
            </div>
          </div>
          <div className="ml-3">
            <h6 className="text-left mb-1 font-semibold tracking-wide">
              {user.firstName} {user.lastName}{' '}
              <span className="italic text-gray-400 text-xs">
                • {moment(_post.postedAt).fromNow()}
              </span>
            </h6>

            <span className="text-gray-400">{user.achievement}</span>
          </div>
        </div>
        <div className="">
          <div className="left-col-panel col-lg-10 col-sm-12 col-md-6 col px-1">
            {_post.type === 'text' ? (
              <p className="text-gray-700">{_post.content}</p>
            ) : (
              <div>Coming soon</div>
            )}
          </div>
        </div>

        <div className="">
          <div className="justify-start space-x-12  col border-t border-gray-200 w-full flex items-center pt-2">
            <button
              onClick={() => setLiked(!liked)}
              className="inline-flex px-4 py-2 hover:bg-gray-200 rounded-lg text-lg"
            >
              Like
              <span className="ml-2 text-lg">
                {liked ? (
                  <AiTwotoneLike className="text-red-500" />
                ) : (
                  <AiOutlineLike />
                )}
              </span>
            </button>
            <button className="inline-flex px-4 py-2 hover:bg-gray-200 rounded-lg text-lg">
              Comment{' '}
              <span className="ml-2 text-lg">
                <AiOutlineComment />
              </span>
            </button>
            <button className="inline-flex px-4 py-2 hover:bg-gray-200 rounded-lg text-lg">
              Share{' '}
              <span className="ml-2 text-lg">
                <RiShareForwardLine />
              </span>
            </button>
            <button className="inline-flex px-4 py-2 hover:bg-gray-200 rounded-lg text-lg">
              Send{' '}
              <span className="ml-2 text-lg">
                <AiOutlineSend />
              </span>
            </button>
          </div>
        </div>
      </div>
    </Card>
  )
}

export default Post
