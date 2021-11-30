import { addNewSection, uploadMediaToServer } from 'apis/mutations'
import { fetchAllProducts } from 'apis/queries'
import Button from 'components/atoms/Button'
import FormInput from 'components/atoms/FormInput'
import Label from 'components/atoms/Label'
import Modal from 'components/atoms/Modal'
import { Form, Formik } from 'formik'
import { IProduct, IStoreSection } from 'interfaces/UniversalInterface'
import BannerImage from 'pages/store/BannerImage'
import React, { useEffect, useRef, useState } from 'react'
import { useMutation, useQuery } from 'react-query'
import * as Yup from 'yup'

const ChooseProducts = ({
  products,
  selectedProducts,
  onSelectProduct,
}: {
  onSelectProduct: (productId: string) => void
  selectedProducts: IProduct[]
  products: IProduct[]
}) => {
  return (
    <div>
      <Label text="Choose products" />
      <div className="grid grid-cols-4 gap-6 lg:grid-cols-6">
        {products?.map((product: IProduct) => {
          const isSelected = selectedProducts?.find(
            (d) => d._id === product._id
          )
          return (
            <div key={product._id} className="group">
              <div className="w-full aspect-w-1 aspect-h-1  rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                {product?.images?.length > 0 ? (
                  <div
                    className="relative"
                    onClick={() => onSelectProduct(product._id)}
                  >
                    <img
                      src={product.images[0].url}
                      alt={product.images[0].alt}
                      className="w-full h-full cursor-pointer object-center object-cover group-hover:opacity-75 transition-all"
                    />
                    {isSelected && (
                      <div className="bg-green-500 rounded-tr-xl p-1 absolute bottom-0 text-gray-900 dark:text-white">
                        Checked
                      </div>
                    )}
                  </div>
                ) : (
                  <div />
                )}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

const NewSectionModal = ({
  open,
  setOpen,
  setSections,
  sections,
  userId,
}: {
  open: boolean
  setSections: React.Dispatch<React.SetStateAction<IStoreSection[]>>
  sections: IStoreSection[]
  userId: string
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}) => {
  const formRef = useRef()

  const fetchedProducts = useQuery(`list-all-products-${userId}`, () =>
    fetchAllProducts(userId)
  )
  const products: IProduct[] =
    fetchedProducts.isFetched && !fetchedProducts.isLoading
      ? fetchedProducts.data.data.data
      : []

  const initialValues = {
    title: '',
    content: '',
  }

  const [selectedProducts, setSelectedProducts] = useState<IProduct[]>([])

  const onSelectProduct = (productId: string) => {
    if (selectedProducts?.find((p) => p._id === productId)) {
      setSelectedProducts([
        ...selectedProducts.filter((p) => p._id !== productId),
      ])
    } else {
      const product = products.find((p) => p._id === productId)
      setSelectedProducts([...selectedProducts, product])
    }
  }

  const {
    isLoading: addingSection,
    mutate,
    isSuccess,
  } = useMutation(addNewSection)

  useEffect(() => {
    if (isSuccess) {
      setOpen(false)
    }
  }, [isSuccess])

  const upload = useMutation(uploadMediaToServer, {
    onSuccess: (a, b) => {
      // @ts-ignore
      const values = formRef?.current?.values
      if (formRef?.current && values) {
        const finalInput = {
          image: a.data.data.location,
          products: selectedProducts.map((p) => p._id),
          ...values,
        }
        if (sections) {
          sections.push({ ...finalInput, products: selectedProducts })
          setSections(sections)
        }
        mutate({ section: finalInput })
      }
    },
  })

  const onSubmit = (e: any) => {
    const fd = new FormData()
    fd.append('image', media)

    upload.mutate(fd)
  }

  const [media, setMedia] = useState(null)

  const validationSchema = Yup.object({
    title: Yup.string().required('Section title is required').min(3).max(150),
    content: Yup.string()
      // .test(regex)
      .required('Section content is required')
      .min(5)
      .max(150),
  })

  const onImageSelect = (e: any, setFieldValue: any) => {
    const img = e.target.files[0]

    setFieldValue(img)
  }

  return (
    <Modal header="Add Section" open={open} setOpen={setOpen}>
      <div className="min-w-256 max-w-440">
        <Formik
          initialValues={initialValues}
          innerRef={formRef}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          <Form className="my-4 flex flex-col gap-y-12">
            <div className="grid grid-cols-1 gap-y-12">
              <div>
                <Label text="Image" />
                <BannerImage
                  media={media}
                  setMedia={setMedia}
                  onImageSelect={onImageSelect}
                />
              </div>
              <div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
                  <div>
                    <Label text="Title" />
                    <FormInput
                      name="title"
                      placeholder="The main header of section"
                    />
                  </div>
                  <div>
                    <Label text="Content" />
                    <FormInput
                      name="content"
                      placeholder="Give a little description about the section"
                    />
                  </div>
                </div>
              </div>
              {/* Choose products */}
              <div>
                {products && (
                  <ChooseProducts
                    onSelectProduct={onSelectProduct}
                    selectedProducts={selectedProducts}
                    products={products}
                  />
                )}
              </div>
              <div className="flex items-center justify-end">
                <Button
                  type="submit"
                  rounded="rounded-lg"
                  loading={addingSection || upload.isLoading}
                  gradient
                  size="lg"
                  label="Add section"
                />
              </div>
            </div>
          </Form>
        </Formik>
      </div>
    </Modal>
  )
}

export default NewSectionModal
