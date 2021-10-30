import { addProject } from 'apis/mutations'
import Error from 'components/alerts/Error'
import Info from 'components/alerts/Info'
import Button from 'components/atoms/Button'
import FormInput from 'components/atoms/FormInput'
import FormMultipleSelector from 'components/atoms/FormMultipleSelector'
import Meta from 'components/atoms/Meta/Meta'
import NormalFormInput from 'components/atoms/NormalFormInput'
import Title from 'components/atoms/Title'
import { links } from 'constants/Links'
import NarrowLayout from 'containers/NarrowLayout'
import { Form, Formik } from 'formik'
import useAccountType from 'hooks/useAccountType'
import { IParent, IProject, ISection } from 'interfaces/UniversalInterface'
import { map, remove, update } from 'lodash'
import { nanoid } from 'nanoid'
import { useEffect, useState } from 'react'
import { useMutation } from 'react-query'
import { useHistory } from 'react-router-dom'
import * as Yup from 'yup'

const AddProject = ({ userData }: { userData: IParent }) => {
  const { isBusiness } = useAccountType(userData)

  useEffect(() => {
    if (!isBusiness) {
      return history.push(links.FEED)
    }
  }, [isBusiness])

  const validationSchema = Yup.object({
    title: Yup.string().required('Title is required').min(10).max(150),
    salary: Yup.object({
      min: Yup.string()
        .required('Minimum Salary is required')
        .matches(/^[0-9]+$/, 'Must be only digits'),

      max: Yup.string()
        .required('Maximum Salary is required')
        .matches(/^[0-9]+$/, 'Must be only digits'),
    }),
    briefDescription: Yup.string().required('Brief Description is required'),
    website: Yup.string()
      .required('Website Url is required')
      .url('Invalid Url format'),

    closure: Yup.string().required('Closure is required'),
  })

  // @ts-ignore
  const initialValues: IProject = {
    title: '',
    functionType: [{ name: 'Part-time', id: '1' }],
    salary: { min: '', max: '', duration: '' },
    briefDescription: '',
    website: '',
    closure: '',
  }

  const { mutate, isLoading, isError, error, isSuccess } =
    useMutation(addProject)

  const history = useHistory()
  useEffect(() => {
    if (isSuccess) {
      history.push(
        links.getProfileById(
          userData.profileUrl,
          userData?.other?.template || 1
        )
      )
    }
  }, [isSuccess])

  const functionTypeList = [
    { name: 'Full-time', id: '1' },
    { name: 'Part-time', id: '2' },
  ]
  const salaryDurationList = [
    { name: 'Per hour', id: '1' },
    { name: 'Per day', id: '2' },
    { name: 'Per week', id: '3' },
    { name: 'Per month', id: '4' },
  ]

  const initSections: ISection[] = [
    {
      title: 'Responsibilities',
      content: '• Developing new user-facing features using React.js',
      id: nanoid(9),
    },
    {
      title: 'Skills',
      content:
        '• Strong proficiency in JavaScript, including DOM manipulation and the JavaScript object model',
      id: nanoid(9),
    },
  ]
  const [sections, setSections] = useState<ISection[]>(initSections)

  const [sectionError, setSectionError] = useState('')

  const addNewSection = () => {
    if (sections.length <= 10) {
      sections.push({ title: '', content: '', id: nanoid(9) })
      setSections((prev) => [...prev])
      setSectionError('')
    } else {
      setSectionError('You cannot add more than 10 sections')
    }
  }

  const removeSection = (id: string) => {
    remove(sections, (sec) => sec.id === id)
    setSections((prev) => [...prev])
  }

  const onChangeField = (fieldName: string, value: string, idx: number) => {
    update(sections[idx], fieldName, () => value)
    setSections((prev) => [...prev])
  }

  const onSubmit = async (values: any) => {
    if (sections.length < 2) {
      setSectionError('Atleast sections are required')
    } else {
      setSectionError('')
      const updatedValues = {
        ...values,
        salary: {
          ...values.salary,
          duration: values.salary.duration[0].name,
        },
        sections,
      }

      mutate(updatedValues)
    }
  }

  return (
    <NarrowLayout>
      <Meta pageTitle="Add Project" />
      <Title fontWeight="font-bold mb-8">Add Project</Title>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form className="space-y-8">
          {/* // ~~~~~~~~~~~~~~~~~~~BASIC INFO~~~~~~~~~~~~~~~~~~ // */}
          <Title size="gradient-border border-b pb-2 text-lg">
            Basic information
          </Title>
          <Info text="Project Title and Brief Description is very important for more views and recruitments. Try to add more keywords related to the project in it. Like Javascript Developer, etc." />

          <FormInput
            label="Project Title"
            id="title"
            name="title"
            required
            placeholder="Add project title"
          />

          <FormInput
            label="Brief Description"
            id="briefDescription"
            name="briefDescription"
            placeholder="Give a little information about the job"
            required
            textarea
            rows={5}
            cols={255}
          />

          <FormMultipleSelector
            label="Function Type"
            required
            name="functionType"
            defaultItem={functionTypeList[0].name}
            placeholder="Select type"
            list={functionTypeList}
          />

          <div className="w-full grid gap-x-4 grid-cols-1 sm:grid-cols-2">
            <FormInput
              // gridClass="w-1/2"
              label="Minimum Salary"
              id="salary[min]"
              name="salary[min]"
              required
              type="number"
              placeholder="Add min salary"
            />
            <FormInput
              // gridClass="w-1/2"
              label="Maximum Salary"
              id="salary[max]"
              type="number"
              name="salary[max]"
              required
              placeholder="Add max salary"
            />
          </div>
          <FormMultipleSelector
            label="Salary Duration"
            required
            name="salary[duration]"
            placeholder="Select duration"
            list={salaryDurationList}
          />

          {/* // ~~~~~~~~~~~~~~~~~~~Detail INFO~~~~~~~~~~~~~~~~~~ // */}

          <Title size="gradient-border border-b pb-2 text-lg">
            Detail information about the job
          </Title>
          <div className="flex flex-col gap-y-16">
            {map(sections, (section, sectionIdx) => (
              <div key={section.id} className="flex relative flex-col gap-y-4">
                <NormalFormInput
                  onChange={(e) =>
                    onChangeField('title', e.target.value, sectionIdx)
                  }
                  value={section.title}
                  label="Title"
                  id={section.id + '-title'}
                  name="title"
                  required
                  placeholder="Perks"
                />

                <NormalFormInput
                  label="Content"
                  onChange={(e) =>
                    onChangeField('content', e.target.value, sectionIdx)
                  }
                  value={section.content}
                  id={section.id + '-briefDescription'}
                  name="briefDescription"
                  placeholder="• 5 Days Working"
                  required
                  textarea
                  rows={5}
                  cols={255}
                />
                {sectionIdx !== 0 && sectionIdx !== 1 && (
                  <span
                    onClick={() => removeSection(section.id)}
                    className="xl:absolute xl:bottom-0 static on-hover-item  xl:-right-10  hover:bg-gray-800 transition-all cursor-pointer p-2 rounded-md text-red-500 xl:translate-x-full transform "
                  >
                    Delete section
                  </span>
                )}
              </div>
            ))}
          </div>
          {sectionError && <Error errors={[sectionError]} />}

          <div className="flex items-center justify-end">
            <Button
              rounded="rounded-lg"
              fullWidth
              gradient
              size="lg"
              onClick={addNewSection}
              label="Add new section"
            />
          </div>

          <FormInput
            label="Website"
            id="website"
            name="website"
            required
            placeholder="Your company website url"
          />

          {/* // ~~~~~~~~~~~~~~~~~~~CLOSURE~~~~~~~~~~~~~~~~~~ // */}
          <Title size="gradient-border border-b pb-2 text-lg">Closure</Title>
          <FormInput
            label="Closure"
            id="closure"
            name="closure"
            required
            placeholder="Add closure"
          />

          <div className="flex items-center justify-end">
            <Button
              type="submit"
              rounded="rounded-lg"
              loading={isLoading}
              gradient
              size="lg"
              label="Submit"
            />
          </div>

          {isError && <Error errors={[error.toString()]} />}
        </Form>
      </Formik>
    </NarrowLayout>
  )
}

export default AddProject
