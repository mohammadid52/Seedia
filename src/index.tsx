import { Suspense } from 'react'
import ReactDOM from 'react-dom'
import 'styles/index.scss'
import 'styles/index.css'
import App from 'App'
import Loading from 'components/Loading'
import UserContextProvider from 'context/UserContext'
import { ErrorBoundary } from 'react-error-boundary'
import { Provider } from 'react-redux'
import { store } from 'state'
import AuthWrapper from 'containers/AuthWrapper'

// @ts-ignore
function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  )
}

// latest test server
// https://611807137e05ef00074bcb13--festive-mcclintock-bdc127.netlify.app/

const MainApp = () => (
  <Suspense fallback={<Loading />}>
    <Provider store={store}>
      {/* <AuthWrapper> */}
      <UserContextProvider>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <App />
        </ErrorBoundary>
      </UserContextProvider>
      {/* </AuthWrapper> */}
    </Provider>
  </Suspense>
)

ReactDOM.render(<MainApp />, document.getElementById('root'))
