import { deleteEvent } from 'apis/mutations'
import { fetchMultiplePostsById, fetchSingleEvent } from 'apis/queries'
import NoPosts from 'assets/svg/no-posts.svg'
import Button from 'components/atoms/Button'
import Card from 'components/atoms/Card'
import Meta from 'components/atoms/Meta/Meta'
import Dropdown from 'components/Dropdown/Dropdown'
import CreateEvent from 'components/event/CreateEvent'
import Loading from 'components/Loading'
import Post from 'components/posts/Post'
import Spinner from 'components/Spinner'
import UsersListModal from 'components/UserListModal'
import { links } from 'constants/Links'
import { usePostContext } from 'context/PostContext'
import { IEvent, IParent, IPost } from 'interfaces/UniversalInterface'
import moment from 'moment'
import PostInput from 'pages/dashboard/PostInput'
import PostPhotoModal from 'pages/dashboard/PostPhotoModal'
import DashboardHeader from 'pages/DashboardHeader'
import DashboardLayout from 'pages/DashboardLayout'
import EventInviteModal from 'pages/event/EventInviteModal'
import { useEffect, useState } from 'react'
import { AiFillCalendar } from 'react-icons/ai'
import { BsCameraVideo, BsFillCameraVideoFill } from 'react-icons/bs'
import { CgPoll } from 'react-icons/cg'
import { HiOutlinePhotograph } from 'react-icons/hi'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useMutation, useQuery } from 'react-query'
import { useHistory, useParams } from 'react-router'
import { avatarPlaceholder } from 'state/Redux/constants'

const getAMPM = (time: string = '00:00'): string => {
  let f = time.split(':')[0]
  let n: number = Number(f)
  return n > 12 ? 'PM' : 'AM'
}

