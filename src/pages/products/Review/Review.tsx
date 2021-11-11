import { doReviewAction } from 'apis/mutations'
import { links } from 'constants/Links'
import { IReview } from 'interfaces/UniversalInterface'
import moment from 'moment'
import { useState } from 'react'
import { AiOutlineDislike, AiOutlineLike } from 'react-icons/ai'
import { useMutation } from 'react-query'
// @ts-ignore
// eslint-disable-next-line
import ReactStars from 'react-rating-stars-component'
import { classNames } from 'utils/classNames'

const Review = ({ review, userId }: { review: IReview; userId: string }) => {
  const ratingConfig = {
    size: 20,
    value: review.rating,
    edit: false,
  }
  console.log('🚀 ~ file: Review.tsx ~ line 14 ~ Review ~ review', review)

  const mutation = useMutation(doReviewAction)

  const [isLiked, setIsLiked] = useState(review.likes.includes(userId))
  const [isDisliked, setIsdisliked] = useState(review.dislikes.includes(userId))

  const [count, setCount] = useState({
    likes: review?.likes?.length || 0,
    dislikes: review?.likes?.length || 0,
  })

  const formatedCreatedOn = moment(review.createdOn).format('ll')
  return (
    <div className="flex">
      <div className="border-b space-y-2  w-full dark:border-gray-700 border-gray-200 pb-8">
        <div>
          <ReactStars {...ratingConfig} />
        </div>
        <h1 className="text-lg font-semibold text-gray-900 dark:text-white">
          {review?.reviewTitle || ''}
        </h1>
        <div>
          <p className="mt-1 flex items-center font-light dark:text-gray-300 text-gray-700">
            By{' '}
            <a
              href={links.getProductUrl(review?.user?.profileUrl)}
              className="hover:underline ml-1 font-medium"
            >
              {review?.user?.fullName}
            </a>
            , {review.user.location.country} on {formatedCreatedOn}
          </p>
        </div>
        <div className="">
          <p className="mt-1 font-light dark:text-gray-300 text-gray-700">
            {review.reviewText}
          </p>
        </div>
        {/* Like/Dislike Section */}
        <div className="flex gap-x-2  items-center">
          <div
            onClick={() => {
              mutation.mutate({ reviewId: review._id, action: 'like' })
              setIsLiked((prev) => {
                if (prev) {
                  setCount({ ...count, likes: count.likes - 1 })
                  return false
                } else {
                  setCount({
                    ...count,
                    likes: count.likes + 1,
                    dislikes: isDisliked ? count.dislikes - 1 : count.dislikes,
                  })
                  return true
                }
              })
              if (isDisliked) {
                setIsdisliked(false)
              }
            }}
            className={classNames(
              isLiked
                ? 'bg-yellow-500 border-yellow-500 text-white'
                : ' dark:border-gray-700 border-gray-200 dark:text-gray-400  text-gray-800',
              'mt-2  border flex  items-center px-4 transition-all cursor-pointer  rounded-md py-1'
            )}
          >
            <AiOutlineLike className="text-lg mr-2  " />{' '}
            <p className=" text-base ">{count.likes}</p>
          </div>
          <div
            onClick={() => {
              mutation.mutate({ reviewId: review._id, action: 'dislike' })
              setIsdisliked((prev) => {
                if (prev) {
                  setCount({ ...count, dislikes: count.dislikes - 1 })
                  return false
                } else {
                  setCount({
                    ...count,
                    dislikes: count.dislikes + 1,
                    likes: isLiked ? count.likes - 1 : count.likes,
                  })
                  return true
                }
              })
              if (isLiked) {
                setIsLiked(false)
              }
            }}
            className={classNames(
              isDisliked
                ? 'bg-yellow-500 border-yellow-500 text-white'
                : ' dark:border-gray-700 border-gray-200 dark:text-gray-400  text-gray-800',
              'mt-2  border flex  items-center px-4 transition-all cursor-pointer  rounded-md py-1'
            )}
          >
            <AiOutlineDislike className="text-lg mr-2 " />{' '}
            <p className=" text-base ">{count.dislikes}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Review
