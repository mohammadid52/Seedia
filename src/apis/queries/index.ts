import { network } from 'helpers'
import { IProduct } from 'interfaces/UniversalInterface'

const fetchProductDetails = (productId: string) =>
  network.get(`/products/p/${productId}`)
const fetchAllProducts = (postedById: string) =>
  network.get(`/products/postedBy/${postedById}`)
const fetchFriendsPurchase = () => network.get(`/products/friends-purchases`)

// USER
const fetchUsers = (config: any) => network.post(`/user/getUsers`, config)
const fetchShortUsers = (config: any) =>
  network.post(`/user/getShortUsers`, config)
const fetchUserById = (id: string) => network.post(`/user/getById/${id}`)

// Reviews
const fetchReviewsByProduct = (
  productId: string,
  config: { idArray: IProduct['reviews'] }
) => network.post(`/reviews/r/${productId}`, config)

// PROJECT
const fetchProjectById = (projectId: string) =>
  network.get(`/project/p/${projectId}`)

const fetchMyProjects = () => network.get(`/project/my/list`)
const fetchSearchedJobs = (searchQuery: string) =>
  network.get(`/project/list?search=${searchQuery}`)
const fetchRelatedJobs = (relatedTags: string[]) =>
  network.get(`/project/list?related=${relatedTags}`)

// Request
const fetchMyRequests = () => network.get(`/requests/my/list`)
const fetchSearchedEmployees = (searchQuery: string) =>
  network.get(`/requests/list?search=${searchQuery}`)
const fetchSellerById = (projectId: string) =>
  network.get(`/requests/r/${projectId}`)

// Group
const fetchGroups = () => network.get(`/groups/list`)
const fetchRequestedGroups = () => network.get(`/groups/requested-list`)
const fetchGroupById = (groupId: string) => network.get(`/groups/g/${groupId}`)

// Posts
type FeedInput = {
  skip: number
  limit: number
}
const fetchFeed = ({ limit = 10, skip = 0 }: FeedInput) =>
  network.get(`/post/feed?limit=${limit}&skip=${skip}`)
const fetchPostById = (postUrl: string) =>
  network.get(`/post/p?postUrl=${postUrl}`)
const fetchMultiplePostsById = (ids: string[] = []) =>
  network.post(`/post/list/fetchById`, { postIds: ids })
const fetchAvgViews = () => network.get(`/post/averagePostViews`)
const fetchActivity = (userId: string, limit: number) =>
  network.get(`/post/recent-activity?limit=${limit}&userId=${userId}`)
const fetchedSavedItems = () => network.get(`/post/s`)
const fetchedSavedProfiles = () => network.get(`/post/savedProfiles`)

const fetchEvents = (short?: boolean) =>
  network.get(`/event/list?short=${short || false}`)
const fetchSingleEvent = (eventId: string) => network.get(`/event/e/${eventId}`)

export {
  fetchMultiplePostsById,
  fetchProductDetails,
  fetchAllProducts,
  fetchReviewsByProduct,
  fetchFriendsPurchase,
  fetchActivity,
  fetchProjectById,
  fetchUsers,
  fetchUserById,
  fetchMyProjects,
  fetchSearchedJobs,
  fetchRelatedJobs,
  fetchShortUsers,
  fetchMyRequests,
  fetchSearchedEmployees,
  fetchSellerById,
  fetchGroups,
  fetchFeed,
  fetchGroupById,
  fetchPostById,
  fetchAvgViews,
  fetchedSavedItems,
  fetchRequestedGroups,
  fetchedSavedProfiles,
  fetchEvents,
  fetchSingleEvent,
}
