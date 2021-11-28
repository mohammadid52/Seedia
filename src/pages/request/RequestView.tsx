import { fetchSellerById } from 'apis/queries'
import Button from 'components/atoms/Button'
import Card from 'components/atoms/Card'
import Meta from 'components/atoms/Meta/Meta'
import Loading from 'components/Loading'
import NarrowLayout from 'containers/NarrowLayout'
import useFollow from 'hooks/useFollow'
import useUser from 'hooks/useUser'
import { IParent, IRequest } from 'interfaces/UniversalInterface'
import { useQuery } from 'react-query'
import { useParams } from 'react-router'
import { avatarPlaceholder } from 'state/Redux/constants'
import { getTags } from 'utils/functions'

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
                    {userData?.fullName}
                  </h1>
                  <h5 className="text-base leading-6 font-light mt-2 max-w-132 dark:text-gray-400 text-gray-900">
                    {userData?.location.address || ''},{' '}
                    {userData?.location.city}, {userData?.location.country}
                  </h5>
                  <h5 className="text-base leading-6 font-light mt-2 max-w-132 dark:text-gray-400 text-gray-900">
                    {userData?.email}
                  </h5>
                </div>
              </div>
              <div className="absolute bottom-0 right-0">
                {!iAmOwnerOfThisProfile ? (
                  <div className="grid grid-cols-2 gap-x-4">
                    <Button
                      onClick={() =>
                        following
                          ? removeFollow.mutate(userData._id)
                          : addFollow.mutate(userData._id)
                      }
                      invert={following}
                      label={following ? 'Following' : 'Follow'}
                      gradient
                      size="lg"
                      className="px-6"
                    />
                    <Button
                      label="Contact"
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

const RequestView = ({ userData }: { userData?: IParent }) => {
  const params: any = useParams()
  const requestId = params.requestId

  const { isLoading, data, isFetched } = useQuery(
    `request-view-${requestId}`,
    () => fetchSellerById(requestId)
  )
  const requestData: IRequest = isFetched && !isLoading ? data.data.data : {}

  const { iAmOwnerOfThisProfile } = useUser(
    requestData?.user?.profileUrl,
    userData,
    false
  )

  if (isLoading) {
    return <Loading />
  }

  const { user } = requestData

  return (
    <>
      <NarrowLayout
        userData={userData}
        customParentMaxWidth="max-w-360 relative"
        customMaxWidth="max-w-360"
      >
        <Meta
          pageUrl={window.location.href}
          imageUrl={user && user.profilePicture}
          pageTitle={`${requestData.title} | 13RMS `}
          title={requestData.title}
          description={requestData.description}
          keywords={getTags(
            `${requestData.description} ${
              requestData.title
            } ${requestData.skills.join('')}`
          )}
          // userName={''}
        />
        <div className="flex flex-col gap-y-12">
          <TopCard
            followingList={userData?.following || []}
            views={requestData.views}
            iAmOwnerOfThisProfile={iAmOwnerOfThisProfile}
            userData={user}
          />
          <Card
            content={
              <div className="dark:text-gray-400 grid grid-cols-1 gap-x-12 sm:grid-cols-3 text-gray-900">
                <div className="sm:col-span-2">
                  <h1 className="dark:text-white text-gray-900 text-2xl  mb-4 font-semibold">
                    Description
                  </h1>
                  <div className="whitespace-pre-line">
                    {requestData.description}
                  </div>
                  <br />
                </div>
              </div>
            }
          />
          {/* <Card
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
                  valueClassName="underline cursor-pointer tracking-wider"
                  name={'Website'}
                  value={project.website}
                />
              </div>
            </div>
          }
        /> */}
        </div>
      </NarrowLayout>
    </>
  )
}

export default RequestView
