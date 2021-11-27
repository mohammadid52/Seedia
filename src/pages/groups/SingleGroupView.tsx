import { fetchGroupById, fetchMultiplePostsById } from 'apis/queries'
import { exitGroup } from 'apis/mutations'
import NoPosts from 'assets/svg/no-posts.svg'
import Button from 'components/atoms/Button'
import Card from 'components/atoms/Card'
import Meta from 'components/atoms/Meta/Meta'
import DiscoverCard from 'components/DiscoverButton'
import Loading from 'components/Loading'
import Spinner from 'components/Spinner'
import VerticalProfileCard from 'components/VerticalProfileCard'
import { links } from 'constants/Links'
import useAccountType from 'hooks/useAccountType'
import {
  IGroup,
  IParent,
  IPost,
  IShortProfile,
} from 'interfaces/UniversalInterface'
import moment from 'moment'
import PostInput from 'pages/dashboard/PostInput'
import DashboardHeader from 'pages/DashboardHeader'
import DashboardLayout from 'pages/DashboardLayout'
import InviteUserModal from 'pages/groups/InviteUserModal'
import { useEffect, useState } from 'react'
import { BsCameraVideo } from 'react-icons/bs'
import { CgPoll } from 'react-icons/cg'
import { HiOutlinePhotograph } from 'react-icons/hi'
import { useMutation, useQuery } from 'react-query'
import { useHistory, useParams } from 'react-router'
import Modal from 'components/atoms/Modal'
import { avatarPlaceholder } from 'state/Redux/constants'
import UsersListModal from 'components/UserListModal'
import InfiniteScroll from 'react-infinite-scroll-component'
import Post from 'components/posts/Post'

