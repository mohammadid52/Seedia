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
import { useMutation } from 'react-query'
import { Redirect } from 'react-router'
import * as Yup from 'yup'

const CreateReview = () => {
  const initialValues = { reviewText: '' }

  const route: any = useRouter()

  const { productId } = route?.match?.params

  const validationSchema = Yup.object({
    reviewText: Yup.string()
      .required('Review is required')
      .min(10, 'Review must be atleast 10 characters long.')
      .max(500, 'Review cannot be greater than 500 characters long.'),
  })

  const {
    mutate: onSubmit,
    isLoading,
    isError,
    error,
    isSuccess,
  } = useMutation((values: { reviewText: string; rating: string }) =>
    createReview(productId, values)
  )

  if (isSuccess) {
    return <Redirect to={links.getProductUrl(productId)} />
  }

  return (
    <NarrowLayout>
      <Title fontWeight="font-bold mb-8">Write you review</Title>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        // @ts-ignore
        onSubmit={onSubmit}
      >
        <Form className="space-y-6">
          <FormInput
            label="Review"
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

export default CreateReview
