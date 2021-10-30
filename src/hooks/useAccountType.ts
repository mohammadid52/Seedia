import { IParent } from 'interfaces/UniversalInterface'

const useAccountType = (
  userData?: IParent
): {
  accountType: string
  isBusiness: boolean
  isPersonal: boolean
  isStudent: boolean
  getType: (user: IParent) => {
    isBusiness: boolean
    isStudent: boolean
    isPersonal: boolean
  }
} => {
  const accountType = userData?.other?.accountType
  const isBusiness = accountType === 'business'
  const isStudent = accountType === 'student'
  const isPersonal = accountType === 'personal'
  const getType = (user: IParent) => {
    const type = user?.other?.accountType
    const isBusiness = type === 'business'
    const isStudent = type === 'student'
    const isPersonal = type === 'personal'
    return { isBusiness, isStudent, isPersonal }
  }

  return { accountType, isBusiness, isPersonal, isStudent, getType }
}

export default useAccountType
