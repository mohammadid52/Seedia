import Button from 'components/atoms/Button'
import Card from 'components/atoms/Card'
import { IBlockProps } from 'interfaces/UniversalInterface'
import { map } from 'lodash'
import { AiOutlineEdit } from 'react-icons/ai'
import EmptyState from 'components/atoms/EmptyState'
import { PlusIcon } from '@heroicons/react/solid'
import { LANGUAGES } from 'state/Redux/constants'

const Languages = ({ userData, setShowModal, showEditOption }: IBlockProps) => {
  const { background } = userData || {}
  const { languages = [] } = background || {}

  return (
    <>
      <Card
        secondary
        withCardHeadings={
          languages &&
          languages.length > 0 &&
          showEditOption && (
            <>
              <Button
                secondary
                onClick={() => setShowModal({ show: true, type: LANGUAGES })}
                className="mr-3"
                invert
                bgColor="gray"
                Icon={AiOutlineEdit}
                size="sm"
                label={'Edit'}
              />
            </>
          )
        }
        id="language"
        cardTitle="Languages"
        content={
          <div className=" overflow-y-auto scroll-dark-md">
            <ol className="space-y-6 list-disc px-8 py-4 ">
              {languages && languages.length > 0 ? (
                map(languages, (lang, awardIdx) => (
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
                ))
              ) : (
                <EmptyState
                  title="No languages"
                  subtitle="Show everyone what languages you know"
                  btnText="Add languages"
                  BtnIcon={PlusIcon}
                  showEditOption={showEditOption}
                  onBtnClick={() => {
                    setShowModal({ show: true, type: LANGUAGES })
                  }}
                  iconUrl={'/translation.png'}
                />
              )}
            </ol>
          </div>
        }
      />
    </>
  )
}

export default Languages
