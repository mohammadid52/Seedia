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
  name: '',
  email: '',
  number: '',
}

export const BusinessStepTwoFields = {
  businessCountry: '',
  businessAddress: '',
  additionalInfo: '',
  postalCode: '',
  city: '',
  legalNumber: '',
  businessRegNumber: '',
  firstName: '',
  lastName: '',
  mobileNumber: '',
  businessEntityType: '',
  relationshipToBusiness: '',
  typeOfBusiness: '',
}
