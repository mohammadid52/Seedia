import { addProduct, uploadMultipleImages } from 'apis/mutations'
import Error from 'components/alerts/Error'
import Button from 'components/atoms/Button'
import FormInput from 'components/atoms/FormInput'
import FormMultipleSelector from 'components/atoms/FormMultipleSelector'
import FormSelector from 'components/atoms/FormSelector'
import FormTagsInput from 'components/atoms/FormTagsInput'
import Meta from 'components/atoms/Meta/Meta'
import Title from 'components/atoms/Title'
import List from 'components/List'
import { links } from 'constants/Links'
import NarrowLayout from 'containers/NarrowLayout'
import { useNotifications } from 'context/NotificationContext'
import { Form, Formik } from 'formik'
import { IParent, IProduct, IProductImage } from 'interfaces/UniversalInterface'
import { forEach, map, times } from 'lodash'
import { nanoid } from 'nanoid'
import { useEffect, useRef, useState } from 'react'
import { AiOutlineCamera } from 'react-icons/ai'
import { useMutation } from 'react-query'
import { useHistory } from 'react-router'
import { colorsList, sizeList } from 'values/values'
import * as Yup from 'yup'

const AddProduct = ({
  profileUrl,
  userData,
}: {
  profileUrl: string
  userData: IParent
}) => {
  const minMsg = (field: string, number: number) =>
    `${field} must be atleast ${number} characters`
  const maxMsg = (field: string, number: number) =>
    `${field} must be maximum ${number} characters`

  const validationSchema = Yup.object({
    productName: Yup.string()
      .required('Product name is required')
      .min(8, minMsg('Product Name', 8))
      .max(200, maxMsg('Product Name', 200)),
    productDescription: Yup.string()
      .required('Product description is required')
      .min(50, minMsg('Product Description', 50)),

    details: Yup.string()
      .required('Product details is required')
      .min(50, minMsg('Product details', 50)),

    price: Yup.string()
      .required('Price is required')
      .matches(/^[0-9.]+$/, 'Must be only digits'),
  })

  // @ts-ignore
  const initialValues: IProduct = {
    images: [],
    productName: '',
    productDescription: '',
    availableColors: [],
    availableSizes: [],
    tags: [],
    estimatedDelivery: 'In 7 days',
    price: '',
    details: '',
    features: [],
    highlights: [],
  }

  const { setNotification } = useNotifications()

  const { mutate, isLoading, isError, isSuccess } = useMutation(addProduct, {
    onSuccess: (data) => {
      const { name, id } = data.data.data
      setNotification({
        show: true,
        title: `You have successfully posted product ${name} on Tradingpost13RMS. Good luck with the sale.`,
        buttonText: 'View',
        buttonUrl: links.getProductUrl(id),
      })
    },
  })

  const [imageList, setImageList] = useState<any[]>([])

  const productImageRef: React.LegacyRef<HTMLInputElement> = useRef()

  const onImageSelect = (e: any): void => {
    const imgs: File[] = Object.values(e.target.files)

    if (imgs.length > 0) {
      imgs.forEach((img) => imageList.push(img))

      setImageList((prev) => [...prev])
    }
  }

  const showFileExplorer = () => productImageRef?.current?.click()

  const { mutate: imageUploadMutate, isLoading: imageUploadingLoading } =
    useMutation(uploadMultipleImages, {
      onSuccess: (data) => {
        const finalImageList: IProductImage[] = map(
          data.data.data,
          (img, idx: number) => ({
            id: nanoid(24),
            url: img.location,
            isCover: idx === 0,
            alt: '',
          })
        )

        if (formRef && formRef.current) {
          // @ts-ignore
          mutate({ ...formRef.current.values, images: finalImageList })
        }
      },
    })

  const upload = () => {
    const fd = new FormData()

    forEach(imageList, (image) => {
      fd.append('images', image)
    })

    setTimeout(() => {
      imageUploadMutate(fd)
    }, 500)
  }

  const history = useHistory()
  useEffect(() => {
    if (isSuccess) {
      history.push(
        links.getProfileById(
          userData.profileUrl,
          userData?.other?.template || 1
        )
      )
    }
  }, [isSuccess])

  const [error, setError] = useState('')

  const onSubmit = async () => {
    upload()
  }
  const formRef = useRef()

  return (
    <NarrowLayout userData={userData}>
      <Meta pageTitle="Add Product" />
      <Title fontWeight="font-bold mb-8">Add New Product</Title>
      <Formik
        innerRef={formRef}
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form className="space-y-8">
          <FormInput
            label="Product Name"
            id="productName"
            name="productName"
            required
            placeholder="Eg. Programming T-shirts"
          />
          {/* <UploadImages setImagesUploaded={setImagesUploaded} /> */}
          <div>
            {imageList && imageList.length > 0 && (
              <div className="grid grid-cols-2 sm:grid-cols-4 mb-8 gap-8">
                {imageList.map(
                  (image, idx) =>
                    // <div key={idx}>
                    image && (
                      // <LightGallery key={idx} speed={500} plugins={[lgZoom]}>
                      <img
                        className={`shadow-lg  rounded-lg`}
                        src={URL.createObjectURL(image)}
                        alt="People working on laptops"
                      />
                      // </LightGallery>
                    )
                  // </div>
                )}
              </div>
            )}
            <input
              ref={productImageRef}
              className="hidden"
              multiple
              type="file"
              onChange={onImageSelect}
              accept="image/x-png,image/jpeg"
            />
            <div className="flex items-center gap-x-4">
              <Button
                onClick={showFileExplorer}
                size="lg"
                invert
                // className="w-32"
                gradient
                Icon={AiOutlineCamera}
                label="+ Add Images"
              />
            </div>
          </div>
          <FormInput
            label="Product Description"
            id="productDescription"
            name="productDescription"
            placeholder="Tell your customer about the product in brief"
            required
            textarea
            rows={4}
            cols={255}
          />

          <FormInput
            label="Details"
            id="details"
            name="details"
            placeholder="What includes in product?"
            required
            textarea
            rows={2}
            cols={255}
          />
          <div className="flex items-center w-full space-x-6">
            <FormMultipleSelector
              className="w-1/2"
              label="Available Colors"
              disableFieldOption
              name="availableColors"
              placeholder="Available colors for product"
              list={colorsList}
            />
            <FormMultipleSelector
              className="w-1/2"
              sortBy="id"
              disableFieldOption
              label="Available Sizes"
              name="availableSizes"
              placeholder="XS,M,XL"
              list={sizeList}
            />
          </div>
          <div className="flex items-start w-full space-x-6">
            <FormInput
              label="Product Price"
              id="price"
              gridClass="w-1/2"
              name="price"
              required
              placeholder="99"
            />

            <FormSelector
              required
              list={map(times(30), (d) => ({
                name: `In ${d + 1} days`,
                id: d.toString(),
              }))}
              className="w-1/2"
              name="estimatedDelivery"
              placeholder="In 3 days"
              label={'Estimated Delivery'}
            />
          </div>
          <FormTagsInput name="tags" />
          <List name="features" />
          <List name="highlights" />

          {error && <Error errors={[error.toString()]} />}

          <div className="flex items-center justify-end">
            <Button
              type="submit"
              rounded="rounded-lg"
              loading={isLoading || imageUploadingLoading}
              gradient
              size="lg"
              label="Submit"
            />
          </div>

          {isError && <Error errors={[error.toString()]} />}
        </Form>
      </Formik>
    </NarrowLayout>
  )
}

export default AddProduct
