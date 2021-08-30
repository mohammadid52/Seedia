import { IParent } from 'interfaces/UniversalInterface'
import React, { useEffect, useState } from 'react'
import Card from 'components/atoms/Card'
import { AiOutlineStar, AiFillStar } from 'react-icons/ai'

import { filter, map, values } from 'lodash'

const ProfileStrength = ({
  userData,
  authUser,
  secondary,
}: {
  userData: IParent
  authUser: boolean
  secondary?: boolean
}) => {
  const starClass = `h-12 w-12 `

  const totalStars = [0, 1, 2, 3, 4]

  const [finishedStars, setFinishedStars] = useState(0)

  const [nextStepText, setNextStepText] = useState('')

  const accountType = userData.other?.accountType

  const activeClass = `transform  scale-125 text-yellow-300`
  const finishedStarClass = `text-yellow-300`

  const unfinishedStarsClass = `text-gray-300 dark:text-gray-500`

  const generateFinishStep = () => {
    const mainKeys = {
      profilePicture: userData.profilePicture,
      coverPicture: userData.coverPicture,
      [accountType === 'business' ? 'business' : 'personal']:
        accountType === 'business' ? userData.business : userData.company,
      background: userData.background,
      location: userData.location,
    }

    const vals = values(mainKeys)

    const wrapper = (str: string) => `Add ${str} to get a star`

    if (!vals[0]) {
      setNextStepText(wrapper('your profile picture'))
    } else if (!vals[1]) {
      setNextStepText(wrapper('your cover picture'))
    } else if (!vals[2]) {
      setNextStepText(wrapper(`${accountType} details`))
    } else if (!vals[3]) {
      setNextStepText(wrapper(`background details`))
    } else if (!vals[4]) {
      setNextStepText(wrapper(`location details`))
    } else {
      setNextStepText('Woah! You have completed your profile details')
    }

    const arrLen = filter(vals, (value: any) => Boolean(value))

    setFinishedStars(arrLen.length - 1)
  }

  useEffect(() => {
    generateFinishStep()
  }, [userData])

  return (
    <Card
      secondary
      content={
        <div className="pt-4 pb-2">
          <div className="gap-x-4 border-gray-300 dark:border-gray-600 border relative mb-4 py-4 rounded-full flex items-center  justify-around">
            {map(totalStars, (starIdx) =>
              finishedStars === starIdx || finishedStars > starIdx ? (
                <AiFillStar
                  key={starIdx}
                  className={`${starClass} ${
                    finishedStars === starIdx ? activeClass : finishedStarClass
                  }`}
                />
              ) : (
                <AiOutlineStar
                  key={starIdx}
                  className={`${starClass} ${unfinishedStarsClass}`}
                />
              )
            )}
          </div>
          <h4 className="dark:text-white text-lg font-medium text-gray-900 text-center">
            {nextStepText}
          </h4>
        </div>
      }
      privateCard
      cardTitle="Profile Strength"
    />
  )
}

export default ProfileStrength
