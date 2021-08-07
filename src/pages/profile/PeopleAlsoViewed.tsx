import Card from 'components/atoms/Card'
import React from 'react'
import faker from 'faker'
const peopleAlsoViewed = [0, 1, 2, 3, 4, 5]

const PeopleAlsoViewed = () => {
  return (
    <Card
      // disablePadding
      cardTitle="People Also Viewed"
      content={
        <div className="space-y-4">
          {peopleAlsoViewed.map((idx) => {
            return (
              <div
                key={idx}
                className={`${
                  idx !== peopleAlsoViewed.length - 1
                    ? 'border-b dark:border-gray-600 pb-2 border-gray-200'
                    : ''
                } px-4 rounded-md  cursor-pointer h-24 items-center flex dark:hover:bg-gray-600 hover:bg-gray-200 transition-all duration-150  relative `}
              >
                <div className="mr-4 flex-shrink-0 self-center">
                  <img
                    src={faker.image.avatar()}
                    alt="user_image"
                    className="h-14 w-14 rounded-full"
                  />
                </div>
                <div>
                  <h4 className="text-lg text-gray-700 dark:text-white font-bold">
                    {faker.name.findName()}
                  </h4>
                  <p className="mt-1 text-gray-400 font-medium">
                    {faker.name.jobType()}
                  </p>
                </div>
                <hr />
              </div>
            )
          })}
        </div>
      }
    />
  )
}

export default PeopleAlsoViewed
