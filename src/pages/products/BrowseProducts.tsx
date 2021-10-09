import { fetchAllProducts } from 'apis/queries'
import Button from 'components/atoms/Button'
import Card from 'components/atoms/Card'
import Section from 'components/atoms/products/Section'
import Loading from 'components/Loading'
import { links } from 'constants/Links'
import useFollow from 'hooks/useFollow'
import { useRouter } from 'hooks/useRouter'
import useUser from 'hooks/useUser'
import { ErrorFallback } from 'index'
import { IParent, IProduct } from 'interfaces/UniversalInterface'
import Product from 'pages/products/Product'
import { useQuery } from 'react-query'
import { avatarPlaceholder } from 'state/Redux/constants'

const ProfileCard = ({
  userData,
  iAmOwnerOfThisProfile,
  targetId,
}: {
  userData: IParent
  iAmOwnerOfThisProfile: boolean
  targetId: string
}) => {
  const { following, addFollow, removeFollow } = useFollow(
    userData.following,
    targetId
  )

  return (
    <div className="">
      <Card
        className="p-6"
        content={
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-12">
              <div className="">
                <span className="sr-only">13RMS</span>
                <img
                  className="border-gradient border-transparent border-4 h-36 w-36 sm:h-40 sm:w-40 cursor-pointer rounded-full shadow-xl"
                  src={
                    userData?.profilePicture
                      ? userData?.profilePicture
                      : avatarPlaceholder
                  }
                  alt=""
                />
              </div>
              <div className="space-y-4">
                <h1 className="text-2xl leading-6 font-semibold dark:text-white text-gray-900">
                  {userData?.fullName}
                </h1>
                <h5 className="text-base leading-6 font-light mt-2 max-w-132 dark:text-gray-400 text-gray-900">
                  {userData?.background?.summary ||
                    'In  placeholder text commonly used to demonstrate the visual form of a document'}
                </h5>
                {!iAmOwnerOfThisProfile && (
                  <Button
                    onClick={() =>
                      following
                        ? addFollow.mutate(targetId)
                        : removeFollow.mutate(targetId)
                    }
                    label="Follow"
                    gradient
                    size="lg"
                  />
                )}
              </div>
            </div>
            <div className="border-l h-full border-gray-200 dark:border-gray-600">
              <div className="flex py-4 flex-col pl-16 items-center justify-around space-y-6">
                <div className="flex w-56 flex-col border-b border-gray-200 dark:border-gray-600 pb-4">
                  <span className="text-base font-semibold text-gray-900 dark:text-white">
                    {userData?.followers?.length || 0}
                  </span>
                  <span className="text-base font-medium text-gray-500 dark:text-gray-500">
                    Followers
                  </span>
                </div>
                <div className="flex flex-col  w-56  border-b border-gray-200 dark:border-gray-600 pb-4">
                  <span className="text-base font-semibold text-gray-900 dark:text-white">
                    {userData?.purchases?.length || 0}
                  </span>
                  <span className="text-base font-medium text-gray-500 dark:text-gray-500">
                    Purchases
                  </span>
                </div>
                <div className="flex flex-col w-56  border-b border-gray-200 dark:border-gray-600 pb-4">
                  <span className="text-base font-semibold text-gray-900 dark:text-white">
                    {userData?.reviews?.length || 0}
                  </span>
                  <span className="text-base font-medium text-gray-500 dark:text-gray-500">
                    Reviews
                  </span>
                </div>
              </div>
            </div>
          </div>
        }
      />
    </div>
  )
}

// @ts-nocheck

const BrowseProducts = ({ userData }: { userData: IParent }) => {
  const route: any = useRouter()

  const { profileUrl } = route?.match?.params

  const { otherUserData, iAmOwnerOfThisProfile } = useUser(profileUrl, userData)

  const { isLoading, error, data, isFetched, isError, refetch } = useQuery(
    'all-products',
    () =>
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

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8 overflow-hidden bg-gray-200 dark:bg-gray-800 py-12">
      <div className="pt-24">
        <ProfileCard
          userData={userData}
          targetId={otherUserData?._id}
          iAmOwnerOfThisProfile={iAmOwnerOfThisProfile}
        />
        <Section
          showChildren={products && products.length > 0}
          title={
            iAmOwnerOfThisProfile
              ? 'Your Products'
              : `${otherUserData?.firstName}'s Products`
          }
        >
          {products.map((product) => (
            <Product product={product} />
          ))}
        </Section>

        {iAmOwnerOfThisProfile && (
          <Button
            label="+ Add new product"
            className="flex"
            gradient
            link={links.addProduct()}
          />
        )}
        <Section
          showChildren={products && products.length > 0}
          title={'Recommended Products'}
        >
          {products.map((product) => (
            <Product product={product} />
          ))}
        </Section>
      </div>
    </div>
  )
}

export default BrowseProducts
