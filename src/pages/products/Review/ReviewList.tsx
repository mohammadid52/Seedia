import { IReview } from 'interfaces/UniversalInterface'
import map from 'lodash/map'
import Review from 'pages/products/Review/Review'

const ReviewList = ({ reviews }: { reviews: IReview[] }) => {
  return (
    <div className="flex flex-col gap-y-12">
      {/* @ts-ignore */}
      {map(reviews, (review) => (
        <Review review={review} />
      ))}
    </div>
  )
}

export default ReviewList
