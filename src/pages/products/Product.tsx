import { links } from 'constants/Links'
import { IParent, IProduct } from 'interfaces/UniversalInterface'
import { useState } from 'react'
import QuickOverview from 'pages/products/QuickOverview'
import Dropdown from 'components/Dropdown/Dropdown'
import { eclipse } from 'utils/functions'
import Modal from 'components/atoms/Modal'
import { useQuery } from 'react-query'
import { fetchUsers } from 'apis/queries'
import User from 'components/User'

const Product = ({
  product,
  showWhoPurchased = false,
  following,
}: {
  product: IProduct
  showWhoPurchased?: boolean
  following?: string[]
}) => {
  const [quickOverviewModal, setQuickOverviewModal] = useState(false)

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
  ]

  const [userModal, setUserModal] = useState(false)

  const config = {
    users: following
      ? product.purchasedBy.filter((p) => following.includes(p))
      : [],
  }

  const { isLoading, isFetched, data } = useQuery(
    'users-purchased',
    () => fetchUsers(config),
    { enabled: userModal && showWhoPurchased }
  )

  const users: IProduct[] = isFetched && !isLoading && data.data.data

  return (
    <>
      {showWhoPurchased && (
        <Modal open={userModal} setOpen={setUserModal}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {users && users.length > 0 ? (
              users.map((people: any) => (
                <User
                  disableFollow
                  key={people?._id}
                  user={people}
                  following={true}
                />
              ))
            ) : (
              <p className="text-gray-400 text-center">no users found</p>
            )}
          </div>
        </Modal>
      )}
      <QuickOverview
        product={product}
        show={quickOverviewModal}
        setShow={setQuickOverviewModal}
      />
      <div className="group">
        {showWhoPurchased && (
          <div
            onClick={() => setUserModal(true)}
            className="mb-2 text-gray-400 underline cursor-pointer dark:text-gray-400"
          >
            See who purchased this
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
