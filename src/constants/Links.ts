const dynamicRoute = (accountType: string = 'personal', step: string = '') =>
  `/account/${accountType}/edit-profile/${step}`

export const links = {
  LOGIN: '/login',
  FORGOT_PASSWORD: '/forgot-password',
  SIGNUP: '/signup',
  PROFILE: '/profile',
  getProfileById: (
    id?: string,
    template?: 1 | 2,
    viewMode: string = 'private'
  ) => `/${id}/${template}/${viewMode}`,
  DASHBAORD: '/dashboard',
  SETTINGS: '/settings',
  CHOOSE_ACCOUNT: '/choose-account',
  CHOOSE_TEMPLATE: '/choose-template',
  COMPANY: dynamicRoute('personal', 'company'),
  LOCATION_P: dynamicRoute('personal', 'location'),
  EDUCATION: dynamicRoute('student', 'education'),
  LOCATION_S: dynamicRoute('student', 'location'),
  BUSINESS_STEP_1: dynamicRoute('business', 'stepOne'),
  BUSINESS_STEP_2: dynamicRoute('business', 'stepTwo'),
  BASE_API_URL: process.env.REACT_APP_BASE_URL,
  // BASE_API_URL: 'http://localhost:3005',
}
