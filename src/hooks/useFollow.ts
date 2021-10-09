import { followUser, unFollowUser } from 'apis/mutations'
import { useEffect, useState } from 'react'
import { useMutation, useQueryClient } from 'react-query'

const useFollow = (followingList: string[], targetID: string) => {
  const queryClient = useQueryClient()

  const addFollow = useMutation(followUser, {
    onSuccess: () => queryClient.invalidateQueries('follow-user'),
  })

  const removeFollow = useMutation(unFollowUser, {
    onSuccess: () => queryClient.invalidateQueries('unfollow-user'),
  })

  const [following, setFollowing] = useState(false)

  useEffect(() => {
    setFollowing(followingList?.includes(targetID))
  }, [])

  return { following, setFollowing, addFollow, removeFollow }
}

export default useFollow
