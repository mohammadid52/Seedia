import { IParent } from 'interfaces/UniversalInterface'

const useAccountType = (userData: IParent) => {
  const accountType = userData?.other?.accountType
  const isBusiness = accountType === 'business'
  const isStudent = accountType === 'student'
  const isPersonal = accountType === 'personal'

  return { accountType, isBusiness, isPersonal, isStudent }
}

export default useAccountType
