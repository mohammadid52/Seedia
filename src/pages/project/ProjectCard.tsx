import Button from 'components/atoms/Button'
import Card from 'components/atoms/Card'
import Title from 'components/atoms/Title'
import { links } from 'constants/Links'
import { IParent, IProject } from 'interfaces/UniversalInterface'
import { useHistory } from 'react-router'
import { avatarPlaceholder } from 'state/Redux/constants'
import { getFromNowTime } from 'utils/functions'

const ProjectCard = ({
  project,
  userId,
  userData,
  isLoading = false,
}: {
  project?: IProject
  userId?: string
  userData?: IParent
  isLoading?: boolean
}) => {
  const iAmOwnerOfThisProject = project.postedBy.toString() === userId
  const company = userData
  const { location } = project.company
  const { salary } = project
  const history = useHistory()
  return (
    <div onClick={() => history.push(links.viewProject(project._id))}>
      <Card
        isLoading={isLoading}
        className="box   hover:shadow-xl transition-all  cursor-pointer"
        content={
          <div className="relative max-h-64 h-64">
            {isLoading ? (
              <div className="bg-gray-400 h-12 w-12 mb-4 cursor-pointer rounded-lg shadow-md"></div>
            ) : (
              <img
                className="h-12 w-12 border-gradient border-transparent border-2 mb-4 cursor-pointer rounded-lg shadow-md"
                src={
                  company?.profilePicture
                    ? company?.profilePicture
                    : avatarPlaceholder
                }
                alt=""
              />
            )}
            <Title isLoading={isLoading} size="text-xl">
              {project.title}
            </Title>
            <Title
              size="text-base"
              isLoading={isLoading}
              className="tracking-wide mt-1 gradient-text"
            >
              {company?.business?.name}
            </Title>
            <Title
              size="text-base"
              textColor="dark:text-gray-500 text-gray-400"
              fontWeight="font-medium"
              isLoading={isLoading}
              className="tracking-wide mt-1 "
            >
              {`${location?.city || '--'}, ${location?.country || '--'}`}
            </Title>
            <Title
              size="text-base"
              isLoading={isLoading}
              textColor="dark:text-gray-300 text-gray-700"
              fontWeight="font-medium"
              className="tracking-wide mt-4 "
            >
              {`Salary: ${salary.min} - ${salary.max} / ${salary.duration}`}
            </Title>
            {!isLoading && (
              <div className="flex items-center justify-between inset-x-0 absolute bottom-0">
                <div className="text-sm text-gray-400  dark:text-gray-500">
                  {getFromNowTime(project.postedOn)}
                  {'  '}
                  {iAmOwnerOfThisProject && ` • ${project.views || 0} views`}
                </div>

                <div>
                  {iAmOwnerOfThisProject ? (
                    <Button
                      label="View"
                      onClick={(e: any) => {
                        e.stopPropagation()
                        history.push(links.viewProject(project._id))
                      }}
                      disabled={isLoading}
                      gradient
                    />
                  ) : (
                    <Button
                      disabled={isLoading}
                      label="Apply"
                      link={project.website}
                      gradient
                    />
                  )}
                </div>
              </div>
            )}
          </div>
        }
      />
    </div>
  )
}

export default ProjectCard
