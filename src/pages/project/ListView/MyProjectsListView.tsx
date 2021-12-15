import { fetchMyProjects } from 'apis/queries'
import Meta from 'components/atoms/Meta/Meta'
import SectionTitle from 'components/atoms/SectionTitle'
import { links } from 'constants/Links'
import NarrowLayout from 'containers/NarrowLayout'
import useAccountType from 'hooks/useAccountType'
import { IParent, IProject } from 'interfaces/UniversalInterface'
import map from 'lodash/map'
import ProjectCard from 'pages/project/ProjectCard'
import { useQuery } from 'react-query'
import { Redirect } from 'react-router'

const MyProjectsListView = ({ userData }: { userData: IParent }) => {
  const { isLoading, data, isFetched } = useQuery('my-projects', () =>
    fetchMyProjects()
  )

  const projects: IProject[] = isFetched && !isLoading ? data.data.data : {}
  const { business } = userData

  const { isBusiness } = useAccountType(userData)
  if (!isBusiness) {
    return <Redirect to={links.exploreJobs()} />
  }
  return (
    <>
      <NarrowLayout
        customParentMaxWidth="max-w-360 relative"
        userData={userData}
        customMaxWidth="max-w-360"
      >
        <Meta
          pageUrl={window.location.href}
          pageTitle={`${business.name} | Projects | 13RMS `}
        />

        <SectionTitle title={`Your Projects (${projects.length})`} />
        <div className="grid gap-4 lg:grid-cols-3 xl:grid-cols-4 gris-cols-1 sm:grid-cols-2">
          {map(projects, (project) => (
            <ProjectCard
              isLoading={isLoading && !isFetched}
              key={project._id.toString()}
              userId={userData._id}
              userData={userData}
              project={project}
            />
          ))}
        </div>
      </NarrowLayout>
    </>
  )
}

export default MyProjectsListView
