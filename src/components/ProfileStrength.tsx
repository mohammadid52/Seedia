import { IParent } from 'interfaces/UniversalInterface'
import React, { useEffect, useState } from 'react'
import Card from 'components/atoms/Card'
import 'styles/loader.scss'
import { filter, values } from 'lodash'

const ProfileStrength = ({
  userData,
  authUser,
  secondary,
}: {
  userData?: IParent
  authUser: boolean
  secondary?: boolean
}) => {
  const [nextStepText, setNextStepText] = useState('')

  const accountType = userData?.other?.accountType

  const [progress, setProgress] = useState(20)

  const generateFinishStep = () => {
    const mainKeys = {
      profilePicture: userData?.profilePicture,
      coverPicture: userData?.coverPicture,
      [accountType === 'business' ? 'business' : 'personal']:
        accountType === 'business' ? userData?.business : userData?.company,
      background: userData?.background,
      location: userData?.location,
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

    setProgress(arrLen.length * 20)
  }

  useEffect(() => {
    generateFinishStep()
  }, [userData])

  return (
    <Card
      className="mb-12"
      secondary={secondary}
      content={
        <div className=" pb-2 flex flex-col items-center">
          <div
            className={`progress-circle ${
              progress >= 50 ? 'over50' : ''
            } p${progress}`}
          >
            <span>{progress}%</span>
            <div className="left-half-clipper">
              <div className="transition-all duration-1000 first50-bar"></div>
              <div className="value-bar transition-all duration-1000"></div>
            </div>
          </div>

          <h4 className="dark:text-gray-400  text-sm font-medium text-gray-600 text-center">
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
