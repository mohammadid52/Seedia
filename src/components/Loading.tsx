import 'styles/animatedLoading.scss'
const Loading = () => {
  return (
    <div className="  flex-col h-screen w-screen bg-white dark:bg-gray-800 flex items-center justify-center">
      <img
        className="h-36 w-36"
        src={`${process.env.PUBLIC_URL}/logo.png`}
        alt="Loading..."
      />
      <div className="loader mt-8">
        <div className="loading_1"></div>
        {/* <div className="loading_2">Loading GfG...</div> */}
      </div>
    </div>
  )
}

export default Loading
