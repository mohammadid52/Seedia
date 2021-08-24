import { PlusIcon } from '@heroicons/react/solid'
import Button from 'components/atoms/Button'
import Card from 'components/atoms/Card'
import EmptyState from 'components/atoms/EmptyState'
import { IBlockProps } from 'interfaces/UniversalInterface'
import { map } from 'lodash'
import { AiOutlineEdit } from 'react-icons/ai'
import { SKILLS } from 'state/Redux/constants'

const Skills = ({ userData, setShowModal }: IBlockProps) => {
  const { background } = userData || {}
  const { skills = [] } = background || {}
  return (
    <>
      <Card
        className="mr-6"
        id="skills"
        secondary
        cardTitle="Skills"
        withCardHeadings={
          skills &&
          skills.length > 0 && (
            <>
              <Button
                secondary
                className="mr-3"
                invert
                onClick={() => setShowModal({ type: SKILLS, show: true })}
                bgColor="gray"
                Icon={AiOutlineEdit}
                size="sm"
                label={'Edit'}
              />
            </>
          )
        }
        content={
          <div
            style={{ maxHeight: '15rem', minHeight: '20rem' }}
            className="overflow-y-auto  custom-scroll-mini "
          >
            {skills && skills.length > 0 ? (
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
            ) : (
              <EmptyState
                title="No skills"
                subtitle="Add new skills to enhance your profile."
                btnText="Add skills"
                BtnIcon={PlusIcon}
                onBtnClick={() => {
                  setShowModal({ type: SKILLS, show: true })
                }}
                iconUrl={'/tools.png'}
              />
            )}
          </div>
        }
      />
    </>
  )
}

export default Skills
