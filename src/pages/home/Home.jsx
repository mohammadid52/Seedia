import React from 'react'
// import Header from './Header'
import HomeContent from 'components/HomeContent'
// import Search from 'components/Search'
import Features from 'components/Features'
import Footer from 'components/CustomFooter'
import Navigation from 'components/Navigation'

const CustomSearchPanel = () => {
  const list = [
    { name: 'Receive quotes', href: '#/' },
    { name: 'Trending', href: '#/' },
    { name: 'Jobs', href: '#/' },
    { name: 'Remarkable', href: '#/' },
    { name: 'New', href: '#/' },
  ]
  return (
    <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
      <div className="flex space-x-12 h-12 items-center px-4 dark:border-gray-700 border">
        {list.map((item) => {
          return (
            <div className="dark:text-white dark:border-gray-700 border link-hover cursor-pointer">
              {item.name}
            </div>
          )
        })}
      </div>
    </div>
  )
}

const Home = ({ themeToggler, theme }) => {
  return (
    <div {...{ className: 'w-full' }}>
      <Navigation theme={theme} />
      <HomeContent theme={theme} />
      <div className="flex flex-col dark:bg-gray-800 bg-white">
        {/* <Search theme={theme} /> */}
        <CustomSearchPanel />
        <Features theme={theme} />
      </div>
      {/* <Footer theme={theme} /> */}
      <Footer />
    </div>
  )
}

export default Home
