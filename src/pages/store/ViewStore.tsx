import Meta from 'components/atoms/Meta/Meta'
import Loading from 'components/Loading'
import { useRouter } from 'hooks/useRouter'
import useUser from 'hooks/useUser'
import { IParent } from 'interfaces/UniversalInterface'
import 'styles/store.scss'

const ViewStore = ({ userData }: { userData: IParent }) => {
  const route: any = useRouter()
  const { profileUrl } = route?.match?.params

  const { otherUserData, iAmOwnerOfThisProfile, isFetched, isLoading } =
    useUser(profileUrl, userData)

  if (!isFetched && isLoading) {
    return <Loading />
  }
  const user = iAmOwnerOfThisProfile ? userData : otherUserData

  const store = user?.store

  if (store) {
    return (
      <div>
        <Meta
          pageTitle={`Store | ${user.fullName} | 13RMS`}
          title={`Store | ${user.fullName}`}
          keywords={`store,${user.fullName} store,13rms`}
        />

        <div style={{ height: 2000 }} className="">
          <div
            style={{ backgroundImage: `url(${store.bannerImage})` }}
            className="parallax"
          ></div>
        </div>
      </div>
    )
  }
}

export default ViewStore
