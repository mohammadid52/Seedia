import Card from 'components/atoms/Card'
import { links } from 'constants/Links'
import { getAccessToken, network } from 'helpers'
import { IParent } from 'interfaces/UniversalInterface'
import { useEffect, useState } from 'react'
import { avatarPlaceholder } from 'state/Redux/constants'

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
        <div className="space-y-4">
          {list && list.length > 0 ? (
            list.map((people: IParent, idx: number) => {
              const isBusiness = people?.other?.accountType === 'business'
              const isPersonal = people?.other?.accountType === 'personal'
              const onName = isBusiness
                ? people?.business?.name
                : isPersonal
                ? people?.company?.companyName
                : people.background?.education &&
                  people.background?.education[0].name
              return (
                <div title={people.fullName} key={idx}>
                  <a
                    className={`${
                      idx !== list.length - 1
                        ? 'border-b dark:border-gray-600 pb-2 border-gray-200'
                        : ''
                    } px-4 rounded-md  cursor-pointer h-20 items-center justify-start flex dark:hover:bg-gray-600 hover:bg-gray-200 transition-all duration-150  relative `}
                    href={links.getProfileById(
                      people.profileUrl,
                      people?.other?.template || 1
                    )}
                  >
                    <div className="mr-4 flex-grow flex-shrink-0 self-center">
                      <img
                        src={
                          people.profilePicture
                            ? people.profilePicture
                            : avatarPlaceholder
                        }
                        alt="user_image"
                        className="h-14 w-14 rounded-full"
                      />
                    </div>
                    <div className="overflow-hidden">
                      <h4 className="text-base truncate  text-gray-700 dark:text-white font-bold">
                        {people.fullName}
                      </h4>
                      <p className="mt-1 text-sm truncate text-gray-400 font-medium">
                        {onName}
                      </p>
                    </div>
                    <hr />
                  </a>
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
