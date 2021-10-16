import React from 'react'
import Lottie from 'react-lottie'
import searchingProducts from 'assets/animation/searchingProducts.json'

const ProductLayout = ({
  children,
  loading = false,
}: {
  children: React.ReactNode
  loading?: boolean
}) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: searchingProducts,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }

  const renderContent = () => {
    if (loading) {
      return (
        <Lottie
          isStopped={false}
          isPaused={false}
          options={defaultOptions}
          height={400}
          width={400}
        />
      )
    } else {
      return children
    }
  }

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen min-w-screen">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        {renderContent()}
      </div>
    </div>
  )
}

export default ProductLayout
