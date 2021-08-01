import React from 'react'
import { CloudUploadIcon } from '@heroicons/react/outline'
import { AiOutlineDropbox, AiOutlineFileProtect } from 'react-icons/ai'
import { HiOutlineGlobe } from 'react-icons/hi'
import { MdVerifiedUser } from 'react-icons/md'
import { RiSecurePaymentLine } from 'react-icons/ri'
import { ImMobile2 } from 'react-icons/im'
import { BsPeople } from 'react-icons/bs'

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
      description: 'Worldwide selling & Networking',
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
    <div className="relative bg-white py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
        <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
          Everything you need to get started with{' '}
          <span className="border-b-2 border-pink-600 mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
            13RMS
          </span>
        </p>

        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.name} className="pt-6 ">
                <div className="flow-root feature cursor-pointer bg-gray-50 rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="feature-icon transform  inline-flex items-center justify-center p-3 bg-gradient-to-br from-yellow-400 via-red-500 to-pink-500 rounded-md shadow-lg">
                        <feature.icon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                      {feature.name}
                    </h3>
                    <p className="mt-5 text-base text-gray-500">
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
