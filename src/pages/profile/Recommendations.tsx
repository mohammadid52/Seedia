import Loader from 'components/atoms/animation/Loader'
import Button from 'components/atoms/Button'
import Card from 'components/atoms/Card'
import EmptyState from 'components/atoms/EmptyState'
import FormInput from 'components/atoms/FormInput'
import Modal from 'components/atoms/Modal'
import Tabs from 'components/atoms/Tabs'
import { links } from 'constants/Links'
import { useUserContext } from 'context/UserContext'
import { Form, Formik } from 'formik'
import { network } from 'helpers'
import { IParent, IRecommendation } from 'interfaces/UniversalInterface'
import { map } from 'lodash'
import { useEffect, useState } from 'react'
import { avatarPlaceholder } from 'state/Redux/constants'
import * as Yup from 'yup'

const Recommendations = ({
  recommendation,

  userData,
  secondary = false,
  iAmOwnerOfThisProfile = false,
}: {
  authUser: boolean
  iAmOwnerOfThisProfile: boolean
  secondary?: boolean
  userData?: IParent
  recommendation?: { received: IRecommendation[]; given: IRecommendation[] }
}) => {
  const [fetchReceived, setFetchReceived] = useState<any[]>([])

  const [fetching, setFetching] = useState(false)

  const [fetchGiven, setFetchGiven] = useState<any[]>([])

  const fetchReceivedList = async () => {
    setFetching(true)
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
    } finally {
      setFetching(false)
    }
  }

  const fetchGivenList = async () => {
    setFetching(true)

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
    } finally {
      setFetching(false)
    }
  }
  const [currentTab, setCurrentTab] = useState('Received')

  useEffect(() => {
    if (currentTab === 'Received') {
      // @ts-ignore
      if (
        recommendation &&
        recommendation?.received &&
        recommendation?.received.length > 0 &&
        fetchReceived.length === 0
      ) {
        fetchReceivedList()
      }
    }
  }, [recommendation?.received, fetchReceived, currentTab])

  useEffect(() => {
    if (currentTab === 'Given') {
      // @ts-ignore
      if (
        recommendation &&
        recommendation?.given &&
        recommendation?.given.length > 0 &&
        fetchGiven.length === 0
      ) {
        fetchGivenList()
      }
    }
  }, [recommendation?.given, fetchReceived, currentTab])

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

  const [showModal, setShowModal] = useState(false)
  const onCancel = () => setShowModal(false)

  const initialState = { recommendation: '' }
  const validationSchema = Yup.object({
    recommendation: Yup.string().min(10).max(250),
  })

  const { setValues } = useUserContext()

  const onSave = async (values: any) => {
    setSaving(true)
    try {
      if (values.recommendation) {
        const config = { text: values.recommendation }
        await network.post(`/user/giveRecommendation/${userData?._id}`, config)
        onCancel()

        if (!iAmOwnerOfThisProfile) {
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
        secondary={secondary}
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
              (fetching ? (
                <Loader />
              ) : fetchReceived && fetchReceived.length > 0 ? (
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
                          <a
                            href={links.getProfile(recom.user)}
                            target="_blank"
                            rel="noreferrer"
                          >
                            {recom?.user?.fullName}
                          </a>
                          <img
                            src={
                              recom?.user?.profilePicture
                                ? recom?.user?.profilePicture
                                : avatarPlaceholder
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
                  {iAmOwnerOfThisProfile ? (
                    <EmptyState
                      title="No recommendations recieved yet"
                      subtitle="All recieved recommendations will show here "
                      iconUrl={'/referral.png'}
                    />
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
              (fetching ? (
                <Loader />
              ) : fetchGiven && fetchGiven.length > 0 ? (
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
                        To,
                        <span className="mx-2 cursor-pointer flex items-center hover:underline">
                          {recom?.user?.fullName}
                          <img
                            src={
                              recom?.user?.profilePicture
                                ? recom?.user?.profilePicture
                                : avatarPlaceholder
                            }
                            alt="by-name"
                            className="h-6 w-6 border-gradient border-transparent border-2 rounded-full ml-2"
                          />
                        </span>
                      </div>
                    </div>
                  )
                })
              ) : (
                <div>
                  <EmptyState
                    title="No recommendations given yet"
                    subtitle="All given recommendations will show here "
                    iconUrl={'/referral.png'}
                  />
                </div>
              ))}
          </div>
        }
      />
    </>
  )
}

export default Recommendations
