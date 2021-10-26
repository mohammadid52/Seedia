import { fetchGroupById } from 'apis/queries'
import Card from 'components/atoms/Card'
import Meta from 'components/atoms/Meta/Meta'
import Loading from 'components/Loading'
import Spinner from 'components/Spinner'
import VerticalProfileCard from 'components/VerticalProfileCard'
import { links } from 'constants/Links'
import useAccountType from 'hooks/useAccountType'
import { IGroup, IParent } from 'interfaces/UniversalInterface'
import moment from 'moment'
import DashboardHeader from 'pages/DashboardHeader'
import DashboardLayout from 'pages/DashboardLayout'
import { useEffect } from 'react'
import { useQuery } from 'react-query'
import { useHistory, useParams } from 'react-router'
import { avatarPlaceholder } from 'state/Redux/constants'
import PostInput from 'pages/dashboard/PostInput'
import Button from 'components/atoms/Button'
import { HiOutlinePhotograph } from 'react-icons/hi'
import { BsCameraVideo } from 'react-icons/bs'
import { CgPoll } from 'react-icons/cg'
import NoPosts from 'assets/svg/no-posts.svg'
import DiscoverCard from 'components/DiscoverButton'

const SingleGroupView = ({ userData }: { userData: IParent }) => {
  const params: any = useParams()
  const groupId = params.groupId

  // check if the current user is a member of group
  const verifyMember = () => {
    let isMember = false
    if (groupId) {
      if (
        !userData ||
        userData?.groups === undefined ||
        userData?.groups?.length === 0
      ) {
        isMember = false
      } else if (userData.groups.includes(groupId)) {
        isMember = true
      } else {
        isMember = false
      }
    } else {
      isMember = false
    }
    return isMember
  }

  const history = useHistory()

  const isMember = verifyMember()
  useEffect(() => {
    if (!isMember) {
      history.push(links.FEED)
    }
  }, [groupId, isMember])

  const { data, isLoading, isFetched } = useQuery('group-data', () =>
    fetchGroupById(groupId)
  )
  const groupData: IGroup = isFetched && !isLoading && data.data.data

  const { isBusiness } = useAccountType(userData)

  if (isLoading && !isFetched) {
    return <Loading />
  }

  const isOwner = groupData?.createdBy?.toString() === userData._id

  return (
    isMember && (
      <div className="relative  dark:bg-gray-900 bg-gray-100 min-h-screen ">
        <DashboardHeader userData={userData} />
        <Meta pageTitle={`Post | Feed | 13RMS`} />

        <div
          className={`h-auto pt-4 relative flow-root  transition-all duration-500 `}
        >
          <DashboardLayout
            firstColClass={`   max-h-152 lg:block  xl:block w-full `}
            firstCol={
              <div className="flex flex-col gap-y-12">
                {isFetched && !isLoading ? (
                  <>
                    <VerticalProfileCard
                      content={
                        <div>
                          <div>
                            {true && (
                              <div className="ml-2 flex-shrink-0 items-center justify-center flex">
                                <p className="px-2 inline-flex text-sm items-center justify-center leading-5 font-semibold rounded-md bg-gray-100 text-gray-800 dark:bg-gray-600 dark:text-gray-200">
                                  Owner
                                </p>
                              </div>
                            )}
                            <p className="text-gray-600 dark:text-gray-400 text-sm tracking-wide mt-1">
                              Created group:{' '}
                              {moment(groupData.createdOn).format('MMM YYYY')}
                            </p>
                          </div>
                        </div>
                      }
                      user={userData}
                    />
                    <DiscoverCard />
                  </>
                ) : (
                  <Spinner />
                )}
              </div>
            }
            secondCol={
              <div className="">
                {isLoading && !isFetched ? (
                  <Spinner />
                ) : (
                  <div className="flex gap-y-12 mx-auto lg:max-w-2xl  flex-col">
                    <div className="rounded-lg border dark:border-gray-700  border-gray-200 overflow-hidden  bg-white dark:bg-gray-800">
                      <img
                        alt=""
                        src={
                          groupData?.coverPicture
                            ? groupData?.coverPicture
                            : 'https://source.unsplash.com/1600x900/?nature,water'
                        }
                        className="w-full lg:h-28 sm:h-24 object-cover h-20"
                      />
                      <div className="flex justify-start mx-8 -mt-5">
                        <img
                          alt=""
                          src={
                            groupData.profilePicture
                              ? groupData.profilePicture
                              : avatarPlaceholder
                          }
                          className=" border-solid lg:h-16 lg:w-16 h-12 w-12  border-white border-2 -mt-3"
                        />
                      </div>
                      <div className="text-left mx-8 mt-2 pb-6 pt-2">
                        <h3 className="dark:text-white text-gray-900 text-2xl font-medium ">
                          {groupData.groupName}
                        </h3>
                      </div>
                    </div>

                    <PostInput
                      placeholder="Start a post in this group"
                      customButtons={
                        <>
                          <Button
                            gradient
                            invert
                            Icon={HiOutlinePhotograph}
                            label="Photo"
                          />
                          <Button
                            gradient
                            Icon={BsCameraVideo}
                            invert
                            label="Video"
                          />
                          <Button gradient Icon={CgPoll} invert label="Poll" />
                        </>
                      }
                      profilePicture={userData?.profilePicture}
                    />

                    <Card
                      content={
                        <div className="m-4 text-center flex items-center justify-center flex-col">
                          <img
                            src={NoPosts}
                            alt=""
                            className="h-28 sm:h-32 lg:h-36 xl:h-40 w-full"
                          />
                          <h3 className="mt-4 text-xl font-medium dark:text-gray-300 text-gray-900">
                            Create the first post
                          </h3>
                          <p className="mt-1 text-base text-gray-500">
                            Get the conversation going. Be the first to post in
                            this group!
                          </p>
                        </div>
                      }
                    />
                  </div>
                )}
              </div>
            }
            thirdColClass="lg:block"
            thirdCol={
              <div className="space-y-12 lg:max-w-84 max-w-sm">
                <Card
                  cardTitle={`${groupData.members.length} member${
                    groupData.members.length > 1 ? 's' : ''
                  }`}
                  content={
                    <div className="mt-4 flex-shrink-0 sm:mt-0 ">
                      <div className="flex overflow-hidden -space-x-2">
                        {groupData.members
                          .slice(0, 4)
                          // @ts-ignore
                          .map((member: IParent) => (
                            <img
                              key={member._id}
                              className="inline-block lg:h-12 lg:w-12 h-12 w-12 rounded-full ring-2 dark:ring-transparent ring-white"
                              src={member.profilePicture}
                              alt={''}
                            />
                          ))}
                      </div>
                      <Button
                        gradient
                        rounded="rounded-full"
                        className="mt-4"
                        label="Invite connections"
                      />
                    </div>
                  }
                />
                <Card
                  cardTitle="About this group"
                  content={
                    <p className="text-gray-900 dark:text-gray-200 line-clamp ">
                      {groupData.groupDescription}
                    </p>
                  }
                />
                <Card
                  cardTitle="Admin"
                  content={
                    <div>
                      {/* Start */}
                      {/* @ts-ignore */}
                      {groupData.admin.map((_admin: IParent) => {
                        return (
                          <div className="flex ">
                            <div className="mr-4 mt-2 flex-shrink-0">
                              <img
                                alt=""
                                src={
                                  _admin.profilePicture
                                    ? _admin.profilePicture
                                    : avatarPlaceholder
                                }
                                className="rounded-full border-solid lg:h-12 lg:w-12 h-12 w-12  border-white border-2 -mt-3"
                              />
                            </div>
                            <div>
                              <a
                                href={links.getProfile(_admin)}
                                className="text-base  dark:text-white font-semibold"
                              >
                                {_admin.fullName}
                              </a>
                              <p className="mt-1 text-sm dark:text-gray-500">
                                {isBusiness
                                  ? _admin?.business?.name
                                  : _admin?.company?.jobTitle}
                              </p>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  }
                />

                {/* <Following
                  showSingleCard
                  list={userData?.following}
                  interests={userData?.background?.interests}
                /> */}
              </div>
            }
          />
        </div>
      </div>
    )
  )
}

export default SingleGroupView
