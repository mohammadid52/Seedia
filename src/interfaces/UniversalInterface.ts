export interface IAbout {
  currentCompany?: string
  previoudCompany?: string
  livesIn?: string
  maritalStatus?: string
}

export interface IExperience {
  jobTitle?: string
  companyName?: string
  startedAt?: string
  endedAt?: string
  description?: string
}

export interface IBackground {
  summary?: string
  interests?: { name: string }[]
  experience?: IExperience[]
}
