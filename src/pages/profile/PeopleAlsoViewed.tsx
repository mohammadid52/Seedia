import Card from 'components/atoms/Card'
import React from 'react'

const PeopleAlsoViewed = ({
  data,
  secondary = false,
}: {
  secondary?: boolean
  data: any
}) => {
  return (
    <Card
      secondary={secondary}
      cardTitle="People Also Viewed"
      content={
        <div className="space-y-4">
          {data.map((people: any, idx: number) => {
            return (
              <div
                key={idx}
                className={`${
                  idx !== data.length - 1
                    ? 'border-b dark:border-gray-600 pb-2 border-gray-200'
                    : ''
                } px-4 rounded-md  cursor-pointer h-24 items-center flex dark:hover:bg-gray-600 hover:bg-gray-200 transition-all duration-150  relative `}
              >
                <div className="mr-4 flex-shrink-0 self-center">
                  <img
                    src={people.image}
                    alt="user_image"
                    className="h-14 w-14 rounded-full"
                  />
                </div>
                <div>
                  <h4 className="text-lg text-gray-700 dark:text-white font-bold">
                    {people.fullName}
                  </h4>
                  <p className="mt-1 text-gray-400 font-medium">
                    {people.jobType}
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
