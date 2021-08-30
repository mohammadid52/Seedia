import { Fragment } from 'react'

const HomeContent = ({ theme }) => {
  return (
    <Fragment>
      <div className="dark:bg-gray-800">
        <div className="text-center pt-12 pb-4 flex items-center flex-col">
          <img
            alt="13RMS"
            src={process.env.PUBLIC_URL + '/logo.png'}
            className="m-0 h-48"
          />
          <p className="dark:text-gray-300 max-w-xl mt-5 mx-auto text-xl text-gray-500">
            The place to sell your products, services and build business
            relationships
          </p>
        </div>
      </div>
    </Fragment>
  )
}

export default HomeContent
