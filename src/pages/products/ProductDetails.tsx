import { ChevronDownIcon } from '@heroicons/react/solid'
import { fetchProductDetails } from 'apis/queries'
import Button from 'components/atoms/Button'
import Card from 'components/atoms/Card'
import Meta from 'components/atoms/Meta/Meta'
import Loading from 'components/Loading'
import { links } from 'constants/Links'
import NarrowLayout from 'containers/NarrowLayout'
import { getBasket } from 'helpers'
import { IParent, IProduct, IProductImage } from 'interfaces/UniversalInterface'
import { map } from 'lodash'
import DashboardHeader from 'pages/DashboardHeader'
import ReviewSection from 'pages/products/Review/ReviewSection'
import { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { addToBasket, removeFromBasket } from 'state/Redux/Actions/userActions'
import 'styles/productDetails.scss'
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

const FirstCol = ({ product }: { product: IProduct }) => {
  const [selectedImage, setSelectedImage] = useState(product?.images[1]?.url)
  const dispatch = useDispatch()
  const _addToBasket = () => {
    dispatch(addToBasket(product))
  }
  const _removeFromBasket = () => {
    dispatch(removeFromBasket(product))
  }

  const basket = useSelector((state) => getBasket(state))

  const inBasket: boolean = basket?.products?.find(
    (p: any) => p._id === product._id
  )

  return (
    <Card
      content={
        <div className="grid grid-cols-2">
          <div className="col-md-6 _boxzoom ">
            <div className="zoom-thumb">
              <ul className="piclist mr-4 grid grid-cols-1 gap-y-4">
                {map(product.images.slice(0, 4), (image: IProductImage) => (
                  <li className="hover:border-yellow-500 border-2 cursor-pointer">
                    <img
                      src={image.url}
                      alt=""
                      className="h-16 w-16"
                      onClick={() => setSelectedImage(image.url)}
                    />
                  </li>
                ))}
              </ul>
            </div>
            <div className="_product-images">
              <div className="picZoomer">
                <img className="h-auto w-auto " src={selectedImage} alt="" />
              </div>
            </div>
          </div>
          <div className="col-md-6 flex items-center justify-center px-7 flex-col">
            <div className="">
              <a
                href={links.BROWSE_PRODUCTS(product?.user?.profileUrl)}
                className="text-sm mb-1 text-yellow-500 tracking-wider   font-semibold "
              >
                {product?.user?.business?.name}
              </a>
              <p className="text-base  mt-1 font-medium mb-4 text-gray-900 dark:text-gray-100">
                {product.productName}
              </p>
              <div className=" grid grid-cols-2 w-full border-t border-b border-gray-200 dark:border-gray-700">
                <div className="py-4 border-r border-gray-200 dark:border-gray-700">
                  <label className="font-medium mb-2 text-gray-500">
                    Colour
                  </label>
                  <ul className="flex items-center mt-1 gap-x-2">
                    <li className="bg-black h-4 w-4 border border-gray-400 rounded-full"></li>
                    <li className="bg-green-500 h-4 w-4 border border-gray-400 rounded-full"></li>
                    <li className="bg-yellow-500 h-4 w-4 border border-gray-400 rounded-full"></li>
                    <li className="bg-red-500 h-4 w-4 border border-gray-400 rounded-full"></li>
                  </ul>
                </div>
                <div className="p-4 hover:bg-gray-700 transition-all cursor-pointer group flex items-center justify-between">
                  <div>
                    <label className="font-medium mb-2 text-gray-500 ">
                      Size
                    </label>
                    <p className="text-sm text-gray-900 font-medium dark:text-gray-300">
                      Select size
                    </p>
                  </div>
                  <ChevronDownIcon
                    className={classNames(
                      'text-gray-900 dark:text-gray-300',
                      'h-6 w-6 group-hover:text-gray-500 ml-2'
                    )}
                  />
                </div>
              </div>
              <div className="border-b flex items-center justify-between border-gray-200 dark:border-gray-700 py-6">
                <h5 className="font-medium  text-gray-500">Delivery</h5>
                <h4 className="text-gray-900 font-semibold text-base dark:text-gray-300">
                  {product.estimatedDelivery}
                </h4>
              </div>
              <div className="border-b flex items-center justify-between border-gray-200 dark:border-gray-700 py-6">
                <h5 className="font-medium  text-gray-500">Price</h5>
                <h4 className="text-gray-900 font-semibold text-base dark:text-gray-300">
                  ${product.price}
                </h4>
              </div>
              <div className="flex items-center justify-between gap-x-4">
                <Button
                  size="xl"
                  className="mt-10"
                  fullWidth
                  gradient
                  invert
                  onClick={inBasket ? _removeFromBasket : _addToBasket}
                  label={inBasket ? 'Remove from basket' : 'Add to basket'}
                />
                <Button
                  size="xl"
                  className="mt-10"
                  fullWidth
                  gradient
                  label="Buy now"
                />
              </div>
              {/* <div className="_p-price-box">
                <div className="p-list">
                  <span className="dark:text-gray-300 text-gray-700 ">
                    {' '}
                    M.R.P. : <i className="fa fa-inr"></i> <del> 1399 </del>{' '}
                    <span className="ml-4 text-2xl text-gray-900 dark:text-white">
                      ${product.price}
                    </span>
                  </span>
                </div>

                <div className="_p-features">
                  <span className="mb-2 text-gray-800 dark:text-white">
                    Description About this product
                  </span>
                  <p className="text-sm dark:text-gray-400 text-gray-700">
                    {product.productDescription}
                  </p>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      }
    />
  )
}

const ProductDetails = ({ userData }: { userData: IParent }) => {
  // @ts-ignore

  const params: any = useParams()
  const productId = params.productId

  const { isLoading, data, isFetched } = useQuery('product', () =>
    fetchProductDetails(productId)
  )

  const product: IProduct = isFetched && !isLoading ? data.data.data : INIT

  // const [selectedColor, setSelectedColor] = useState(
  //   product
  //     ? product.availableColors[0]
  //     : { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' }
  // )
  // const [selectedSize, setSelectedSize] = useState(
  //   product ? product.availableSizes[1] : { name: 'XXS', inStock: false }
  // )

  if (isLoading) {
    return <Loading />
  }

  return (
    <>
      <Meta
        pageUrl={window.location.href}
        imageUrl={product && product?.images[0].url}
        pageTitle={`${product.productName} | 13RMS `}
        title={product.productName}
        description={product.productDescription}
        keywords={product?.tags?.join(', ')}
        userName={''}
      />
      <DashboardHeader userData={userData} />

      <NarrowLayout customMaxWidth="max-w-7xl">
        <div className="flex flex-col gap-y-24">
          <FirstCol product={product} />

          {product?._id && (
            <Card
              // cardTitle={`Reviews (${product?.reviews?.length || 0})`}
              content={
                <ReviewSection
                  userId={userData?._id}
                  reviewsIds={product?.reviews}
                  productId={product._id}
                />
              }
            />
          )}
        </div>
      </NarrowLayout>
    </>
  )
}
export default ProductDetails
