import { openStore } from 'apis/mutations'
import { fetchAllProducts } from 'apis/queries'
import placeholder from 'assets/svg/placeholder.png'
import Error from 'components/alerts/Error'
import Button from 'components/atoms/Button'
import Label from 'components/atoms/Label'
import Meta from 'components/atoms/Meta/Meta'
import NormalFormInput from 'components/atoms/NormalFormInput'
import Section from 'components/atoms/products/Section'
import Title from 'components/atoms/Title'
import Spinner from 'components/Spinner'
import { links } from 'constants/Links'
import NarrowLayout from 'containers/NarrowLayout'
import useMedia from 'hooks/useMedia'
import { IParent, IProduct } from 'interfaces/UniversalInterface'
import { get } from 'lodash'
import Product from 'pages/products/Product'
import { useEffect, useRef, useState } from 'react'
import { useMutation, useQuery } from 'react-query'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { storeActions } from 'state/Redux/index'

const Block = ({ children }: { children: React.ReactNode }) => (
  <div>{children}</div>
)

const ListProducts = ({ userId, onLoad }: { userId: string; onLoad: any }) => {
  const { isLoading, data, isFetched, isSuccess } = useQuery(
    'list-all-my-products',
    () => fetchAllProducts(userId)
  )
  const products: IProduct[] = isFetched && !isLoading && data.data.data

  if (isSuccess && products.length > 0) {
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
        products.length > 0 &&
        products.map((product) => (
          <Product key={product._id} product={product} />
        ))
      )}
    </Section>
  )
}

const regex =
  /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i

const OpenStore = ({ userData }: { userData: IParent }) => {
  const bannerRef = useRef()
  const {
    media,
    uploadMedia,
    isSuccess: mediaSuccess,
    openFileExplorer,
    HiddenInput,
    isLoading: uploadingMedia,
  } = useMedia(bannerRef)

  const fields = useSelector((state: any) => get(state, 'store', {}))

  const [error, setError] = useState('')

  const [selectedProducts, setSelectedProducts] = useState<IProduct[]>([])

  const dispatch = useDispatch()

  const onFieldChange = (e: any) => {
    const { name, value } = e.target
    dispatch(storeActions.changeStoreValues(name, value))
  }

  const {
    isLoading: creatingStore,
    isError: mutateIsError,
    error: mutateError,
    mutate,
    isSuccess,
  } = useMutation(openStore)

  const history = useHistory()

  useEffect(() => {
    if (isSuccess) {
      history.push(
        links.getProfileById(
          userData.profileUrl,
          userData?.other?.template || 1,
          'private'
        )
      )
    }
  }, [isSuccess])

  const validateFields = () => {
    let isValid = false
    if (!fields.buttonLabel) {
      isValid = false
      setError('Button label is required')
    } else {
      isValid = true
      setError('')
    }

    if (!fields.buttonLink) {
      isValid = false
      setError('Button link is required')
    } else {
      isValid = true
      setError('')
    }

    if (!regex.test(fields.buttonLink)) {
      isValid = false
      setError('Link is not valid')
    } else {
      isValid = true
      setError('')
    }
    return isValid
  }

  const [mediaUrl, setMediaUrl] = useState(null)

  useEffect(() => {
    if (mediaUrl && mediaSuccess) {
      const finalInput = {
        bannerImage: mediaUrl,
        products: selectedProducts,
        ...fields,
      }

      mutate({ storeData: finalInput })
    }
  }, [mediaSuccess, mediaUrl])

  const onSubmit = (e: any) => {
    const isValid = validateFields()
    if (isValid) {
      const mediaUrl = uploadMedia(e)
      setMediaUrl(mediaUrl)
    }
  }

  return (
    <NarrowLayout>
      <Meta pageTitle={`Open Store | 13RMS`} />
      <Title fontWeight="font-bold mb-8">Open store</Title>
      <div className="my-4 flex flex-col gap-y-12">
        <Block>
          <Label text="Banner Image" />
          <div
            style={{
              backgroundImage: `url(${
                media ? URL.createObjectURL(media) : placeholder
              })`,
            }}
            className="h-96 bg-center flex items-center justify-center bg-no-repeat bg-cover shadow-xl rounded-xl w-full border border-gray-200"
          >
            <HiddenInput />
            <h1
              onClick={openFileExplorer}
              className="text-3xl font-bold  transition-all cursor-pointer bg-transparent hover:bg-white px-2 py-2 hover:text-gray-700 text-white"
            >
              {media ? 'Change' : '+ Choose'} Banner Image
            </h1>
          </div>
        </Block>
        <Block>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
            <div>
              <Label text="Button label" />
              <NormalFormInput
                value={fields.buttonLabel}
                info="The name of button"
                name="buttonLabel"
                onChange={onFieldChange}
                placeholder="Discover"
              />
            </div>
            <div>
              <Label text="Button link" />
              <NormalFormInput
                name="buttonLink"
                info="Link of button"
                value={fields.buttonLink}
                placeholder="www.myshoppingsite.com"
                onChange={onFieldChange}
              />
            </div>
          </div>
        </Block>
        <Block>
          <Label text="Select product" />
          <ListProducts
            onLoad={(products: IProduct[]) => setSelectedProducts(products)}
            userId={userData._id}
          />
        </Block>
        <Block>
          <div className="flex items-center justify-end">
            <Button
              onClick={onSubmit}
              rounded="rounded-lg"
              loading={creatingStore || uploadingMedia}
              gradient
              size="lg"
              label="Create store"
            />
          </div>
          {mutateIsError && <Error errors={[mutateError.toString()]} />}
          {error && <Error errors={[error.toString()]} />}
        </Block>
      </div>
    </NarrowLayout>
  )
}

export default OpenStore
