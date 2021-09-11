import Card from 'components/atoms/Card'
import { classNames } from 'utils/classNames'
import moment from 'moment'
import Button from 'components/atoms/Button'
import { AiOutlineEdit } from 'react-icons/ai'
import EmptyState from 'components/atoms/EmptyState'
import { PlusIcon } from '@heroicons/react/solid'
import { IBlockProps } from 'interfaces/UniversalInterface'
import { PROFILE_TWO_EXPERIENCE } from 'state/Redux/constants'

const Experiences = ({
  userData,
  setShowModal,
  showEditOption,
}: IBlockProps) => {
  const { background } = userData || {}
  const { experiences = [] } = background || {}

  return (
    <div>
      <Card
        id="experience"
        secondary
        withCardHeadings={
          experiences &&
          experiences.length > 0 &&
          showEditOption && (
            <>
              <Button
                secondary
                className="mr-3"
                invert
                bgColor="gray"
                onClick={() =>
                  setShowModal({ type: PROFILE_TWO_EXPERIENCE, show: true })
                }
                Icon={AiOutlineEdit}
                size="sm"
                label={'Edit'}
              />
            </>
          )
        }
        cardTitle="Experiences"
        content={
          <div className="p-4 ">
            <nav aria-label="Progress">
              <ol className="overflow-hidden ">
                {experiences?.length > 0 ? (
                  experiences?.map((step: any, stepIdx: number) => (
                    <li
                      key={stepIdx}
                      className={classNames(
                        stepIdx !==
                          // @ts-ignore
                          userData?.background?.experiences?.length - 1
                          ? 'pb-10'
                          : '',
                        'relative'
                      )}
                    >
                      <>
                        {stepIdx !==
                        // @ts-ignore
                        userData?.background?.experiences?.length - 1 ? (
                          <div
                            className="-ml-px absolute mt-0.5 top-4 left-4 w-0.5 h-full bg-gray-200 dark:bg-gray-600"
                            aria-hidden="true"
                          />
                        ) : null}
                        <div className="relative  flex items-center  justify-between group">
                          <div className="relative  flex items-start group">
                            <span className="h-9 flex items-center ">
                              <span
                                className={`relative  ${
                                  stepIdx === 0
                                    ? 'border-pink-600 '
                                    : 'border-gray-200 dark:border-gray-600'
                                }  z-10 w-6 h-6 flex bg-white dark:bg-gray-700 items-center justify-center border-4  rounded-full `}
                              ></span>
                            </span>
                            <span className="ml-4 min-w-0 flex flex-col">
                              <span className=" font-semibold dark:text-white text-base tracking-wide uppercase">
                                {step.jobTitle}{' '}
                                <span className="dark:text-gray-400 text-gray-500 text-xs normal-case font-light">
                                  - {step.companyName}
                                </span>
                              </span>
                              <span className="text-sm text-gray-500">
                                {step.companyAddress}
                              </span>
                            </span>
                          </div>

                          <div className="space-y-1">
                            <span className="block text-xs text-right italic font-medium  text-gray-400">
                              1 year 5 months
                            </span>
                            <span className="block text-xs italic font-medium  text-gray-500">
                              {moment(step.from).format('MMMM YYYY')} -{' '}
                              {moment(step.to).format('MMMM YYYY')}
                            </span>
                          </div>
                        </div>
                      </>
                    </li>
                  ))
                ) : (
                  <EmptyState
                    title="No experience"
                    subtitle="Get started by adding a new experience to your profile."
                    btnText="Add experience"
                    BtnIcon={PlusIcon}
                    showEditOption={showEditOption}
                    onBtnClick={() => {
                      setShowModal({ type: PROFILE_TWO_EXPERIENCE, show: true })
                    }}
                    iconUrl={'/experience.png'}
                  />
                )}
              </ol>
            </nav>
          </div>
        }
      />
    </div>
  )
}

export default Experiences
