import Button from 'components/atoms/Button'
import { useHistory } from 'react-router-dom'
const NotFound = ({
  errorCode = '404',
  errorTitle = 'Page not found',
  errorMessage = 'Please check the URL in the address bar and try again.',
}) => {
  const history = useHistory()
  return (
    <div className="bg-white min-h-screen px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8">
      <div className="max-w-max mx-auto">
        <main className="sm:flex">
          <p className="text-4xl gradient-text font-extrabold text-indigo-600 sm:text-5xl">
            {errorCode}
          </p>
          <div className="sm:ml-6">
            <div className="sm:border-l sm:border-gray-200 sm:pl-6">
              <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
                {errorTitle}
              </h1>
              <p className="mt-1 text-base text-gray-500">{errorMessage}</p>
            </div>
            <div className="mt-10 flex space-x-3 sm:border-l sm:border-transparent">
              <Button
                label="Go back home"
                onClick={() => history.push('/')}
                gradient
                shadow
              />
              <Button
                label="Contact support"
                onClick={() => history.push('/')}
                customClass
                className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-600 bg-pink-100 text-pink-500 px-4 py-2 rounded font-medium "
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default NotFound
