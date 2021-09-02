import { User } from './UserInterface'

export interface IAbout {
  currentCompany?: string
  companyAddress?: string
  companyName: string
  previousCompany?: string
  livesIn?: string
  maritalStatus?: string
  coverPicture?: string
  userImage: string
  fullName: string
  email?: string
  jobTitle: string
  profileViews?: number
  projects?: number
  connections?: number
}

export interface IModalProps extends IBlockProps {
  setUnsavedChanges: React.Dispatch<React.SetStateAction<boolean>>
  setShowUnsaveModal: React.Dispatch<React.SetStateAction<boolean>>
  onCancel: () => void
  setValues: (data: any) => void
}

export interface IBlockProps {
  userData: IParent
  showEditOption?: boolean
  setShowModal: React.Dispatch<
    React.SetStateAction<{ show: boolean; type: string }>
  >
}

export interface IUser extends User {
  fullName: string
  profilePicture: string
  profileViews?: number
  maritalStatus?: string
  projects?: number
  connections?: number
}

export interface ICompany {
  currentCompany?: string
  companyAddress?: string
  companyName?: string
  jobTitle?: string
}

export interface ILocation {
  livesIn: string
  country: string
  pincode: string
  address?: string
  state: string
  city: string
}

export interface IOther {
  accountType: string
  accountFilled: boolean
  accountFinishedStep: string
  template: 1 | 2
  createdOn: string | Date
}

export interface IParent {
  // user?: IUser
  _id?: string
  fullName: string
  profileViews?: number
  maritalStatus?: string
  company?: ICompany
  location?: ILocation
  background?: IBackground
  other?: IOther
  coverPicture?: string
  email?: string
  piv?: string[]
  mobileNumber: string
  pwvp?: string[]
  following?: string[]
  followers?: string[]
  pivCount?: number
  pwvpCount?: number
  profilePicture?: string
  recommendation?: {
    given: IRecommendation[]
    received: IRecommendation[]
  }
  business?: {
    name: string
    email: string
    number: string
    additionalInfo: string
    legalNumber: string
    businessRegNumber: string
    typeOfBusiness: string
    bussinessEntityType: string
    relationshipToBusiness: string
  }
}

export interface IExperience {
  jobTitle: string
  companyName: string
  startedAt?: string
  companyAddress?: string
  endedAt?: string
  description: string
  leaveDate?: string
  id: string
  joinDate: string
}

export interface IBackground {
  summary: string
  interests: { name: string; id: string }[]
  experiences?: IExperience[]
  skills?: ISkill[]
  awards?: IAward[]
  education?: IEducation[]
  languages?: ILanguage[]
}

export interface IPeopleAlsoViewed {
  image: string
  fullName: string
  jobType: string
}
export interface IEducation {
  id: string
  from: string
  to: string
  degree: string
  name: string
}

export interface ISkill {
  id: string
  name: string
}

export interface IAward {
  awardName: string
  awardFor: string
  id?: string
}

export interface IProfileOne {
  about: IAbout
  background: IBackground
  peopleAlsoViewed: IPeopleAlsoViewed[]
  recommendation: {
    given: IRecommendation[]
    received: IRecommendation[]
  }
}

export interface ILanguage {
  langName: string
  langLevel: string
  id: string
}

export interface IRecommendation {
  text: string
  userId?: string
  user?: IParent
}

export interface IProfileTwo {
  about: IAbout
  peopleAlsoViewed: IPeopleAlsoViewed[]
  experiences: IExperience[]
  education: IEducation[]
  skills: ISkill[]
  awards: IAward[]
  languages: ILanguage[]
}

export interface IProfile {
  about: IAbout
  background: IBackground
  peopleAlsoViewed: IPeopleAlsoViewed[]
  experiences: IExperience[]
  education: IEducation[]
}
