const dynamicRoute = (accountType: string = 'personal', step: string = '') =>
  `/account/${accountType}/edit-profile/${step}`

export const links = {
  LOGIN: '/login',
  SIGNUP: '/signup',
  PROFILE: '/profile',
  getProfileById: (id?: string, template?: string) =>
    `/profile/${id}/template=${template}`,
  DASHBAORD: '/dashboard',
  CHOOSE_ACCOUNT: '/choose-account',
  PERSONAL_STEP_1: dynamicRoute('personal', 'company'),
  PERSONAL_STEP_2: dynamicRoute('personal', 'location'),
  STUDENT_STEP_1: dynamicRoute('student', 'education'),
  STUDENT_STEP_2: dynamicRoute('student', 'location'),
  BUSINESS_STEP_1: dynamicRoute('business', 'stepOne'),
  BUSINESS_STEP_2: dynamicRoute('business', 'stepTwo'),
  BASE_API_URL: 'http://localhost:3005',
}
