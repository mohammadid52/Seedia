import { Moment } from 'moment'
import { User } from './UserInterface'

// ~~~~~~~~~~~~~Other Interfaces~~~~~~~~~~~~~~~~~~~~~~~~~~ //

export interface NavProps {
  isUser?: boolean
  template?: 1 | 2
  userId?: string
  profileUrl?: string
  accountFilled?: boolean
}

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
  jobType?: string
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
  savedJobs?: string[]
  following?: string[]
  followers?: string[]
  reviews: string[] // collection of reviewId
  purchases: IPurchases[] // collection of productId
  pivCount?: number
  pwvpCount?: number
  profileUrl?: string
  myId?: string
  groups?: string[]
  recommendation?: {
    given: IRecommendation[]
    received: IRecommendation[]
  }
  business?: IBusiness
  store?: IStore
  // post related fields
  // ~~~~ on post delete action. make sure to remove postId from these arrays ~~~~
  savedPosts?: string[]
  activity?: IActivity[]
  posts: string[]
  featuredPosts?: string[]
  savedProfiles?: string[]
  notifications?: INotification[]
}

export interface INotification {
  _id?: string
  url?: string
  type?: string
  message?: string
  data?: any
}

export interface IStore {
  _id?: string
  bannerImage: string
  buttonLabel: string
  buttonLink: string
  createdOn?: Date
  createdBy?: string
  isPublished?: boolean
  products?: IProduct[]
  section?: IStoreSection[]
}
export interface IStoreSection {
  _id?: string
  title?: string
  image?: string
  content?: string
}
export type ActivityType = 'posted' | 'shared' | 'commented' | 'replied'

export interface IActivity {
  postUrl?: string
  text?: string
  subtext?: string
  type?: ActivityType
  postMedia?: string
  userImage?: string
  activityIdx?: number
  post?: IPost
}

export interface IPurchases {
  productId: string
  purchasedOn: Date
}

export interface IBusiness {
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

export interface IShortProfile {
  _id?: string
  fullName: string
  firstName?: string
  lastName?: string
  coverPicture?: string
  profileUrl?: string
  profilePicture?: string
  other?: IOther
  email?: string
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
  postedBy?: string
  user?: IParent
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
  likes: string[]
  user?: IParent
  dislikes: string[]
  createdOn: Date | null
}

// ~~~~~~~~~~~~~~~~~~~Project Interfaces~~~~~~~~~~~~~~~~~~~~ //
export interface ListItem {
  name: string
}

export interface ItemWithHeader {
  header: string
  points: ListItem[] | null
}
// key-project

export interface ISection {
  title: string
  content: string
  id?: string
}

export interface IProject {
  title: string
  _id?: string
  functionType: { name: string; id: string }[]
  salary: { min: string; max: string; duration: string }
  briefDescription: string
  sections: ISection[]
  closure: string
  website: string
  postedOn?: Date
  postedBy?: string // userId
  company?: IParent
  location?: ILocation
  views?: number
}

// ~~~~~~~~~~~~~~~~~~~Job Request Interfaces~~~~~~~~~~~~~~~~~~~~ //

export interface IRequest {
  _id?: string
  title: string
  description?: string
  skills: ISkill[]
  postedBy?: string
  postedOn?: Date
  user?: IParent
  views?: number
}

// ~~~~~~~~~~~~~~~~~~~Group Interfaces~~~~~~~~~~~~~~~~~~~~ //

export interface IGroupMember extends IShortProfile {
  isAdmin: boolean
}
export interface IGroup {
  _id?: string
  groupName: string
  groupDescription?: string
  members?: string[] | IGroupMember[]
  createdOn?: Date
  admin?: string[]
  createdBy?: string
  messages?: any
  coverPicture?: string
  profilePicture?: string
  groupRules?: string
  requests?: string[]
}

// ~~~~~~~~~~~~~~~~~~~Post Interfaces~~~~~~~~~~~~~~~~~~~~ //

export interface IComment {
  _id?: string
  text?: string
  userId?: string
}
export interface IPost {
  _id?: string
  text?: string
  postedOn?: Date
  postUrl?: string
  postedBy?: string
  viewedBy?: string[]
  links?: string[]
  likes: string[]
  postType?: string
  user?: IParent
}
