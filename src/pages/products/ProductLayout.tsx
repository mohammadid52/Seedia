import UniversalHeader from 'components/headers/UniversalHeader'
import { IParent } from 'interfaces/UniversalInterface'

const ProductLayout = ({
  children,
  userData,
}: {
  children: React.ReactNode
  userData?: IParent
}) => {
  return (
    <>
      {userData && <UniversalHeader userData={userData} />}

      <div className="max-w-2xl min-h-screen mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8 overflow-hidden bg-white dark:bg-gray-900 py-12">
        {children}
      </div>
    </>
  )
}

export default ProductLayout
