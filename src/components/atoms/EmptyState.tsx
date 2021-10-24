import Button from 'components/atoms/Button'
import Lottie from 'react-lottie'

const EmptyState = ({
  title,
  subtitle,
  iconUrl,
  btnText,
  BtnIcon,
  onBtnClick,
  showEditOption,
  animation,
}: {
  title: string
  subtitle?: string
  iconUrl?: string
  btnText?: string
  BtnIcon?: any
  animation?: any
  showEditOption?: boolean
  onBtnClick?: () => void
}) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }

  return (
    <div className="text-center border flex flex-col items-center justify-evenly dark:border-gray-600 border-gray-300 border-dashed p-4 py-12 rounded-lg">
      {iconUrl && (
        <img
          alt="experience"
          className="h-12 w-12"
          src={process.env.PUBLIC_URL + iconUrl}
        />
      )}
      {animation && (
        <Lottie
          isStopped={false}
          isPaused={false}
          options={defaultOptions}
          height={200}
          width={200}
        />
      )}
      <h3 className="mt-2 text-sm font-medium dark:text-gray-300 text-gray-900">
        {title}
      </h3>
      <p className="mt-1 text-sm text-gray-500">{subtitle}</p>
      {showEditOption && (
        <>
          <div className="mt-6">
            <Button
              size="sm"
              label={btnText}
              gradient
              Icon={BtnIcon}
              onClick={onBtnClick}
            />
          </div>
        </>
      )}
    </div>
  )
}
export default EmptyState
