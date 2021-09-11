import HomeContent from 'components/HomeContent'

import Features from 'components/Features'
import Footer from 'components/CustomFooter'
import CustomSearchPanel from 'components/CustomSearch'
import Navigation from 'components/Navigation'

const Home = ({ isUser, profileUrl, template, accountFilled }) => {
  return (
    <div className="">
      <Navigation
        userId={profileUrl}
        isUser={isUser}
        template={template}
        accountFilled={accountFilled}
      />
      <div className="mx-auto max-w-smallScreen">
        <HomeContent />
        <div className="flex flex-col dark:bg-gray-800 bg-white">
          <CustomSearchPanel />
          <Features />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home
