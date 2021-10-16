import { fetchFriendsPurchase } from 'apis/queries'
import Section from 'components/atoms/products/Section'
import Loading from 'components/Loading'
import useUser from 'hooks/useUser'
import { ErrorFallback } from 'index'
import { IParent, IProduct } from 'interfaces/UniversalInterface'
import Product from 'pages/products/Product'
import ProductLayout from 'pages/products/ProductLayout'
import ProfileCard from 'pages/products/ProfileCard/ProfileCard'
import { useQuery } from 'react-query'

const FriendsPurchases = ({ userData }: { userData: IParent }) => {
  const { otherUserData, iAmOwnerOfThisProfile } = useUser(
    userData?.profileUrl,
    userData
  )

  const { isLoading, error, data, isFetched, isError, refetch } = useQuery(
    'friends-purchases',
    () => fetchFriendsPurchase()
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

  return (
    <ProductLayout userData={userData}>
      <ProfileCard
        userData={userData}
        targetId={otherUserData?._id}
        iAmOwnerOfThisProfile={iAmOwnerOfThisProfile}
      />

      <Section
        showChildren={products && products.length > 0}
        title={
          // eslint-disable-next-line quotes
          "Your Friend's Purchases"
        }
      >
        {products &&
          products.length > 0 &&
          products.map((product) => <Product product={product} />)}
      </Section>
    </ProductLayout>
  )
}

export default FriendsPurchases
