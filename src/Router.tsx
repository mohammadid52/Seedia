import { links } from 'constants/Links'
import AuthContainer from 'containers/AuthContainer'
import UsersList from 'pages/UserList'
import { lazy } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import PrivateRoute from 'routes/PrivateRoute'

const BusinessStepOne = lazy(() => import('pages/account/business/StepOne')) // page
const ChooseAccount = lazy(() => import('pages/account/other/ChooseAccount')) // page
const BusinessStepTwo = lazy(() => import('pages/account/business/StepTwo')) // page
const ChooseTemplate = lazy(() => import('pages/account/other/ChooseTemplate')) // page
const Dashboard = lazy(() => import('pages/dashboard')) // page
const UserFollowers = lazy(() => import('pages/followers/UserFollowers')) // page
const ForgotPassword = lazy(() => import('pages/ForgotPassword')) // page
const GroupsView = lazy(() => import('pages/groups/GroupsView')) // page
const SingleGroupView = lazy(() => import('pages/groups/SingleGroupView')) // page
const Home = lazy(() => import('pages/home/Home')) // page
const NotFound = lazy(() => import('pages/NotFound')) // page
const RecentActivity = lazy(() => import('pages/posts/RecentActivity')) // page
const SinglePostView = lazy(() => import('pages/posts/SinglePostView')) // page
const AddProduct = lazy(() => import('pages/products/AddProduct')) // page
const BrowseProducts = lazy(() => import('pages/products/BrowseProducts')) // page
const ProductDetails = lazy(() => import('pages/products/ProductDetails')) // page
const ProfileTwo = lazy(() => import('pages/profile/ProfileTwo')) // page
const AddProject = lazy(() => import('pages/project/AddProject')) // page
const SearchedJobs = lazy(() => import('pages/project/ListView/SearchedJobs')) // page
const ProjectView = lazy(() => import('pages/project/ProjectView')) // page
const RequestsList = lazy(() => import('pages/request/RequestsList')) // page
const RequestView = lazy(() => import('pages/request/RequestView')) // page
const ResetPassword = lazy(() => import('pages/ResetPassword')) // page
const OpenStore = lazy(() => import('pages/store/OpenStore')) // page
const ViewStore = lazy(() => import('pages/store/ViewStore')) // page
const CreateReview = lazy(() => import('pages/products/Review/CreateReview')) // page
const PlaceRequest = lazy(() => import('pages/request/PlaceRequest')) // page
const Profile = lazy(() => import('pages/profile/ProfileOne')) // page
const Signup = lazy(() => import('pages/Signup')) // page
const Cart = lazy(() => import('pages/cart/Cart')) // page
const Login = lazy(() => import('pages/Login')) // page
const CompanyStep = lazy(() => import('pages/account/personal/CompanyStep')) // page
const LocationStep = lazy(() => import('pages/account/personal/LocationStep')) // page
const EducationStep = lazy(() => import('pages/account/student/EducationStep')) // page
const Settings = lazy(() => import('pages/Settings')) // page
const MyItems = lazy(() => import('pages/savedItems/MyItems')) // page
const FriendsPurchases = lazy(
  () => import('pages/products/FriendsPurchases/FriendsPurchases') // page
)
const MyProjectsListView = lazy(
  () => import('pages/project/ListView/MyProjectsListView') // page
)
const ProjectsListView = lazy(
  () => import('pages/project/ListView/ProjectListView') // page
)
const SearchedEmployees = lazy(() => import('pages/request/SearchedEmployees')) // page
const Resume = lazy(() => import('pages/Resume')) // page

