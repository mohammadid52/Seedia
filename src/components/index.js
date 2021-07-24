import React from 'react'
import './styles/IndexStyles.js'

// import Header from './Header'
import HomeContent from './HomeContent'
import Search from './Search'
import Features from './Features'
import Footer from './Footer'
import Navigation from './Navigation'

const Home = ({ themeToggler, theme }) => {
  return (
    <div {...{ className: 'w-full' }}>
      <Navigation />
      <HomeContent {...{ theme }} />
      <Search {...{ theme }} />
      <Features {...{ theme }} />
      <Footer {...{ theme }} />
    </div>
  )
}

export default Home
