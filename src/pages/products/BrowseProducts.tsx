import { fetchAllProducts } from 'apis/queries'
import Meta from 'components/atoms/Meta/Meta'
import Section from 'components/atoms/products/Section'
import Loading from 'components/Loading'
import { useRouter } from 'hooks/useRouter'
import useUser from 'hooks/useUser'
import { ErrorFallback } from 'index'
import { IParent, IProduct } from 'interfaces/UniversalInterface'
import Product from 'pages/products/Product'
import ProductLayout from 'pages/products/ProductLayout'
import ProfileCard from 'pages/products/ProfileCard/ProfileCard'
import { useQuery } from 'react-query'

const BrowseProducts = ({ userData }: { userData: IParent }) => {
  const route: any = useRouter()

  const { profileUrl } = route?.match?.params

  const { otherUserData, iAmOwnerOfThisProfile } = useUser(profileUrl, userData)

  const { isLoading, error, data, isFetched, isSuccess, isError, refetch } =
    useQuery('all-products', () =>
      fetchAllProducts(
        iAmOwnerOfThisProfile ? userData._id : otherUserData?._id
      )
    )

  const products: IProduct[] = isFetched && !isLoading && data.data.data

  if (isLoading) {
    return <Loading />
  }
  if (isError) {
    return (
      <ErrorFallback resetErrorBoundary={refetch} error={{ message: error }} />
    )
  }
  if (isSuccess) {
    const isBusiness = userData?.other?.accountType === 'business'

    return (
      <>
        <Meta
          pageUrl={window.location.href}
          pageTitle={`Browse Products - ${userData?.fullName} - 13RMS `}
        />
        <ProductLayout userData={userData}>
          <div className="pt-24">
            <ProfileCard
              userData={userData}
              targetId={otherUserData?._id}
              iAmOwnerOfThisProfile={iAmOwnerOfThisProfile}
            />
            {isBusiness && (
              <Section
                showChildren={products && products.length > 0}
                title={
                  iAmOwnerOfThisProfile
                    ? 'Your Products'
                    : `${otherUserData?.firstName}'s Products`
                }
              >
                {products &&
                  products.length > 0 &&
                  products.map((product) => <Product product={product} />)}
              </Section>
            )}

            <Section
              showChildren={products && products.length > 0}
              title={'Recommended Products'}
            >
              {products &&
                products.length > 0 &&
                products.map((product) => <Product product={product} />)}
            </Section>
          </div>
        </ProductLayout>
      </>
    )
  }
}

export default BrowseProducts
