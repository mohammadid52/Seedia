import { fetchUsers } from 'apis/queries'
import Button from 'components/atoms/Button'
import Card from 'components/atoms/Card'
import EmptyState from 'components/atoms/EmptyState'
import Spinner from 'components/Spinner'
import User from 'components/User'
import { links } from 'constants/Links'
import { IParent } from 'interfaces/UniversalInterface'
import { useQuery } from 'react-query'

const PeopleAlsoViewed = ({
  secondary = false,
  userData,

  showSingleCard = true,
}: {
  secondary?: boolean
  showSingleCard?: boolean

  userData?: IParent
}) => {
  const config = {
    users: userData.piv,
    limit: 4,
  }
  const { data, isLoading, isFetched, isSuccess } = useQuery(
    'people-also-viewed-list',
    () => fetchUsers(config),
    { enabled: userData?.pivCount > 0 }
  )

  const list: IParent[] =
    isFetched && !isLoading && isSuccess ? data.data.data.users : []

  return (
    <Card
      secondary={secondary}
      cardTitle={'People You Viewed'}
      content={
        <div
          className={`${
            showSingleCard
              ? 'flex flex-col items-center gap-4'
              : 'grid-cols-1 grid mt-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4'
          }  `}
        >
          {isLoading ? (
            <div className="flex items-center justify-center">
              <Spinner />
            </div>
          ) : list && list.length > 0 ? (
            <div className="flex items-center gap-4 justify-center flex-col">
              {list.map((people: IParent, idx: number) => (
                <User key={people?._id} user={people} />
              ))}
              <div className="">
                <Button
                  label="see more"
                  rounded="rounded-full"
                  gradient
                  link={links.toAction('piv')}
                  size="lg"
                />
              </div>
            </div>
          ) : (
            <EmptyState
              hideBorders
              title="Oops Can't find users."
              subtitle={``}
              iconUrl={'/no-users.png'}
            />
          )}
        </div>
      }
    />
  )
}

export default PeopleAlsoViewed
