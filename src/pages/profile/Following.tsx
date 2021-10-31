import { fetchUsers } from 'apis/queries'
import Button from 'components/atoms/Button'
import Card from 'components/atoms/Card'
import Spinner from 'components/Spinner'
import User from 'components/User'
import { IParent } from 'interfaces/UniversalInterface'
import { map } from 'lodash'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'
import { useQuery } from 'react-query'

const Following = ({
  list,
  interests,
  showSingleCard,
}: {
  showSingleCard?: boolean
  list?: string[]
  interests?: { name: string; id: string }[]
}) => {
  const config = { users: list, limit: 6 }

  const { data, isLoading, isFetched, isSuccess } = useQuery(
    `user-list-following-1234`,
    () => fetchUsers(config),
    { enabled: list && list.length > 0 }
  )

  const users: IParent[] =
    !isLoading && isFetched && isSuccess ? data.data.data.users : []

  return (
    <Card
      className="mb-12"
      cardTitle="Following"
      withCardHeadings={
        users.length > 6 && (
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
          {isLoading ? (
            <div className="h-56 flex items-center justify-center">
              <Spinner />
            </div>
          ) : users.length > 0 ? (
            <div
              className={`${
                showSingleCard
                  ? 'flex flex-col items-center gap-4'
                  : 'grid-cols-1 grid mt-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4'
              }  `}
            >
              {map(users, (user: IParent, idx) => (
                <User user={user} key={user._id.toString()} />
              ))}
            </div>
          ) : null}
        </div>
      }
    />
  )
}

export default Following
