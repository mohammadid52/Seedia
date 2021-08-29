import Card from 'components/atoms/Card'
import { useEffect, useState } from 'react'
import Button from 'components/atoms/Button'
import { map } from 'lodash'
import { IRecommendation } from 'interfaces/UniversalInterface'
import { network } from 'helpers'

const Recommendations = ({
  recommendation,
}: {
  recommendation?: { received: IRecommendation[]; given: IRecommendation[] }
}) => {
  const [tab, setTab] = useState('received')

  const [fetchReceived, setFetchReceived] = useState<any[]>([])
  const [fetchGiven, setFetchGiven] = useState<any[]>([])

  const fetchRecommendationList = async () => {
    try {
      const config = {
        received: recommendation?.received || [],
        given: recommendation?.given || [],
      }
      const { data } = await network.post('/user/recommendations', config)
      const _r = map(data.data.received, (r, idx: number) => ({
        text: recommendation?.received[idx].text,
        user: r,
      }))
      const _g = map(data.data.given, (g, idx: number) => ({
        text: recommendation?.given[idx].text,
        user: g,
      }))
      setFetchReceived(_r)
      setFetchGiven(_g)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    // @ts-ignore
    if (recommendation?.received > 0 || recommendation?.given > 0) {
      fetchRecommendationList()
    }
  }, [])

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
            label={`Received ${
              recommendation?.received
                ? `${recommendation?.received.length}`
                : ''
            }`}
          />
          <Button
            onClick={() => setTab('given')}
            gradient
            size="sm"
            className="mx-2"
            invert={tab === 'received'}
            label={`Given ${
              recommendation?.given ? `${recommendation?.given.length}` : ''
            }`}
          />
        </>
      }
      content={
        <div className="grid mt-6  sm:grid-cols-1 md:grid-cols-1 space-y-12">
          {tab === 'received' &&
            (recommendation?.received && recommendation?.received.length > 0 ? (
              map(fetchReceived, (recom, idx) => {
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
                        {recom?.user?.fullName}
                        <img
                          src={recom?.user?.profilePicture}
                          alt="by-name"
                          className="h-6 w-6 rounded-full ml-2"
                        />
                      </span>
                    </div>
                  </div>
                )
              })
            ) : (
              <div>
                <p className="text-center text-gray-400">
                  No recommendation given yet.
                </p>
              </div>
            ))}
          {tab === 'given' &&
            (recommendation?.given && recommendation?.given.length > 0 ? (
              map(fetchGiven, (recom, idx) => {
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
                        {recom?.user?.fullName}
                        <img
                          src={recom?.user?.profilePicture}
                          alt="by-name"
                          className="h-6 w-6 rounded-full ml-2"
                        />
                      </span>
                    </div>
                  </div>
                )
              })
            ) : (
              <div>
                <p className="text-center text-gray-400">
                  No recommendation given yet.
                </p>
              </div>
            ))}
        </div>
      }
    />
  )
}

export default Recommendations
