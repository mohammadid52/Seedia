import { fetchStore } from 'apis/queries'
import Button from 'components/atoms/Button'
import Meta from 'components/atoms/Meta/Meta'
import ProductSection from 'components/atoms/products/Section'
import Loading from 'components/Loading'
import { links } from 'constants/Links'
import NarrowLayout from 'containers/NarrowLayout'
import { useNotifications } from 'context/NotificationContext'
import { useRouter } from 'hooks/useRouter'
import useScrollPosition from 'hooks/useScrollPosition'
import useUser from 'hooks/useUser'
import {
  IParent,
  IProduct,
  IStore,
  IStoreSection,
} from 'interfaces/UniversalInterface'
import DashboardHeader from 'pages/DashboardHeader'
import Product from 'pages/products/Product'
import NewSectionModal from 'pages/store/NewSection'
import { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { Redirect } from 'react-router'
import 'styles/store.scss'

const ListProducts = ({
  userId,
  products,
}: {
  userId: string
  products: IProduct[]
}) => {
  return (
    <ProductSection showChildren>
      {products &&
        products?.map((product) => (
          <Product userId={userId} key={product._id} product={product} />
        ))}
    </ProductSection>
  )
}

const Section = ({ sectionData }: { sectionData: IStoreSection }) => {
  return (
    <div className="w-full relative min-w-full max-h-84 min-h-84 border dark:border-gray-700   border-gray-200  lg:max-w-xs bg-white grid grid-cols-1 lg:grid-cols-2 dark:bg-gray-800 px-12">
      <img
        src={sectionData.image}
        alt=""
        className="-mt-12 object-contain shadow-xl"
      />
      <div className="text-left text-xl dark:text-white flex flex-col justify-center ml-12 lg:ml-24">
        <h1 className="text-left ">{sectionData.title}</h1>
        <p className="mt-4 text-base border-l-2 pl-2 w-96 border-yellow-500 dark:text-gray-400 break-words">
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

  const scroll = useScrollPosition()

  const [newSectionModal, setNewSectionModal] = useState(false)

  const user = iAmOwnerOfThisProfile ? userData : otherUserData

  const fetchedStore = useQuery(`store-${userData?._id}`, () =>
    fetchStore(user._id)
  )

  const store: IStore =
    !fetchedStore.isLoading && fetchedStore.isFetched
      ? fetchedStore?.data?.data?.data
      : {}

  const [sections, setSections] = useState(store?.section)

  useEffect(() => {
    if (store?.section?.length > 0) {
      setSections([...store?.section])
    }
  }, [store?.section])

  const titleOpacity =
    scroll < 70 ? 'opacity-100' : scroll >= 70 ? 'opacity-70' : 'opacity-10'

  const { setNotification } = useNotifications()

  const storeCreated = store && iAmOwnerOfThisProfile
  if (!isFetched && isLoading) {
    return <Loading />
  }
  if (!storeCreated) {
    setNotification({
      show: true,
      // eslint-disable-next-line quotes
      title: `${
        iAmOwnerOfThisProfile ? 'You have' : `${userData.firstName} has`
      } not opened store yet.`,
      buttonText: iAmOwnerOfThisProfile ? 'Open now' : undefined,
      buttonUrl: iAmOwnerOfThisProfile ? links.openStore() : undefined,
    })
    return <Redirect to={links.FEED} />
  } else {
    return (
      <div className="smooth-scroll">
        <NewSectionModal
          userId={userData._id}
          sections={sections}
          setSections={setSections}
          open={newSectionModal}
          setOpen={setNewSectionModal}
        />
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
          {sections?.length > 0 && (
            <NarrowLayout className="mt-12" customMaxWidth="max-w-7xl">
              <div className="grid grid-cols-1 gap-y-24">
                {sections.map((sec) => {
                  if (sec) {
                    return (
                      <div>
                        <Section sectionData={sec} />
                        {sec?.products?.length > 0 && (
                          <div className=" mt-12 border-b border-gray-200 pb-12 dark:border-gray-700">
                            <ListProducts
                              products={sec.products}
                              userId={user._id}
                            />
                          </div>
                        )}
                      </div>
                    )
                  }
                })}
              </div>
            </NarrowLayout>
          )}
        </div>
        {iAmOwnerOfThisProfile && (
          <div className="fixed bottom-10 right-10  gap-6 dark:text-white">
            <Button
              onClick={() => setNewSectionModal(true)}
              label="+ Add Section"
              gradient
              size="lg"
            />
          </div>
        )}
      </div>
    )
  }
}

export default ViewStore
