import AdditionalInfo from 'components/AdditionalInfo'
import EmptyState from 'components/atoms/EmptyState'
import Meta from 'components/atoms/Meta/Meta'
import BottomCard from 'components/BottomCard'
import CustomFooter from 'components/CustomFooter'
import DiscoverCard from 'components/DiscoverButton'
import Loading from 'components/Loading'
import Activity from 'components/ProfileComponents/Activity'
import ProfileStrength from 'components/ProfileStrength'
import PublicProfileCard from 'components/PublicProfileCard'
import Sidebar from 'components/Sidebar'
import { links } from 'constants/Links'
import useAccountType from 'hooks/useAccountType'
import { useRouter } from 'hooks/useRouter'
import useUser from 'hooks/useUser'
import { IParent } from 'interfaces/UniversalInterface'
import { isEmpty } from 'lodash'
import DashboardHeader from 'pages/DashboardHeader'
import About from 'pages/profile/About'
import AdditionalFeatures from 'pages/profile/AdditionalFeatures'
import Background from 'pages/profile/Background'
import Cover from 'pages/profile/Cover'
import Layout from 'pages/profile/Layout'
import PeopleAlsoViewed from 'pages/profile/PeopleAlsoViewed'
import Recommendations from 'pages/profile/Recommendations'
import { useEffect } from 'react'
import { useHistory } from 'react-router'
import RandomUsers from './RandomUsers'

const Profile = ({ userData }: { userData: IParent }) => {
  const route: any = useRouter()
  const { viewMode, userId: userIdFromParam } = route?.match?.params

  const {
    otherUserData,
    iAmOwnerOfThisProfile,
    isFetched,
    isLoading,
    refetch: refetchProfile,
  } = useUser(userIdFromParam, userData)
  const showAllButtons = iAmOwnerOfThisProfile && viewMode === 'private'

  const history = useHistory()

  const commonProps: { authUser: boolean; userData: IParent } = {
    authUser: showAllButtons,
    userData: iAmOwnerOfThisProfile ? userData : otherUserData,
  }

  const user = commonProps?.userData

  useEffect(() => {
    if (!isEmpty(user)) {
      history.push(links.getProfile(user, iAmOwnerOfThisProfile))
    }
  }, [user])

  const { isBusiness, getType } = useAccountType(userData)

  if (isLoading && !isFetched) {
    return <Loading />
  }

  return (
    <div className="bg-gray-100 min-h-screen dark:bg-gray-900 smooth-scroll pt-32">
      <DashboardHeader userData={userData} />

      {!isEmpty(user) ? (
        <div>
          <Meta
            pageTitle={`${user.fullName} | 13RMS`}
            userName={user.fullName}
            pageUrl={links.getProfile(user)}
            imageUrl={user?.profilePicture}
            pageType="social media"
            title={`${user.fullName} | 13RMS`}
            keywords={`profile,${user.fullName},13RMS,tradingpost, linkedin,instagram,facebook`}
          />
          <Sidebar />
          <div className="flex">
            <div
              className="mx-auto min-h-screen  w-full"
              style={{ maxWidth: '90rem' }}
            >
              <Cover isBusiness={isBusiness} {...commonProps} />

              <div className="my-6">
                <Layout
                  userData={userData}
                  business={isBusiness}
                  firstCol={
                    <div className="space-y-8">
                      <About {...commonProps} />
                      <AdditionalInfo secondary {...commonProps} />
                      {/* {iAmOwnerOfThisProfile && ( */}
                      <AdditionalFeatures
                        refetchProfile={refetchProfile}
                        iAmOwnerOfThisProfile={iAmOwnerOfThisProfile}
                        userData={userData}
                        otherUserData={otherUserData}
                        isBusiness={getType(user).isBusiness}
                      />
                      {/* // )} */}

                      {iAmOwnerOfThisProfile && (
                        <DiscoverCard
                          extraItems={[
                            { link: links.myItems(), name: 'My items' },
                          ]}
                        />
                      )}
                    </div>
                  }
                  secondCol={
                    <div className="space-y-8 py-0">
                      <Background {...commonProps} />
                      <Activity
                        userData={user}
                        iAmOwnerOfThisProfile={iAmOwnerOfThisProfile}
                      />
                      <Recommendations
                        iAmOwnerOfThisProfile={iAmOwnerOfThisProfile}
                        {...commonProps}
                        recommendation={user.recommendation}
                      />

                      <RandomUsers
                        skipList={user?.following}
                        userData={userData}
                        list={userData.following}
                      />
                    </div>
                  }
                  thirdCol={
                    <div className="space-y-8 ">
                      {iAmOwnerOfThisProfile && (
                        <PublicProfileCard userData={userData} />
                      )}
                      {iAmOwnerOfThisProfile && (
                        <ProfileStrength {...commonProps} />
                      )}

                      <div className="xl:hidden space-y-12 block">
                        <About {...commonProps} />
                        <AdditionalInfo secondary {...commonProps} />
                        {/* {iAmOwnerOfThisProfile && ( */}
                        <AdditionalFeatures
                          refetchProfile={refetchProfile}
                          iAmOwnerOfThisProfile={iAmOwnerOfThisProfile}
                          userData={userData}
                          otherUserData={otherUserData}
                          isBusiness={getType(user).isBusiness}
                        />
                        {/* // )} */}

                        {iAmOwnerOfThisProfile && (
                          <DiscoverCard
                            extraItems={[
                              { link: links.myItems(), name: 'My items' },
                            ]}
                          />
                        )}
                      </div>

                      <PeopleAlsoViewed userData={userData} showSingleCard />
                    </div>
                  }
                />
              </div>
            </div>
          </div>
          {!iAmOwnerOfThisProfile && (
            <BottomCard
              myFollowings={userData.following}
              userData={otherUserData}
            />
          )}
          <CustomFooter />
        </div>
      ) : (
        <div className="flex items-center  overflow-hidden  max-h-screen min-h-96   justify-center">
          <EmptyState
            hideBorders
            title="Oops Can't find user."
            subtitle={`Please check url`}
            iconUrl={'/question.png'}
          />
        </div>
      )}
    </div>
  )
}

export default Profile
