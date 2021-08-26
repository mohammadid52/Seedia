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
  state: string
  city: string
}

export interface IOther {
  accountType: string
  accountFilled: boolean
  accountFinishedStep: string
}

export interface IParent extends IUser {
  // user?: IUser
  _id?: string
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
  user: {
    fullName: string
    userImage: string
  }
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
