import React, { useState } from 'react'
// import Header from './Header'
import HomeContent from 'components/HomeContent'
// import Search from 'components/Search'
import Features from 'components/Features'
import Footer from 'components/CustomFooter'
import Navigation from 'components/Navigation'
import Selector from 'components/atoms/Selector'
import { productsArray, departmentsArray } from '../../values/values'
import CountryListDropdown from 'components/CountryListDropdown'

const CustomSearchPanel = () => {
  const list = [
    { name: 'Receive quotes', href: '#/' },
    { name: 'Trending', href: '#/' },
    { name: 'Jobs', href: '#/' },
    { name: 'Remarkable', href: '#/' },
    { name: 'New', href: '#/' },
  ]

  const [selectedProduct, setSelectedProduct] = useState(productsArray[0])

  return (
    <div className="mx-auto w-full max-w-md my-12 px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
      <div className="grid space-x-12 sm:grid-cols-12 rounded-md h-12 grid-cols-1 px-10 dark:border-gray-700 border">
        <div className="col-span-3">
          <Selector
            selectedItem={selectedProduct.label}
            list={productsArray.map((product) => ({ name: product.label }))}
            placeholder="Select type of company"
            required
            onSelect={(item) => setSelectedProduct(item)}
          />
        </div>
        <div className="col-span-5">
          <input
            id="email-address"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="relative w-full text-sm border dark:border-gray-700 border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left  dark:placeholder-gray-400 placeholder-gray-500 focus:ring-pink-500 focus:border-pink-500 sm:max-w-xs "
            placeholder="Enter your email"
          />
        </div>
        <div className="col-span-3">
          <Selector
            selectedItem={selectedProduct.label}
            list={productsArray.map((product) => ({ name: product.label }))}
            placeholder="Select type of company"
            required
            onSelect={(item) => setSelectedProduct(item)}
          />
        </div>
        <div className="relative col-span-1">
          <CountryListDropdown />
        </div>
      </div>
      <div className="grid space-x-12 sm:grid-cols-5 rounded-md h-12 grid-cols-1 px-10 dark:border-gray-700 border">
        {list.map((item, idx) => {
          return (
            <>
              <div className="dark:text-white flex items-center justify-center  text-gray-600 link-hover cursor-pointer">
                {item.name}
              </div>
            </>
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
