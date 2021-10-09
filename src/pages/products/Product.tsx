import { links } from 'constants/Links'
import { IProduct } from 'interfaces/UniversalInterface'
import { useState } from 'react'
import QuickOverview from 'pages/products/QuckOverview'
import Dropdown from 'components/Dropdown/Dropdown'

const Product = ({ product }: { product: IProduct }) => {
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
  return (
    <>
      <QuickOverview
        product={product}
        show={quickOverviewModal}
        setShow={setQuickOverviewModal}
      />
      <div className="group">
        <a
          key={product._id}
          href={`${links.getProductUrl(product._id)}`}
          className="group"
        >
          <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
            <img
              src={product.images[0].url}
              alt={product.images[0].alt}
              className="w-full h-full object-center object-cover group-hover:opacity-75 transition-all"
            />
          </div>
        </a>
        <div className="flex mt-4 items-start justify-between">
          <div>
            <h3 className=" text-sm text-gray-700 dark:text-gray-400">
              {product.productName}
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
