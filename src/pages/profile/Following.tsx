import Card from 'components/atoms/Card'
import React from 'react'
import faker from 'faker'
import { map } from 'lodash'
import Button from 'components/atoms/Button'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'
const following = [0, 1, 2, 3, 4, 5]

const Following = () => {
  return (
    <Card
      cardTitle="Following"
      withCardHeadings={
        <>
          <Button
            gradient
            className="mx-2"
            rounded="rounded-full"
            size="sm"
            gradientHover={false}
            Icon={BsChevronLeft}
          />
          <Button
            rounded="rounded-full"
            gradient
            size="sm"
            className="mx-2"
            invert
            gradientHover={false}
            Icon={BsChevronRight}
          />
        </>
      }
      content={
        <div className="grid mt-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
          {map(following, (user, idx) => {
            return (
              <div
                key={idx}
                className="flex px-2 py-4 items-center justify-between w-72 flex-col dark:bg-gray-800 bg-gray-100 rounded-md relative p-4"
              >
                <img
                  src={faker.image.avatar()}
                  alt="user"
                  className="h-20 mb-2 rounded-full w-20 "
                />
                <div className="my-2 flex items-center justify-between flex-col">
                  <h5 className="text-gray-700 font-semibold text-lg dark:text-gray-200">
                    {faker.name.findName()}
                  </h5>
                  <p className="text-gray-400 text-center font-medium text-base dark:text-gray-400">
                    {faker.name.jobTitle()}
                  </p>
                  <Button
                    gradient
                    gradientHover={false}
                    className="mt-2"
                    invert
                    rounded="rounded-full"
                    label="following"
                  />
                </div>
              </div>
            )
          })}
        </div>
      }
    />
  )
}

export default Following
