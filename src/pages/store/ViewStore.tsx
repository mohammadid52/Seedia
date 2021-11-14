import { fetchAllProducts } from 'apis/queries'
import Button from 'components/atoms/Button'
import Meta from 'components/atoms/Meta/Meta'
import Loading from 'components/Loading'
import ProductSection from 'components/atoms/products/Section'
import Spinner from 'components/Spinner'
import { links } from 'constants/Links'
import NarrowLayout from 'containers/NarrowLayout'
import { useRouter } from 'hooks/useRouter'
import useScrollPosition from 'hooks/useScrollPosition'
import useUser from 'hooks/useUser'
import { IParent, IProduct, IStoreSection } from 'interfaces/UniversalInterface'
import DashboardHeader from 'pages/DashboardHeader'
import Product from 'pages/products/Product'
import NewSectionModal from 'pages/store/NewSection'
import { useState } from 'react'
import { MdPublish } from 'react-icons/md'
import { VscEdit } from 'react-icons/vsc'
import 'styles/store.scss'
import { useMutation, useQuery } from 'react-query'
import { publishStore } from 'apis/mutations'
import { Redirect } from 'react-router'

const ListProducts = ({ userId, onLoad }: { userId: string; onLoad?: any }) => {
  const { isLoading, data, isFetched, isSuccess } = useQuery(
    'list-all-my-products',
    () => fetchAllProducts(userId)
  )
  const products: IProduct[] = isFetched && !isLoading && data.data.data

  if (isSuccess && products && products?.length > 0) {
    if (onLoad) {
      onLoad(products)
    }
  }

  return (
    <ProductSection showChildren>
      {isLoading ? (
        <Spinner />
      ) : (
        products &&
        products?.length > 0 &&
        products?.map((product) => (
          <Product userId={userId} key={product._id} product={product} />
        ))
      )}
    </ProductSection>
  )
}

const Section = ({ sectionData }: { sectionData: IStoreSection }) => {
  return (
    <div className="w-full min-w-full max-h-84 min-h-84 border dark:border-gray-700   border-gray-200  lg:max-w-xs bg-white grid grid-cols-1 lg:grid-cols-2 dark:bg-gray-800 px-12">
      <img
        src={sectionData.image}
        alt=""
        className="-mt-12 object-contain shadow-xl"
      />
      <div className="text-left text-xl dark:text-white flex flex-col justify-center ml-12 lg:ml-24">
        <h1 className="text-left ">{sectionData.title}</h1>
        <p className="mt-4 text-base border-l-2 pl-2 max-w-96 border-yellow-500 dark:text-gray-400">
          {sectionData.content}
        </p>
      </div>
    </div>
  )
}

const ViewStore = ({ userData }: { userData: IParent }) => {
  const route: any = useRouter()
  const { profileUrl } = route?.match?.params

  const { otherUserData, iAmOwnerOfThisProfile, isFetched, isLoading } =
    useUser(profileUrl, userData)

  const { mutate } = useMutation(publishStore, {
    onSuccess: () => setIsPublished(!isPublished),
  })

  const scroll = useScrollPosition()

  const [newSectionModal, setNewSectionModal] = useState(false)

  const user = iAmOwnerOfThisProfile ? userData : otherUserData

  const store = user?.store

  const [isPublished, setIsPublished] = useState(store?.isPublished)

  const titleOpacity =
    scroll < 70 ? 'opacity-100' : scroll >= 70 ? 'opacity-70' : 'opacity-10'

  if (!isFetched && isLoading) {
    return <Loading />
  }

  // store.isPublished
  if (store && (iAmOwnerOfThisProfile || isPublished)) {
    return (
      <div className="smooth-scroll">
        <NewSectionModal open={newSectionModal} setOpen={setNewSectionModal} />
        <Meta
          pageTitle={`Store | ${user.fullName} | 13RMS`}
          title={`Store | ${user.fullName}`}
          pageUrl={links.getProfile(user)}
          imageUrl={store.bannerImage}
          keywords={`store,${user.fullName} store,13rms`}
        />
        <DashboardHeader userData={userData} />

        <div style={{ height: 2000 }} className="pt-20 ">
          <div
            style={{ backgroundImage: `url(${store.bannerImage})` }}
            className="parallax flex items-center justify-center flex-col"
          >
            <img
              src={user?.profilePicture}
              alt=""
              className="border-gradient border-transparent border-4 h-20 w-20 sm:h-28 sm:w-28 mb-2 cursor-pointer rounded-full shadow-xl"
            />
            <h1
              className={`text-4xl xl:text-6xl transition-all duration-300 font-bold text-white filter drop-shadow-2xl tracking-wide leading-1 ${titleOpacity}`}
            >
              {user?.business?.name || 'Store'}
            </h1>
          </div>
          {store.section.length > 0 && (
            <NarrowLayout className="mt-12" customMaxWidth="max-w-7xl">
              <div className="grid grid-cols-1 gap-y-24">
                {store?.section.map((sec: any) => (
                  <div>
                    <Section sectionData={sec} />
                    <ListProducts userId={user._id} />
                  </div>
                ))}
              </div>
            </NarrowLayout>
          )}
        </div>
        {iAmOwnerOfThisProfile && (
          <div className="fixed bottom-10 right-10 grid grid-cols-1 lg:grid-cols-3 gap-6 dark:text-white">
            <Button
              onClick={() => setNewSectionModal(true)}
              label="+ Add Section"
              gradient
              size="lg"
            />
            <Button
              // link={links.exploreJobs()}
              label="Edit Store"
              gradient
              Icon={VscEdit}
              size="lg"
            />
            <Button
              onClick={() => {
                mutate(!isPublished)
              }}
              label={isPublished ? 'Unpublish' : 'Publish'}
              gradient
              Icon={MdPublish}
              size="lg"
            />
          </div>
        )}
      </div>
    )
  } else {
    return <Redirect to="/feed/" />
  }
}

export default ViewStore
