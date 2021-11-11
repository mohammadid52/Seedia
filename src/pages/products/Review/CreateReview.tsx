import { createReview } from 'apis/mutations'
import Button from 'components/atoms/Button'
import FormInput from 'components/atoms/FormInput'
import Title from 'components/atoms/Title'
import { links } from 'constants/Links'
import NarrowLayout from 'containers/NarrowLayout'
import { Form, Formik } from 'formik'
import { useRouter } from 'hooks/useRouter'
import Error from 'components/alerts/Error'
import StarsField from 'pages/products/Review/StarsField'
import { useMutation, useQuery } from 'react-query'
import { Redirect } from 'react-router'
import * as Yup from 'yup'
import Meta from 'components/atoms/Meta/Meta'
import { IProduct } from 'interfaces/UniversalInterface'
import { fetchProductDetails } from 'apis/queries'
import Loading from 'components/Loading'

const CreateReview = () => {
  const initialValues = { reviewText: '', rating: 3 }

  const route: any = useRouter()

  const { productId } = route?.match?.params

  const { isLoading, data, isFetched } = useQuery('product', () =>
    fetchProductDetails(productId)
  )

  const product: IProduct = isFetched && !isLoading ? data.data.data : {}

  const validationSchema = Yup.object({
    reviewTitle: Yup.string().required('Review title is required'),
    reviewText: Yup.string()
      .required('Review is required')
      .min(10, 'Review must be atleast 10 characters long.')
      .max(500, 'Review cannot be greater than 500 characters long.'),
  })

  const {
    mutate: onSubmit,
    isLoading: savingReview,
    isError: mutateIsError,
    error: mutateError,
    isSuccess,
  } = useMutation(
    (values: { reviewText: string; reviewTitle: string; rating: string }) =>
      createReview(productId, values)
  )

  if (isLoading) {
    return <Loading />
  }

  if (isSuccess) {
    return <Redirect to={links.getProductUrl(productId)} />
  }

  return (
    <NarrowLayout>
      <Meta pageTitle={`Create Review - ${product.productName}`} />

      <Title fontWeight="font-bold mb-8">Write you review</Title>
      <Title
        size="font-sm"
        textColor="dark:text-gray-500 text-gray-600"
        className=" mb-8"
      >
        {product.productName}
      </Title>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        // @ts-ignore
        onSubmit={onSubmit}
      >
        <Form className="space-y-6">
          <FormInput
            label="Title"
            id="reviewTitle"
            name="reviewTitle"
            placeholder="Add a title"
            required
          />
          <FormInput
            label="Description"
            id="reviewText"
            name="reviewText"
            placeholder="Write your review"
            required
            textarea
            rows={2}
            cols={255}
          />

          <StarsField />

          <div className="flex items-center justify-end">
            <Button
              type="submit"
              rounded="rounded-lg"
              loading={savingReview}
              gradient
              size="lg"
              label="Submit"
            />
          </div>
          {mutateIsError && <Error errors={[mutateError.toString()]} />}
        </Form>
      </Formik>
    </NarrowLayout>
  )
}

export default CreateReview
