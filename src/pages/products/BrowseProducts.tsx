import { network, updateDocumentTitle } from 'helpers'
import { IParent, IProduct } from 'interfaces/UniversalInterface'
import { useEffect, useState } from 'react'
import { links } from 'constants/Links'
import Dropdown from 'components/Dropdown/Dropdown'
import QuickOverview from 'pages/products/QuckOverview'

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

const BrowseProducts = ({ userData }: { userData: IParent }) => {
  const [products, setProducts] = useState<IProduct[]>([])
  const fetchAllProducts = async () => {
    try {
      const {
        data: { status, message, data: products },
      } = await network.get(`/products/postedBy/${userData._id}`)
      if (status === 'success') {
        setProducts(products)
      } else {
        console.error(message)
      }
    } catch (error) {
      console.error(error)
    } finally {
      setFetched(true)
    }
  }

  const [fetched, setFetched] = useState(false)

  useEffect(() => {
    if (!fetched) {
      fetchAllProducts()
    }
  }, [fetched])

  useEffect(() => {
    updateDocumentTitle('Browse products')
    return () => {
      updateDocumentTitle('13RMS', true)
    }
  }, [])

  return (
    <div className="bg-white dark:bg-gray-800 h-screen w-screen">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>
        <h2 className="text-2xl font-extrabold tracking-tight dark:text-white text-gray-900">
          Your Products
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <Product product={product} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default BrowseProducts
