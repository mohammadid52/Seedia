import { RadioGroup } from '@headlessui/react'
import { StarIcon } from '@heroicons/react/solid'
import { fetchProductDetails } from 'apis/queries'
import Button from 'components/atoms/Button'
import Meta from 'components/atoms/Meta/Meta'
import Loading from 'components/Loading'
import { ErrorFallback } from 'index'
import { IHighlight, IParent, IProduct } from 'interfaces/UniversalInterface'
import ReviewSection from 'pages/products/Review/ReviewSection'
import { useState } from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router'
import { classNames } from 'utils/classNames'

// @ts-nocheck
const INIT = {
  productName: 'Basic Tee 6-Pack',
  price: '$192',

  images: [
    {
      url: 'https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg',
      alt: 'Two each of gray, white, and black shirts laying flat.',
    },
    {
      url: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg',
      alt: 'Model wearing plain black basic tee.',
    },
    {
      url: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg',
      alt: 'Model wearing plain gray basic tee.',
    },
    {
      url: 'https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg',
      alt: 'Model wearing plain white basic tee.',
    },
  ],
  availableColors: [
    { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
    { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
    { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
  ],
  availableSizes: [
    { name: 'XXS', inStock: false },
    { name: 'XS', inStock: true },
    { name: 'S', inStock: true },
    { name: 'M', inStock: true },
    { name: 'L', inStock: true },
    { name: 'XL', inStock: true },
    { name: '2XL', inStock: true },
    { name: '3XL', inStock: true },
  ],
  productDescription:
    'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',

  details:
    'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
}
const reviews = { href: '#', average: 4, totalCount: 117 }

const ProductDetails = ({ userData }: { userData: IParent }) => {
  // @ts-ignore

  const params: any = useParams()
  const productId = params.productId

  const { isLoading, error, data, isFetched, isError, refetch } = useQuery(
    'product',
    () => fetchProductDetails(productId)
  )

  const product: IProduct = isFetched && !isLoading ? data.data.data : INIT

  const [selectedColor, setSelectedColor] = useState(
    product
      ? product.availableColors[0]
      : { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' }
  )
  const [selectedSize, setSelectedSize] = useState(
    product ? product.availableSizes[1] : { name: 'XXS', inStock: false }
  )

  if (isLoading) {
    return <Loading />
  }
  if (isError) {
    return (
      <ErrorFallback resetErrorBoundary={refetch} error={{ message: error }} />
    )
  }

  return (
    <>
      <Meta
        pageTitle={`${product.productName} | 13RMS `}
        title={product.productName}
        description={product.productDescription}
        keywords={product?.tags?.join(', ')}
        userName={''}
      />

      <div className="bg-white dark:bg-gray-800">
        <div className="pt-6">
          {/* Image gallery */}
          <div className="mt-6 gallery-container max-w-2xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8">
            <div className="hidden aspect-w-3 aspect-h-4 rounded-lg overflow-hidden lg:block">
              <img
                id={product.images[0].id}
                src={product.images[0].url}
                alt={product.images[0].alt}
                className="w-full h-full object-center object-cover"
              />
            </div>
            {product.images.length === 4 && (
              <>
                {' '}
                <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
                  <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
                    <img
                      id={product.images[1].id}
                      src={product.images[1].url}
                      alt={product.images[1].alt}
                      className="w-full h-full object-center object-cover"
                    />
                  </div>
                  <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
                    <img
                      id={product.images[2].id}
                      src={product.images[2].url}
                      alt={product.images[2].alt}
                      className="w-full h-full object-center object-cover"
                    />
                  </div>
                </div>
                <div className="aspect-w-4 aspect-h-5 sm:rounded-lg sm:overflow-hidden lg:aspect-w-3 lg:aspect-h-4">
                  <img
                    id={product.images[3].id}
                    src={product.images[3].url}
                    alt={product.images[3].alt}
                    className="w-full h-full object-center object-cover"
                  />
                </div>{' '}
              </>
            )}
          </div>

          {/* Product info */}
          <div className="max-w-2xl mx-auto pt-10 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:pt-16 lg:pb-24 lg:px-8 lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8">
            <div className="lg:col-span-2 lg:border-r lg:dark:border-gray-700 lg:border-gray-200 lg:pr-8">
              <h1 className="text-2xl font-extrabold tracking-tight dark:text-white text-gray-900 sm:text-3xl">
                {product.productName}
              </h1>
            </div>

            {/* Options */}
            <div className="mt-4 lg:mt-0 lg:row-span-3">
              <h2 className="sr-only">Product information</h2>
              <p className="text-3xl text-gray-900 dark:text-white">
                ${product.price}
              </p>

              {/* Reviews */}
              <div className="mt-6">
                <h3 className="sr-only">Reviews</h3>
                <div className="flex items-center">
                  <div className="flex items-center">
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <StarIcon
                        key={rating}
                        className={classNames(
                          reviews.average > rating
                            ? 'text-yellow-600'
                            : 'text-gray-200',
                          'h-5 w-5 flex-shrink-0'
                        )}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <p className="ml-2 text-gray-800 dark:text-gray-400">
                    {reviews.average} out of 5 stars
                  </p>
                </div>
              </div>

              <form className="mt-10">
                {/* Colors */}
                <div>
                  <h3 className="text-sm text-gray-900 dark:text-white font-medium">
                    Color
                  </h3>

                  <RadioGroup
                    value={selectedColor}
                    onChange={setSelectedColor}
                    className="mt-4"
                  >
                    <RadioGroup.Label className="sr-only">
                      Choose a color
                    </RadioGroup.Label>
                    <div className="flex items-center space-x-3">
                      {product.availableColors.map((color: any) => (
                        <RadioGroup.Option
                          key={color.name}
                          value={color}
                          style={{ background: color.code }}
                          className={({ active, checked }) =>
                            classNames(
                              active && checked ? 'ring ring-offset-1' : '',
                              !active && checked ? 'ring-2' : '',
                              '-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none'
                            )
                          }
                        >
                          <RadioGroup.Label as="p" className="sr-only">
                            {color.name}
                          </RadioGroup.Label>
                          <span
                            aria-hidden="true"
                            className={classNames(
                              color.class,
                              'h-8 w-8 border border-black border-opacity-10 rounded-full'
                            )}
                          />
                        </RadioGroup.Option>
                      ))}
                    </div>
                  </RadioGroup>
                </div>

                {/* Sizes */}
                <div className="mt-10">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm text-gray-900 font-medium dark:text-white">
                      Size
                    </h3>
                    <a href="/#" className="text-sm font-medium gradient-text">
                      Size guide
                    </a>
                  </div>

                  <RadioGroup
                    value={selectedSize}
                    onChange={setSelectedSize}
                    className="mt-4"
                  >
                    <RadioGroup.Label className="sr-only">
                      Choose a size
                    </RadioGroup.Label>
                    <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
                      {product.availableSizes.map((size: any) => (
                        <RadioGroup.Option
                          key={size.name}
                          value={size}
                          disabled={!size.inStock}
                          className={({ active }) =>
                            classNames(
                              'bg-white dark:bg-transparent  shadow-sm dark:text-white text-gray-900 cursor-pointer',
                              active ? 'ring-2 ring-pink-500' : '',
                              'group relative border dark:border-gray-700 rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 transition-all focus:outline-none sm:flex-1 sm:py-6'
                            )
                          }
                        >
                          {({ active, checked }) => (
                            <>
                              <RadioGroup.Label as="p">
                                {size.name}
                              </RadioGroup.Label>
                              <div
                                className={classNames(
                                  active ? 'border' : 'border-2',
                                  checked
                                    ? 'border-pink-500'
                                    : 'border-transparent',
                                  'absolute -inset-px rounded-md pointer-events-none'
                                )}
                                aria-hidden="true"
                              />
                              {/* {size.inStock ? (
                              <div
                                className={classNames(
                                  active ? 'border' : 'border-2',
                                  checked
                                    ? 'border-pink-500'
                                    : 'border-transparent',
                                  'absolute -inset-px rounded-md pointer-events-none'
                                )}
                                aria-hidden="true"
                              />
                            ) : (
                              <div
                                aria-hidden="true"
                                className="absolute -inset-px rounded-md border-2 dark:border-gray-700 border-gray-200 pointer-events-none"
                              >
                                <svg
                                  className="absolute inset-0 w-full h-full text-gray-200 dark:text-gray-700 stroke-2"
                                  viewBox="0 0 100 100"
                                  preserveAspectRatio="none"
                                  stroke="currentColor"
                                >
                                  <line
                                    x1={0}
                                    y1={100}
                                    x2={100}
                                    y2={0}
                                    vectorEffect="non-scaling-stroke"
                                  />
                                </svg>
                              </div>
                            )} */}
                            </>
                          )}
                        </RadioGroup.Option>
                      ))}
                    </div>
                  </RadioGroup>
                </div>

                <Button
                  size="xl"
                  className="mt-10"
                  fullWidth
                  gradient
                  label="Add to bag"
                />
              </form>
            </div>

            <div className="py-10 lg:pt-6 lg:pb-16 lg:col-start-1 lg:col-span-2 lg:border-r lg:border-gray-200 lg:dark:border-gray-700 lg:pr-8">
              {/* Description and details */}
              <div>
                <h3 className="sr-only">Description</h3>

                <div className="space-y-6">
                  <p className="text-base text-gray-900 dark:text-gray-300">
                    {product.productDescription}
                  </p>
                </div>
              </div>

              {product.highlights && product.highlights.length > 0 && (
                <div className="mt-10">
                  <h3 className="text-sm font-medium text-gray-900 dark:text-white">
                    Highlights
                  </h3>

                  <div className="mt-4">
                    <ul className="pl-4 list-disc text-sm space-y-2">
                      {product.highlights.map((highlight: IHighlight) => (
                        <li key={highlight.name} className="text-gray-400">
                          <span className="text-gray-600 dark:text-gray-500">
                            {highlight.name}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {product.details && product.details.length > 0 && (
                <div className="mt-10">
                  <h2 className="text-sm font-medium text-gray-900 dark:text-white">
                    Details
                  </h2>

                  <div className="mt-4 space-y-6">
                    <p className="text-sm text-gray-600 dark:text-gray-500">
                      {product.details}
                    </p>
                  </div>
                </div>
              )}
              {/* {product.reviews && product.reviews.length > 0 && ( */}
              {product && product._id && (
                <ReviewSection
                  userId={userData?._id}
                  reviewsIds={product?.reviews}
                  productId={product._id}
                />
              )}
              {/* )} */}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default ProductDetails
