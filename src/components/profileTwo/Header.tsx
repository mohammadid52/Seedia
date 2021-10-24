import useTheme from 'hooks/useTheme'
import { IParent } from 'interfaces/UniversalInterface'

const Header = ({ userData }: { userData?: IParent }) => {
  const { logo } = useTheme()

  return (
    <div className="h-32 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 ">
      <div className="max-w-7xl mx-auto flex items-center h-full">
        <img
          className="h-20 w-auto border-r border-gray-200 dark:border-gray-700 pr-6 "
          src={logo}
          alt="13RMS"
        />
        <div className="mx-6">
          <span className="dark:text-gray-400 text-gray-500 text-base font-medium ">
            {userData?.company?.jobTitle || ''}
          </span>
          <p className="dark:text-white text-gray-900   text-3xl font-semibold ">
            {userData?.fullName || ''}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Header
