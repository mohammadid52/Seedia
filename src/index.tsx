import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import 'styles/index.scss'
import 'styles/index.css'
import App from 'App'
import Loading from 'components/Loading'
import UserContextProvider from 'context/UserContext'
import { ErrorBoundary } from 'react-error-boundary'
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

const MainLoader = () => (
  <Suspense fallback={<Loading />}>
    <UserContextProvider>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <App />
      </ErrorBoundary>
    </UserContextProvider>
  </Suspense>
)

ReactDOM.render(<MainLoader />, document.getElementById('root'))
