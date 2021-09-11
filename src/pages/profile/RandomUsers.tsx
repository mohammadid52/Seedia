import Badge from 'components/atoms/Badge'
import Button from 'components/atoms/Button'
import Card from 'components/atoms/Card'
import { links } from 'constants/Links'
import { network } from 'helpers'
import { useRouter } from 'hooks/useRouter'
import { IParent } from 'interfaces/UniversalInterface'
import { map } from 'lodash'
import { useEffect, useState } from 'react'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'
import { avatarPlaceholder } from 'state/Redux/constants'

const RandomUsers = ({
  list,
  showSingleCard,
}: {
  showSingleCard?: boolean
  list?: string[]
}) => {
  const route: any = useRouter()
  const userIdFromParam = route?.match?.params?.userId
  const [allUsers, setAllUsers] = useState([])

  const fetchAllUsers = async () => {
    try {
      const config = { limit: 12 }
      const { data } = await network.post(
        `/user/getAll/${userIdFromParam}`,
        config
      )
      setAllUsers(data.data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    if (allUsers && allUsers.length === 0) {
      fetchAllUsers()
    }
  }, [])

  const onFollowUser = async (id?: string) => {
    try {
      const { data } = await network.post('/user/follow/' + id)
      console.log(
        '🚀 ~ file: RandomUsers.tsx ~ line 46 ~ onFollowUser ~ data',
        data.data
      )
    } catch (error) {
      console.error(error)
    }
  }
  const onUnFollowUser = async (id?: string) => {
    try {
      const { data } = await network.post('/user/unfollow/' + id)
      console.log(
        '🚀 ~ file: RandomUsers.tsx ~ line 46 ~ onFollowUser ~ data',
        data.data
      )
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Card
      className="mb-12"
      cardTitle="Random Users"
      withCardHeadings={
        allUsers.length > 6 && (
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
          {allUsers.length > 0 ? (
            <div
              className={`${
                showSingleCard
                  ? 'grid-cols-1 gap-y-6'
                  : 'gap-6 grid-cols-1 sm:grid-cols-3'
              } grid  `}
            >
              {map(allUsers, (user: IParent) => {
                const isBusiness = user.other?.accountType === 'business'
                const isPersonal = user.other?.accountType === 'personal'
                // @ts-ignore
                const following = list && list.includes(user?._id)
                return (
                  <div
                    key={user?._id}
                    className="flex border border-gray-300 dark:border-gray-600 h-72 w-60 rounded-xl relative flex-col items-center "
                  >
                    <Badge
                      className={`${
                        user?.other?.accountType === 'business'
                          ? 'bg-pink-100 text-pink-800'
                          : user?.other?.accountType === 'personal'
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-blue-100 text-blue-800'
                      } mt-1 mr-1 absolute top-0 right-0`}
                      textSize="xs"
                      rounded="full"
                      label={user?.other?.accountType}
                    />
                    <div className="h-1/2 flex flex-col items-center justify-center">
                      <img
                        src={
                          user?.profilePicture
                            ? user?.profilePicture
                            : avatarPlaceholder
                        }
                        alt=""
                        className="h-24 border-gradient border-4 border-transparent w-24 rounded-full shadow-xl"
                      />
                    </div>
                    <div>
                      <h4 className="dark:text-white text-center hover:underline cursor-pointer text-gray-900 font-semibold tracking-wide text-lg">
                        <a
                          href={links.getProfileById(
                            user.profileUrl,
                            user?.other?.template || 1
                          )}
                        >
                          {user.fullName}
                        </a>
                      </h4>

                      <div className=" flex items-center justify-center ">
                        <h3 className=" text-gray-400 font-medium">
                          {isBusiness
                            ? user.business?.name
                            : isPersonal
                            ? user.company?.companyName
                            : user.background?.education &&
                              user.background?.education[0].name}
                        </h3>
                      </div>
                    </div>
                    <div className="absolute bottom-3 items-center flex justify-center">
                      <Button
                        gradient
                        gradientHover={false}
                        className="mt-6"
                        invert
                        onClick={() =>
                          following
                            ? onUnFollowUser(user?._id)
                            : onFollowUser(user?._id)
                        }
                        rounded="rounded-full"
                        size="lg"
                        label={following ? 'Following' : 'Follow'}
                      />
                    </div>
                  </div>
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
