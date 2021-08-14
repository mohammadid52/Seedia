import Button from 'components/atoms/Button'
import Card from 'components/atoms/Card'
import Modal from 'components/atoms/Modal'
import NormalFormInput from 'components/atoms/NormalFormInput'
import { IProfileTwo } from 'interfaces/UniversalInterface'
import { map } from 'lodash'
import { useState } from 'react'
import { AiOutlineEdit } from 'react-icons/ai'
import { BiTrashAlt } from 'react-icons/bi'

const Skills = ({ skills }: { skills: IProfileTwo['skills'] }) => {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <Modal header={'Edit Skills'} open={showModal} setOpen={setShowModal}>
        <div>
          <div className="my-2">
            <div
              style={{ maxHeight: '15rem', minHeight: '20rem' }}
              className="overflow-y-auto  custom-scroll-mini darker"
            >
              <ol className="space-y-6 list-none py-4 ">
                {map(skills, (skill, idx: number) => (
                  <>
                    <li
                      className="text-gray-900 on-hover-container p-4  relative dark:text-white flex items-center  cursor-pointer text-left"
                      key={skill.name + idx}
                    >
                      {skill.name}
                      <span className="absolute on-hover-item pr-4 right-0">
                        <BiTrashAlt className="hover:bg-gray-600 p-2 h-8 w-8  rounded-md text-red-500" />
                      </span>
                    </li>
                  </>
                ))}
              </ol>
            </div>
          </div>
          <div className="divider dark:divider">
            <div className="flex items-center space-x-2">
              <NormalFormInput
                placeholder="Enter new skill"
                value={''}
                onChange={() => {}}
              />
              <Button size="sm" gradient label="Add" />
            </div>
          </div>
          <div className="mt-5 sm:mt-4 flex justify-end space-x-4 items-center">
            <Button gradient invert label="Cancel" />
            <Button gradient label="Save" />
          </div>
        </div>
      </Modal>
      <Card
        className="mr-6"
        id="skills"
        secondary
        cardTitle="Skills"
        withCardHeadings={
          <>
            <Button
              secondary
              className="mr-3"
              invert
              onClick={() => setShowModal(true)}
              bgColor="gray"
              Icon={AiOutlineEdit}
              size="sm"
              label={'Edit'}
            />
          </>
        }
        content={
          <div
            style={{ maxHeight: '15rem', minHeight: '20rem' }}
            className="overflow-y-auto  custom-scroll-mini"
          >
            <ol className="space-y-6 list-disc px-8 py-4 ">
              {map(skills, (skill, idx: number) => (
                <li
                  className="text-gray-900 dark:text-white  cursor-pointer text-left"
                  key={skill.name + idx}
                >
                  {skill.name}
                </li>
              ))}
            </ol>
          </div>
        }
      />
    </>
  )
}

export default Skills
