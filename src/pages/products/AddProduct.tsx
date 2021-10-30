import { addProduct } from 'apis/mutations'
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
import { Form, Formik } from 'formik'
import useAccountType from 'hooks/useAccountType'
import { IParent, IProduct } from 'interfaces/UniversalInterface'
import { map, times } from 'lodash'
import UploadImages from 'pages/products/UploadImages'
import { useEffect, useState } from 'react'
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
  const { isBusiness } = useAccountType(userData)

  useEffect(() => {
    if (!isBusiness) {
      return history.push(links.FEED)
    }
  }, [isBusiness])

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

  const { mutate, isLoading, isError, error, isSuccess } =
    useMutation(addProduct)
  const [imagesUploaded, setImagesUploaded] = useState(false)

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

  const onSubmit = async (values: any) => {
    if (imagesUploaded) {
      mutate(values)
    }
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
          <List name="features" />
          <List name="highlights" />

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
