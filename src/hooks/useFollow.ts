import { followUser, unFollowUser } from 'apis/mutations'
import { useEffect, useState } from 'react'
import { useMutation, useQueryClient } from 'react-query'
import remove from 'lodash/remove'
import { useUserContext } from 'context/UserContext'

const useFollow = (followingList: string[], targetID: string) => {
  const queryClient = useQueryClient()

  const [localList, setLocalList] = useState(followingList)
  const { setValues, values } = useUserContext()

  const addFollow = useMutation(followUser, {
    onSuccess: () => {
      let copy = followingList
      copy.push(targetID)
      setLocalList([...copy])
      setValues({ ...values, following: copy })

      // setValues((prev: any) => ({ ...prev, following: data.data.data }))

      return queryClient.invalidateQueries('follow-user')
    },
  })

  const removeFollow = useMutation(unFollowUser, {
    onSuccess: () => {
      let copy = followingList
      remove(copy, (d) => d === targetID)
      setLocalList([...copy])
      setValues({ ...values, following: copy })
      // setValues((prev: any) => ({ ...prev, following: data.data.data }))

      return queryClient.invalidateQueries('unfollow-user')
    },
  })

  const [following, setFollowing] = useState(false)

  useEffect(() => {
    setFollowing(localList?.includes(targetID))
  }, [localList])

  return { following, setFollowing, addFollow, removeFollow }
}

export default useFollow
