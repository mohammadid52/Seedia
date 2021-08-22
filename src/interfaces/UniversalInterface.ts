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
  state: string
  city: string
}

export interface IOther {
  accountType: string
  accountFilled: boolean
  accountFinishedStep: string
}

export interface IParent {
  user?: IUser
  company?: ICompany
  location?: ILocation
  background?: IBackground
  other?: IOther
  // business?:{}
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
  experiences: IExperience[]
}

export interface IPeopleAlsoViewed {
  image: string
  fullName: string
  jobType: string
}
export interface Education {
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
}

export interface IRecommendation {
  text: string
  user: {
    fullName: string
    userImage: string
  }
}

export interface IProfileTwo {
  about: IAbout
  peopleAlsoViewed: IPeopleAlsoViewed[]
  experiences: IExperience[]
  education: Education[]
  skills: ISkill[]
  awards: IAward[]
  languages: ILanguage[]
}

export interface IProfile {
  about: IAbout
  background: IBackground
  peopleAlsoViewed: IPeopleAlsoViewed[]
  experiences: IExperience[]
  education: Education[]
}
