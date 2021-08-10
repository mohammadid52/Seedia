import Card from 'components/atoms/Card'
import React, { useState } from 'react'
import { classNames } from 'utils/classNames'
import moment from 'moment'
import Button from 'components/atoms/Button'
import { AiOutlineEdit } from 'react-icons/ai'
import Modal from 'components/atoms/Modal'
import NormalFormInput from 'components/atoms/NormalFormInput'

const Experiences = ({ experience }: { experience: any }) => {
  const [showModal, setShowModal] = useState(false)
  return (
    <div>
      <Modal open={showModal} setOpen={setShowModal} header="Edit Experiences">
        <div>
          <div
            style={{
              maxHeight: '15rem',
              minHeight: '20rem',
            }}
            className="overflow-y-auto  custom-scroll-mini darker my-4"
          >
            <ol className="overflow-hidden mt-4">
              {experience.map((step: any, stepIdx: number) => (
                <li
                  key={stepIdx}
                  className={classNames(
                    stepIdx !== experience.length - 1 ? 'pb-10' : '',
                    'relative'
                  )}
                >
                  <>
                    {stepIdx !== experience.length - 1 ? (
                      <div
                        className="-ml-px absolute mt-0.5 top-4 left-4 w-0.5 h-full bg-gray-200 dark:bg-gray-600"
                        aria-hidden="true"
                      />
                    ) : null}
                    <li className="relative  flex items-center  justify-between group">
                      <div className="relative  flex items-start group">
                        <span className="h-9 flex items-center ">
                          <span
                            className={`relative  ${
                              stepIdx === 0
                                ? 'border-pink-600 '
                                : 'border-gray-200 dark:border-gray-600'
                            }  z-10 w-8 h-8 flex bg-white dark:bg-gray-700 items-center justify-center border-4  rounded-full `}
                          ></span>
                        </span>
                        <span className="ml-4 min-w-0 flex flex-col">
                          <span className=" font-semibold dark:text-white text-lg tracking-wide uppercase">
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
                    </li>
                  </>
                </li>
              ))}
            </ol>
          </div>
          <div className="divider dark:divider">
            <h3 className="text-gray-900 dark:text-gray-500 mb-2">
              Add New Experience:
            </h3>
            <div className="flex border border-gray-200 dark:border-gray-700 p-4 rounded-md items-center flex-col space-y-2">
              <div
                style={{ maxWidth: '50rem' }}
                className="grid grid-cols-1 sm:grid-cols-2   gap-3 "
              >
                <NormalFormInput
                  placeholder="Enter job title"
                  value={''}
                  onChange={() => {}}
                />
                <NormalFormInput
                  placeholder="Enter company name"
                  value={''}
                  onChange={() => {}}
                />
                <NormalFormInput
                  placeholder="Enter company address"
                  value={''}
                  onChange={() => {}}
                />
                <NormalFormInput
                  placeholder="Enter joined at date"
                  value={''}
                  onChange={() => {}}
                />
                <NormalFormInput
                  placeholder="Enter left at date"
                  value={''}
                  onChange={() => {}}
                />
              </div>
              <Button size="sm" gradient label="Add" fullWidth />
            </div>
          </div>
          <div className="mt-5 sm:mt-4 flex justify-end space-x-4 items-center">
            <Button
              gradient
              onClick={() => setShowModal(false)}
              invert
              label="Cancel"
            />
            <Button gradient label="Save" />
          </div>
        </div>
      </Modal>
      <Card
        id="experience"
        secondary
        withCardHeadings={
          <>
            <Button
              secondary
              className="mr-3"
              invert
              bgColor="gray"
              onClick={() => setShowModal(true)}
              Icon={AiOutlineEdit}
              size="sm"
              label={'Edit'}
            />
          </>
        }
        cardTitle="Experiences"
        content={
          <div className="p-4 ">
            <nav aria-label="Progress">
              <ol className="overflow-hidden ">
                {experience.map((step: any, stepIdx: number) => (
                  <li
                    key={stepIdx}
                    className={classNames(
                      stepIdx !== experience.length - 1 ? 'pb-10' : '',
                      'relative'
                    )}
                  >
                    <>
                      {stepIdx !== experience.length - 1 ? (
                        <div
                          className="-ml-px absolute mt-0.5 top-4 left-4 w-0.5 h-full bg-gray-200 dark:bg-gray-600"
                          aria-hidden="true"
                        />
                      ) : null}
                      <li className="relative  flex items-center  justify-between group">
                        <div className="relative  flex items-start group">
                          <span className="h-9 flex items-center ">
                            <span
                              className={`relative  ${
                                stepIdx === 0
                                  ? 'border-pink-600 '
                                  : 'border-gray-200 dark:border-gray-600'
                              }  z-10 w-8 h-8 flex bg-white dark:bg-gray-700 items-center justify-center border-4  rounded-full `}
                            ></span>
                          </span>
                          <span className="ml-4 min-w-0 flex flex-col">
                            <span className=" font-semibold dark:text-white text-lg tracking-wide uppercase">
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
                      </li>
                    </>
                  </li>
                ))}
              </ol>
            </nav>
          </div>
        }
      />
    </div>
  )
}

export default Experiences
