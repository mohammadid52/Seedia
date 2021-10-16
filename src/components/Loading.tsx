import Meta from 'components/atoms/Meta/Meta'
import 'styles/animatedLoading.scss'

const Loading = () => {
  return (
    <>
      <Meta pageTitle="Loading..." />

      <div className="main-loader  flex-col h-screen w-screen bg-white dark:bg-gray-900 flex items-center justify-center">
        <img
          className="h-36  animate-pulse duration-75 w-36"
          src={`${process.env.PUBLIC_URL}/logo.png`}
          alt="Loading..."
        />

        <div className="loader mt-8 ">
          <div className="loading_1 border border-gray-200 dark:border-gray-700"></div>
        </div>
      </div>
    </>
  )
}

export default Loading
