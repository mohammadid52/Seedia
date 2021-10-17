import { fetchSearchedEmployees } from 'apis/queries'
import Card from 'components/atoms/Card'
import Meta from 'components/atoms/Meta/Meta'
import Title from 'components/atoms/Title'
import Loading from 'components/Loading'
import NarrowLayout from 'containers/NarrowLayout'
import { useHeaderContext } from 'context/HeaderContext'
import { IParent, IProject } from 'interfaces/UniversalInterface'
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

  const isBusiness = userData?.other?.accountType === 'business'

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

  //   const skills =
  //     userData?.background && !isBusiness
  //       ? map(userData?.background.skills, (d) => d.name)
  //       : []

  //   const jobTitleTags = !isBusiness ? getTags(userData?.company?.jobTitle) : []
  //   const jobTypeTags = !isBusiness ? getTags(userData?.company?.jobType) : []

  //   const {
  //     data: relatedJobsData,
  //     isFetched: rIsFetched,
  //     isLoading: rIsLoading,
  //   } = useQuery(
  //     'related-jobs',
  //     () => fetchRelatedJobs([...skills, ...jobTitleTags, ...jobTypeTags]),
  //     { enabled: !isBusiness }
  //   )

  //   const profiles: IProject[] =
  //     rIsFetched && !rIsLoading ? relatedJobsData.data.data : {}

  useEffect(() => {
    if (searchQuery.length >= 3) {
      searchApi()
      setIsSearched(false)
    }
  }, [searchQuery])

  const searchedJobsData: IProject[] =
    isFetched && !isLoading ? data.data.data : {}

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
              {searchedJobsData?.length || 0} results
            </Title>
          }
        />
      )}

      {/* <div className="mt-12">
        {searchedJobsData.length > 0 && (
          <SectionTitle title={`Jobs Related To ${searchQuery}`} />
        )}

        {searchedJobsData.length > 0 && (
          <div className="grid  gap-4 grid-cols-4">
            {map(searchedJobsData, (project) => (
              <ProjectCard userId={userData._id.toString()} project={project} />
            ))}
          </div>
        )}
      </div> */}
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
