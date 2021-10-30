import Button from 'components/atoms/Button'
import Card from 'components/atoms/Card'
import EmptyState from 'components/atoms/EmptyState'
import { links } from 'constants/Links'
import { IActivity, IParent } from 'interfaces/UniversalInterface'
import { avatarPlaceholder } from 'state/Redux/constants'

const Activity = ({
  iAmOwnerOfThisProfile,
  userData,
}: {
  iAmOwnerOfThisProfile: boolean
  userData: IParent
}) => {
  const slicedList = userData?.activity?.slice(0, 4)

  return (
    <Card
      cardTitle="Activity"
      content={
        <div>
          {iAmOwnerOfThisProfile ? (
            <a href={links.followers()} className="block">
              <div className="-mt-2 mb-2 text-link hover:underline font-medium tracking-wide ">
                {userData?.followers?.length} followers
              </div>
            </a>
          ) : (
            <h5 className="-mt-2 mb-2 text-gray-600 dark:text-gray-400">
              {userData?.followers?.length} followers
            </h5>
          )}
          {userData?.activity?.length > 0 ? (
            <div>
              <div
                className={`grid gap-4 ${
                  userData?.activity?.length > 1 ? 'grid-cols-2' : 'grid-cols-1'
                }`}
              >
                {slicedList.map((activity: IActivity, idx) => {
                  const postUrl = links.postById(activity.postUrl)
                  const showUserImage = Boolean(activity.userImage)
                  return (
                    <div key={activity.text + idx} className="sm:flex">
                      <div className="mb-4 flex-shrink-0 sm:mb-0 sm:mr-4">
                        <img
                          src={
                            activity.userImage
                              ? activity.userImage
                              : avatarPlaceholder
                          }
                          alt="13RMS"
                          className={`sm:h-14 h-12 w-12 sm:w-14  border-gradient border-transparent border-2 ${
                            showUserImage ? 'rounded-full' : ''
                          }`}
                        />
                      </div>
                      <a href={postUrl} className="group cursor-pointer">
                        <h4 className="text-base line-clamp group-hover:underline dark:text-gray-200 font-bold">
                          {activity.text}
                        </h4>
                        <span className="text-gray-500 dark:text-gray-600 group-hover:underline">
                          {activity.subtext}
                        </span>
                      </a>
                    </div>
                  )
                })}
              </div>
              <div className="justify-end flex items-center">
                <Button
                  label="Show all activity"
                  fullWidth
                  className="mt-4 "
                  invert
                  target=""
                  gradient
                  link={links.recentActivity(userData.profileUrl)}
                />
              </div>
            </div>
          ) : (
            <EmptyState
              title="No Activity"
              subtitle={`${
                iAmOwnerOfThisProfile ? 'Your' : `${userData.firstName}'s'`
              } recent posts, comments, replies will be here`}
              iconUrl={'/no-activity.png'}
            />
          )}
        </div>
      }
    />
  )
}

export default Activity
