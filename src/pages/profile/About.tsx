import Card from 'components/atoms/Card'

import Button from 'components/atoms/Button'
import { AiOutlineEdit } from 'react-icons/ai'
import Modal from 'components/atoms/Modal'
import { useState } from 'react'
import { IAbout } from 'interfaces/UniversalInterface'
import NormalFormInput from 'components/atoms/NormalFormInput'
import Selector from 'components/atoms/Selector'

const About = ({ data, userData }: { data: IAbout; userData: any }) => {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <Modal open={showModal} setOpen={setShowModal} header="Edit About">
        <div>
          <div
            style={{
              maxHeight: '15rem',
              minHeight: '15rem',
            }}
            className="overflow-y-auto p-2 custom-scroll-mini darker my-4"
          >
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <NormalFormInput
                label="Current company name"
                value={data.currentCompany}
                onChange={() => {}}
              />
              <NormalFormInput
                label="Previous company name"
                value={data.previousCompany}
                onChange={() => {}}
              />
              <NormalFormInput
                label="Lives in"
                value={data.livesIn}
                onChange={() => {}}
              />
              <Selector
                label="Marital Status"
                selectedItem={data.maritalStatus}
                list={[
                  { id: '0', name: 'Married' },
                  { id: '1', name: 'Single' },
                ]}
              />
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
        cardTitle="About"
        withCardHeadings={
          <>
            <Button
              secondary
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
          <div className="space-y-4">
            <div className="current-company">
              <span className="title block text-gray-400 text-sm">Current</span>
              <span className="data block text-sm  text-gray-900 dark:text-white ">
                {data.currentCompany}
              </span>
            </div>
            <div className="current-company">
              <span className="title block text-gray-400 text-sm">
                Previous
              </span>
              <span className="data block text-sm  text-gray-900 dark:text-white">
                {data.previousCompany}
              </span>
            </div>

            <div className="current-company">
              <span className="title block text-gray-400 text-sm">
                Lives In
              </span>
              <span className="data block text-sm  text-gray-900 dark:text-white">
                {data.livesIn}
              </span>
            </div>
            <div className="current-company">
              <span className="title block text-gray-400 text-sm">
                Marital Status
              </span>
              <span className="data block text-sm  text-gray-900 dark:text-white">
                {data.maritalStatus}
              </span>
            </div>
          </div>
        }
      />
    </>
  )
}

export default About
