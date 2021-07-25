import React from 'react'
// import Header from './Header'
import HomeContent from 'components/HomeContent'
import Search from 'components/Search'
import Features from 'components/Features'
import Footer from 'components/CustomFooter'
import Navigation from 'components/Navigation'

const Home = ({ themeToggler, theme }) => {
  return (
    <div {...{ className: 'w-full' }}>
      <Navigation theme={theme} />
      <HomeContent theme={theme} />
      <div className="flex flex-col">
        <Search theme={theme} />

        <Features theme={theme} />
      </div>
      {/* <Footer theme={theme} /> */}
      <Footer />
    </div>
  )
}

export default Home
