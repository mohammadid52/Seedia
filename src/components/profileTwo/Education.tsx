import Button from 'components/atoms/Button'
import Card from 'components/atoms/Card'
import Modal from 'components/atoms/Modal'
import NormalFormInput from 'components/atoms/NormalFormInput'
import Selector from 'components/atoms/Selector'
import { map } from 'lodash'
import React, { useState } from 'react'
import { AiOutlineEdit } from 'react-icons/ai'
import { yearList } from 'values/values'

const Education = ({ data }: { data: any }) => {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <Modal open={showModal} setOpen={setShowModal} header="Edit Education">
        <div>
          <div
            style={{
              maxHeight: '15rem',
              minHeight: '20rem',
            }}
            className="overflow-y-auto  custom-scroll-mini darker my-4"
          >
            <ul className="space-y-12 pt-6">
              {map(data, (ed) => (
                <li className="flex items-start space-x-4">
                  <div className="flex items-center mt-2 w-36">
                    <span className="block text-gray-500 mr-4 dark:text-gray-400">
                      2017 - 2021
                    </span>
                    <span className="block rounded-full ml-4  h-3 w-3 border-2 border-gray-300 " />
                  </div>
                  <div>
                    <h4 className="text-2xl text-gray-900 dark:text-white font-medium">
                      {ed.name}
                    </h4>
                    <h6 className="text-base text-gray-400 dark:text-gray-400">
                      {ed.degree}
                    </h6>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="">
            <h3 className="text-gray-900 dark:text-gray-500 mb-2">
              New Education Timeline:
            </h3>
            <div className="flex border border-gray-200 dark:border-gray-700 p-4 rounded-md items-center flex-col space-y-2">
              <div className="flex mb-2 items-center space-x-4">
                <NormalFormInput
                  placeholder="Institution name"
                  value={''}
                  onChange={() => {}}
                  fullWidth
                />
                <NormalFormInput
                  placeholder="Additional info"
                  value={''}
                  onChange={() => {}}
                  fullWidth
                />
                <Selector
                  list={yearList}
                  placeholder="Select from year"
                  // selectedItem={languageKnownLevel[0].name}
                />
                <Selector
                  list={yearList}
                  placeholder="Select to year"
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
        id="education"
        cardTitle="Education"
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
        content={
          <div>
            <ul className="space-y-12 pt-6">
              {map(data, (ed) => (
                <li className="flex items-start space-x-4">
                  <div className="flex items-center mt-2 w-36">
                    <span className="block text-gray-500 mr-4 dark:text-gray-400">
                      2017 - 2021
                    </span>
                    <span className="block rounded-full ml-4  h-3 w-3 border-2 border-gray-300 " />
                  </div>
                  <div>
                    <h4 className="text-2xl text-gray-900 dark:text-white font-medium">
                      {ed.name}
                    </h4>
                    <h6 className="text-base text-gray-400 dark:text-gray-400">
                      {ed.degree}
                    </h6>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        }
      />
    </>
  )
}

export default Education
