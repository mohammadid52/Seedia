import HomeContent from 'components/HomeContent'

import Features from 'components/Features'
import Footer from 'components/CustomFooter'
import CustomSearchPanel from 'components/CustomSearch'
import Navigation from 'components/Navigation'

const Home = ({ isUser, profileUrl, template, accountFilled }) => {
  return (
    <div {...{ className: 'w-full' }}>
      <Navigation
        userId={profileUrl}
        isUser={isUser}
        template={template}
        accountFilled={accountFilled}
      />
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
