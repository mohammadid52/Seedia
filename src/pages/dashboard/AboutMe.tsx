import Card from 'components/atoms/Card'
import faker from 'faker'

const PersonalCard = ({
  className,
  user,
  accountInfo,
}: {
  className?: string
  accountInfo?: any
  user?: any
}) => {
  return (
    <Card
      cardTitle="About"
      content={
        <div className={`${className}`}>
          <div>
            <div className="">
              <div className="border-b mb-2 pb-2 border-gray-200 dark:border-gray-600">
                <div className="text-center ">
                  <div className="">
                    <div className="feed-identity"></div>
                    <span className="flex items-center justify-center">
                      <img
                        className="h-16 w-16 rounded-full z-20"
                        src={faker.image.avatar()}
                        alt=""
                      />
                    </span>
                  </div>
                </div>
                <div className="">
                  <div className="">
                    <div className="mt-4 mb-1 text-base hover:underline  font-extrabold text-center dark:text-white">
                      {faker.name.findName()}
                    </div>

                    <p className="pb-0 dark:text-gray-400 mb-2 text-sm text-center">
                      {faker.name.jobTitle()}
                    </p>

                    <p className="link-hover pb-0 mb-0 tracking-wide cursor-pointer text-center add-photo light">
                      Change photo
                    </p>
                  </div>
                </div>
              </div>

              <div className=" ">
                <div className="">
                  <div className="">
                    <p className="text-gray-900 dark:text-white">connections</p>
                    <h6 className="font-semibold text-gray-900 dark:text-white">
                      Expand your network
                    </h6>
                  </div>
                  <div>
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 1024 1024"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-black text-xl"
                    >
                      <path d="M678.3 642.4c24.2-13 51.9-20.4 81.4-20.4h.1c3 0 4.4-3.6 2.2-5.6a371.67 371.67 0 0 0-103.7-65.8c-.4-.2-.8-.3-1.2-.5C719.2 505 759.6 431.7 759.6 349c0-137-110.8-248-247.5-248S264.7 212 264.7 349c0 82.7 40.4 156 102.6 201.1-.4.2-.8.3-1.2.5-44.7 18.9-84.8 46-119.3 80.6a373.42 373.42 0 0 0-80.4 119.5A373.6 373.6 0 0 0 137 888.8a8 8 0 0 0 8 8.2h59.9c4.3 0 7.9-3.5 8-7.8 2-77.2 32.9-149.5 87.6-204.3C357 628.2 432.2 597 512.2 597c56.7 0 111.1 15.7 158 45.1a8.1 8.1 0 0 0 8.1.3zM512.2 521c-45.8 0-88.9-17.9-121.4-50.4A171.2 171.2 0 0 1 340.5 349c0-45.9 17.9-89.1 50.3-121.6S466.3 177 512.2 177s88.9 17.9 121.4 50.4A171.2 171.2 0 0 1 683.9 349c0 45.9-17.9 89.1-50.3 121.6C601.1 503.1 558 521 512.2 521zM880 759h-84v-84c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v84h-84c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h84v84c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-84h84c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z"></path>
                    </svg>
                  </div>
                </div>
              </div>

              <div className=" overflow-hidden">
                <div className="float-left  pl-0 pr-0 col-sm-12 col-lg-12">
                  <div className="">
                    <p className="mb-2 text-gray-900 dark:text-white">
                      Get access to exclusive tools and insights
                    </p>
                    <h6 className="font-semibold text-gray-900 dark:text-white">
                      Try Premium 1 month for free
                    </h6>
                  </div>
                </div>
              </div>

              <div className=" hover:bg-gray-100 cursor-pointer overflow-hidden">
                <div className="float-left  pl-0 pr-0 col-sm-12 col-lg-12">
                  <div className="">
                    <h6 className="cursor-pointer text-gray-900 dark:text-white font-semibold text-center">
                      My items
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div>
              <div className=" overflow-hidden mb-8">
                <div className="float-left  pl-0 pr-0 col-sm-12 col-lg-12">
                  <div className="col mb-2 ml-0">
                    <a href="/">Groups</a>
                  </div>
                  <div className="col mb-2 d-flex justify-content-between ml-0">
                    <a href="/">Events</a>
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 1024 1024"
                      version="1.1"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-black text-xl "
                    >
                      <defs></defs>
                      <path d="M474 152m8 0l60 0q8 0 8 8l0 704q0 8-8 8l-60 0q-8 0-8-8l0-704q0-8 8-8Z"></path>
                      <path d="M168 474m8 0l672 0q8 0 8 8l0 60q0 8-8 8l-672 0q-8 0-8-8l0-60q0-8 8-8Z"></path>
                    </svg>
                  </div>
                  <div className="mb-2">
                    <a href="/">Followed hashtags</a>
                  </div>
                </div>
              </div>

              <div className=" hover:bg-gray-100 cursor-pointer overflow-hidden">
                <div className="float-left  pl-0 pr-0 col-sm-12 col-lg-12">
                  <div className="">
                    <h6 className="cursor-pointer font-semibold text-center">
                      Discover more
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    />
  )
}
export default PersonalCard