const ExitGroup = ({
  userId,
  groupId,
}: {
  userId: string
  groupId: string
}) => {
  const [showModal, setShowModal] = useState(false)
  const history = useHistory()
  const { mutate } = useMutation(exitGroup, {
    onSuccess: () => {
      history.push(links.groups())
    },
  })

  return (
    <>
      <Modal header="Confirm" open={showModal} setOpen={setShowModal}>
        <div className=" ">
          <p className="dark:text-gray-400 text-gray-500 text-lg">
            Are you sure you want to exit this group?
          </p>
          <div className="flex items-center p-4 justify-end">
            <Button
              label="Confirm"
              gradient
              onClick={() => mutate({ targetId: userId, groupId: groupId })}
            />
          </div>
        </div>
      </Modal>
      <div className="rounded-lg border dark:border-gray-700  border-gray-200  overflow-hidden lg:max-w-xs bg-white dark:bg-gray-800 ">
        <h1
          onClick={() => setShowModal(true)}
          className="text-center hover:bg-red-500 hover:text-white rounded-lg p-2 cursor-pointer text-red-500"
        >
          Exit group
        </h1>
      </div>
    </>
  )
}

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

  const { data, isLoading, isFetched, refetch } = useQuery('group-data', () =>
    fetchGroupById(groupId)
  )
  const groupData: IGroup = isFetched && !isLoading ? data?.data?.data : []

  const fetchPost = useQuery(
    'group-posts',
    () => fetchMultiplePostsById(groupData?.posts as string[]),
    { enabled: !!groupData?.posts?.length && !(isLoading && !isFetched) }
  )

  const { getType } = useAccountType(userData)
  const [showModal, setShowModal] = useState(false)

  const [showGroupMembersModal, setShowGroupMembersModal] = useState(false)

  if (isLoading && !isFetched) {
    return <Loading />
  }

  const isOwner = groupData?.createdBy?.toString() === userData._id
  const isAdmin = groupData?.admin?.includes(userData._id)
  const members = (groupData?.members as IShortProfile[]) || []
  const authorized = isOwner || isAdmin

  const posts = (fetchPost.data?.data?.data.posts as IPost[]) || []
  const postCount = fetchPost.data?.data?.data.count || 0
  const fetchMoreData = () => {}

  return (
    isMember && (
      <div className="relative  dark:bg-gray-900 bg-gray-100 min-h-screen ">
        <DashboardHeader userData={userData} />
        <Meta pageTitle={`Post | Feed | 13RMS`} />

        {authorized && (
          <InviteUserModal
            refetchGroup={refetch}
            group={groupData}
            followingList={userData.following}
            open={showModal}
            setOpen={setShowModal}
          />
        )}

        <UsersListModal
          title={`Group members (${members?.length})`}
          userList={members}
          open={showGroupMembersModal}
          setOpen={setShowGroupMembersModal}
        />

        <div
          className={`h-auto pt-4 relative flow-root  transition-all duration-500 `}
        >
          <DashboardLayout
            firstColClass={`   max-h-152 hidden  xl:block w-full `}
            firstCol={
              <div className="flex flex-col gap-y-12">
                {isFetched && !isLoading ? (
                  <>
                    <VerticalProfileCard
                      content={
                        <div>
                          <div>
                            <div className="ml-2 flex-shrink-0 items-center justify-center flex">
                              <p className="px-2 inline-flex text-sm items-center justify-center leading-5 font-semibold rounded-md bg-gray-100 text-gray-800 dark:bg-gray-600 dark:text-gray-200">
                                {isOwner
                                  ? 'Owner'
                                  : isAdmin
                                  ? 'Admin'
                                  : 'Member'}
                              </p>
                            </div>

                            <p className="mb-4 text-gray-600 dark:text-gray-400 text-sm tracking-wide mt-1">
                              Group created:{' '}
                              {moment(groupData.createdOn).format('MMM YYYY')}
                            </p>
                            {authorized && (
                              <div className="flex border-t py-2 text-xs font-medium text-gray-500 dark:text-gray-500 border-gray-200 dark:border-gray-700 transition-all  item-center px-4 cursor-pointer justify-between">
                                <h6 className="font-medium ">
                                  Requests to join
                                </h6>
                                <a
                                  href={links.followers(userData.profileUrl)}
                                  className="hover:underline text-link cursor-pointer font-semibold"
                                >
                                  {groupData?.requests?.length || 0}
                                </a>
                              </div>
                            )}
                          </div>
                        </div>
                      }
                      user={userData}
                    />
                    <DiscoverCard />
                    {!isOwner && (
                      <ExitGroup groupId={groupId} userId={userData._id} />
                    )}

                    {/* <Modal
                      setOpen={setShowCreateGroupModal}
                      header="Create group"
                      open={showCreateGroupModal}
                    >
                      <div className=" min-w-132 max-w-164 min-h-56 max-h-132 overflow-y-auto">
                        <CreateGroup
                          refetchGroup={refetch}
                          groupData={groupData}
                          onSuccess={() => setShowCreateGroupModal(false)}
                        />
                      </div>
                    </Modal>

                    {authorized && (
                      <Button
                        label="Edit group details"
                        gradient
                        onClick={() => setShowCreateGroupModal(true)}
                        // link={links.editGroup(groupData._id)}
                      />
                    )} */}
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
                      postingIn="group"
                      customInId={groupData._id}
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

                    {posts && posts.length > 0 ? (
                      <InfiniteScroll
                        endMessage={
                          <div className="text-center">
                            <span className="dark:text-gray-600 text-center text-gray-400">
                              •
                            </span>
                          </div>
                        }
                        dataLength={posts.length}
                        scrollableTarget="main_content"
                        next={fetchMoreData}
                        hasMore={postCount > posts?.length}
                        loader={<h4>Loading...</h4>}
                      >
                        <div className="grid grid-cols-1 gap-y-6">
                          {posts.map((post) => (
                            <Post
                              userData={userData}
                              userId={userData._id}
                              post={post}
                            />
                          ))}
                        </div>
                      </InfiniteScroll>
                    ) : (
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
                              Get the conversation going. Be the first to post
                              in this event!
                            </p>
                          </div>
                        }
                      />
                    )}
                  </div>
                )}
              </div>
            }
            thirdColClass="lg:block"
            thirdCol={
              <div className="space-y-12 lg:max-w-84 max-w-full">
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
                      <div className="flex gap-x-4 items-center justify-start">
                        {authorized && (
                          <Button
                            onClick={() => setShowModal(true)}
                            gradient
                            rounded="rounded-full"
                            className="mt-4"
                            label="Invite connections"
                          />
                        )}
                        <Button
                          onClick={() =>
                            setShowGroupMembersModal(!showGroupMembersModal)
                          }
                          gradient
                          rounded="rounded-full"
                          invert
                          className="mt-4"
                          label="see all members"
                        />
                      </div>
                    </div>
                  }
                />
                {groupData?.groupDescription && (
                  <Card
                    cardTitle="About this group"
                    content={
                      <p className="text-gray-900 dark:text-gray-200 line-clamp ">
                        {groupData?.groupDescription}
                      </p>
                    }
                  />
                )}
                {groupData.groupRules && (
                  <Card
                    cardTitle="Group rules"
                    content={
                      <p className="text-gray-900 dark:text-gray-200 line-clamp ">
                        {groupData.groupRules}
                      </p>
                    }
                  />
                )}
                <Card
                  cardTitle="Admin"
                  content={
                    <div>
                      {/* Start */}
                      {/* @ts-ignore */}
                      {groupData.admin.map((_admin: IParent) => {
                        const { isBusiness, isPersonal } = getType(_admin)
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
                                  : isPersonal
                                  ? _admin?.company?.companyName
                                  : _admin?.background?.education &&
                                    _admin?.background?.education[0].name}
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
