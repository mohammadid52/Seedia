import remove from 'lodash/remove'
import { ADD_TO_BASKET, REMOVE_FROM_BASKET } from 'state/Redux/constants'

const initialState = {
  basket: {
    count: 0,
    // @ts-ignore
    products: null,
  },
}

const userReducer = (
  state = initialState,
  action: { type: any; msg: any; err: any; data: any }
) => {
  switch (action.type) {
    case ADD_TO_BASKET:
      const basket_products = state?.basket?.products || []
      basket_products.push(action.data)
      return {
        ...state,
        basket: {
          count: basket_products.length,
          products: basket_products,
        },
      }
    case REMOVE_FROM_BASKET:
      const $basket_products = state?.basket?.products || []
      remove($basket_products, (prod: any) => prod._id === action.data._id)
      return {
        ...state,
        basket: {
          count: $basket_products.length,
          products: $basket_products,
        },
      }
    default:
      return state
  }
}

export default userReducer
