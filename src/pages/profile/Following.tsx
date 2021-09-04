import Card from 'components/atoms/Card'
import { useEffect, useState } from 'react'
import { map } from 'lodash'
import Button from 'components/atoms/Button'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'
import { getAccessToken, network } from 'helpers'
import Section from 'components/atoms/Section'
import { CgDetailsMore } from 'react-icons/cg'
import { IParent } from 'interfaces/UniversalInterface'
import Badge from 'components/atoms/Badge'

import { links } from 'constants/Links'
import { useRouter } from 'hooks/useRouter'
import { useHistory } from 'react-router-dom'

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
  const [suggestedUsers, setSuggestedUsers] = useState([])
  const [allUsers, setAllUsers] = useState([])
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
  const fetchSuggestedUsers = async () => {
    try {
      const config = { interests: interests }
      const { data } = await network.post('/user/suggestedUser', config, {
        headers: { Authorization: token },
      })
      setSuggestedUsers(data.data)
    } catch (error) {
      console.error(error)
    }
  }

  const fetchAllUsers = async () => {
    try {
      const config = { limit: 4 }
      const { data } = await network.post(
        `/user/getAll/${userIdFromParam}`,
        config,
        {
          headers: { Authorization: token },
        }
      )
      setAllUsers(data.data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    if (list && list.length > 0) {
      fetchFollowingUsers()
    }
  }, [userIdFromParam])

  useEffect(() => {
    if (allUsers && allUsers.length === 0) {
      fetchAllUsers()
    }
  }, [userIdFromParam])

  useEffect(() => {
    if (interests && interests.length > 0) {
      fetchSuggestedUsers()
    }
  }, [userIdFromParam])

  const history = useHistory()

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
                const isBusiness = user.other?.accountType === 'business'

                return (
                  <div
                    key={idx}
                    className="flex px-2 py-4 items-center justify-between  border flex-col dark:border-gray-600 border-gray-200 rounded-md relative p-4"
                  >
                    <img
                      src={
                        user.profilePicture
                          ? user.profilePicture
                          : 'https://robohash.org/honey?set=set1'
                      }
                      alt=""
                      className="h-20 mb-2 rounded-full w-20 "
                    />
                    <div className="my-2 flex items-center justify-between flex-col">
                      <h5 className="text-gray-700 text-center font-semibold text-lg dark:text-gray-200">
                        {user.fullName}
                      </h5>
                      <p className="text-gray-400 text-center font-medium text-base dark:text-gray-400">
                        {isBusiness
                          ? user.business?.name
                          : user.company?.companyName}
                      </p>
                    </div>
                    <div className="absolute bottom-1 items-center flex justify-center">
                      <Button
                        gradient
                        gradientHover={false}
                        className="mt-2"
                        invert
                        rounded="rounded-full"
                        label="following"
                      />
                    </div>
                  </div>
                )
              })}
            </div>
          ) : null}

          {suggestedUsers && suggestedUsers.length > 0 && (
            <Section
              sectionTitle="Suggested users"
              Icon={CgDetailsMore}
              content={
                <div>{suggestedUsers.length > 0 ? <div></div> : null}</div>
              }
            />
          )}

          <Section
            sectionTitle="Random users"
            Icon={CgDetailsMore}
            content={
              <div>
                {allUsers.length > 0 ? (
                  <div
                    className={`${
                      showSingleCard
                        ? 'grid-cols-1 gap-y-6'
                        : 'gap-6 grid-cols-1 sm:grid-cols-4'
                    } grid  `}
                  >
                    {map(allUsers, (user: IParent) => {
                      const isBusiness = user.other?.accountType === 'business'
                      const isPersonal = user.other?.accountType === 'personal'
                      return (
                        <div
                          key={user._id}
                          className="flex border border-gray-300 dark:border-gray-600 h-72 w-60 rounded-xl relative flex-col items-center "
                        >
                          <Badge
                            className="mt-1 mr-1 absolute top-0 right-0"
                            textSize="xs"
                            rounded="full"
                            label={user?.other?.accountType}
                            color={
                              user?.other?.accountType === 'business'
                                ? 'pink'
                                : user?.other?.accountType === 'personal'
                                ? 'yellow'
                                : 'blue'
                            }
                          />
                          <div className="h-1/2 flex flex-col items-center justify-center">
                            <img
                              src={
                                user?.profilePicture
                                  ? user?.profilePicture
                                  : 'https://robohash.org/honey?set=set1'
                              }
                              alt=""
                              className="h-24 border-gradient border-4 border-transparent w-24 rounded-full shadow-xl"
                            />
                          </div>
                          <div>
                            <h4
                              onClick={() =>
                                history.push(
                                  links.getProfileById(
                                    user._id,
                                    user?.other?.template || 1
                                  )
                                )
                              }
                              className="dark:text-white text-center hover:underline cursor-pointer text-gray-900 font-semibold tracking-wide text-lg"
                            >
                              {user.fullName}
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
                              rounded="rounded-full"
                              label={
                                // @ts-ignore
                                following.includes(user?._id)
                                  ? 'Following'
                                  : 'Follow'
                              }
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
        </div>
      }
    />
  )
}

export default Following
