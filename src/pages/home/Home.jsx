import HomeContent from 'components/HomeContent'

import Features from 'components/Features'
import Footer from 'components/CustomFooter'
import CustomSearchPanel from 'components/CustomSearch'
import Navigation from 'components/Navigation'
import { useEffect } from 'react'
import { updateDocumentTitle } from 'helpers'

const Home = ({ isUser, profileUrl, template, accountFilled }) => {
  useEffect(() => {
    updateDocumentTitle('Home')
  }, [])
  return (
    <div className="">
      <Navigation
        isUser={isUser}
        profileUrl={profileUrl}
        _
        template={template}
        accountFilled={accountFilled}
      />
      <div className="mx-auto max-w-smallScreen">
        <HomeContent />
        <div className="flex flex-col dark:bg-gray-900 bg-white">
          <CustomSearchPanel />
          <Features />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home
