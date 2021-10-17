import { fetchMyRequests } from 'apis/queries'
import Meta from 'components/atoms/Meta/Meta'
import SectionTitle from 'components/atoms/SectionTitle'
import Loading from 'components/Loading'
import NarrowLayout from 'containers/NarrowLayout'
import useAccountType from 'hooks/useAccountType'
import { IParent, IRequest } from 'interfaces/UniversalInterface'
import map from 'lodash/map'
import RequestCard from 'pages/request/RequestCard'
import { useQuery } from 'react-query'
import { useHistory } from 'react-router'

const RequestsList = ({ userData }: { userData: IParent }) => {
  const { isBusiness } = useAccountType(userData)

  const { isLoading, data, isFetched } = useQuery(
    'requests-list',
    () => fetchMyRequests(),
    {
      enabled: !isBusiness,
    }
  )

  const history = useHistory()
  if (isBusiness) {
    history.goBack()
  }

  if (isLoading && !isFetched) {
    return <Loading />
  }

  const requestsList: IRequest[] = isFetched && !isLoading ? data.data.data : {}

  return (
    <NarrowLayout
      userData={userData}
      customParentMaxWidth="max-w-360 relative"
      customMaxWidth="max-w-360"
    >
      <Meta
        keywords="jobs, jobs at 13RMS, 13rms"
        pageUrl={window.location.href}
        pageTitle={`Jobs | 13RMS `}
      />
      <SectionTitle title={`Your Requests (${requestsList?.length || 0})`} />

      <div className="grid gap-4 grid-cols-4">
        {map(requestsList, (request) => (
          <RequestCard
            isLoading={!isFetched && isLoading}
            userData={userData}
            userId={userData._id.toString()}
            request={request}
          />
        ))}
      </div>
    </NarrowLayout>
  )
}

export default RequestsList
