import Card from 'components/atoms/Card'
import { AiOutlineEdit } from 'react-icons/ai'
import { IBlockProps } from 'interfaces/UniversalInterface'
import { map } from 'lodash'
import Button from 'components/atoms/Button'
import EmptyState from 'components/atoms/EmptyState'
import { PlusIcon } from '@heroicons/react/solid'
import { EDUCATION } from 'state/Redux/constants'

const Education = ({ userData, showEditOption, setShowModal }: IBlockProps) => {
  const { background } = userData || {}
  const { education = [] } = background || {}

  return (
    <>
      <Card
        secondary
        id="education"
        cardTitle="Education"
        withCardHeadings={
          education &&
          education.length > 0 &&
          showEditOption && (
            <>
              <Button
                secondary
                className="mr-3"
                invert
                bgColor="gray"
                onClick={() => setShowModal({ type: EDUCATION, show: true })}
                Icon={AiOutlineEdit}
                size="sm"
                label={'Edit'}
              />
            </>
          )
        }
        content={
          <div>
            {education && education.length > 0 ? (
              <ul className="space-y-12 pt-6">
                {map(education, (ed, idx) => (
                  <li key={idx} className="flex items-start space-x-4">
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
            ) : (
              <EmptyState
                title="No education data"
                subtitle="Add your qualification"
                showEditOption={showEditOption}
                btnText="Add education"
                BtnIcon={PlusIcon}
                onBtnClick={() => {
                  setShowModal({ type: EDUCATION, show: true })
                }}
                iconUrl={'/education.png'}
              />
            )}
          </div>
        }
      />
    </>
  )
}

export default Education
