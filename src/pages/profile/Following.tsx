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

  const token = getAccessToken()

  const fetchFollowingUsers = async () => {
    try {
      const config = { users: list }
      const { data } = await network.post('/user/getUsers', config, {
        headers: { Authorization: token },
      })
      setFollowing(data.data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    if (list && list.length > 0) {
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
          {following.length > 0 ? (
            <div
              className={`${
                showSingleCard
                  ? 'grid-cols-1 gap-y-4'
                  : 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4'
              } grid mt-6 `}
            >
              {map(following, (user: IParent, idx) => {
                // @ts-ignore
                const following = list && list.includes(user?._id)
                return <User user={user} following={following} />
              })}
            </div>
          ) : null}
        </div>
      }
    />
  )
}

export default Following