const Router = ({
  navProps,
  isUser,
  userData,
  template,
}: {
  navProps: any
  template?: number
  userData: any
  isUser: boolean
}) => {
  return (
    <BrowserRouter>
      <AuthContainer>
        <div className="dark:bg-gray-900 bg-white">
          <div className="relative">
            <Switch>
              <PrivateRoute
                // @ts-ignore
                exact
                isUser={userData}
                path="/explore-products/:profileUrl"
              >
                <BrowseProducts userData={userData} />
              </PrivateRoute>
              <PrivateRoute
                // @ts-ignore
                exact
                isUser={userData}
                path="/:profileUrl/resume"
              >
                <Resume userData={userData} />
              </PrivateRoute>

              <Route path="/product/:productId">
                <ProductDetails userData={userData} />
              </Route>

              {/* This is common page */}
              <Route exact path="/">
                <Home {...navProps} />
              </Route>

              <PrivateRoute
                // @ts-ignore
                exact
                isUser={userData}
                path="/create-review/:productId"
              >
                <CreateReview />
              </PrivateRoute>
              <PrivateRoute
                // @ts-ignore
                exact
                isUser={userData}
                path="/cart"
              >
                <Cart userData={userData} />
              </PrivateRoute>
              <PrivateRoute
                // @ts-ignore
                exact
                isUser={userData}
                path="/friends-purchases"
              >
                <FriendsPurchases userData={userData} />
              </PrivateRoute>
              <PrivateRoute
                // @ts-ignore
                exact
                isUser={userData}
                path="/project/add-project"
              >
                <AddProject userData={userData} />
              </PrivateRoute>
              <Route exact path="/project/p/:projectId">
                <ProjectView userData={userData} />
              </Route>
              <Route exact path="/request/r/:requestId">
                <RequestView userData={userData} />
              </Route>
              <Route path="/request">
                <SearchedEmployees userData={userData} />
              </Route>

              <PrivateRoute
                // @ts-ignore
                exact
                isUser={userData}
                path="/add-product"
              >
                <AddProduct
                  userData={userData}
                  profileUrl={userData?.profileUrl}
                />
              </PrivateRoute>
              <PrivateRoute
                // @ts-ignore
                exact
                isUser={userData}
                path="/project/myProjects"
              >
                <MyProjectsListView userData={userData} />
              </PrivateRoute>
              <PrivateRoute
                // @ts-ignore
                exact
                isUser={userData}
                path="/jobs/place-request"
              >
                <PlaceRequest userData={userData} />
              </PrivateRoute>
              {/* Groups */}

              {/* Groups Page */}
              <PrivateRoute
                // @ts-ignore
                exact
                isUser={userData}
                path="/groups/"
              >
                <GroupsView userData={userData} />
              </PrivateRoute>
              {/* See single group */}
              <PrivateRoute
                // @ts-ignore
                exact
                isUser={userData}
                path="/groups/:groupId"
              >
                <SingleGroupView userData={userData} />
              </PrivateRoute>

              {/* See single group */}
              <PrivateRoute
                // @ts-ignore
                exact
                isUser={userData}
                path="/posts/:postUrl"
              >
                <SinglePostView userData={userData} />
              </PrivateRoute>
              <PrivateRoute
                // @ts-ignore
                exact
                isUser={userData}
                path="/:profileUrl/recent-activity"
              >
                <RecentActivity userData={userData} />
              </PrivateRoute>
              <PrivateRoute
                // @ts-ignore
                exact
                isUser={userData}
                path="/jobs/myRequests"
              >
                <RequestsList userData={userData} />
              </PrivateRoute>

              <Route path="/jobs/explore">
                <ProjectsListView userData={userData} />
              </Route>
              <Route path="/jobs">
                <SearchedJobs userData={userData} />
              </Route>

              {/* @ts-ignore */}
              <PrivateRoute isPublic isUser={userData} exact path="/login">
                <Login />
              </PrivateRoute>

              {/* @ts-ignore */}
              <PrivateRoute isPublic exact path="/reset-password/:token">
                <ResetPassword />
              </PrivateRoute>

              <PrivateRoute
                isPublic
                // @ts-ignore
                exact
                isUser={userData}
                path="/signup"
              >
                <Signup />
              </PrivateRoute>
              <PrivateRoute
                // @ts-ignore
                exact
                isUser={isUser}
                path="/feed/"
              >
                {/* @ts-ignore */}
                <Dashboard {...navProps} userData={userData} />
              </PrivateRoute>
              <PrivateRoute
                // @ts-ignore
                exact
                isUser={isUser}
                path="/my-items/"
              >
                {/* @ts-ignore */}
                <MyItems userData={userData} />
              </PrivateRoute>
              <PrivateRoute
                // @ts-ignore
                exact
                isUser={isUser}
                path="/feed/followers"
              >
                {/* @ts-ignore */}
                <UserFollowers userData={userData} />
              </PrivateRoute>
              <PrivateRoute
                // @ts-ignore
                exact
                isUser={isUser}
                path="/users"
              >
                {/* @ts-ignore */}
                <UsersList userData={userData} />
              </PrivateRoute>
              <PrivateRoute
                // @ts-ignore
                exact
                isUser={isUser}
                path="/feed/followings"
              >
                {/* @ts-ignore */}
                <UserFollowers userData={userData} />
              </PrivateRoute>
              <PrivateRoute
                // @ts-ignore
                exact
                isUser={isUser}
                path="/open-store/"
              >
                <OpenStore userData={userData} />
              </PrivateRoute>
              <Route exact path="/:profileUrl/store/">
                {/* @ts-ignore */}
                <ViewStore userData={userData} />
              </Route>
              <PrivateRoute
                isUser={isUser}
                // @ts-ignore
                exact
                path="/:userId/1/:viewMode"
              >
                <Profile userData={userData} />
              </PrivateRoute>
              <PrivateRoute
                isUser={isUser}
                // @ts-ignore
                exact
                path="/:userId/2/:viewMode"
              >
                <ProfileTwo userData={userData} />
              </PrivateRoute>

              <PrivateRoute
                // @ts-ignore
                exact
                isPublic
                path="/choose-account"
              >
                <ChooseAccount user={userData} />
              </PrivateRoute>
              {/* <Route exact path="/email-verification" component={EmailVerification} /> */}

              {/* Personal Account routes */}
              <PrivateRoute
                // @ts-ignore
                exact
                isPublic
                path={links.COMPANY}
              >
                <CompanyStep user={userData} />
              </PrivateRoute>
              <PrivateRoute
                // @ts-ignore
                exact
                isPublic
                path={links.LOCATION_P}
              >
                <LocationStep user={userData} />
              </PrivateRoute>

              {/* Student Account routes */}
              <PrivateRoute
                // @ts-ignore
                exact
                isPublic
                path={links.EDUCATION}
              >
                <EducationStep user={userData} />
              </PrivateRoute>
              <PrivateRoute
                // @ts-ignore
                exact
                isPublic
                path={links.LOCATION_S}
              >
                <LocationStep user={userData} />
              </PrivateRoute>

              {/* Business Account routes */}
              <PrivateRoute
                // @ts-ignore
                exact
                isPublic
                path={links.BUSINESS_STEP_1}
              >
                {/* @ts-ignore */}
                <BusinessStepOne userData={userData} />
              </PrivateRoute>
              <PrivateRoute
                // @ts-ignore
                exact
                isPublic
                path={links.BUSINESS_STEP_2}
              >
                {/* @ts-ignore */}
                <BusinessStepTwo userData={userData} />
              </PrivateRoute>
              <PrivateRoute
                // @ts-ignore
                exact
                isPublic
                path={links.CHOOSE_TEMPLATE}
              >
                {/* @ts-ignore */}
                <ChooseTemplate user={userData} />
              </PrivateRoute>
              <PrivateRoute
                // @ts-ignore
                exact
                isPublic
                path={links.FORGOT_PASSWORD}
              >
                {/* @ts-ignore */}
                <ForgotPassword />
              </PrivateRoute>
              <PrivateRoute
                // @ts-ignore
                exact
                path={links.SETTINGS}
                isUser={isUser}
              >
                {/* @ts-ignore */}
                <Settings userData={userData} />
              </PrivateRoute>

              {/* Error Page */}
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </AuthContainer>
    </BrowserRouter>
  )
}

export default Router
