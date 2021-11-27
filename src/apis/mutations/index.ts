import { network } from 'helpers'
import { IPost, IPostLink } from 'interfaces/UniversalInterface'

// follow & Unfollow
const followUser = (id: string) => network.post(`/user/follow/${id}`)
const unFollowUser = (id: string) => network.post(`/user/unfollow/${id}`)
type SaveProfile = {
  targetId: string
  action: 'save' | 'unsave'
}
const saveProfile = (options: SaveProfile) =>
  network.post(
    `/user/save-profile?targetId=${options.targetId}&action=${options.action}`
  )

// create-review
const createReview = (
  productId: string,
  config: { reviewText: string; rating: string; reviewTitle: string }
) => network.post(`/reviews/add/${productId}`, config)

interface ReviewAction {
  action: 'like' | 'dislike'
  reviewId: string
}
const doReviewAction = ({ action, reviewId }: ReviewAction) =>
  network.post(`/reviews/action?action=${action}&reviewId=${reviewId}`)

// add product

const addProduct = (values: any) =>
  network.post('/products/add', { newProductData: values })

const deleteProduct = (productId: any) =>
  network.delete(`/products/delete-product?productId=${productId}`)

const mediaConfig = {
  headers: { 'Content-Type': 'multipart/form-data' },
}

const uploadMultipleImages = (data: any) =>
  network.post('/uploadImage/multiple', data, mediaConfig)

const uploadMediaToServer = (fd: any) =>
  network.post('/uploadImage', fd, mediaConfig)

// add project

const addProject = (values: any) =>
  network.post('/project/add', { projectData: values })

// add request

const addRequest = (values: any) =>
  network.post('/requests/add', { requestData: values })

// create group

const createGroup = (values: any) =>
  network.post('/groups/create-group', { ...values })

const makeGroupAdmin = ({
  groupId,
  memberId,
  action,
}: {
  groupId: string
  memberId: string
  action: string
}) => network.post(`/groups/admin/${groupId}/${memberId}?action=${action}`)

type SendInvite = {
  targetIdArray: string[]
  groupId: string
}

const sendInvite = (data: SendInvite) =>
  network.post(`/groups/send-invite/`, { ...data })

type Invite = {
  targetId: string
  groupId: string
  notificationId: string
  type: 'accept' | 'decline'
}

type Exit = {
  targetId: string
  groupId: string
}

const invite = (data: Invite) => network.post(`/groups/invite/`, { ...data })
const exitGroup = (data: Exit) => network.post(`/groups/exit/`, { ...data })

// Posts

type PostData = {
  text?: string
  links?: IPostLink[]
  postType?: string
  postedIn?: IPost['postedIn']
  customInId?: string
}

const addPost = (data: { postData: PostData }) =>
  network.post(`/post/add-post`, { ...data })
const deletePost = (postId: any) => network.delete(`/post?postId=${postId}`)
const viewPost = (postId: string) => network.post(`/post/view?postId=${postId}`)
const saveUnsavePost = ({
  postId,
  action,
}: {
  postId: string
  action: string
}) => network.post(`/post/s?action=${action}&postId=${postId}`)

const featurePost = ({ postId, action }: { postId: string; action: string }) =>
  network.post(`/post/f?action=${action}&postId=${postId}`)
// Store
const openStore = (data: any) => network.post('/store/add', { ...data })
const addNewSection = (data: any) =>
  network.post('/store/section-add', { ...data })
const publishStore = (action: any) =>
  network.post(`/store/publish?action=${action}`)

const createEvent = (data: any) =>
  network.post(`/event/create-event`, { ...data })
const deleteEvent = (eventId: string) => network.delete(`/event/${eventId}`)
type SendEventInvite = {
  targetIdArray: string[]
  eventId: string
}

const sendEventInvite = (data: SendEventInvite) =>
  network.post(`/event/send-invite/`, { ...data })

type EventInvite = {
  targetId: string
  eventId: string
  notificationId: string
  type: 'accept' | 'decline'
}
const eventInvite = (data: EventInvite) =>
  network.post(`/event/invite/`, { ...data })

export {
  followUser,
  unFollowUser,
  eventInvite,
  createReview,
  addProduct,
  uploadMultipleImages,
  addProject,
  addRequest,
  addNewSection,
  createGroup,
  publishStore,
  makeGroupAdmin,
  addPost,
  uploadMediaToServer,
  viewPost,
  featurePost,
  openStore,
  saveUnsavePost,
  deletePost,
  sendInvite,
  invite,
  saveProfile,
  exitGroup,
  sendEventInvite,
  createEvent,
  deleteProduct,
  doReviewAction,
  deleteEvent,
}
