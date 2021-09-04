const dynamicRoute = (accountType: string = 'personal', step: string = '') =>
  `/account/${accountType}/edit-profile/${step}`

console.log('REACT_APP_BASE_URL', process.env.REACT_APP_BASE_URL)

export const links = {
  LOGIN: '/login',
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
  PERSONAL_STEP_1: dynamicRoute('personal', 'company'),
  PERSONAL_STEP_2: dynamicRoute('personal', 'location'),
  STUDENT_STEP_1: dynamicRoute('student', 'education'),
  STUDENT_STEP_2: dynamicRoute('student', 'location'),
  BUSINESS_STEP_1: dynamicRoute('business', 'stepOne'),
  BUSINESS_STEP_2: dynamicRoute('business', 'stepTwo'),
  BASE_API_URL: process.env.REACT_APP_BASE_URL,
  // BASE_API_URL: 'http://localhost:3005',
}
