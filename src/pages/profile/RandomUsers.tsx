import Button from 'components/atoms/Button'
import Card from 'components/atoms/Card'
import User from 'components/User'
import { network } from 'helpers'
import { useRouter } from 'hooks/useRouter'
import { IParent } from 'interfaces/UniversalInterface'
import { map } from 'lodash'
import { useEffect, useState } from 'react'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'

const RandomUsers = ({
  list,
  showSingleCard,
  userData,
  skipList,
}: {
  showSingleCard?: boolean
  list?: string[]
  userData?: IParent
  skipList?: string[]
}) => {
  const route: any = useRouter()
  const userIdFromParam = route?.match?.params?.userId
  const [allUsers, setAllUsers] = useState([])

  const [skip, setSkip] = useState(0)

  const fetchAllUsers = async () => {
    try {
      const config = {
        limit: 6,
        skip,
        // @ts-ignore
        users: [...userData?.piv, ...skipList],
      }
      const { data } = await network.post(
        `/user/getAll/${userIdFromParam}`,
        config
      )
      setAllUsers(data.data)
    } catch (error) {
      console.error(error)
    }
  }

  const loadMore = () => {
    setSkip((prev) => prev + 6)
    fetchAllUsers()
  }

  useEffect(() => {
    if (allUsers && allUsers.length === 0) {
      fetchAllUsers()
    }
  }, [])

  return (
    <Card
      className="mb-12"
      cardTitle="Random Users"
      withCardHeadings={
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
            onClick={loadMore}
            gradientHover={false}
            Icon={BsChevronRight}
          />
        </>
      }
      content={
        <div>
          {allUsers.length > 0 ? (
            <div
              className={`${
                showSingleCard
                  ? 'grid-cols-1 gap-y-6'
                  : 'gap-6 grid-cols-1 sm:grid-cols-3'
              } grid  `}
            >
              {map(allUsers, (user: IParent) => {
                // @ts-ignore
                const following = list && list.includes(user?._id)
                return (
                  <User key={user?._id} user={user} following={following} />
                )
              })}
            </div>
          ) : null}
        </div>
      }
    />
  )
}

export default RandomUsers
