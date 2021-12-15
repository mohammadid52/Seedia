import Meta from 'components/atoms/Meta/Meta'
import Footer from 'components/CustomFooter'
import CustomSearchPanel from 'components/CustomSearch'
import Features from 'components/Features'
import HomeContent from 'components/HomeContent'
import Navigation from 'components/Navigation'

const Home = ({ isUser, profileUrl, template, accountFilled }) => {
  return (
    <div className="bg-gray-100 dark:bg-gray-900">
      <Meta
        title="Home - Trading post - 13RMS"
        pageTitle="Home - Trading post - 13RMS"
      />
      <Navigation
        isUser={isUser}
        profileUrl={profileUrl}
        template={template}
        accountFilled={accountFilled}
      />
      <div className="mx-auto max-w-smallScreen">
        <HomeContent />
        <div className="flex flex-col dark:bg-gray-900 ">
          <CustomSearchPanel />
          <Features />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home
