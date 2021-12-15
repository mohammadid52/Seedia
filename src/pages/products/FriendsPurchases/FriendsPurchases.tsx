import { fetchFriendsPurchase, fetchShortUsers } from 'apis/queries'
import Meta from 'components/atoms/Meta/Meta'
import Section from 'components/atoms/products/Section'
import Loading from 'components/Loading'
import VerticalProfileCard from 'components/VerticalProfileCard'
import { links } from 'constants/Links'
import NarrowLayout from 'containers/NarrowLayout'
import useUser from 'hooks/useUser'
import { ErrorFallback } from 'index'
import { IParent, IProduct, IShortProfile } from 'interfaces/UniversalInterface'
import DashboardHeader from 'pages/DashboardHeader'
import Product from 'pages/products/Product'
import { useQuery } from 'react-query'

const FriendsPurchases = ({ userData }: { userData: IParent }) => {
  // const { otherUserData, iAmOwnerOfThisProfile } = useUser(
  //   userData?.profileUrl,
  //   userData
  // )

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
    <NarrowLayout customMaxWidth="max-w-7xl" userData={userData}>
      <Meta
        keywords="friends purchases,products, 13rms"
        pageUrl={window.location.href}
        pageTitle={`Friends Purchases | ${userData.fullName} | 13RMS`}
      />
      <DashboardHeader userData={userData} />
      {/* 
      <ProfileCard
        userData={userData}
        targetId={otherUserData?._id}
        iAmOwnerOfThisProfile={iAmOwnerOfThisProfile}
      /> */}
      <div className="grid grid-cols-1 gap-y-6 lg:gap-x-6 lg:gap-y-0  lg:grid-cols-4 ">
        <div className="col-span-1">
          <VerticalProfileCard
            content={
              <div>
                <div className="flex my-4 items-center border-t border-b border-gray-200 dark:border-gray-700 justify-between w-full">
                  <div className="border-r p-2  border-gray-200 w-1/2 dark:border-gray-700">
                    <div className="font-semibold text-gray-800 dark:text-gray-100">
                      {userData?.following?.length || 0}
                    </div>
                    <div className="text-gray-600 dark:text-gray-500 font-medium">
                      Followings
                    </div>
                  </div>
                  <div className="border-r p-2  border-gray-200 w-1/2 dark:border-gray-700">
                    <div className="font-semibold text-gray-800 dark:text-gray-100">
                      {userData?.purchases?.length || 0}
                    </div>
                    <div className="text-gray-600 dark:text-gray-500 font-medium">
                      Purchases
                    </div>
                  </div>
                </div>
                <div className="pb-4 text-gray-800 font-semibold dark:text-white">
                  <a href={links.getProfile(userData, true)}>
                    View your profile
                  </a>
                </div>
              </div>
            }
            user={userData}
          />
        </div>
        <div className="col-span-3">
          <Section showChildren={products && products.length > 0}>
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
        </div>
      </div>
    </NarrowLayout>
  )
}

export default FriendsPurchases
