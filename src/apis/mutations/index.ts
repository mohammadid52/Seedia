import { network } from 'helpers'

// follow & Unfollow
const followUser = (id: string) => network.post(`/user/follow/${id}`)
const unFollowUser = (id: string) => network.post(`/user/unfollow/${id}`)

// create-review
const createReview = (
  productId: string,
  config: { reviewText: string; rating: string }
) => network.post(`/reviews/add/${productId}`, config)

// add product

const addProduct = (values: any) =>
  network.post('/products/add', { newProductData: values })

const uploadMultipleImages = (data: any) =>
  network.post('/uploadImage/multiple', data, {
    headers: { 'Content-Type': 'multipart/form-data' },
  })

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

// Posts
const addPost = (data: any) => network.post(`/post/add-post`, { ...data })
const viewPost = (postId: string) => network.post(`/post/view?postId=${postId}`)

export {
  followUser,
  unFollowUser,
  createReview,
  addProduct,
  uploadMultipleImages,
  addProject,
  addRequest,
  createGroup,
  makeGroupAdmin,
  addPost,
  viewPost,
}