const SingleEventView = ({ userData }: { userData: IParent }) => {
  const params: any = useParams()
  const eventId = params.eventId

  const { data, isLoading, isFetched, refetch } = useQuery('event-data', () =>
    fetchSingleEvent(eventId)
  )

  const eventData: IEvent = isFetched && !isLoading ? data?.data?.data : []
  const _deleteEvent = useMutation(deleteEvent)

  const [showModal, setShowModal] = useState(false)

  const [showAttendeesModal, setShowAttendeesModal] = useState(false)

  const history = useHistory()
  useEffect(() => {
    if (_deleteEvent.isSuccess) {
      history.push(links.FEED)
    }
  }, [_deleteEvent.isSuccess])

  const [showEditEventModal, setShowEditEventModal] = useState(false)

  const fetchPost = useQuery(
    'event-posts',
    () => fetchMultiplePostsById(eventData?.posts as string[]),
    { enabled: !!eventData?.posts?.length && !(isLoading && !isFetched) }
  )

  const dropdownList = [
    {
      id: '1',
      name: `Edit event`,
      onClick: () => {
        setShowEditEventModal(true)
      },
    },
    {
      id: '2',
      name: `Manage attendees`,
      onClick: () => {},
    },
    {
      id: '3',
      name: `Cancel event`,
      onClick: () => {},
    },
    {
      id: '4',
      name: `Delete event`,
      onClick: () => {
        _deleteEvent.mutate(eventId)
      },
    },
  ]

  const [showOtherModals, setShowOtherModals] = useState('init')

  if (isLoading && !isFetched) {
    return <Loading />
  }

  if (!eventData) {
    return <p>Looks like event is removed by organizer</p>
  }

  const authorized = userData?._id === eventData?.eventBy?._id

  const posts = (fetchPost.data?.data?.data.posts as IPost[]) || []

  const postCount = fetchPost.data?.data?.data.count || 0

  const fetchMoreData = () => {}
  return (
    <div className="relative  dark:bg-gray-900 bg-gray-100 min-h-screen ">
      <DashboardHeader userData={userData} />
      <Meta
        pageTitle={`${eventData?.eventName} | event | 13RMS`}
        imageUrl={eventData?.profilePicture}
        title={eventData?.eventName}
        description={eventData?.eventDescription}
      />

      {showEditEventModal && eventData && (
        <CreateEvent
          fullName={userData.fullName}
          open={showEditEventModal}
          eventData={eventData}
          setOpen={setShowEditEventModal}
        />
      )}

      {(showOtherModals === 'photo' || showOtherModals === 'video') && (
        <PostPhotoModal
          isPhoto={showOtherModals === 'photo'}
          open
          postingIn={'event'}
          customInId={eventData._id}
          setOpen={() => setShowOtherModals('init')}
        />
      )}

      <UsersListModal
        title={`All attendees (${eventData?.attendees?.length})`}
        userList={eventData?.attendees}
        open={showAttendeesModal}
        setOpen={setShowAttendeesModal}
      />

      {authorized && (
        <EventInviteModal
          refetchGroup={refetch}
          event={eventData}
          followingList={userData?.following}
          open={showModal}
          setOpen={setShowModal}
        />
      )}
      <div
        className={`h-auto pt-4 relative flow-root  transition-all duration-500 `}
      >
        <DashboardLayout
          secondCol={
            <div className="">
              {isLoading && !isFetched ? (
                <Spinner />
              ) : (
                <div className="flex gap-y-12 flex-col">
                  <div className="rounded-lg border dark:border-gray-700  border-gray-200 overflow-hidden  bg-white dark:bg-gray-800">
                    <img
                      alt=""
                      src={
                        eventData?.coverPicture ||
                        'https://source.unsplash.com/1600x900/?nature,water'
                      }
                      className="w-full lg:h-44 sm:h-38 object-cover h-20"
                    />
                    <div className="flex justify-start mx-8 -mt-5">
                      <img
                        alt=""
                        src={eventData?.profilePicture || avatarPlaceholder}
                        className=" border-solid lg:h-24 lg:w-24 h-32 w-32  border-white border-2 -mt-3"
                      />
                    </div>
                    <div className="absolute right-5 ">
                      <Dropdown list={dropdownList} />
                    </div>
                    <div className="text-left mx-8 mt-2 pb-6 pt-2">
                      <h3 className="dark:text-white text-gray-800 text-xl font-semibold ">
                        {eventData?.eventName}
                      </h3>
                      {eventData?.eventBy?.profileUrl && (
                        <h6 className="text-sm dark:text-gray-500 text-gray-700 mb-2">
                          Event by{' '}
                          <a
                            className="hover:underline"
                            href={links.getProfile(eventData?.eventBy)}
                          >
                            {eventData?.eventBy?.fullName}
                          </a>
                        </h6>
                      )}
                      <div className="flex text-sm dark:text-gray-500 text-gray-600 items-center justify-start">
                        <BsFillCameraVideoFill className="mr-2" />
                        Online
                      </div>
                      <div className="flex dark:text-gray-500 font-normal mt-1 text-sm text-gray-600 items-center justify-start">
                        <AiFillCalendar className="mr-2" />
                        {moment(eventData?.startDate).format(
                          'ddd, MMM Do,'
                        )}{' '}
                        {eventData?.startTime}{' '}
                        {getAMPM(eventData?.startTime?.toString())} -{' '}
                        {moment(eventData?.endDate).format('llll')}{' '}
                        {eventData?.endTime}{' '}
                        {getAMPM(eventData?.endTime?.toString())} (your local
                        time)
                      </div>
                      <div className="flex items-center mt-4 space-x-2">
                        <div className="flex flex-shrink-0 -space-x-1">
                          {eventData?.attendees?.slice(0, 4).map((attendee) => (
                            <img
                              key={attendee?._id}
                              className="max-w-none h-8 w-8 rounded-full ring-2 ring-white"
                              src={
                                attendee?.profilePicture || avatarPlaceholder
                              }
                              alt={''}
                            />
                          ))}
                        </div>
                        {eventData?.attendees.length > 4 ? (
                          <span className="flex-shrink-0 text-xs leading-5 font-medium">
                            +{eventData?.attendees?.length - 4}
                          </span>
                        ) : null}
                        <button
                          onClick={() =>
                            setShowAttendeesModal(!showAttendeesModal)
                          }
                          className="hover:underline mx-4 text-sm dark:text-gray-300 text-gray-800 "
                        >
                          {eventData?.attendees?.length} attendee
                          {eventData?.attendees?.length > 1 ? 's' : ''}
                        </button>
                      </div>
                      {authorized && (
                        <div className="mt-4">
                          <Button
                            label="Invite"
                            rounded="rounded-full"
                            gradient
                            onClick={() => setShowModal(true)}
                          />
                        </div>
                      )}
                    </div>
                  </div>

                  <PostInput
                    customInId={eventData?._id}
                    fullName={userData.fullName}
                    postingIn={'event'}
                    placeholder="Start a post in this event"
                    customButtons={
                      <>
                        <Button
                          gradient
                          invert
                          Icon={HiOutlinePhotograph}
                          label="Photo"
                          onClick={() => setShowOtherModals('photo')}
                        />
                        <Button
                          gradient
                          Icon={BsCameraVideo}
                          invert
                          label="Video"
                          onClick={() => setShowOtherModals('video')}
                        />
                        <Button gradient Icon={CgPoll} invert label="Poll" />
                      </>
                    }
                    profilePicture={userData?.profilePicture}
                  />

                  {(fetchPost.isLoading || !fetchPost.isFetched) && <Spinner />}

                  {!(fetchPost.isLoading || !fetchPost.isFetched) &&
                  posts?.length > 0 ? (
                    <InfiniteScroll
                      endMessage={
                        <div className="text-center">
                          <span className="dark:text-gray-600 text-center text-gray-400">
                            •
                          </span>
                        </div>
                      }
                      dataLength={posts?.length}
                      scrollableTarget="main_content"
                      next={fetchMoreData}
                      hasMore={postCount > posts?.length}
                      loader={<h4>Loading...</h4>}
                    >
                      <div className="grid grid-cols-1 gap-y-6">
                        {posts?.map((post) => (
                          <Post
                            key={post?._id}
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
                            Get the conversation going. Be the first to post in
                            this event!
                          </p>
                        </div>
                      }
                    />
                  )}
                </div>
              )}
            </div>
          }
          thirdColClass="xl:block hidden"
          thirdCol={
            <div className="space-y-12 lg:max-w-84 max-w-full">
              <Card
                cardTitle="About this event"
                content={
                  <p className="text-gray-900 dark:text-gray-200 line-clamp ">
                    {eventData.eventDescription}
                  </p>
                }
              />
            </div>
          }
        />
      </div>
    </div>
  )
}

export default SingleEventView
