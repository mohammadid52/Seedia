export const SIGNUP = {
  email: '',
  password: '',
  confirmPassword: '',
  firstName: '',
  lastName: '',
}

export const LOGIN = {
  email: '',
  password: '',
}

export const PersonalStepOne = {
  jobTitle: '',
  jobType: '',
  latestCompany: '',
}
export const PersonalStepTwo = {
  country: '',
  state: '',
  city: '',
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
  companyName: '',
  companyEmail: '',
  companyNumber: '',
}

export const BusinessStepTwoFields = {
  companyCountry: '',
  businessAddress: '',
  additionalInfo: '',
  postalCode: '',
  city: '',
  legalNumber: '',
  companyRegNumber: '',
  firstName: '',
  lastName: '',
  mobileNumber: '',
  businessEntityType: '',
  relationshipToCompany: '',
  typeOfCompany: '',
}
