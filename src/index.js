import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import 'styles/index.scss'
import 'styles/index.css'
import App from 'App'
import Loading from 'components/Loading'

const MainLoader = () => (
  <Suspense fallback={<Loading />}>
    <App />
  </Suspense>
)

ReactDOM.render(<MainLoader />, document.getElementById('root'))
