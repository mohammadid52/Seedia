import React, { useEffect } from 'react'
import Home from 'pages/home/Home'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)

const Welcome = () => {
  useEffect(() => {
    const theme = localStorage.getItem('theme')
    if (theme !== 'dark') {
      localStorage.setItem('theme', 'dark')
    }
  }, [])
  return <Home />
}

export default Welcome
