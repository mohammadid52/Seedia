import { fetchProjectById } from 'apis/queries'
import Button from 'components/atoms/Button'
import Sidebar from 'components/Sidebar'
import Card from 'components/atoms/Card'
import Meta from 'components/atoms/Meta/Meta'
import Loading from 'components/Loading'
import NarrowLayout from 'containers/NarrowLayout'
import useFollow from 'hooks/useFollow'
import useUser from 'hooks/useUser'
import { IParent, IProject, ISection } from 'interfaces/UniversalInterface'
import map from 'lodash/map'
import { useQuery } from 'react-query'
import { useParams } from 'react-router'
import { avatarPlaceholder } from 'state/Redux/constants'
import { classNames } from 'utils/classNames'
import { getFromNowTime, getTags, join } from 'utils/functions'

const Section = ({ title, content }: ISection) => {
  return (
    <div className="my-8">
      {title && (
        <h4 className="mb-4 font-semibold tracking-tight text-lg text-gray-900 dark:text-white">
          {title}
        </h4>
      )}
      <p className="font-medium whitespace-pre-line tracking-tight text-base text-gray-600 dark:text-gray-400">
        {content}
      </p>
    </div>
  )
}

const DescriptionItem = ({
  name,
  value,
  valueClassName,
  nameClassName,
}: {
  name: string
  value: string
  valueClassName?: string
  nameClassName?: string
}) => {
  return (
    <div className="py-4 border-b border-gray-200 dark:border-gray-700 sm:py-5 sm:grid sm:grid-cols-2 sm:gap-4 ">
      <dt
        className={classNames(
          nameClassName,
          'text-sm uppercase font-medium gradient-text text-left'
        )}
      >
        {name}
      </dt>
      <dd
        className={classNames(
          valueClassName,
          'mt-1 text-sm break-words dark:text-white text-right text-gray-900 sm:mt-0 sm:col-span-1'
        )}
      >
        {value}
      </dd>
    </div>
  )
}

const TopCard = ({
  userData,
  iAmOwnerOfThisProfile,
  websiteUrl,
  views = 0,
  followingList,
}: {
  userData?: IParent
  iAmOwnerOfThisProfile: boolean

  websiteUrl?: string
  views?: number
  followingList?: string[]
}) => {
  const { following, addFollow, removeFollow } = useFollow(
    followingList,
    userData._id
  )

  return (
    <div>
      <Card
        className="p-6 "
        content={
          <>
            <div className="flex relative items-center justify-between">
              {iAmOwnerOfThisProfile && (
                <span className="dark:text-gray-400 text-gray-400 italic text-sm absolute top-0 right-0 ">
                  View count: {views}
                </span>
              )}
              <div className="flex items-center space-x-12">
                <div className="">
                  <span className="sr-only">13RMS</span>
                  <img
                    className="h-36 w-36 sm:h-36 sm:w-36 cursor-pointer rounded-full shadow-xl border-gradient border-transparent border-2"
                    src={
                      userData?.profilePicture
                        ? userData?.profilePicture
                        : avatarPlaceholder
                    }
                    alt=""
                  />
                </div>
                <div className="space-y-1">
                  <h1 className="text-2xl leading-6 font-semibold dark:text-white text-gray-900">
                    {userData?.business.name}
                  </h1>
                  <h5 className="text-base leading-6 font-light mt-2 max-w-132 dark:text-gray-400 text-gray-900">
                    {userData?.location.address}, {userData?.location.city},{' '}
                    {userData?.location.country}
                  </h5>
                  <h5 className="text-base leading-6 font-light mt-2 max-w-132 dark:text-gray-400 text-gray-900">
                    {userData?.business.email}
                  </h5>
                </div>
              </div>
              <div className="absolute bottom-0 right-0">
                {!iAmOwnerOfThisProfile ? (
                  <div className="grid grid-cols-2 gap-x-4">
                    <Button
                      onClick={() =>
                        !following
                          ? addFollow.mutate(userData._id)
                          : removeFollow.mutate(userData._id)
                      }
                      label="Follow"
                      gradient
                      size="lg"
                      className="px-6"
                    />
                    <Button
                      label="Apply"
                      link={websiteUrl}
                      gradient
                      className="px-6"
                      size="lg"
                    />
                  </div>
                ) : (
                  <span className="text-base leading-6 font-light  dark:text-gray-400 text-gray-600">
                    Others will see buttons here
                  </span>
                )}
              </div>
            </div>
          </>
        }
      />
    </div>
  )
}

