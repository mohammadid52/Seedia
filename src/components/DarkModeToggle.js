import React from 'react'

import Header from 'components/Header'

const DarkModeToggle = ({ themeToggler, theme }) => {
  return <Header themeToggler={themeToggler} theme={theme} />
}

export default DarkModeToggle
