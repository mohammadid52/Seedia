import React from 'react'
// import Header from './Header'
import HomeContent from 'components/HomeContent'
// import Search from 'components/Search'
import Features from 'components/Features'
import Footer from 'components/CustomFooter'
import CustomSearchPanel from 'components/CustomSearch'

const Home = () => {
  return (
    <div {...{ className: 'w-full' }}>
      <HomeContent />
      <div className="flex flex-col dark:bg-gray-800 bg-white">
        <CustomSearchPanel />
        <Features />
      </div>

      <Footer />
    </div>
  )
}

export default Home
