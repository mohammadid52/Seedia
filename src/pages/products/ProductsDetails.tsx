import Button from 'components/atoms/Button'
import Card from 'components/atoms/Card'
import { useState } from 'react'
import AddNewProduct from 'pages/products/modals/AddNewProduct'
import Modal from 'components/atoms/Modal'
const ProductsDetails = ({
  iAmOwnerOfThisProfile,
}: {
  iAmOwnerOfThisProfile?: boolean
}) => {
  const products = [
    {
      id: 1,
      name: 'Earthen Bottle',
      href: '#',
      price: '$48',
      imageSrc:
        'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
      imageAlt:
        'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
      id: 2,
      name: 'Nomad Tumbler',
      href: '#',
      price: '$35',
      imageSrc:
        'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
      imageAlt:
        'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
      id: 3,
      name: 'Focus Paper Refill',
      href: '#',
      price: '$89',
      imageSrc:
        'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
      imageAlt:
        'Person using a pen to cross a task off a productivity paper card.',
    },
    {
      id: 4,
      name: 'Machined Mechanical Pencil',
      href: '#',
      price: '$35',
      imageSrc:
        'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
      imageAlt:
        'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    // More products...
  ]

  const [showAddNewProductModal, setShowAddNewProductModal] = useState(false)

  const onCancel = () => {
    setShowAddNewProductModal(false)
  }
  const onSave = () => {
    onCancel()
  }

  // Link all buttons here
  const modalActions = {
    addNewProduct: {
      show: () => setShowAddNewProductModal(true),
      cancel: onCancel,
      save: onSave,
    },
  }

  const [showUnsaveModal, setShowUnsaveModal] = useState(false)

  return (
    <>
      {/* Unsaved Modal */}
      {/* {showUnsaveModal && (
        <Modal
          hideCloseBtn
          header="Discard changes"
          open={showUnsaveModal}
          setOpen={setShowUnsaveModal}
        >
          <>
            <h1 className="text-lg dark:text-white text-gray-900 min-w-96">
              You have unsaved changes
            </h1>
            <p className="text-gray-500 ">Do you want to save it?</p>

            <div className="mt-5 sm:mt-4 flex justify-end space-x-4 items-center">
              <Button
                secondary
                bgColor="gray"
                onClick={() => {
                  setShowUnsaveModal(false)
                  setShowAddNewProductModal(true)
                }}
                invert
                label="No thanks"
              />
              <Button
                gradient
                label="Discard"
                onClick={() => {
                  setShowUnsaveModal(false)
                }}
              />
            </div>
          </>
        </Modal>
      )} */}

      {/*  <<============================ADD NEW PRODUCT MODAL STARTS HERE==========================>>  */}

      <AddNewProduct
        actions={modalActions.addNewProduct}
        show={showAddNewProductModal}
        setShow={setShowAddNewProductModal}
      />

      {/* <<============================ADD NEW PRODUCT MODAL ENDS HERE==========================>> */}

      <Card
        secondary
        cardTitle="Business features"
        content={
          <div className="bg-transparent">
            {/* <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
              {products.map((product) => (
                <a key={product.id} href={product.href} className="group">
                  <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                    <img
                      src={product.imageSrc}
                      alt={product.imageAlt}
                      className="w-full h-full object-center object-cover group-hover:opacity-75"
                    />
                  </div>
                  <h3 className="mt-4 text-sm text-gray-700 dark:text-gray-400">
                    {product.name}
                  </h3>
                  <p className="mt-1 text-lg font-medium text-gray-900 dark:text-white">
                    {product.price}
                  </p>
                </a>
              ))}
            </div> */}

            {iAmOwnerOfThisProfile && (
              <Button
                label="+ Add new product"
                className="flex"
                gradient
                onClick={modalActions.addNewProduct.show}
              />
            )}
          </div>
        }
      />
    </>
  )
}

export default ProductsDetails
