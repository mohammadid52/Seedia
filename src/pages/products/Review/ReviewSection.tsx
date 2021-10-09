import { fetchReviewsByProduct } from 'apis/queries'
import Button from 'components/atoms/Button'
import Title from 'components/atoms/Title'
import Loading from 'components/Loading'
import { links } from 'constants/Links'
import { ErrorFallback } from 'index'
import { IProduct, IReview } from 'interfaces/UniversalInterface'
import { find } from 'lodash'
import ReviewList from 'pages/products/Review/ReviewList'
import { useQuery } from 'react-query'

const ReviewSection = ({
  reviewsIds,
  productId,
  userId,
}: {
  reviewsIds: IProduct['reviews']
  productId: string
  userId?: string
}) => {
  const config = { idArray: reviewsIds }
  const { isError, isLoading, error, data, isFetched, refetch } = useQuery(
    'reviews',
    () => fetchReviewsByProduct(productId, config)
  )

  const WriteReviewButton = () => {
    return (
      <Button
        link={links.createReview(productId)}
        label="Submit your review"
        gradient
        target=""
      />
    )
  }

  const alreadyReviewGiven = find(
    reviewsIds,
    (review) => review.userId === userId
  )

  const reviews: IReview[] = isFetched && !isLoading && data.data.data

  if (isLoading) {
    return <Loading />
  }
  if (isError) {
    return (
      <ErrorFallback resetErrorBoundary={refetch} error={{ message: error }} />
    )
  }

  return (
    <div className="mt-10">
      <h2 className="text-sm font-medium text-gray-900 dark:text-white">
        Reviews ({reviews?.length || 0})
      </h2>

      <div className="mt-4 space-y-6">
        {reviews?.length > 0 ? (
          <div>
            {!alreadyReviewGiven && (
              <div className="my-4 flex items-center justify-end">
                <WriteReviewButton />
              </div>
            )}

            <ReviewList reviews={reviews} />
          </div>
        ) : (
          <>
            <Title
              textColor="text-gray-400 dark:text-gray-500"
              className="mb-4"
              fontWeight="font-light"
              size="text-lg"
            >
              Be the first to review
            </Title>
            <WriteReviewButton />
          </>
        )}
      </div>
    </div>
  )
}

export default ReviewSection
