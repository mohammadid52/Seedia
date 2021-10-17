import { fetchRelatedJobs } from 'apis/queries'
import Meta from 'components/atoms/Meta/Meta'
import SectionTitle from 'components/atoms/SectionTitle'
import Loading from 'components/Loading'
import { links } from 'constants/Links'
import NarrowLayout from 'containers/NarrowLayout'
import useAccountType from 'hooks/useAccountType'
import { IParent, IProject } from 'interfaces/UniversalInterface'
import map from 'lodash/map'
import ProjectCard from 'pages/project/ProjectCard'
import { useQuery } from 'react-query'
import { Redirect } from 'react-router'
import { getTags } from 'utils/functions'
const ProjectsListView = ({ userData }: { userData: IParent }) => {
  const skills = userData?.background
    ? map(userData?.background.skills, (d) => d.name)
    : []
  const company = userData?.company

  const jobTitleTags = getTags(company?.jobTitle)
  const jobTypeTags = getTags(company?.jobType)

  const { isBusiness } = useAccountType(userData)
  const {
    isLoading,
    data: relatedJobsData,
    isFetched,
  } = useQuery(
    'related-jobs',
    () => fetchRelatedJobs([...skills, ...jobTitleTags, ...jobTypeTags]),
    { enabled: !isBusiness }
  )

  const relatedJobs: IProject[] =
    isFetched && !isLoading ? relatedJobsData.data.data : {}

  if (isBusiness) {
    return <Redirect to={links.viewMyProjects()} />
  }

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
        pageTitle={`Jobs | 13RMS `}
      />
      <SectionTitle title={`Jobs Related To Your Preference`} />

      <div className="grid gap-4 grid-cols-4">
        {map(relatedJobs, (project) => (
          <ProjectCard userId={userData._id.toString()} project={project} />
        ))}
      </div>
    </NarrowLayout>
  )
}

export default ProjectsListView
