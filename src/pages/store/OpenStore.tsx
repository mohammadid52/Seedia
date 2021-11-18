import { openStore, uploadMediaToServer } from 'apis/mutations'
import { fetchAllProducts } from 'apis/queries'
import Button from 'components/atoms/Button'
import FormInput from 'components/atoms/FormInput'
import Label from 'components/atoms/Label'
import Meta from 'components/atoms/Meta/Meta'
import Section from 'components/atoms/products/Section'
import Title from 'components/atoms/Title'
import Spinner from 'components/Spinner'
import { links } from 'constants/Links'
import NarrowLayout from 'containers/NarrowLayout'
import { useNotifications } from 'context/NotificationContext'
import { Form, Formik } from 'formik'
import { IParent, IProduct, IStore } from 'interfaces/UniversalInterface'
import { isEmpty } from 'lodash'
import Product from 'pages/products/Product'
import BannerImage from 'pages/store/BannerImage'
import { useEffect, useRef, useState } from 'react'
import { useMutation, useQuery } from 'react-query'
import { Redirect, useHistory } from 'react-router-dom'
import * as Yup from 'yup'

const ListProducts = ({ userId, onLoad }: { userId: string; onLoad: any }) => {
  const { isLoading, data, isFetched, isSuccess } = useQuery(
    'list-all-my-products',
    () => fetchAllProducts(userId)
  )
  const products: IProduct[] = isFetched && !isLoading ? data.data.data : []

  const { setNotification } = useNotifications()

  if (!products || products.length === 0) {
    setNotification({
      show: true,
      // eslint-disable-next-line quotes
      title: "You don't have enough products for store.",
      buttonText: 'Add now',
      buttonUrl: links.addProduct(),
    })
    return <Redirect to={links.FEED} />
  }

  if (isSuccess && products && products?.length > 0) {
    if (onLoad) {
      onLoad(products)
    }
  }

  return (
    <Section showChildren>
      {isLoading ? (
        <Spinner />
      ) : (
        products &&
        products?.length > 0 &&
        products?.map((product) => (
          <Product userId={userId} key={product._id} product={product} />
        ))
      )}
    </Section>
  )
}

const OpenStore = ({ userData }: { userData: IParent }) => {
  const isStoreOpened = !isEmpty(userData?.store)

  const upload = useMutation(uploadMediaToServer, {
    onSuccess: (a, b) => {
      // @ts-ignore
      const values = formRef?.current?.values
      if (formRef?.current && values) {
        const finalInput = {
          bannerImage: a.data.data.location,
          products: selectedProducts,
          ...values,
        }

        mutate({ storeData: finalInput })
      }
    },
  })

  const [selectedProducts, setSelectedProducts] = useState<IProduct[]>([])

  const {
    isLoading: creatingStore,

    mutate,
    isSuccess,
  } = useMutation(openStore, {
    onSuccess: () => {
      setNotification({
        show: true,
        title: `Congratulations ${userData.firstName}. You have successfully opened a shop on Tradingpost13RMS. Good luck selling your stuff.`,
        buttonText: 'View store',
        buttonUrl: links.viewStore(userData.profileUrl),
      })
    },
  })

  const history = useHistory()

  useEffect(() => {
    if (isSuccess || !isEmpty(userData?.store)) {
      history.push(
        links.getProfileById(
          userData.profileUrl,
          userData?.other?.template || 1,
          'private'
        )
      )
    }
  }, [isSuccess])

  const onSubmit = (e: any) => {
    const fd = new FormData()
    fd.append('image', media)

    upload.mutate(fd)
  }

  const onImageSelect = (e: any, setFieldValue: any) => {
    const img = e.target.files[0]

    setFieldValue(img)
  }

  const validationSchema = Yup.object({
    buttonLabel: Yup.string()
      .required('Button label is required')
      .min(3)
      .max(150),
    buttonLink: Yup.string()
      // .test(regex)
      .required('Button link is required')
      .min(5)
      .max(150),
  })

  // @ts-ignore
  const initialValues: IStore = {
    buttonLabel: '',
    buttonLink: '',
  }
  const formRef = useRef()

  const [media, setMedia] = useState()
  const { setNotification } = useNotifications()

  if (isStoreOpened) {
    setNotification({
      show: true,
      title: 'Store is already created.',
    })
    return <Redirect to={links.FEED} />
  }

  return (
    <NarrowLayout customMaxWidth="max-w-7xl" userData={userData}>
      <Meta pageTitle={`Open Store | 13RMS`} />
      <Title fontWeight="font-bold mb-8">Open store</Title>

      <Formik
        initialValues={initialValues}
        innerRef={formRef}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form className="my-4 flex flex-col gap-y-12">
          <div className="grid grid-cols-1 gap-y-12">
            <div>
              <Label text="Banner Image" />
              <BannerImage
                media={media}
                setMedia={setMedia}
                onImageSelect={onImageSelect}
              />
            </div>
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
                <div>
                  <Label text="Button label" />
                  <FormInput
                    info="The name of button"
                    name="buttonLabel"
                    placeholder="Discover"
                  />
                </div>
                <div>
                  <Label text="Button link" />
                  <FormInput
                    name="buttonLink"
                    info="Link of button"
                    placeholder="www.myshoppingsite.com"
                  />
                </div>
              </div>
            </div>
            <div>
              <Label text="Select product" />
              <ListProducts
                onLoad={(products: IProduct[]) => setSelectedProducts(products)}
                userId={userData._id}
              />
              <div>
                <div className="flex items-center justify-end">
                  <Button
                    // onClick={onSubmit}
                    type="submit"
                    rounded="rounded-lg"
                    loading={creatingStore || upload.isLoading}
                    gradient
                    size="lg"
                    label="Create store"
                  />
                </div>
              </div>
            </div>
          </div>
        </Form>
      </Formik>
    </NarrowLayout>
  )
}

export default OpenStore
