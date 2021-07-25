import React, { Fragment } from 'react'
// import { CloudUploadIcon } from '@heroicons/react/outline'
// import { GrGroup } from 'react-icons/gr'
// import { AiOutlineDropbox, AiOutlineFileProtect } from 'react-icons/ai'
// import { HiOutlineGlobe } from 'react-icons/hi'
// import { MdVerifiedUser } from 'react-icons/md'
// import { RiSecurePaymentLine } from 'react-icons/ri'
// import { ImMobile2 } from 'react-icons/im'
// import { BsPeople } from 'react-icons/bs'
import { Row, Col, Button } from 'reactstrap'
import paySafe from 'assets/images/features/pay-safe.png'
import globe from 'assets/images/features/globe.png'
import mobile from 'assets/images/features/mobile.png'
import appStore from 'assets/images/appStore.png'
import playstore from 'assets/images/playstore.png'
import protection from 'assets/images/features/protection.png'
import badge from 'assets/images/features/badge.png'
// import FeaturesStyles from './styles/FeaturesStyles'
import rocket from 'assets/images/features/rocket.png'
import photo from 'assets/images/features/photo.png'
import badgewhite from 'assets/images/features/badgewhite.png'
import globewhite from 'assets/images/features/globewhite.png'
import mobilewhite from 'assets/images/features/mobilewhite.png'
import paySafewhite from 'assets/images/features/pay-safewhite.png'
import photowhite from 'assets/images/features/photowhite.png'
import rocketwhite from 'assets/images/features/rocketwhite.png'
import protectionwhite from 'assets/images/features/protectionwhite.png'
import people from 'assets/images/features/people.png'
import peoplewhite from 'assets/images/features/peoplewhite.png'

