import { fetchFriendsPurchase, fetchShortUsers } from 'apis/queries'
import Meta from 'components/atoms/Meta/Meta'
import Section from 'components/atoms/products/Section'
import Loading from 'components/Loading'
import useUser from 'hooks/useUser'
import { ErrorFallback } from 'index'
import { IParent, IProduct, IShortProfile } from 'interfaces/UniversalInterface'
import DashboardHeader from 'pages/DashboardHeader'
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

  const config = {
    users: userData.following,
  }
  const {
    data: data2,
    isLoading: isLoading2,
    isFetched: isFetched2,
  } = useQuery('friends-profiles', () => fetchShortUsers(config))

  const products: IProduct[] = isFetched && !isLoading && data.data.data
  const friends: IShortProfile[] = isFetched2 && !isLoading2 && data2.data.data

  if (isLoading) {
    return <Loading />
  }
  if (isError) {
    return (
      <ErrorFallback resetErrorBoundary={refetch} error={{ message: error }} />
    )
  }

  const getFriendsList = (purchasedBy: IProduct['purchasedBy']) =>
    friends.length > 0
      ? friends.filter((friend) => purchasedBy.includes(friend._id.toString()))
      : []

  return (
    <ProductLayout userData={userData}>
      <Meta
        keywords="friends purchases,products, 13rms"
        pageUrl={window.location.href}
        pageTitle={`Friends Purchases | ${userData.fullName} | 13RMS`}
      />
      <DashboardHeader userData={userData} />

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
          products.map((product) => (
            <Product
              userId={userData._id}
              loadingFriends={isLoading2 && !isFetched2}
              purchasedBy={getFriendsList(product.purchasedBy)}
              showWhoPurchased
              product={product}
            />
          ))}
      </Section>
    </ProductLayout>
  )
}

export default FriendsPurchases
