import { fetchProjectById } from 'apis/queries'
import Button from 'components/atoms/Button'
import Card from 'components/atoms/Card'
import Meta from 'components/atoms/Meta/Meta'
import Loading from 'components/Loading'
import NarrowLayout from 'containers/NarrowLayout'
import {
  IParent,
  IProject,
  ItemWithHeader,
} from 'interfaces/UniversalInterface'
import moment from 'moment'
import { useQuery } from 'react-query'
import { useParams } from 'react-router'
import { avatarPlaceholder } from 'state/Redux/constants'
import { join } from 'utils/functions'

const Section = ({ header, points }: ItemWithHeader) => {
  return (
    <div className="my-8">
      <h4 className="mb-4 font-semibold tracking-tight text-lg text-gray-900 dark:text-white">
        {header}
      </h4>
      <ul className="flex flex-col gap-y-2">
        {points.map((point) => (
          <li className="font-medium list-disc tracking-tight text-base text-gray-600 dark:text-gray-400">
            {point.name}
          </li>
        ))}
      </ul>
    </div>
  )
}

const DescriptionItem = ({ name, value }: { name: string; value: string }) => {
  return (
    <div className="py-4 border-b border-gray-200 dark:border-gray-700 sm:py-5 sm:grid sm:grid-cols-2 sm:gap-4 ">
      <dt className="text-sm uppercase font-medium gradient-text text-left">
        {name}
      </dt>
      <dd className="mt-1 text-sm dark:text-white text-right text-gray-900 sm:mt-0 sm:col-span-1">
        {value}
      </dd>
    </div>
  )
}

const TopCard = ({
  userData,
  iAmOwnerOfThisProfile,
}: {
  userData: IParent
  iAmOwnerOfThisProfile: boolean
}) => {
  return (
    <div className="">
      <Card
        className="p-6  "
        content={
          <>
            <div className="flex relative items-center justify-between">
              <div className="flex items-center space-x-12">
                <div className="">
                  <span className="sr-only">13RMS</span>
                  <img
                    className="h-36 w-36 sm:h-36 sm:w-36 cursor-pointer rounded-full shadow-xl"
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
                {<Button label="Apply" gradient size="xl" />}
              </div>
            </div>
          </>
        }
      />
    </div>
  )
}

const ProjectView = ({ userData }: { userData: IParent }) => {
  const params: any = useParams()
  const projectId = params.projectId

  const { isLoading, data, isFetched } = useQuery('project', () =>
    fetchProjectById(projectId)
  )

  if (isLoading) {
    return <Loading />
  }

  const project: IProject = isFetched && !isLoading ? data.data.data : {}

  const getPostedOnFormatted = (time: Date) => moment(time).fromNow()

  const company = project.company
  const { location, business, background } = company

  return (
    <NarrowLayout customParentMaxWidth="max-w-360" customMaxWidth="max-w-360">
      <Meta
        pageUrl={window.location.href}
        imageUrl={company && company.profilePicture}
        pageTitle={`${business.name} | ${business.typeOfBusiness} | Jobs | 13RMS `}
        // title={product.productName}
        description={project.briefDescription}
        // keywords={product?.tags?.join(', ')}
        // userName={''}
      />
      <div className="flex flex-col gap-y-12">
        <TopCard iAmOwnerOfThisProfile userData={userData} />
        <Card
          content={
            <div className="dark:text-gray-400 grid grid-cols-1 gap-x-12 sm:grid-cols-3 text-gray-900">
              <div className="sm:col-span-2">
                <h1 className="dark:text-white text-gray-900 text-2xl  mb-4 font-semibold">
                  Description
                </h1>
                <div>{project.briefDescription}</div>
                <br />
                <div className="flex flex-col gap-y-4">
                  <Section
                    header={project.jobDescription.header}
                    points={project.jobDescription.points}
                  />
                  <Section
                    header={project.jobRequirements.header}
                    points={project.jobRequirements.points}
                  />
                  <Section
                    header={project.workingConditions.header}
                    points={project.workingConditions.points}
                  />
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
                    name={'Location'}
                    value={`${location?.city || '--'}, ${
                      location?.country || '--'
                    }`}
                  />
                  <DescriptionItem
                    name={'Posted'}
                    value={getPostedOnFormatted(project.postedOn)}
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
                        className="h-12 w-12  cursor-pointer  shadow-xl"
                        src={
                          userData?.profilePicture
                            ? userData?.profilePicture
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
                    <p className="dark:text-gray-400 text-gray-600">
                      {business?.additionalInfo || 'Additional Info'}
                    </p>
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
                  name={'Website'}
                  value={'https://www.randstad.ni'}
                />
              </div>
            </div>
          }
        />
      </div>
    </NarrowLayout>
  )
}

export default ProjectView
