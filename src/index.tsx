import App from 'App'
import Loading from 'components/Loading'
import UserContextProvider from 'context/UserContext'
import HeaderContextProvider from 'context/HeaderContext'
import NotificationContextProvider from 'context/NotificationContext'
import PostContextProvider from 'context/PostContext'
import 'lightgallery/css/lg-thumbnail.css'
import 'lightgallery/css/lg-zoom.css'
// import styles
import 'lightgallery/css/lightgallery.css'
import NotFound from 'pages/NotFound'
import { Suspense } from 'react'
import 'react-datepicker/dist/react-datepicker.css'
import ReactDOM from 'react-dom'
import { ErrorBoundary } from 'react-error-boundary'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Provider } from 'react-redux'
import { store } from 'state'
import 'styles/index.css'
import 'styles/index.scss'
import { ReactQueryDevtools } from 'react-query/devtools'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
})

// @ts-ignore
export const ErrorFallback = ({ error, resetErrorBoundary }) => {
  if (process.env.NODE_ENV === 'development') {
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
  return null
}

const loader = document.querySelector('.main-loader')

const hideLoader = () => loader?.classList.add('hide')

const MainApp = ({ hideLoader }: any) => {
  // useEffect(() => {
  //   hideLoader()
  // }, [])

  return (
    <Suspense fallback={<Loading />}>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <QueryClientProvider client={queryClient}>
          <Provider store={store}>
            <NotificationContextProvider>
              <UserContextProvider>
                <PostContextProvider>
                  <HeaderContextProvider>
                    <div className="min-h-screen w-screen">
                      <App />
                    </div>
                  </HeaderContextProvider>
                </PostContextProvider>
              </UserContextProvider>
            </NotificationContextProvider>
          </Provider>
          <ReactQueryDevtools />
        </QueryClientProvider>
      </ErrorBoundary>
    </Suspense>
  )
}

ReactDOM.render(
  <MainApp hideLoader={hideLoader} />,
  document.getElementById('root')
)
