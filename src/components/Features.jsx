import { CloudUploadIcon } from '@heroicons/react/outline'
import { AiOutlineDropbox, AiOutlineFileProtect } from 'react-icons/ai'
import { BsPeople } from 'react-icons/bs'
import { HiOutlineGlobe } from 'react-icons/hi'
import { ImMobile2 } from 'react-icons/im'
import { MdVerifiedUser } from 'react-icons/md'
import { RiSecurePaymentLine } from 'react-icons/ri'

const Features = () => {
  const features = [
    {
      name: 'Develop',
      description:
        'New product developed look for manufacturers who want to produce your product',
      icon: AiOutlineDropbox,
    },
    {
      name: 'Present Yourself',
      description:
        'Present yourself extensively on 13RMS to the client and employers',
      icon: BsPeople,
    },
    {
      name: 'Internships',
      description:
        'Post vacancies and internships and find the right candidates',
      icon: CloudUploadIcon,
    },
    {
      name: 'Network',
      description:
        'Connect with people and professional organizations in your industry',
      icon: HiOutlineGlobe,
    },
    {
      name: 'Verified',
      description: 'Only do business with verified users',
      icon: MdVerifiedUser,
    },
    {
      name: 'Our App',
      description: 'Discover our app. Download our app now',
      icon: ImMobile2,
    },
    {
      name: 'Protection',
      description: 'Worldwide buyer protection. Pay safely all over the world.',
      icon: AiOutlineFileProtect,
    },
    {
      name: 'Payment',
      description: 'Pay safely with 13RMS Trading post',
      icon: RiSecurePaymentLine,
    },
  ]
  return (
    <div className="relative bg-white dark:bg-gray-900 py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
        <p className="mt-2 text-xl font-extrabold dark:text-white text-gray-900 tracking-tight sm:text-3xl">
          Everything you need to get started with{' '}
          <span className="border-b-2 border-pink-600 mt-2 dark:text-white text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
            13RMS
          </span>
        </p>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.name} className="max-h-60 max-w-60 ">
                <div className="flow-root feature cursor-pointer bg-gray-50 dark:bg-gray-700 rounded-lg px-4 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="feature-icon transform  inline-flex items-center justify-center p-2.5 bg-gradient-to-br from-yellow-400 via-red-500 to-pink-500 rounded-md shadow-lg">
                        <feature.icon
                          className="h-5 w-5 text-white"
                          aria-hidden="true"
                        />
                      </span>
                    </div>
                    <h3 className="mt-8 text-base font-medium dark:text-gray-100 text-gray-900 tracking-tight">
                      {feature.name}
                    </h3>
                    <p className="mt-5 text-sm whitespace-wrap dark:text-gray-400 text-gray-500">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Features
