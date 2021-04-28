import React , { useEffect } from 'react'
import DarkModeToggle from './DarkModeToggle'

// import Header from './Header'
import HomeContent from './HomeContent'
import Search from './Search'
import Features from './Features'
import Footer from './Footer'

import IndexStyles from './styles/IndexStyles'
import Section from './Sections'

const Home = ({ themeToggler, theme }) => {
  useEffect(() => {
    console.log(theme)
  })
  return (
    <div {...{ className: IndexStyles }}>
      <div className="navbar">
        <DarkModeToggle {...{ themeToggler, theme }} />
      </div>
      <HomeContent {...{ theme }} />
      <Search {...{ theme }} />
      <Features {...{ theme }} />
      <Section {...{theme}} />
      <Footer {...{ theme }} />
    </div>
  )
}

export default Home
