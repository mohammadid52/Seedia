import { IAbout, ICompany, IUser } from 'interfaces/UniversalInterface'

const Cover = ({
  data,
  about,
  company,
}: {
  data?: IAbout
  about?: IUser
  company?: ICompany
}) => {
  return (
    <main className="">
      <div className="relative">
        <div className="absolute inset-x-0 bottom-0 h-1/2 " />
        <div className="sm:px-6 lg:px-8">
          <div className="relative shadow-xl rounded-md sm:overflow-hidden">
            <div className="absolute inset-0">
              <img
                className="h-full w-full object-cover"
                src={data?.coverPicture}
                alt="People working on laptops"
              />
              <div className="absolute inset-0 bg-gray-400 mix-blend-multiply" />
            </div>
            <div className="relative px-4  py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8 flex items-center flex-col justify-center">
              <div>
                <img
                  src={data?.userImage}
                  className="md:h-32 md:w-32 sm:h-12 shadow-xl sm:w-12 rounded-full"
                  alt="user"
                />
              </div>
              <h1 className="my-6 text-center text-2xl font-extrabold tracking-tight sm:text-2xl lg:text-4xl">
                <span className="block text-white">{about?.fullName}</span>
                <span className="block text-white text-base tracking-wide font-medium">
                  {company?.jobTitle}
                </span>
              </h1>

              <div className="flex items-center w-auto text-xl sm:border-t  border-white flex-col sm:flex-row border-t-none">
                <div className="sm:border-r border-r-none border-white px-8 py-4 sm:border-b-none border-b">
                  <div className="text-center  text-white tracking-wide font-bold">
                    {data?.profileViews}
                  </div>
                  <div className="text-gray-300 font-medium uppercase text-base mt-1 tracking-tight ">
                    profile views
                  </div>
                </div>
                <div className="sm:border-r  border-r-none border-white px-8 py-4 sm:border-b-none border-b">
                  <div className="text-center text-white tracking-wide font-bold">
                    {data?.projects}
                  </div>
                  <div className="text-gray-300 font-medium uppercase text-base mt-1 tracking-tight ">
                    projects
                  </div>
                </div>
                <div className="px-8 py-4 sm:border-b-none border-b">
                  <div className="text-center text-white tracking-wide font-bold ">
                    {data?.connections}+
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
