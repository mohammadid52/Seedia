import Badge from 'components/atoms/Badge'
import Button from 'components/atoms/Button'
import { links } from 'constants/Links'
import useFollow from 'hooks/useFollow'
import { IParent } from 'interfaces/UniversalInterface'
import { avatarPlaceholder } from 'state/Redux/constants'

const FullName = ({ user }: { user?: IParent }) => {
  return (
    <h4
      title={user?.fullName}
      className="dark:text-white text-center hover:underline cursor-pointer text-gray-900 font-semibold tracking-wide text-lg"
    >
      <a
        style={{ zIndex: 999 }}
        className="cursor-pointer"
        // target="_blank"
        // rel="noreferrer"
        href={links.getProfileById(
          user?.profileUrl,
          user?.other?.template || 1,
          'private'
        )}
      >
        {user?.fullName}
      </a>
    </h4>
  )
}

const User = ({
  user,

  disableFollow = false,
  onBtnClick = undefined,
  btnText = '',
}: {
  user?: IParent
  following?: boolean
  disableFollow?: boolean
  onBtnClick?: any
  btnText?: string
}) => {
  const isBusiness = user?.other?.accountType === 'business'
  const isPersonal = user?.other?.accountType === 'personal'

  const { following, addFollow, removeFollow } = useFollow(
    user.following || [],
    user._id
  )

  return (
    <div
      key={user?._id}
      className="flex border  border-gray-300 overflow-hidden m-0 dark:border-gray-600 sm:h-64 xl:h-72 xl:60 sm:w-56 rounded-xl relative flex-col items-center "
    >
      <Badge
        className={`${
          user?.other?.accountType === 'business'
            ? 'bg-pink-100 text-pink-800'
            : user?.other?.accountType === 'personal'
            ? 'bg-yellow-100 text-yellow-800'
            : 'bg-blue-100 text-blue-800'
        } mt-2 mr-2 absolute top-0 right-0`}
        textSize="xs"
        rounded="full"
        label={user?.other?.accountType}
      />
      <div className="h-1/2 flex flex-col items-center justify-center">
        <img
          src={user?.profilePicture ? user?.profilePicture : avatarPlaceholder}
          alt=""
          className="h-24 border-gradient border-4 border-transparent w-24 rounded-full shadow-xl"
        />
      </div>
      <div>
        <FullName user={user} />

        <div className=" flex items-center justify-center ">
          <h3
            title={
              isBusiness
                ? user?.business?.name
                : isPersonal
                ? user?.company?.companyName
                : user?.background?.education &&
                  user?.background?.education[0].name
            }
            className=" text-gray-400 text-center truncate whitespace-pre-line font-medium"
          >
            {isBusiness
              ? user?.business?.name
              : isPersonal
              ? user?.company?.companyName
              : user?.background?.education &&
                user?.background?.education[0].name}
          </h3>
        </div>
      </div>
      <div className="absolute bottom-3 items-center flex justify-center">
        <Button
          title={following ? 'Unfollow' : 'Follow'}
          gradient
          disabled={disableFollow}
          gradientHover={false}
          className="mt-6"
          invert
          onClick={() =>
            onBtnClick !== undefined
              ? onBtnClick()
              : following
              ? removeFollow.mutate(user?._id)
              : addFollow.mutate(user?._id)
          }
          rounded="rounded-full"
          size="lg"
          label={onBtnClick ? btnText : following ? 'Following' : 'Follow'}
        />
      </div>
    </div>
  )
}

export default User
