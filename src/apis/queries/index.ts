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
  network.get(`/request/list?search=${searchQuery}`)

export {
  fetchProductDetails,
  fetchAllProducts,
  fetchReviewsByProduct,
  fetchFriendsPurchase,
  fetchProjectById,
  fetchUsers,
  fetchUserById,
  fetchMyProjects,
  fetchSearchedJobs,
  fetchRelatedJobs,
  fetchShortUsers,
  fetchMyRequests,
  fetchSearchedEmployees,
}
