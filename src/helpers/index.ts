import get from 'lodash/get'

export const getAuth = (state: any) => get(state, 'auth', {})
