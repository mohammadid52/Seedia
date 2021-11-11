import Dropdown from 'components/Dropdown/Dropdown'
import { links } from 'constants/Links'
import { IProduct, IShortProfile } from 'interfaces/UniversalInterface'
import QuickOverview from 'pages/products/QuickOverview'
import { useState } from 'react'
import { eclipse } from 'utils/functions'
import { useMutation } from 'react-query'
import { deleteProduct } from 'apis/mutations'

const Product = ({
  product,
  showWhoPurchased = false,
  purchasedBy,
  loadingFriends,
  userId,
}: {
  loadingFriends?: boolean
  product: IProduct
  showWhoPurchased?: boolean
  purchasedBy?: IShortProfile[]
  userId: string
}) => {
  const [quickOverviewModal, setQuickOverviewModal] = useState(false)
  const itsMyProduct = product.postedBy.toString() === userId

  const _delete = useMutation(deleteProduct, { onSuccess: () => {} })

  const dropdownList = [
    {
      id: '1',
      name: 'Add to bag',
      onClick: () => {
        setQuickOverviewModal(true)
      },
    },
    {
      id: '2',
      name: 'Add to favorites',
      onClick: () => {
        setQuickOverviewModal(true)
      },
    },
    {
      id: '3',
      name: 'Quick Overview',
      onClick: () => {
        setQuickOverviewModal(true)
      },
    },
    itsMyProduct && {
      id: 'ddfd413',
      name: 'Delete',
      onClick: () => {
        _delete.mutate(product._id)
      },
    },
  ].filter(Boolean)

  return (
    <>
      <QuickOverview
        product={product}
        show={quickOverviewModal}
        setShow={setQuickOverviewModal}
      />
      <div className="group">
        {showWhoPurchased && !loadingFriends && (
          <div className="mb-2 cursor-pointer ">
            <div className="flex overflow-hidden -space-x-1">
              {purchasedBy.map((friend) => (
                <a
                  href={links.getProfileById(
                    friend.profileUrl,
                    friend?.other?.template,
                    'private'
                  )}
                >
                  <img
                    title={friend.fullName}
                    key={friend._id}
                    className="inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-gray-800"
                    src={friend.coverPicture}
                    alt={''}
                  />
                </a>
              ))}
            </div>
          </div>
        )}
        <a
          key={product._id}
          href={`${links.getProductUrl(product._id)}`}
          className="group"
        >
          <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
            {product?.images?.length > 0 ? (
              <img
                src={product.images[0].url}
                alt={product.images[0].alt}
                className="w-full h-full object-center object-cover group-hover:opacity-75 transition-all"
              />
            ) : (
              <div />
            )}
          </div>
        </a>
        <div className="flex mt-4 items-start justify-between">
          <div>
            <h3 className=" text-sm  text-gray-700 dark:text-gray-400">
              {eclipse(product.productName, 60)}
            </h3>
            <p className="mt-1 text-lg font-medium dark:text-white text-gray-900">
              ${product.price}
            </p>
          </div>
          <div>
            <Dropdown list={dropdownList} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Product
