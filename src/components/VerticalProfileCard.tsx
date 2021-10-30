import { links } from 'constants/Links'
import useAccountType from 'hooks/useAccountType'
import { IParent } from 'interfaces/UniversalInterface'
import { avatarPlaceholder } from 'state/Redux/constants'

const VerticalProfileCard = ({
  user,
  content = null,
}: {
  user: IParent
  content?: React.ReactNode
}) => {
  const { isBusiness } = useAccountType(user)

  const defaultContent = (
    <>
      <p className="text-sm font-medium dark:text-white text-gray-500 ">
        {isBusiness ? user?.business?.name : user?.company?.jobTitle}
      </p>
      <a
        className="dark:text-white text-gray-900 text-lg font-medium"
        href={links.getProfileById(
          user?.profileUrl,
          user?.other.template,
          'public'
        )}
      >
        <div className="mt-2">View full profile</div>
      </a>
    </>
  )

  return (
    <div className="rounded-lg border dark:border-gray-700  border-gray-200 overflow-hidden lg:max-w-xs bg-white dark:bg-gray-800">
      <img
        alt=""
        src={
          user?.coverPicture
            ? user?.coverPicture
            : 'https://source.unsplash.com/1600x900/?nature,water'
        }
        className="w-full lg:h-28 sm:h-24 object-cover h-20"
      />
      <div className="flex justify-center -mt-8">
        <img
          alt=""
          src={user.profilePicture ? user.profilePicture : avatarPlaceholder}
          className="rounded-full border-solid lg:h-16 lg:w-16 h-12 w-12  border-white border-2 -mt-3"
        />
      </div>
      <div className={`text-center ${content ? '' : 'px-3 pb-6 pt-2'}`}>
        <a
          href={links.getProfileById(
            user.profileUrl,
            user.other.template,
            'private'
          )}
          className="dark:text-white cursor-pointer text-gray-900 text-base font-bold "
        >
          {user.fullName}
        </a>
        {content || defaultContent}
      </div>
    </div>
  )
}

export default VerticalProfileCard