const ProjectView = ({ userData }: { userData?: IParent }) => {
  const params: any = useParams()
  const projectId = params.projectId

  const { isLoading, data, isFetched } = useQuery(`project-${projectId}`, () =>
    fetchProjectById(projectId)
  )
  const project: IProject = isFetched && !isLoading ? data.data.data : {}

  const { iAmOwnerOfThisProfile } = useUser(
    project?.company?.profileUrl,
    userData,
    false
  )

  if (isLoading) {
    return <Loading />
  }

  const company = project.company
  const { salary, location } = project
  const { business, background } = company

  return (
    <>
      <Sidebar />

      <NarrowLayout userData={userData} customMaxWidth="max-w-7xl">
        <Meta
          pageUrl={window.location.href}
          imageUrl={company && company.profilePicture}
          pageTitle={`${business.name} | ${business.typeOfBusiness} | Jobs | 13RMS `}
          title={business.name}
          description={project.briefDescription}
          keywords={getTags(project.briefDescription)}
          // userName={''}
        />
        <div className="flex flex-col gap-y-12">
          <TopCard
            followingList={userData?.following}
            views={project?.views}
            websiteUrl={project?.website}
            iAmOwnerOfThisProfile={iAmOwnerOfThisProfile}
            userData={company}
          />
          <Card
            content={
              <div className="dark:text-gray-400 grid grid-cols-1 gap-x-12 sm:grid-cols-3 text-gray-900">
                <div className="sm:col-span-2">
                  <h1 className="dark:text-white text-gray-900 text-2xl  mb-4 font-semibold">
                    Description
                  </h1>
                  <div className="whitespace-pre-line">
                    {project.briefDescription}
                  </div>
                  <br />
                  <div className="flex flex-col gap-y-4">
                    {map(project.sections, (section) => (
                      <Section
                        title={section.title}
                        content={section.content}
                      />
                    ))}
                    <Section title={''} content={project.closure} />
                  </div>
                </div>
                <div>
                  <h1 className="dark:text-white text-gray-900 text-2xl mb-4 font-semibold">
                    Function Description
                  </h1>
                  <dl className="">
                    <DescriptionItem
                      name={'Function Type'}
                      value={join(project.functionType, 'name')}
                    />
                    <DescriptionItem
                      name={'Salary'}
                      value={`${salary.min} - ${salary.max} / ${salary.duration}`}
                    />
                    <DescriptionItem
                      name={'Location'}
                      value={`${location?.city || '--'}, ${
                        location?.country || '--'
                      }`}
                    />
                    <DescriptionItem
                      name={'Posted'}
                      value={getFromNowTime(project.postedOn)}
                    />
                  </dl>
                </div>
              </div>
            }
          />
          <Card
            content={
              <div className="dark:text-gray-400 grid grid-cols-1 gap-x-12 sm:grid-cols-3 text-gray-900">
                <div className="sm:col-span-2">
                  <h1 className="dark:text-white text-gray-900 text-2xl  mb-4 font-semibold">
                    About the company
                  </h1>
                  <div>
                    <div className="sm:flex items-center">
                      <div className="mb-4 flex-shrink-0 sm:mb-0 sm:mr-4">
                        <img
                          className="h-12 w-12 border-gradient border-transparent border-2 cursor-pointer  shadow-xl"
                          src={
                            company?.profilePicture
                              ? company?.profilePicture
                              : avatarPlaceholder
                          }
                          alt=""
                        />
                      </div>
                      <h4 className="text-lg font-bold">{business?.name}</h4>
                    </div>
                    <div className="mt-4">
                      <p className="dark:text-gray-400 text-gray-600">
                        {background?.summary || 'Test summary'}
                      </p>
                      <br />
                      {business?.additionalInfo && (
                        <p className="dark:text-gray-400 text-gray-600">
                          {business?.additionalInfo}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
                <div>
                  <h1 className="dark:text-white text-gray-900 text-2xl  mb-4 font-semibold">
                    Company Details
                  </h1>
                  <DescriptionItem name={'Company Size'} value={'100'} />
                  <DescriptionItem
                    name={'Type of business'}
                    value={business.typeOfBusiness}
                  />
                  <DescriptionItem name={'Year of foundation'} value={'2007'} />
                  <DescriptionItem
                    valueClassName="underline cursor-pointer tracking-wider"
                    name={'Website'}
                    value={project.website}
                  />
                </div>
              </div>
            }
          />
        </div>
      </NarrowLayout>
    </>
  )
}

export default ProjectView
