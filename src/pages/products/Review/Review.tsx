// @ts-ignore
// eslint-disable-next-line
import ReactStars from 'react-rating-stars-component'
import { avatarPlaceholder } from 'state/Redux/constants'
import moment from 'moment'
import { IReview } from 'interfaces/UniversalInterface'

const Review = ({ review }: { review: IReview }) => {
  const ratingConfig = {
    size: 20,
    value: review.rating,
    edit: false,
  }

  const formatedCreatedOn = moment(review.createdOn).format('ll')
  return (
    <div className="flex">
      <div className=" flex-shrink-0">
        <img
          className="h-10 mr-6 rounded-full w-10 drop-shadow-lg"
          src={
            review?.user?.profilePicture
              ? review?.user?.profilePicture
              : avatarPlaceholder
          }
          alt="user"
        />
      </div>
      <div className="border-b space-y-2  w-full dark:border-gray-700 border-gray-200 pb-8">
        <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
          {review?.user?.fullName}
        </h4>
        <span className="text-base font-light text-gray-500 dark:text-gray-500">
          {formatedCreatedOn}
        </span>
        <div>
          <ReactStars {...ratingConfig} />
        </div>
        <div>
          <p className="mt-1 font-light dark:text-gray-300 text-gray-700">
            {review.reviewText}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Review
