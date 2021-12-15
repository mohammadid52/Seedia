import { IParent } from 'interfaces/UniversalInterface'
import DashboardHeader from 'pages/DashboardHeader'

const ProductLayout = ({
  children,
  userData,
}: {
  children: React.ReactNode
  userData?: IParent
}) => {
  return (
    <div className="dark:bg-gray-900 bg-gray-100">
      {userData && <DashboardHeader userData={userData} />}

      <div className="max-w-2xl min-h-screen mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8 overflow-hidden bg-gray-100 smooth-scroll dark:bg-gray-900 py-12">
        {children}
      </div>
    </div>
  )
}

export default ProductLayout
