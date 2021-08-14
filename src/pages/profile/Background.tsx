import Card from 'components/atoms/Card'
import { useEffect, useState } from 'react'
import Section from 'components/atoms/Section'
import { CgDetailsMore } from 'react-icons/cg'
import { AiOutlineEdit } from 'react-icons/ai'
import Button from 'components/atoms/Button'
import { isEmpty, map } from 'lodash'
import Modal from 'components/atoms/Modal'
import { IBackground } from 'interfaces/UniversalInterface'
import NormalFormInput from 'components/atoms/NormalFormInput'
import Label from 'components/atoms/Label'
import Divider from 'components/atoms/Divider'

const Background = ({
  data,
  setData,
}: {
  data: IBackground
  setData: (data: IBackground) => any
}) => {
  const [showModal, setShowModal] = useState(false)

  const onChange = (e: any) => {
    const { value, id } = e.target

    setFields({ ...fields, [id]: value })
  }
  const [fields, setFields] = useState<{
    interest: string
    summary: string
    interests: IBackground['interests']
  }>({
    interest: '',
    interests: [],
    summary: '',
  })

  useEffect(() => {
    if (!isEmpty(data)) {
      setFields({ ...fields, summary: data.summary, interests: data.interests })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data])

  const onInterestAdd = () => {
    setFields({
      ...fields,
      interests: [...fields.interests, { name: fields.interest }],
    })
  }

  return (
    <>
      <Modal open={showModal} setOpen={setShowModal} header="Edit Background">
        <div>
          <div
            style={{
              minHeight: '15rem',
              minWidth: '20rem',
              maxWidth: '60rem',
            }}
            className="overflow-y-auto p-2 custom-scroll-mini darker my-4"
          >
            <div className="grid gap-6 grid-cols-1">
              <NormalFormInput
                label="Summary"
                value={fields.summary}
                id={'summary'}
                textarea
                gridClass="col-span-2"
                onChange={onChange}
                placeholder="Enter interest name"
              />
              <Divider />

              <div className="relative flex col-span-2 items-center gap-x-4 gap-y-2 flex-wrap justify-start">
                <Label text="Skills" className="absolute -top-6" />
                <div className="gap-x-4 flex items-center">
                  {map(fields.interests, (interest: any) => (
                    <Button
                      gradient
                      invert
                      bgColor="pink"
                      label={interest.name}
                    />
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-x-4 ">
                <NormalFormInput
                  value={fields.interest}
                  id="interest"
                  gridClass="col-span-2"
                  onChange={(e) =>
                    setFields({ ...fields, interest: e.target.value })
                  }
                />
                <Button
                  gradient
                  size="sm"
                  className=""
                  onClick={onInterestAdd}
                  bgColor="pink"
                  label={'+ Add New'}
                />
              </div>
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
        cardTitle="Background"
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
          <div className="space-y-10">
            <Section
              sectionTitle="Summary"
              Icon={CgDetailsMore}
              content={<p>{data.summary}</p>}
            />
            <Section
              sectionTitle="Interests"
              Icon={CgDetailsMore}
              content={
                <div className="flex items-center flex-wrap justify-start">
                  <div className="mb-4">
                    {map(data.interests, (skill: any) => (
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
              Icon={CgDetailsMore}
              content={
                <div className="space-y-8">
                  {map(data.experience, (exp, idx: number) => (
                    <div
                      key={idx}
                      className={` ${
                        idx !== 1
                          ? 'border-b border-gray-200 dark:border-gray-600 pb-4'
                          : ''
                      }`}
                    >
                      <h4 className="job_title font-medium dark:text-white text-gray-900">
                        {exp.jobTitle}
                      </h4>
                      <h5 className="company_name link-hover block text-left cursor-pointer ">
                        {exp.companyName}
                      </h5>
                      <span className="job_duration text-gray-300 font-semibold text-sm">
                        February {exp.startedAt} - Present
                      </span>
                      <p className="company_description text-gray-400 mt-3">
                        {exp.description}
                      </p>
                    </div>
                  ))}
                </div>
              }
            />
          </div>
        }
      />
    </>
  )
}

export default Background
