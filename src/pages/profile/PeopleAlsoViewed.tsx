import Card from 'components/atoms/Card'
import { links } from 'constants/Links'
import { getAccessToken, network } from 'helpers'
import { IParent } from 'interfaces/UniversalInterface'
import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

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

  const history = useHistory()

  return (
    <Card
      secondary={secondary}
      cardTitle="People You Viewed"
      content={
        <div className="space-y-4">
          {list && list.length > 0 ? (
            list.map((people: IParent, idx: number) => {
              const isBusiness = people?.other?.accountType === 'business'
              const isPersonal = people?.other?.accountType === 'personal'
              return (
                <div
                  key={idx}
                  onClick={() => {
                    return history.push(
                      links.getProfileById(
                        people.profileUrl,
                        people?.other?.template || 1
                      )
                    )
                  }}
                  className={`${
                    idx !== list.length - 1
                      ? 'border-b dark:border-gray-600 pb-2 border-gray-200'
                      : ''
                  } px-4 rounded-md  cursor-pointer h-24 items-center flex dark:hover:bg-gray-600 hover:bg-gray-200 transition-all duration-150  relative `}
                >
                  <div className="mr-4 flex-shrink-0 self-center">
                    <img
                      src={
                        people.profilePicture
                          ? people.profilePicture
                          : 'https://robohash.org/honey?set=set1'
                      }
                      alt="user_image"
                      className="h-14 w-14 rounded-full"
                    />
                  </div>
                  <div>
                    <h4 className="text-lg text-gray-700 dark:text-white font-bold">
                      {people.fullName}
                    </h4>
                    <p className="mt-1 text-gray-400 font-medium">
                      {isBusiness
                        ? people?.business?.name
                        : isPersonal
                        ? people?.company?.companyName
                        : people.background?.education &&
                          people.background?.education[0].name}
                    </p>
                  </div>
                  <hr />
                </div>
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
