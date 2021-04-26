import React from 'react'

import Header from './Header'

const DarkModeToggle = ({ themeToggler,theme }) => {
  return <Header {...{ themeToggler,theme }} />
}

export default DarkModeToggle
