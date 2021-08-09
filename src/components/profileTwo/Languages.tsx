import Button from 'components/atoms/Button'
import Card from 'components/atoms/Card'
import Modal from 'components/atoms/Modal'
import NormalFormInput from 'components/atoms/NormalFormInput'
import Selector from 'components/atoms/Selector'
import { map } from 'lodash'
import React, { useState } from 'react'
import { AiOutlineEdit } from 'react-icons/ai'
import { BiTrashAlt } from 'react-icons/bi'
const languages = [
  {
    langName: 'English',
    langLevel: 'Full Professional Profiency',
  },
  { langName: 'French', langLevel: 'Intermediate' },
  { langName: 'Spanish', langLevel: 'Intermediate' },
  { langName: 'Polish', langLevel: 'Full Professional Profiency' },
]

const languageKnownLevel = [
  { name: 'Beginner', id: '1' },
  { name: 'Intermediate', id: '2' },
  { name: 'Fluent', id: '3' },
]

const Languages = () => {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <Modal open={showModal} setOpen={setShowModal} header="Edit Languages">
        <div>
          <div
            style={{
              maxHeight: '15rem',
              minHeight: '20rem',
            }}
            className="overflow-y-auto  custom-scroll-mini darker my-4"
          >
            <ol className="space-y-6 list-disc p-4 ">
              {map(languages, (lang, awardIdx) => (
                <li
                  className="flex items-center on-hover-container relative text-gray-900 dark:text-white  cursor-pointer text-left"
                  key={awardIdx}
                >
                  <div className="">
                    <span className="block text-gray-900 dark:text-white text-lg font-medium">
                      {lang.langName}
                    </span>
                    <span className="block text-gray-600 dark:text-gray-500 text-sm font-medium">
                      {lang.langLevel}
                    </span>
                  </div>

                  <span className="absolute on-hover-item  pr-4 right-0">
                    <BiTrashAlt className="hover:bg-gray-700 p-2 h-8 w-8  rounded-md text-red-500" />
                  </span>
                </li>
              ))}
            </ol>
          </div>
          <div className="">
            <h3 className="text-gray-900 dark:text-gray-500 mb-2">
              New Language:
            </h3>
            <div className="flex border border-gray-200 dark:border-gray-700 p-4 rounded-md items-center flex-col space-y-2">
              <div className="flex items-center space-x-2">
                <NormalFormInput
                  placeholder="Enter new language"
                  value={''}
                  onChange={() => {}}
                  fullWidth
                />

                <Selector
                  list={languageKnownLevel}
                  placeholder="Select level"
                  // selectedItem={languageKnownLevel[0].name}
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
        secondary
        withCardHeadings={
          <>
            <Button
              secondary
              onClick={() => setShowModal(true)}
              className="mr-3"
              invert
              bgColor="gray"
              Icon={AiOutlineEdit}
              size="sm"
              label={'Edit'}
            />
          </>
        }
        id="language"
        cardTitle="Languages"
        content={
          <div
            style={{ maxHeight: '15rem', minHeight: '20rem' }}
            className="overflow-y-auto  custom-scroll-mini"
          >
            <ol className="space-y-6 list-disc px-8 py-4 ">
              {map(languages, (lang, awardIdx) => (
                <li
                  className="text-gray-900 dark:text-white  cursor-pointer text-left"
                  key={awardIdx}
                >
                  <span className="block text-gray-900 dark:text-white text-lg font-medium">
                    {lang.langName}
                  </span>
                  <span className="block text-gray-600 dark:text-gray-500 text-sm font-medium">
                    {lang.langLevel}
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

export default Languages
