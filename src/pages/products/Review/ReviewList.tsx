import EmptyState from 'components/atoms/EmptyState'
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
      {reviews && reviews.length > 0 ? (
        map(reviews, (review) => <Review userId={userId} review={review} />)
      ) : (
        <EmptyState
          title="No reviews found"
          hideBorders
          subtitle="No one has given this rating for the product yet."
          iconUrl="/rating.png"
        />
      )}
    </div>
  )
}

export default ReviewList
