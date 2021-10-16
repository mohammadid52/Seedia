import { Moment } from 'moment'
import { User } from './UserInterface'
// ~~~~~~~~~~~~~User Interfaces~~~~~~~~~~~~~~~~~~~~~~~~~~ //
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
  userData?: IParent
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
  previousCompany?: string
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
// key-user
export interface IParent {
  // user?: IUser
  _id?: string
  fullName: string
  firstName?: string
  lastName?: string
  profileViews?: number
  maritalStatus?: string
  company?: ICompany
  location?: ILocation
  background?: IBackground
  other?: IOther
  coverPicture?: string
  profilePicture?: string
  email?: string
  piv?: string[]
  mobileNumber: string
  pwvp?: string[]
  following?: string[]
  followers?: string[]
  reviews: string[] // collection of reviewId
  purchases: { productId: string; purchasedOn: Date }[] // collection of productId
  pivCount?: number
  pwvpCount?: number
  profileUrl?: string
  myId?: string
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
    projects?: string[]
    products?: string[]
  }
}

export interface NavProps {
  isUser?: boolean
  template?: 1 | 2
  userId?: string
  profileUrl?: string
  accountFilled?: boolean
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

// ~~~~~~~~~~~~~~~~~~~Product Interfaces~~~~~~~~~~~~~~~~~~~~ //
// key-product
export interface IProduct {
  _id: string // productID
  images: IProductImage[]
  productName: string
  productDescription: string
  availableColors: { code: string; name: string }[]
  availableSizes: string[]
  tags: string[]
  estimatedDelivery: Moment | string | null
  price: number | string
  features?: { name: string; id: string }[]
  highlights?: IHighlight[]
  details: string
  createdOn: Moment | null
  updatedOn: Moment | null
  purchasedBy: string[]
  priceUpdatedOn: Moment | null
  reviews: {
    userId: string
    reviewId: string
  }[]
}

export interface IProductImage {
  id: string
  isCover: boolean
  url: string
  alt: string
}

export interface IHighlight {
  name: string
  id: string
}

export interface IReview {
  _id: string
  reviewText: string
  userId: string
  rating: number
  likes: number
  user?: IParent
  dislikes: number
  createdOn: Date | null
}

// ~~~~~~~~~~~~~~~~~~~Project Interfaces~~~~~~~~~~~~~~~~~~~~ //
// key-project
export interface ListItem {
  name: string
}

export interface ItemWithHeader {
  header: string
  points: ListItem[] | null
}

export interface IProject {
  functionType: { name: string; id: string }[]
  salary: { min: string; max: string; duration: string }
  briefDescription: string
  jobDescription: ItemWithHeader
  jobRequirements: ItemWithHeader
  workingConditions: ItemWithHeader
  closure: string
  postedOn?: Date
  postedBy?: string // userId
  company?: IParent
}
