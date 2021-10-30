import Loader from 'components/atoms/animation/Loader'
import Button from 'components/atoms/Button'
import Card from 'components/atoms/Card'
import User from 'components/User'
import { getAccessToken, network } from 'helpers'
import { useRouter } from 'hooks/useRouter'
import { IParent } from 'interfaces/UniversalInterface'
import { map } from 'lodash'
import { useEffect, useState } from 'react'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'

const Following = ({
  list,
  interests,
  showSingleCard,
}: {
  showSingleCard?: boolean
  list?: string[]
  interests?: { name: string; id: string }[]
}) => {
  const route: any = useRouter()
  const userIdFromParam = route?.match?.params?.userId
  const [following, setFollowing] = useState([])

  const [fetching, setFetching] = useState(false)
  const token = getAccessToken()

  const fetchFollowingUsers = async () => {
    setFetching(true)
    try {
      const config = { users: list, limit: 6 }
      const { data } = await network.post('/user/getUsers', config, {
        headers: { Authorization: token },
      })
      setFollowing(data.data)
    } catch (error) {
      console.error(error)
    } finally {
      setFetching(false)
    }
  }

  useEffect(() => {
    if (list && list.length > 0 && following.length === 0) {
      fetchFollowingUsers()
    }
  }, [userIdFromParam])

  return (
    <Card
      className="mb-12"
      cardTitle="Following"
      withCardHeadings={
        following.length > 6 && (
          <>
            <Button
              gradient
              className="mx-2"
              rounded="rounded-full"
              size="sm"
              gradientHover={false}
              Icon={BsChevronLeft}
            />
            <Button
              rounded="rounded-full"
              gradient
              size="sm"
              className="mx-2"
              invert
              gradientHover={false}
              Icon={BsChevronRight}
            />
          </>
        )
      }
      content={
        <div>
          {fetching ? (
            <div className="h-56 flex items-center justify-center">
              <Loader />
            </div>
          ) : following.length > 0 ? (
            <div
              className={`${
                showSingleCard
                  ? 'flex flex-col items-center gap-4'
                  : 'grid-cols-1 grid mt-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4'
              }  `}
            >
              {map(following, (user: IParent, idx) => {
                // @ts-ignore
                const following = list && list.includes(user?._id)
                return (
                  <User
                    user={user}
                    key={user._id.toString()}
                    following={following}
                  />
                )
              })}
            </div>
          ) : null}
        </div>
      }
    />
  )
}

export default Following
