import Card from 'components/atoms/Card'
import React, { useState } from 'react'
import faker from 'faker'
import Button from 'components/atoms/Button'
import { map } from 'lodash'
const recommendationsReceived = [0, 1]
const recommendationsGiven = [0, 1, 2]

const Recommendations = () => {
  const [tab, setTab] = useState('received')
  return (
    <Card
      cardTitle="Recommendations"
      withCardHeadings={
        <>
          <Button
            gradient
            invert={tab === 'given'}
            className="mx-2"
            onClick={() => setTab('received')}
            size="sm"
            label={`Received (${recommendationsReceived.length})`}
          />
          <Button
            onClick={() => setTab('given')}
            gradient
            size="sm"
            className="mx-2"
            invert={tab === 'received'}
            label={`Given (${recommendationsGiven.length})`}
          />
        </>
      }
      content={
        <div className="grid mt-6  sm:grid-cols-1 md:grid-cols-1 space-y-12">
          {map(
            tab === 'received' ? recommendationsReceived : recommendationsGiven,
            (idx) => {
              return (
                <div
                  key={idx}
                  className=" rounded-md pb-2 bg-gray-100 dark:bg-gray-800 relative w-full p-4"
                >
                  <p className="my-2 mt-4 italic text-gray-500 dark:text-gray-400 text-center font-medium text-lg">
                    “ {faker.lorem.paragraph(2)} ”
                  </p>
                  <div className="py-1 mt-1 dark:text-gray-400 text-right italic">
                    By,
                    <span className="mx-2 cursor-pointer hover:underline">
                      {faker.name.findName()}
                      <img
                        src={faker.image.avatar()}
                        alt="by-name"
                        className="h-6 w-6 rounded-full ml-2"
                      />
                    </span>
                  </div>
                </div>
              )
            }
          )}
        </div>
      }
    />
  )
}

export default Recommendations
