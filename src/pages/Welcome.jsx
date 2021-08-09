import React from 'react'
import Home from 'pages/home/Home'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)

const Welcome = () => {
  return <Home />
}

export default Welcome
