import Card from 'components/atoms/Card'
import { useState } from 'react'
import Button from 'components/atoms/Button'
import { map } from 'lodash'
import { IRecommendation } from 'interfaces/UniversalInterface'

const Recommendations = ({
  recommendation,
}: {
  recommendation: { received: IRecommendation[]; given: IRecommendation[] }
}) => {
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
            label={`Received (${recommendation.received.length})`}
          />
          <Button
            onClick={() => setTab('given')}
            gradient
            size="sm"
            className="mx-2"
            invert={tab === 'received'}
            label={`Given (${recommendation.given.length})`}
          />
        </>
      }
      content={
        <div className="grid mt-6  sm:grid-cols-1 md:grid-cols-1 space-y-12">
          {map(
            tab === 'received' ? recommendation.received : recommendation.given,
            (recom, idx) => {
              return (
                <div
                  key={idx}
                  className=" rounded-md pb-2 border-gray-200 dark:border-gray-600 border relative w-full p-4"
                >
                  <p className="my-2 mt-4 italic text-gray-500 dark:text-gray-400 text-center font-medium text-lg">
                    “ {recom.text} ”
                  </p>
                  <div className="py-1 mt-1 dark:text-gray-400 text-right italic">
                    By,
                    <span className="mx-2 cursor-pointer hover:underline">
                      {recom.user.fullName}
                      <img
                        src={recom.user.userImage}
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
