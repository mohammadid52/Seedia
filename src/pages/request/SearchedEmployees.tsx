import { fetchSearchedEmployees } from 'apis/queries'
import Card from 'components/atoms/Card'
import Meta from 'components/atoms/Meta/Meta'
import Title from 'components/atoms/Title'
import Loading from 'components/Loading'
import NarrowLayout from 'containers/NarrowLayout'
import { useHeaderContext } from 'context/HeaderContext'
import { IParent, IRequest } from 'interfaces/UniversalInterface'
import { map } from 'lodash'
import RequestCard from 'pages/request/RequestCard'
import queryString from 'query-string'
import { useEffect, useState } from 'react'
import { useQuery } from 'react-query'

const SearchedEmployees = ({ userData }: { userData: IParent }) => {
  const { setIsSearched, isSearched } = useHeaderContext()

  const {
    data,
    refetch: searchApi,
    isLoading,
    isError,
    error,
    isSuccess,
    isFetched,
  } = useQuery('searched-jobs', () => fetchSearchedEmployees(searchQuery), {
    enabled: false,
  })

  const parsed = queryString.parse(window.location.search)

  const searchedQuery = parsed.q.toString()

  const [searchQuery, setSearchQuery] = useState(searchedQuery)

  useEffect(() => {
    if (isSearched) {
      const parsed = queryString.parse(window.location.search)
      const searchedQuery = parsed.q.toString()
      setSearchQuery(searchedQuery)
    }
  }, [window.location.search, isSearched])

  useEffect(() => {
    if (searchQuery.length >= 3) {
      searchApi()
      setIsSearched(false)
    }
  }, [searchQuery])

  const searchedData: IRequest[] = isFetched && !isLoading ? data.data.data : []

  if (isLoading && !isFetched) {
    return <Loading />
  }

  return (
    <NarrowLayout
      userData={userData}
      customParentMaxWidth="max-w-360 relative"
      customMaxWidth="max-w-360"
    >
      <Meta
        keywords="jobs, jobs at 13RMS, 13rms"
        pageUrl={window.location.href}
        pageTitle={`Search ${searchQuery} | Jobs | 13RMS `}
      />

      {searchQuery && (
        <Card
          content={
            <Title>
              You have searched for `
              <span className="gradient-text">{searchQuery}</span>`. Found{' '}
              {searchedData?.length || 0} results
            </Title>
          }
        />
      )}

      {searchedData && searchedData.length > 0 && (
        <div className="mt-12">
          {searchedData.length > 0 && (
            <div className="grid  gap-4 grid-cols-4">
              {map(searchedData, (request) => (
                <RequestCard
                  isLoading={!isFetched && isLoading}
                  userData={userData}
                  userId={userData._id.toString()}
                  request={request}
                />
              ))}
            </div>
          )}
        </div>
      )}
      {/* 
      {!isBusiness &&
        searchedJobsData.length === 0 &&
        relatedJobs.length > 0 && (
          <SectionTitle title={`Jobs Related To Your Preference`} />
        )}

      {!isBusiness && searchedJobsData.length === 0 && relatedJobs.length > 0 && (
        <div className="grid gap-4 grid-cols-4">
          {map(relatedJobs, (project) => (
            <ProjectCard userId={userData._id.toString()} project={project} />
          ))}
        </div>
      )} */}
    </NarrowLayout>
  )
}

export default SearchedEmployees
