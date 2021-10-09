import { getUniqId, network, updateDocumentTitle } from 'helpers'
import { IParent } from 'interfaces/UniversalInterface'
import { useEffect, useState } from 'react'

const useUser = (profileUrl: string, userData?: IParent) => {
  const iAmOwnerOfThisProfile = getUniqId(profileUrl) === userData?._id

  const [otherUserData, setOtherUserData] = useState<IParent>()
  const [fetchingData, setFetchingData] = useState(false)

  const fetchOtherUser = async () => {
    try {
      setFetchingData(true)
      const { data } = await network.post('/user/getById/' + profileUrl)
      setOtherUserData({ ...data.data })
      updateDocumentTitle(`${data.data.fullName} - Browse Products`)
    } catch (error) {
      // @ts-ignore
      console.error(error.message)
    } finally {
      setFetchingData(false)
    }
  }

  useEffect(() => {
    if (!iAmOwnerOfThisProfile) {
      // I am not owner of this profile so fetch other user data
      fetchOtherUser()
    } else {
      updateDocumentTitle(`${userData?.fullName} - Browse Products`)
    }
  }, [iAmOwnerOfThisProfile])

  return { otherUserData, fetchingData, iAmOwnerOfThisProfile }
}

export default useUser
