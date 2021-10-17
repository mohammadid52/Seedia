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

export {
  followUser,
  unFollowUser,
  createReview,
  addProduct,
  uploadMultipleImages,
  addProject,
  addRequest,
}
