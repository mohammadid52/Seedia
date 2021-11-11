import { IReview } from 'interfaces/UniversalInterface'
import map from 'lodash/map'
import Review from 'pages/products/Review/Review'

const ReviewList = ({
  reviews,
  userId,
}: {
  reviews: IReview[]
  userId: string
}) => {
  return (
    <div className="flex flex-col gap-y-12">
      {/* @ts-ignore */}
      {map(reviews, (review) => (
        <Review userId={userId} review={review} />
      ))}
    </div>
  )
}

export default ReviewList
