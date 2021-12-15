export interface IUser {
  user: User
  accountType: string
  personal: PersonalAccount | null
  student: StudentAccount | null
  business: BusinessAccount | null
}

export interface User {
  firstName?: string
  lastName?: string
  profilePicture: string
  coverPicture: string
  email: string
}

export interface PersonalAccount {
  company: {
    jobType: string
    jobTitle: string
    latestCompany: string
  }
  location?: {
    country: string
    pincode: string
    state: string
    city: string
  }
}
export interface StudentAccount {
  education: {
    education: string
    grade: string
    grade_subject: string
    start_year: string
    end_year: string
  }
  location: {
    country: string
    pincode: string
    state: string
    city: string
  }
}
export interface BusinessAccount {
  name: string
  email: string
  number: string
  country: string
  address: string
  additionalInfo: string
  postalCode: string
  place: string
  legalNumber: string
  companyRegNumber: string
  firstName: string
  lastName: string
  mobileNumber: string
  typeOfCompany: string
  bussinessEntityType: string
  relationshipToCompany: string
}