const Features = ({ theme }) => {
  var color
  if (theme === 'dark') {
    color = true
  } else {
    color = false
  }

  // const features = [
  //   {
  //     name: 'Develop',
  //     description:
  //       'New product developed look for manufacturers who want to produce your product',
  //     icon: AiOutlineDropbox,
  //   },
  //   {
  //     name: 'Present Yourself',
  //     description:
  //       'Present yourself extensively on 13RMS to the client and employers',
  //     icon: BsPeople,
  //   },
  //   {
  //     name: 'Internships',
  //     description:
  //       'Post vacancies and internships and find the right candidates',
  //     icon: CloudUploadIcon,
  //   },
  //   {
  //     name: 'Network',
  //     description: 'Worldwide selling & Networking',
  //     icon: HiOutlineGlobe,
  //   },
  //   {
  //     name: 'Verified',
  //     description: 'Only do business with verified users',
  //     icon: MdVerifiedUser,
  //   },
  //   {
  //     name: 'Our App',
  //     description: 'Discover our app. Download our app now',
  //     icon: ImMobile2,
  //   },
  //   {
  //     name: 'Protection',
  //     description: 'Worldwide buyer protection. Pay safely all over the world.',
  //     icon: AiOutlineFileProtect,
  //   },
  //   {
  //     name: 'Payment',
  //     description: 'Pay safely with 13RMS Trading post',
  //     icon: RiSecurePaymentLine,
  //   },
  // ]

  const features = [
    {
      icon: color ? rocketwhite : rocket,
      description: (
        <p className="text-center">
          New product developed look for <br />
          manufacturers who want to produce your product
        </p>
      ),
      buttonText: 'Know More',
    },
    {
      icon: color ? peoplewhite : people,
      description: (
        <p className="text-center">
          Present yourself extensively on
          <br />
          13RMS to the client and employers
        </p>
      ),
      buttonText: 'Get Started',
    },
    {
      icon: color ? photowhite : photo,
      description: (
        <p className="text-center">
          Post vacancies and internships
          <br /> and find the right candidates
        </p>
      ),
      buttonText: 'Get Started',
    },
    {
      icon: color ? globewhite : globe,
      description: (
        <p className="text-center">
          Worldwide selling & <br />
          Networking
        </p>
      ),
      buttonText: 'Start Selling',
    },
    {
      icon: color ? badgewhite : badge,
      description: (
        <p className="text-center">
          Only do business with <br />
          verified users
        </p>
      ),
      buttonText: 'Know More',
    },
    {
      icon: color ? mobilewhite : mobile,
      description: (
        <p className="text-center">
          <span>Discover our app</span>
          <br /> <span>Download our app now</span>
        </p>
      ),
      buttonText: 'Know More',
    },
    {
      icon: color ? protectionwhite : protection,
      description: (
        <p className="text-center">
          Worldwide buyer
          <br /> protection
        </p>
      ),
      buttonText: 'Know More',
    },
    {
      icon: color ? paySafewhite : paySafe,
      description: (
        <p className="text-center">
          Pay safely with <br /> 13RMS Trading post
        </p>
      ),
      buttonText: 'Know More',
    },
  ]

  return (
    <Fragment>
      <div className="pt-10 pb-16">
        <div className="grid grid-cols-1 gap-4 max-w-6xl lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 lg:max-w-7xl mx-3">
          {features.map((col, idx) => (
            <div
              key={`${col.description}_${idx}`}
              className="flex flex-col items-center justify-between"
            >
              <img alt={col.description} src={col.icon} className="h-20" />
              {col.description}
              {idx === 5 ? (
                <div>
                  <img
                    src={playstore}
                    className="h-8 cursor-pointer mr-12"
                    alt="playstore"
                  />
                  <img
                    src={appStore}
                    className="h-8 cursor-pointer"
                    alt="appStore"
                  />
                </div>
              ) : (
                <button className="border-1 border-black py-1 px-2 feature-button rounded text-xs hover:bg-gray-500 hover:text-white transition-all hover:border-white">
                  {col.buttonText}
                </button>
              )}
            </div>
          ))}
        </div>

        {/* <Row className="pt-2.5 justify-evenly light row flex items-end">
          <Col
            {...{
              md: { size: 2 },
              sm: { size: 3 },
              className: 'text-center mb-4 mb-md-0 w-auto',
            }}
          >
            <div>
              <img
                {...{
                  alt: '',
                  src: color ? badgewhite : badge,
                  style: { height: '5rem' },
                }}
              />
              <p {...{ className: '' }}>
                Only do business with <br />
                verified users
              </p>

              <Button
                outline
                color="secondary"
                {...{ size: 'sm', className: 'feature-button' }}
              >
                Know More
              </Button>
            </div>
          </Col>

          <Col
            {...{
              md: { size: 2 },
              sm: { size: 3 },
              className: 'text-center mb-4 mb-md-0 w-auto',
            }}
          >
            <div>
              <img
                {...{
                  alt: '',
                  src: color ? mobilewhite : mobile,
                  style: { height: '5rem' },
                }}
              />
              <p {...{ className: '' }}>
                <span>Discover our app</span>
                <br /> <span>Download our app now</span>
              </p>
              <div>
                <img
                  {...{
                    alt: '',
                    src: playstore,
                    style: {
                      height: '2rem',
                      cursor: 'pointer',
                    },
                    className: 'mr3',
                  }}
                />
                <img
                  {...{
                    alt: '',
                    src: appStore,
                    style: {
                      height: '2rem',
                      cursor: 'pointer',
                    },
                  }}
                />
              </div>
            </div>
          </Col>
          <Col
            {...{
              md: { size: 2 },
              sm: { size: 2 },
              className: 'text-center mb-4 mb-md-0 w-auto',
            }}
          >
            <div>
              <img
                {...{
                  alt: '',
                  src: color ? protectionwhite : protection,
                  style: { height: '5rem' },
                }}
              />
              <p {...{ className: '' }}>
                Worldwide buyer
                <br /> protection
              </p>

              <Button
                outline
                color="secondary"
                {...{ size: 'sm', className: 'feature-button' }}
              >
                Know More
              </Button>
            </div>
          </Col>
          <Col
            {...{
              md: { size: 2 },
              sm: { size: 2 },
              className: 'text-center mb-4 mb-md-0 w-auto',
            }}
          >
            <div>
              <img
                {...{
                  alt: '',
                  src: color ? paySafewhite : paySafe,
                  style: { height: '5rem' },
                }}
              />
              <p {...{ className: '' }}>
                Pay safely with <br /> {'13RMS Trading post'}
              </p>

              <Button
                outline
                color="secondary"
                {...{ size: 'sm', className: 'feature-button' }}
              >
                Know More
              </Button>
            </div>
          </Col>
        </Row> */}
      </div>
    </Fragment>
  )
}
export default Features

// <div className="relative bg-white py-16 sm:py-24 lg:py-32">
//   <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
//     <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
//       Everything you need to get started with{' '}
//       <span className="gradient-border mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
//         13RMS
//       </span>
//     </p>
//     {/* <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">
//       Phasellus lorem quam molestie id quisque diam aenean nulla in.
//       Accumsan in quis quis nunc, ullamcorper malesuada. Eleifend
//       condimentum id viverra nulla.
//     </p> */}
//     <div className="mt-12">
//       <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
//         {features.map((feature) => (
//           <div key={feature.name} className="pt-6">
//             <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
//               <div className="-mt-6">
//                 <div>
//                   <span className="inline-flex items-center justify-center p-3 bg-gradient-to-br from-yellow-400 via-red-500 to-pink-500 rounded-md shadow-lg">
//                     <feature.icon
//                       className="h-6 w-6 text-white"
//                       aria-hidden="true"
//                     />
//                   </span>
//                 </div>
//                 <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
//                   {feature.name}
//                 </h3>
//                 <p className="mt-5 text-base text-gray-500">
//                   {feature.description}
//                 </p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   </div>
// </div>
