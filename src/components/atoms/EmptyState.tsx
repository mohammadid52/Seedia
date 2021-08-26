import Button from 'components/atoms/Button'

const EmptyState = ({
  title,
  subtitle,
  iconUrl,
  btnText,
  BtnIcon,
  onBtnClick,
  showEditOption,
}: {
  title: string
  subtitle?: string
  iconUrl?: string
  btnText?: string
  BtnIcon?: any
  showEditOption?: boolean
  onBtnClick?: () => void
}) => {
  return (
    <div className="text-center border dark:border-gray-600 border-gray-300 border-dashed p-4 py-12 rounded-lg">
      <img
        alt="experience"
        className="h-12 w-12"
        src={process.env.PUBLIC_URL + iconUrl}
      />
      <h3 className="mt-2 text-sm font-medium dark:text-gray-300 text-gray-900">
        {title}
      </h3>
      {showEditOption && (
        <>
          <p className="mt-1 text-sm text-gray-500">{subtitle}</p>
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
