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
  const { owner, publishDate, text } = post
  const { firstName, lastName, picture } = owner
  //
  // fake states
  const [liked, setLiked] = useState(false)

  return (
    <Card className="profile-feed light mb-8 p-3 pb-2">
      <div className="css-16j7msu light">
        <div className="flex items-start mb-3 justify-start">
          <div className="">
            <div>
              <span className="sr-only">
                {firstName} {lastName}
              </span>
              <span className="inline-block relative">
                <img
                  className="h-10 w-10 rounded-full shadow"
                  src={picture}
                  alt=""
                />
                <span className="absolute top-0 right-0 block h-2.5 w-2.5 rounded-full ring-2 ring-white bg-green-400" />
              </span>
            </div>
          </div>
          <div className="ml-4">
            <h6 className="text-left mb-1 font-semibold tracking-wide">
              {firstName} {lastName}
              <span className="absolute right-8 text-gray-400 text-xs">
                {moment(publishDate).fromNow()}
              </span>
            </h6>
            <p className="text-gray-600 text-xs tracking-wide">
              {'Web developer'}
            </p>

            {/* <span className="text-gray-400">{user.achievement}</span> */}
          </div>
        </div>
        <div className="">
          <div className="left-col-panel col-lg-10 col-sm-12 col-md-6 col px-1">
            <p>{text}</p>
          </div>
        </div>

        <div className="">
          <div className="justify-start   col border-t border-gray-200 w-full flex items-center pt-2">
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
