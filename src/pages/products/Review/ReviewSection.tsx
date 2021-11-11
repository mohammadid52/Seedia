import { fetchReviewsByProduct } from 'apis/queries'
import Button from 'components/atoms/Button'
import Card from 'components/atoms/Card'
// @ts-ignore
// eslint-disable-next-line
import ReactStars from 'react-rating-stars-component'
import Title from 'components/atoms/Title'
import { links } from 'constants/Links'
import { ErrorFallback } from 'index'
import { IProduct, IReview } from 'interfaces/UniversalInterface'
import { find, forEach, isObject, orderBy, times } from 'lodash'
import ReviewList from 'pages/products/Review/ReviewList'
import { useQuery } from 'react-query'
import { classNames } from 'utils/classNames'
import Tabs from 'components/Tabs'
import useTabs from 'hooks/useTabs'
import { useEffect, useState } from 'react'

const WriteReviewButton = ({ productId }: { productId: string }) => {
  return (
    <Button
      link={links.createReview(productId)}
      label="Write your review"
      gradient
      size="lg"
      target=""
    />
  )
}

const FirstCol = ({
  productId,
  reviews,
  highestRatedStar,
  alreadyReviewGiven,
}: {
  productId: string
  alreadyReviewGiven: boolean
  reviews: IReview[]
  highestRatedStar: number
}) => {
  const ratingConfig = {
    size: 24,
    value: 4,
    edit: false,
  }
  return (
    <div className=" ">
      <div>
        <ReactStars {...ratingConfig} />
      </div>
      <h2 className="mt-1 text-gray-900 font-medium text-xl dark:text-white">
        {reviews.length} reviews
      </h2>
      <span className="mt-1 block mb-4 text-gray-500 font-medium text-sm    ">
        {highestRatedStar} out 5 stars
      </span>
      {<WriteReviewButton productId={productId} />}
    </div>
  )
}

const SecondCol = ({
  ratingPercentage,
  highestRatedStar,
}: {
  ratingPercentage: { [key: number]: number }
  highestRatedStar: number
}) => {
  return (
    <ul className="space-y-3 flex items-center justify-end flex-col sm:ml-40">
      {times(5, (idx) => {
        const currentRating = 5 - idx
        const currentRatingPercentage = ratingPercentage[currentRating]
        return (
          <li className="flex items-center">
            <span
              className={classNames(
                currentRating === highestRatedStar
                  ? 'dark:text-gray-300 text-gray-900 font-semibold'
                  : 'dark:text-gray-500 text-gray-400 font-semibold '
              )}
            >
              {currentRating} stars
            </span>
            <progress
              value={currentRatingPercentage}
              max="100"
              className="rating-bar mx-2"
            />
            <span className="text-gray-500 font-semibold w-4">
              {currentRatingPercentage}%
            </span>
          </li>
        )
      })}
    </ul>
  )
}

const MiniLoading = () => <h4>Loading...</h4>

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
  const { isIdle, isLoading, data, isFetched } = useQuery(
    'reviews',
    () => fetchReviewsByProduct(productId, config),
    {
      enabled: Boolean(reviewsIds && reviewsIds.length > 0),
    }
  )

  const alreadyReviewGiven = Boolean(
    find(reviewsIds, (review) => review.userId === userId)
  )

  const reviews: IReview[] = isFetched && !isLoading ? data.data.data : []

  const filters = [
    { name: 'Latest' },
    { name: '5 stars' },
    { name: '4 stars' },
    { name: '3 stars' },
    { name: '2 stars' },
    { name: '1 star' },
  ]

  const { currentTab, setCurrentTab, helpers } = useTabs(filters)

  function getCountOfEachRating() {
    let obj: any = {}
    forEach(reviews, (r) => {
      if (!obj[r.rating]) {
        obj[r.rating] = 1
      } else {
        obj[r.rating] = obj[r.rating] + 1
      }
    })

    function addMissingRatings(resultObj: any): any {
      let copy = resultObj
      times(5, (idx) => {
        const currentRating = 5 - idx
        if (!copy[currentRating]) {
          copy[currentRating] = 0
        }
      })
      return copy
    }

    return addMissingRatings(obj)
  }

  function getHighestRating() {
    const count = getCountOfEachRating()
    const ratingKeys = Object.keys(count)

    let highestNum = 0
    let highestRatedStar: number

    forEach(ratingKeys, (n) => {
      let currentNum = count[n]
      if (currentNum > highestNum) {
        highestRatedStar = Number(n)
      } else {
        highestRatedStar = 0
      }
    })

    return highestRatedStar
  }

  function getPercentageOfCount(n: number) {
    const count = getCountOfEachRating()
    const countValues: number[] = Object.values(count)
    const totalOfCount = countValues.reduce((tot, cur) => tot + cur, 0)
    // formula - (totalCount / totalValue)  * 100
    let rawPercentage = (n / totalOfCount) * 100
    return Math.ceil(rawPercentage)
  }

  function getPercentageOfEachRating() {
    const count = getCountOfEachRating()
    const ratingKeys = Object.keys(count)

    let result = {}
    forEach(ratingKeys, (n) => {
      let num = getPercentageOfCount(count[n]) || 0 // if undefined set value to 0
      result = {
        ...result,
        [n]: num,
      }
    })
    return result
  }

  const ratingPercentage: any =
    reviews && Array.isArray(reviews)
      ? getPercentageOfEachRating()
      : [{ rating: 0 }]

  const highestRatedStar = getHighestRating()

  const commonProps = {
    productId,
    reviews,
    highestRatedStar,
  }

  const [onLatest, on5Stars, on4Stars, on3Stars, on2Stars, on1Stars] = helpers

  const latestReviews = orderBy(reviews, ['createdOn'], ['desc'])
  const [filteredReviews, setFilteredReviews] = useState([...latestReviews])

  const getFiltered = (n: number) =>
    reviews.filter((r) => Number(r.rating) === n)

  useEffect(() => {
    if (onLatest) {
      setFilteredReviews([...latestReviews])
    } else if (on5Stars) {
      setFilteredReviews([...getFiltered(5)])
    } else if (on4Stars) {
      setFilteredReviews([...getFiltered(4)])
    } else if (on3Stars) {
      setFilteredReviews([...getFiltered(3)])
    } else if (on2Stars) {
      setFilteredReviews([...getFiltered(2)])
    } else if (on1Stars) {
      setFilteredReviews([...getFiltered(1)])
    }
  }, [on5Stars, on4Stars, on3Stars, on2Stars, on1Stars])

  if (isLoading && !isIdle) {
    return <MiniLoading />
  }

  return (
    <div className="p-6">
      <div className="grid grid-cols-2 gap-x-4">
        <FirstCol alreadyReviewGiven={alreadyReviewGiven} {...commonProps} />
        <SecondCol
          ratingPercentage={ratingPercentage}
          highestRatedStar={highestRatedStar}
        />
        {reviews && reviews.length > 0 ? (
          <div className="border-t col-span-2 mt-12 border-gray-200 dark:border-gray-700 py-8">
            <div className="flex items-center justify-center mb-2">
              <Tabs
                currentTab={currentTab}
                setCurrentTab={setCurrentTab}
                tabs={filters}
              />
            </div>
            <ReviewList userId={userId} reviews={filteredReviews} />
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default ReviewSection
