import { links } from 'constants/Links'
import AuthContainer from 'containers/AuthContainer'
import BusinessStepOne from 'pages/account/business/StepOne'
import BusinessStepTwo from 'pages/account/business/StepTwo'
import ChooseAccount from 'pages/account/other/ChooseAccount'
import ChooseTemplate from 'pages/account/other/ChooseTemplate'
import Dashboard from 'pages/dashboard'
import ForgotPassword from 'pages/ForgotPassword'
import CreateGroup from 'pages/groups/CreateGroup'
import Home from 'pages/home/Home'
import NotFound from 'pages/NotFound'
import AddProduct from 'pages/products/AddProduct'
import BrowseProducts from 'pages/products/BrowseProducts'
import ProductDetails from 'pages/products/ProductDetails'
import ProfileTwo from 'pages/profile/ProfileTwo'
import AddProject from 'pages/project/AddProject'
import SearchedJobs from 'pages/project/ListView/SearchedJobs'
import ProjectView from 'pages/project/ProjectView'
import RequestsList from 'pages/request/RequestsList'
import RequestView from 'pages/request/RequestView'
import ResetPassword from 'pages/ResetPassword'
import { lazy } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import PrivateRoute from 'routes/PrivateRoute'

const CreateReview = lazy(() => import('pages/products/Review/CreateReview'))
const PlaceRequest = lazy(() => import('pages/request/PlaceRequest'))
const Profile = lazy(() => import('pages/profile/ProfileOne'))
const Signup = lazy(() => import('pages/Signup'))
const Cart = lazy(() => import('pages/cart/Cart'))
const Login = lazy(() => import('pages/Login'))
const CompanyStep = lazy(() => import('pages/account/personal/CompanyStep'))
const LocationStep = lazy(() => import('pages/account/personal/LocationStep'))
const EducationStep = lazy(() => import('pages/account/student/EducationStep'))
const Settings = lazy(() => import('pages/Settings'))
const FriendsPurchases = lazy(
  () => import('pages/products/FriendsPurchases/FriendsPurchases')
)
const MyProjectsListView = lazy(
  () => import('pages/project/ListView/MyProjectsListView')
)
const ProjectsListView = lazy(
  () => import('pages/project/ListView/ProjectListView')
)
const SearchedEmployees = lazy(() => import('pages/request/SearchedEmployees'))

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
                path="/browse-products/:profileUrl"
              >
                <BrowseProducts userData={userData} />
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
              <PrivateRoute
                // @ts-ignore
                exact
                isUser={userData}
                path="/group/create-group"
              >
                <CreateGroup userData={userData} />
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
                path="/home"
              >
                {/* @ts-ignore */}
                <Dashboard {...navProps} userData={userData} />
              </PrivateRoute>
              <PrivateRoute
                isUser={isUser}
                // @ts-ignore
                exact
                path="/:userId/:template/:viewMode"
              >
                {template === 1 ? (
                  // @ts-ignore
                  <Profile userData={userData} />
                ) : (
                  // @ts-ignore
                  <ProfileTwo userData={userData} />
                )}
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
