import React from 'react'
import faker from 'faker'

const Cover = () => {
  return (
    <main className="">
      <div className="relative">
        <div className="absolute inset-x-0 bottom-0 h-1/2 " />
        <div className="sm:px-6 lg:px-8">
          <div className="relative shadow-xl rounded-md sm:overflow-hidden">
            <div className="absolute inset-0">
              <img
                className="h-full w-full object-cover"
                src={faker.image.nature()}
                alt="People working on laptops"
              />
              <div className="absolute inset-0 bg-gray-400 mix-blend-multiply" />
            </div>
            <div className="relative px-4  py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8 flex items-center flex-col justify-center">
              <div>
                <img
                  src={faker.image.avatar()}
                  className="md:h-32 md:w-32 sm:h-12 shadow-xl sm:w-12 rounded-full"
                  alt="user"
                />{' '}
              </div>
              <h1 className="my-6 text-center text-2xl font-extrabold tracking-tight sm:text-2xl lg:text-4xl">
                <span className="block text-white">
                  {faker.name.findName()}
                </span>
                <span className="block text-white text-base tracking-wide font-medium">
                  {faker.name.jobTitle()}
                </span>
              </h1>

              <div className="flex items-center w-auto text-xl border-t  border-white">
                <div className="border-r border-white px-8 py-4">
                  <div className="text-center  text-white tracking-wide font-bold">
                    {faker.datatype.number(6000)}
                  </div>
                  <div className="text-gray-300 font-medium uppercase text-base mt-1 tracking-tight ">
                    profile views
                  </div>
                </div>
                <div className="border-r border-white px-8 py-4">
                  <div className="text-center text-white tracking-wide font-bold">
                    {faker.datatype.number(100)}
                  </div>
                  <div className="text-gray-300 font-medium uppercase text-base mt-1 tracking-tight ">
                    projects
                  </div>
                </div>
                <div className="px-8 py-4">
                  <div className="text-center text-white tracking-wide font-bold ">
                    {faker.datatype.number(10000)}+
                  </div>
                  <div className="text-gray-300 font-medium uppercase text-base mt-1 tracking-tight ">
                    connections
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Cover
