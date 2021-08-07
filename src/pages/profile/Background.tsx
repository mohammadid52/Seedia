import Card from 'components/atoms/Card'
import React from 'react'
import faker from 'faker'
import Section from 'components/atoms/Section'
import { CgDetailsMore } from 'react-icons/cg'
import { AiOutlineEdit } from 'react-icons/ai'
import Button from 'components/atoms/Button'
import { map } from 'lodash'

const interests = [
  { name: 'Branding' },
  { name: 'Web Design' },
  { name: 'Mobile Design' },
  { name: 'Development' },
]

const Background = () => {
  return (
    <Card
      cardTitle="Background"
      content={
        <div className="space-y-10">
          <Section
            sectionTitle="Summary"
            Icon={CgDetailsMore}
            withSectionHeadings={
              <>
                <Button
                  secondary
                  className="mr-3"
                  invert
                  bgColor="gray"
                  Icon={AiOutlineEdit}
                  size="sm"
                  label={'Edit'}
                />
              </>
            }
            content={<p>{faker.lorem.paragraph()}</p>}
          />
          <Section
            sectionTitle="Interests"
            withSectionHeadings={
              <>
                <Button
                  secondary
                  className="mr-3"
                  invert
                  bgColor="gray"
                  Icon={AiOutlineEdit}
                  size="sm"
                  label={'Edit'}
                />
              </>
            }
            Icon={CgDetailsMore}
            content={
              <div className="flex items-center flex-wrap justify-start">
                <div className="mb-4">
                  {map(interests, (skill: any) => (
                    <Button
                      gradient
                      className="mr-3"
                      invert
                      bgColor="pink"
                      label={skill.name}
                    />
                  ))}
                </div>
              </div>
            }
          />
          <Section
            sectionTitle="Experiences"
            withSectionHeadings={
              <>
                <Button
                  secondary
                  className="mr-3"
                  invert
                  bgColor="gray"
                  Icon={AiOutlineEdit}
                  size="sm"
                  label={'Edit'}
                />
              </>
            }
            Icon={CgDetailsMore}
            content={
              <div className="space-y-8">
                {map([0, 1], (idx) => (
                  <div
                    key={idx}
                    className={` ${
                      idx !== 1
                        ? 'border-b border-gray-200 dark:border-gray-600 pb-4'
                        : ''
                    }`}
                  >
                    <h4 className="job_title font-medium dark:text-white text-gray-900">
                      {faker.name.jobTitle()}
                    </h4>
                    <h5 className="company_name link-hover block text-left cursor-pointer ">
                      {faker.company.companyName()}
                    </h5>
                    <span className="job_duration text-gray-300 font-semibold text-sm">
                      February {faker.date.past().getFullYear()} - Present
                    </span>
                    <p className="company_description text-gray-400 mt-3">
                      {faker.lorem.paragraph(2)}
                    </p>
                  </div>
                ))}
              </div>
            }
          />
        </div>
      }
    />
  )
}

export default Background
