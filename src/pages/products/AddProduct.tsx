import { addProduct, uploadMultipleImages } from 'apis/mutations'
import Error from 'components/alerts/Error'
import Button from 'components/atoms/Button'
import FormInput from 'components/atoms/FormInput'
import FormMultipleSelector from 'components/atoms/FormMultipleSelector'
import FormSelector from 'components/atoms/FormSelector'
import FormTagsInput from 'components/atoms/FormTagsInput'
import Meta from 'components/atoms/Meta/Meta'
import NormalFormInput from 'components/atoms/NormalFormInput'
import Title from 'components/atoms/Title'
import NarrowLayout from 'containers/NarrowLayout'
import { Form, Formik, useField } from 'formik'
import { IProduct, IProductImage } from 'interfaces/UniversalInterface'
import lgZoom from 'lightgallery/plugins/zoom'
import LightGallery from 'lightgallery/react'
import { forEach, map, times } from 'lodash'
import remove from 'lodash/remove'
import { nanoid } from 'nanoid'
import { useRef, useState } from 'react'
import { AiOutlineCamera, AiOutlineUpload } from 'react-icons/ai'
import { BiTrashAlt } from 'react-icons/bi'
import { useMutation } from 'react-query'
import { Redirect, useHistory } from 'react-router'
import { colorsList, sizeList } from 'values/values'
import * as Yup from 'yup'
import FormError from 'components/atoms/form/FormError'
import { links } from 'constants/Links'

const Features = ({ name }: { name: string }) => {
  const [field, meta, helpers] = useField(name)

  const [features, setFeatures] = useState<{ name: string; id: string }[]>([])

  const { setTouched, setError: $setError, setValue } = helpers
  const [error, setError] = useState('')

  const [featureField, setFeatureField] = useState('')
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFeatureField(e.target.value)
    $setError(``)
    setError(``)
  }

  const onFeatureAdd = () => {
    if (featureField.length >= 10) {
      setError('')
      setFeatures((prev) => [...prev, { name: featureField, id: nanoid(4) }])
      setValue(features)
      setTouched(true)
      $setError(undefined)
      setFeatureField('')
    } else {
      setError(`${name} text must be at least 10 characters`)
    }
  }

  const onFeatureRemove = (featureId: string) => {
    remove(features, (f) => f.id === featureId)
    setFeatures((prev) => [...prev])
  }

  return (
    <div>
      {features && features.length > 0 && (
        <ol className="space-y-4 border dark:border-gray-700 border-gray-200 rounded-lg p-4  list-disc ">
          {map(features, (feature) => (
            <li
              className="flex items-center on-hover-container relative text-gray-900 dark:text-white  cursor-pointer text-left"
              key={feature.id}
            >
              <div className="">
                <span className="block text-gray-900 dark:text-gray-400 text-sm font-normal">
                  {feature.name}
                </span>
              </div>

              <span
                onClick={() => onFeatureRemove(feature.id)}
                className="absolute on-hover-item  pr-4 right-0"
              >
                <BiTrashAlt className="hover:bg-gray-700 p-2 h-8 w-8  rounded-md text-red-500" />
              </span>
            </li>
          ))}
        </ol>
      )}
      <div
        className={`flex mt-4 justify-start  ${
          !error ? 'items-end' : 'items-center'
        } rounded-md  gap-2`}
      >
        <NormalFormInput
          error={error}
          label={`Add ${name}`}
          value={featureField}
          id="tags"
          placeholder={`Enter ${name}`}
          fullWidth
          className="w-full capitalize"
          onChange={onChange}
        />

        <Button
          onClick={onFeatureAdd}
          size="lg"
          invert
          className="w-32"
          gradient
          label="+ Add"
        />
      </div>
    </div>
  )
}

const UploadImages = ({
  setImagesUploaded,
}: {
  setImagesUploaded: React.Dispatch<React.SetStateAction<boolean>>
}) => {
  const productImageRef: React.LegacyRef<HTMLInputElement> = useRef()
  const [_, meta, helpers] = useField('images')

  const { setValue, setError } = helpers
  const [imageList, setImageList] = useState<any[]>([])
  const {
    mutate,
    isLoading,
    isError,
    error = '',
    data,
    isSuccess,
  } = useMutation(uploadMultipleImages)

  const onImageSelect = (e: any): void => {
    const img = e.target.files[0]
    imageList.push(img)

    setImageList((prev) => [...prev])
  }

  const showFileExplorer = () => productImageRef?.current?.click()

  const upload = () => {
    const fd = new FormData()

    forEach(imageList, (image) => {
      fd.append('images', image)
    })

    setTimeout(() => {
      mutate(fd)
    }, 500)

    if (isError) {
      setError(error.toString())
    }

    if (!isLoading && isSuccess) {
      const finalImageList: IProductImage[] = map(
        data.data.data,
        (img, idx: number) => ({
          id: nanoid(24),
          url: img.location,
          isCover: idx === 0,
          alt: '',
        })
      )
      setValue(finalImageList)
      setImagesUploaded(true)
    }
  }

  return (
    <div>
      {imageList && imageList.length > 0 && (
        <div className="flex gap-x-8 mb-8 gap-y-2">
          {imageList.map((image) => (
            <div>
              {image && (
                <LightGallery speed={500} plugins={[lgZoom]}>
                  <img
                    className={`shadow-lg h-24 w-24 rounded-lg`}
                    src={URL.createObjectURL(image)}
                    alt="People working on laptops"
                  />
                </LightGallery>
              )}
            </div>
          ))}
        </div>
      )}
      <input
        ref={productImageRef}
        className="hidden"
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
        {imageList.length > 0 && (
          <Button
            onClick={upload}
            size="lg"
            // className="w-32"
            gradient
            Icon={AiOutlineUpload}
            label="Upload Images"
          />
        )}
      </div>
      <FormError
        show={Boolean(meta.touched && meta.error)}
        error={meta.error}
      />
    </div>
  )
}

const AddProduct = ({ profileUrl }: { profileUrl: string }) => {
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
      .min(50, minMsg('Product Description', 50))
      .max(600, maxMsg('Product Description', 600)),
    details: Yup.string()
      .required('Product details is required')
      .min(50, minMsg('Product details', 50))
      .max(600, maxMsg('Product details', 600)),
    price: Yup.string()
      .required('Price is required')
      .matches(/^[0-9.]+$/, 'Must be only digits'),
    images: Yup.array().length(1),
  })

  // @ts-ignore
  const initialValues: IProduct = {
    // images:[],
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

  const { mutate, isLoading, isError, error, isSuccess } =
    useMutation(addProduct)
  const [imagesUploaded, setImagesUploaded] = useState(false)

  if (isSuccess) {
    return <Redirect to={links.BROWSE_PRODUCTS(profileUrl)} />
  }

  const onSubmit = async (values: any) => {
    // if (imagesUploaded) {
    mutate(values)
    // }
  }
  return (
    <NarrowLayout>
      <Meta pageTitle="Add Product" />
      <Title fontWeight="font-bold mb-8">Add New Product</Title>
      <Formik
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
          <UploadImages setImagesUploaded={setImagesUploaded} />
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
          <Features name="features" />
          <Features name="highlights" />

          <div className="flex items-center justify-end">
            <Button
              type="submit"
              rounded="rounded-lg"
              loading={isLoading}
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
