import Button from 'components/atoms/Button'
import Card from 'components/atoms/Card'
import { IBlockProps } from 'interfaces/UniversalInterface'
import { map } from 'lodash'
import { AiOutlineEdit } from 'react-icons/ai'
import EmptyState from 'components/atoms/EmptyState'
import { PlusIcon } from '@heroicons/react/solid'
import { AWARDS } from 'state/Redux/constants'

const Awards = ({ userData, setShowModal }: IBlockProps) => {
  const { background } = userData || {}
  const { awards = [] } = background || {}

  return (
    <>
      <Card
        secondary
        id="awards"
        withCardHeadings={
          awards &&
          awards.length > 0 && (
            <>
              <Button
                secondary
                className="mr-3"
                onClick={() => setShowModal({ type: AWARDS, show: true })}
                invert
                bgColor="gray"
                Icon={AiOutlineEdit}
                size="sm"
                label={'Edit'}
              />
            </>
          )
        }
        className="ml-6"
        cardTitle="Awards"
        content={
          <div
            style={{ maxHeight: '15rem', minHeight: '20rem' }}
            className="overflow-y-auto  custom-scroll-mini"
          >
            {awards && awards.length > 0 ? (
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
            ) : (
              <EmptyState
                title="No awards"
                subtitle="Showcase your awards here"
                btnText="Add awards"
                BtnIcon={PlusIcon}
                onBtnClick={() => {
                  setShowModal({ type: AWARDS, show: true })
                }}
                iconUrl={'/trophy.png'}
              />
            )}
          </div>
        }
      />
    </>
  )
}

export default Awards
