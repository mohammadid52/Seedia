import React from 'react'
// import Header from './Header'
import HomeContent from 'components/HomeContent'
// import Search from 'components/Search'
import Features from 'components/Features'
import Footer from 'components/CustomFooter'
import Navigation from 'components/Navigation'
import CustomSearchPanel from 'components/CustomSearch'

const Home = ({ themeToggler, theme }) => {
  return (
    <div {...{ className: 'w-full' }}>
      <Navigation theme={theme} />
      <HomeContent theme={theme} />
      <div className="flex flex-col dark:bg-gray-800 bg-white">
        <CustomSearchPanel />
        <Features theme={theme} />
      </div>

      <Footer />
    </div>
  )
}

export default Home
