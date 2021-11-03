import { fetchAllProducts } from 'apis/queries'
import Meta from 'components/atoms/Meta/Meta'
import Section from 'components/atoms/products/Section'
import Loading from 'components/Loading'
import NarrowLayout from 'containers/NarrowLayout'
import { useRouter } from 'hooks/useRouter'
import useUser from 'hooks/useUser'
import { IParent, IProduct } from 'interfaces/UniversalInterface'
import Product from 'pages/products/Product'
import ProfileCard from 'pages/products/ProfileCard/ProfileCard'
import { useQuery } from 'react-query'

const BrowseProducts = ({ userData }: { userData: IParent }) => {
  const route: any = useRouter()

  const { profileUrl } = route?.match?.params

  const { otherUserData, iAmOwnerOfThisProfile } = useUser(profileUrl, userData)

  const { isLoading, error, data, isFetched, isSuccess, isError } = useQuery(
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

  if (isSuccess) {
    return (
      <div className="bg-gray-100">
        <Meta
          pageUrl={window.location.href}
          pageTitle={`Browse Products - ${userData?.fullName} - 13RMS `}
        />
        <NarrowLayout customMaxWidth="max-w-7xl" userData={userData}>
          <div className="">
            <ProfileCard
              userData={userData}
              targetId={otherUserData?._id}
              iAmOwnerOfThisProfile={iAmOwnerOfThisProfile}
            />
            {
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
            }

            <Section
              showChildren={products && products.length > 0}
              title={'Recommended Products'}
            >
              {products &&
                products.length > 0 &&
                products.map((product) => <Product product={product} />)}
            </Section>
            {isError && <p className="text-red-500 text-sm">{error}</p>}
          </div>
        </NarrowLayout>
      </div>
    )
  }
}

export default BrowseProducts
