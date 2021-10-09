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

export {
  followUser,
  unFollowUser,
  createReview,
  addProduct,
  uploadMultipleImages,
}
