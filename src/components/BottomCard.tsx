import Button from 'components/atoms/Button'
import useAccountType from 'hooks/useAccountType'
import useFollow from 'hooks/useFollow'
import { IParent } from 'interfaces/UniversalInterface'
import { avatarPlaceholder } from 'state/Redux/constants'
import { classNames } from 'utils/classNames'

const BottomCard = ({
  userData,
  myFollowings,
}: {
  userData: IParent
  myFollowings: string[]
}) => {
  const { isBusiness } = useAccountType(userData)

  const { following, addFollow, removeFollow } = useFollow(
    myFollowings || [],
    userData._id.toString()
  )

  return (
    <div
      style={{ zIndex: 999 }}
      className={classNames(
        following ? 'translate-y-28' : 'translate-y-0',
        'transform transition-all duration-500 fixed bottom-5 inset-x-0'
      )}
    >
      <div className=" h-20  overflow-hidden p-4 mx-auto bg-white border dark:border-gray-700 border-gray-200 shadow-xl rounded-lg dark:bg-gray-800  max-w-112">
        <div className="flex items-center justify-between">
          <div className="flex">
            <div className="mr-4 flex-shrink-0">
              <img
                className="inline-block lg:h-12 lg:w-12 h-12 w-12 rounded-full ring-2 dark:ring-transparent ring-white"
                src={
                  userData?.profilePicture
                    ? userData?.profilePicture
                    : avatarPlaceholder
                }
                alt={''}
              />
            </div>
            <div>
              <h4 className="text-lg text-gray-900 dark:text-white font-bold">
                {userData?.fullName}
              </h4>
              <p className=" text-sm font-medium dark:text-gray-400 text-gray-600 ">
                {isBusiness
                  ? userData.business.name
                  : userData.company.jobTitle}{' '}
                <span className="text-xs dark:text-gray-500 text-gray-500 font-medium">
                  • {userData?.followers?.length || 0} followers{' '}
                </span>
              </p>
            </div>
          </div>
          <div>
            <Button
              onClick={() => {
                following
                  ? removeFollow.mutate(userData?._id)
                  : addFollow.mutate(userData?._id)
              }}
              label={following ? 'Unfollow' : 'Follow'}
              gradient
              size="lg"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default BottomCard
