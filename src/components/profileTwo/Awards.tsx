import Button from 'components/atoms/Button'
import Card from 'components/atoms/Card'
import Modal from 'components/atoms/Modal'
import NormalFormInput from 'components/atoms/NormalFormInput'
import { map } from 'lodash'
import React, { useState } from 'react'
import { AiOutlineEdit } from 'react-icons/ai'
import { BiTrashAlt } from 'react-icons/bi'

const awards = [
  {
    awardName: 'Behance Interaction Featured',
    awardFor: 'User Interface Design',
  },
  { awardName: 'Behance Product Design Featured', awardFor: 'Web Design' },
  { awardName: 'Site Of The Month by Awwwards', awardFor: 'Web Design' },
  { awardName: 'CSS Beauty Award', awardFor: 'UI / User Experience Design' },
]

const Awards = () => {
  const [showModal, setShowModal] = useState(false)
  return (
    <>
      <Modal open={showModal} setOpen={setShowModal} header="Edit Awards">
        <div>
          <div
            style={{
              maxHeight: '15rem',
              minHeight: '20rem',
            }}
            className="overflow-y-auto  custom-scroll-mini darker my-4"
          >
            <ol className="space-y-6 list-disc p-4  ">
              {map(awards, (award, awardIdx) => (
                <li
                  className="flex items-center relative on-hover-container text-gray-900 dark:text-white  cursor-pointer text-left"
                  key={awardIdx}
                >
                  <div className="w-96">
                    <span className="block truncate text-gray-900 dark:text-white text-lg font-medium">
                      {award.awardName}
                    </span>
                    <span className="block text-gray-600 dark:text-gray-500 text-sm font-medium">
                      {award.awardFor}
                    </span>
                  </div>

                  <span className="absolute on-hover-item pr-4 right-0">
                    <BiTrashAlt className="hover:bg-gray-700 p-2 h-8 w-8  rounded-md text-red-500" />
                  </span>
                </li>
              ))}
            </ol>
          </div>
          <div className="">
            <h3 className="text-gray-900 dark:text-gray-500 mb-2">
              New Award:
            </h3>
            <div className="flex border border-gray-200 dark:border-gray-700 p-4 rounded-md items-center flex-col space-y-2">
              <NormalFormInput
                placeholder="Enter new award name"
                value={''}
                onChange={() => {}}
                fullWidth
              />
              <NormalFormInput
                placeholder="What's this award for?"
                value={''}
                onChange={() => {}}
                fullWidth
              />
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
        secondary
        id="awards"
        withCardHeadings={
          <>
            <Button
              secondary
              className="mr-3"
              onClick={() => setShowModal(true)}
              invert
              bgColor="gray"
              Icon={AiOutlineEdit}
              size="sm"
              label={'Edit'}
            />
          </>
        }
        className="ml-6"
        cardTitle="Awards"
        content={
          <div
            style={{ maxHeight: '15rem', minHeight: '20rem' }}
            className="overflow-y-auto  custom-scroll-mini"
          >
            <ol className="space-y-6 list-disc px-8 py-4 ">
              {map(awards, (award, awardIdx) => (
                <li
                  className="text-gray-900 dark:text-white  cursor-pointer text-left"
                  key={awardIdx}
                >
                  <span className="block text-gray-900 dark:text-white text-lg font-medium">
                    {award.awardName}
                  </span>
                  <span className="block text-gray-600 dark:text-gray-500 text-sm font-medium">
                    {award.awardFor}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        }
      />
    </>
  )
}

export default Awards
