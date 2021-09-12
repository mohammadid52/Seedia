import Card from 'components/atoms/Card'
import User from 'components/User'
import { getAccessToken, network } from 'helpers'
import { IParent } from 'interfaces/UniversalInterface'
import { useEffect, useState } from 'react'

const PeopleAlsoViewed = ({
  secondary = false,
  userData,
  authUser,
}: {
  secondary?: boolean
  authUser?: boolean
  userData?: IParent
}) => {
  const [list, setList] = useState([])
  const token = getAccessToken()

  const fetchPeopleYouViewedList = async () => {
    try {
      const config = { users: userData?.piv }
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
        <div className="flex flex-col gap-y-4 items-center">
          {list && list.length > 0 ? (
            list.map((people: IParent, idx: number) => {
              const following =
                userData &&
                userData?.following &&
                userData?.following.length > 0 &&
                // @ts-ignore
                userData?.following?.includes(people?._id)

              return (
                <User key={people?._id} user={people} following={following} />
              )
            })
          ) : (
            <p className="text-gray-400 text-center">no users found</p>
          )}
        </div>
      }
    />
  )
}

export default PeopleAlsoViewed
