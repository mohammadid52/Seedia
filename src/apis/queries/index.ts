import { network } from 'helpers'
import { IProduct } from 'interfaces/UniversalInterface'

const fetchProductDetails = (productId: string) =>
  network.get(`/products/${productId}`)
const fetchAllProducts = (postedById: string) =>
  network.get(`/products/postedBy/${postedById}`)
// Reviews
const fetchReviewsByProduct = (
  productId: string,
  config: { idArray: IProduct['reviews'] }
) => network.post(`/reviews/${productId}`, config)
export { fetchProductDetails, fetchAllProducts, fetchReviewsByProduct }
