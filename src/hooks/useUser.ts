import { fetchUserById } from 'apis/queries'
import { getUniqId } from 'helpers'
import { IParent } from 'interfaces/UniversalInterface'
import { useQuery } from 'react-query'
const useUser = (
  profileUrl: string,
  userData?: IParent,
  fetchProfile: boolean = true
): {
  otherUserData: IParent
  isFetched: boolean
  isLoading: boolean
  iAmOwnerOfThisProfile: boolean
} => {
  const iAmOwnerOfThisProfile =
    userData && getUniqId(profileUrl) === userData?._id

  const { isFetched, isLoading, data } = useQuery(
    'user',
    () => fetchUserById(profileUrl),
    { enabled: !iAmOwnerOfThisProfile && fetchProfile }
  )

  const otherUserData = isFetched && !isLoading && data.data.data

  return { otherUserData, isFetched, isLoading, iAmOwnerOfThisProfile }
}

export default useUser
