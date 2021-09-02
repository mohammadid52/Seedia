import { Suspense } from 'react'
import ReactDOM from 'react-dom'
import 'styles/index.scss'
import 'styles/index.css'
import 'react-datepicker/dist/react-datepicker.css'
import App from 'App'
import Loading from 'components/Loading'
import UserContextProvider from 'context/UserContext'
import { ErrorBoundary } from 'react-error-boundary'
import { Provider } from 'react-redux'
import { store } from 'state'
import NotFound from 'pages/NotFound'

// @ts-ignore
function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <NotFound
      tryAgain={resetErrorBoundary}
      tryAgainText="Try again"
      errorCode={'403'}
      errorTitle={'Oops! Something went wrong'}
      errorMessage={error.message}
    />
  )
}

const MainApp = () => (
  <Suspense fallback={<Loading />}>
    <Provider store={store}>
      <UserContextProvider>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <App />
        </ErrorBoundary>
      </UserContextProvider>
    </Provider>
  </Suspense>
)

ReactDOM.render(<MainApp />, document.getElementById('root'))
