interface ISignup {
  email: string
  password: string
  confirmPassword: string
  firstName: string
  lastName: string
}

interface IPersonalStepOne {
  jobTitle: string
  latestCompany: string
}

interface IPersonalStepTwo {
  country: string
  pincode: string
}

export const SIGNUP: ISignup = {
  email: '',
  password: '',
  confirmPassword: '',
  firstName: '',
  lastName: '',
}

export const PersonalStepOne: IPersonalStepOne = {
  jobTitle: '',
  latestCompany: '',
}
export const PersonalStepTwo: IPersonalStepTwo = {
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
  personal_mobile: '',
  mobile_number: '',
}
