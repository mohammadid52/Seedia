import { followUser, unFollowUser } from 'apis/mutations'
import { useEffect, useState } from 'react'
import { useMutation, useQueryClient } from 'react-query'

const useFollow = (followingList: string[], targetID: string) => {
  const queryClient = useQueryClient()

  const [localList, setLocalList] = useState(followingList)

  const addFollow = useMutation(followUser, {
    onSuccess: (data) => {
      setLocalList([...data.data.data])

      // setValues((prev: any) => ({ ...prev, following: data.data.data }))

      return queryClient.invalidateQueries('follow-user')
    },
  })

  const removeFollow = useMutation(unFollowUser, {
    onSuccess: (data) => {
      setLocalList([...data.data.data])
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
