import Card from 'components/atoms/Card'
import User from 'components/User'
import { getAccessToken, network } from 'helpers'
import { IParent } from 'interfaces/UniversalInterface'
import { useEffect, useState } from 'react'

const PeopleAlsoViewed = ({
  secondary = false,
  userData,
  authUser,
  showSingleCard = true,
}: {
  secondary?: boolean
  showSingleCard?: boolean
  authUser?: boolean
  userData?: IParent
}) => {
  const [list, setList] = useState([])
  const token = getAccessToken()

  const fetchPeopleYouViewedList = async () => {
    try {
      const config = { users: userData?.piv, limit: 6 }
      const { data } = await network.post('/user/getUsers', config, {
        headers: { Authorization: token },
      })
      setList(data.data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    // @ts-ignore
    if (userData?.pivCount > 0) {
      fetchPeopleYouViewedList()
    }
  }, [])

  return (
    <Card
      secondary={secondary}
      cardTitle={authUser ? 'People You Viewed' : 'Related Users'}
      content={
        <div
          className={`${
            showSingleCard
              ? 'flex flex-col items-center gap-4'
              : 'grid-cols-1 grid mt-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4'
          }  `}
        >
          {list && list.length > 0 ? (
            list.map((people: IParent, idx: number) => (
              <User key={people?._id} user={people} />
            ))
          ) : (
            <p className="text-gray-400 text-center">no users found</p>
          )}
        </div>
      }
    />
  )
}

export default PeopleAlsoViewed
