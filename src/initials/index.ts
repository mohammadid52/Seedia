export const SIGNUP = {
  email: '',
  password: '',
  confirmPassword: '',
  firstName: '',
  lastName: '',
}

export const PersonalStepOne = {
  jobTitle: '',
  latestCompany: '',
}
export const PersonalStepTwo = {
  country: '',
  pincode: '',
}

export const StudentStepOne = {
  education: '',
  grade: '',
  grade_subject: '',
}

export const StudentStepTwo = {
  ...PersonalStepTwo,
}

export const BusinessStepOneFields = {
  company_name: '',
  company_email: '',
  re_company_email: '',
  password: '',
  company_number: '',
}

export const BusinessStepTwoFields = {
  company_country: '',
  business_address: '',
  additional_info: '',
  postal_code: '',
  place: '',
  legal_number: '',
  company_reg_number: '',
  firstName: '',
  lastName: '',
  mobile_number: '',
}
