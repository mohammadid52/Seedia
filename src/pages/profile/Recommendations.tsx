import Card from 'components/atoms/Card'
import { useEffect, useState } from 'react'
import { map } from 'lodash'
import { IParent, IRecommendation } from 'interfaces/UniversalInterface'
import { network } from 'helpers'
import Tabs from 'components/atoms/Tabs'
import Button from 'components/atoms/Button'
import Modal from 'components/atoms/Modal'
import { Form, Formik } from 'formik'
import FormInput from 'components/atoms/FormInput'
import * as Yup from 'yup'
import { useRouter } from 'hooks/useRouter'
import getImageURL from 'utils/getImageURL'
import { useUserContext } from 'context/UserContext'

const Recommendations = ({
  recommendation,
  authUser,
  userData,
}: {
  authUser: boolean
  userData: IParent
  recommendation?: { received: IRecommendation[]; given: IRecommendation[] }
}) => {
  const [fetchReceived, setFetchReceived] = useState<any[]>([])

  const [fetchGiven, setFetchGiven] = useState<any[]>([])
  const fetchReceivedList = async () => {
    try {
      const config = {
        users: map(recommendation?.received, (g) => g.userId),
      }
      const { data } = await network.post('/user/getUsers', config)

      const _r = map(data.data, (r, idx: number) => ({
        text: recommendation?.received[idx]?.text || 'Not found',
        user: r,
      }))

      setFetchReceived(_r)
      // setFetchGiven(_g)
    } catch (error) {
      console.error(error)
    }
  }

  const fetchGivenList = async () => {
    try {
      const config = {
        users: map(recommendation?.given, (g) => g.userId),
      }
      const { data } = await network.post('/user/getUsers', config)

      const _g = map(data.data, (g, idx: number) => ({
        text: recommendation?.given[idx].text,
        user: g,
      }))

      setFetchGiven(_g)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    // @ts-ignore
    if (recommendation && recommendation?.received.length > 0) {
      fetchReceivedList()
    }
  }, [recommendation?.received])
  useEffect(() => {
    // @ts-ignore
    if (recommendation && recommendation?.given.length > 0) {
      fetchGivenList()
    }
  }, [recommendation?.given])

  const tabs = [
    {
      name: 'Received',
      count: recommendation?.received ? recommendation.received.length : 0,
    },
    {
      name: 'Given',
      count: recommendation?.given ? recommendation.given.length : 0,
    },
  ]
  const [currentTab, setCurrentTab] = useState('Received')

  const [showModal, setShowModal] = useState(false)
  const onCancel = () => setShowModal(false)

  const initialState = { recommendation: '' }
  const validationSchema = Yup.object({
    recommendation: Yup.string().min(50).max(250),
  })
  const route: any = useRouter()
  const userIdFromParam = route?.match?.params?.userId

  const { setValues } = useUserContext()

  const onSave = async (values: any) => {
    setSaving(true)
    try {
      if (values.recommendation) {
        const config = { text: values.recommendation }
        await network.post(
          `/user/giveRecommendation/${userIdFromParam}`,
          config
        )
        onCancel()

        if (!authUser) {
          setValues({
            ...userData,
            recommendation: {
              received: [
                // @ts-ignore
                ...userData?.recommendation?.received,
                { text: values.recommendation, userId: null },
              ],
              // @ts-ignore
              given: [...userData?.recommendation?.given],
            },
          })
          fetchReceivedList()
        }
      }
    } catch (error) {
      console.error(error.message)
    } finally {
      setSaving(false)
    }
  }
  const [saving, setSaving] = useState(false)

  return (
    <>
      <Modal
        open={showModal}
        onClose={onCancel}
        setOpen={setShowModal}
        header={'Add recommendation'}
      >
        <div className="">
          <div className="overflow-y-auto min-w-132 min-h-32  custom-scroll-mini darker mt-4 px-1">
            <Formik
              onSubmit={onSave}
              initialValues={initialState}
              validationSchema={validationSchema}
            >
              <Form className="py-2">
                <FormInput
                  textarea
                  placeholder="Add your recommendation"
                  name="recommendation"
                  id="recommendation"
                />
                <div className="mt-5 sm:mt-4 flex justify-end  items-center">
                  <Button
                    gradient
                    loading={saving}
                    disabled={saving}
                    onClick={onSave}
                    type="submit"
                    label="Save"
                  />
                </div>
              </Form>
            </Formik>
          </div>
        </div>
      </Modal>
      <Card
        cardTitle="Recommendations"
        withCardHeadings={
          <>
            <Tabs
              tabs={tabs}
              currentTab={currentTab}
              setCurrentTab={setCurrentTab}
            />
          </>
        }
        content={
          <div className="grid mt-6  sm:grid-cols-1 md:grid-cols-1 space-y-12">
            {currentTab === 'Received' &&
              (fetchReceived && fetchReceived.length > 0 ? (
                map(fetchReceived, (recom, idx) => {
                  return (
                    <div
                      key={idx}
                      className=" rounded-md pb-2 border-gray-200 dark:border-gray-600 border relative w-full p-4"
                    >
                      <p className="my-2 mt-4 italic text-gray-500 dark:text-gray-400 text-center font-medium text-lg">
                        “ {recom.text} ”
                      </p>
                      <div className="py-1 mt-1 dark:text-gray-400 flex items-center text-right italic">
                        By,
                        <span className="mx-2 cursor-pointer flex items-center hover:underline">
                          {recom?.user?.fullName}
                          <img
                            src={
                              recom?.user?.profilePicture
                                ? getImageURL(recom?.user?.profilePicture)
                                : 'https://robohash.org/honey?set=set1'
                            }
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
                  {authUser ? (
                    <p className="text-center text-gray-400">
                      No recommendation given yet.
                    </p>
                  ) : (
                    <Button
                      label="Add recommendation"
                      className="flex"
                      gradient
                      onClick={() => setShowModal(true)}
                    />
                  )}
                </div>
              ))}
            {currentTab === 'Given' &&
              (fetchGiven && fetchGiven.length > 0 ? (
                map(fetchGiven, (recom, idx) => {
                  return (
                    <div
                      key={idx}
                      className=" rounded-md pb-2 border-gray-200 dark:border-gray-600 border relative w-full p-4"
                    >
                      <p className="my-2 mt-4 italic text-gray-500 dark:text-gray-400 text-center font-medium text-lg">
                        “ {recom.text} ”
                      </p>
                      <div className="py-1 mt-1 flex items-center dark:text-gray-400 text-right italic">
                        By,
                        <span className="mx-2 cursor-pointer flex items-center hover:underline">
                          {recom?.user?.fullName}
                          <img
                            src={
                              recom?.user?.profilePicture
                                ? getImageURL(recom?.user?.profilePicture)
                                : 'https://robohash.org/honey?set=set1'
                            }
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
    </>
  )
}

export default Recommendations
