import './styles/IndexStyles.js'
import React from 'react'
import DarkModeToggle from './DarkModeToggle'

// import Header from './Header'
import HomeContent from './HomeContent'
import Search from './Search'
import Features from './Features'
import Footer from './Footer'

const Home = ({ themeToggler, theme }) => {
    return (
        <div {...{ className: 'w-full' }}>
            <div className="navbar">
                <DarkModeToggle {...{ themeToggler, theme }} />
            </div>
            <HomeContent {...{ theme }} />
            <Search {...{ theme }} />
            <Features {...{ theme }} />
            <Footer {...{ theme }} />
        </div>
    )
}

export default Home
