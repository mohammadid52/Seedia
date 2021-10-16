import { addProject } from 'apis/mutations'
import Error from 'components/alerts/Error'
import Button from 'components/atoms/Button'
import Divider from 'components/atoms/Divider'
import FormInput from 'components/atoms/FormInput'
import FormMultipleSelector from 'components/atoms/FormMultipleSelector'
import Meta from 'components/atoms/Meta/Meta'
import Title from 'components/atoms/Title'
import List from 'components/List'
import { links } from 'constants/Links'
import NarrowLayout from 'containers/NarrowLayout'
import { Form, Formik } from 'formik'
import { IParent, IProject } from 'interfaces/UniversalInterface'
import { useMutation } from 'react-query'
import { Redirect } from 'react-router'
import { useEffect } from 'react'
import * as Yup from 'yup'
import { useHistory } from 'react-router-dom'

const AddProject = ({ userData }: { userData: IParent }) => {
  const validationSchema = Yup.object({
    salary: Yup.object({
      min: Yup.string()
        .required('Minimum Salary is required')
        .matches(/^[0-9]+$/, 'Must be only digits'),

      max: Yup.string()
        .required('Maximum Salary is required')
        .matches(/^[0-9]+$/, 'Must be only digits'),
    }),
    briefDescription: Yup.string().required('Brief Description is required'),
    jobDescription: Yup.object({
      header: Yup.string().required('Header is required'),
    }),
    jobRequirements: Yup.object({
      header: Yup.string().required('Header is required'),
    }),
    workingConditions: Yup.object({
      header: Yup.string().required('Header is required'),
    }),
    closure: Yup.string().required('Closure is required'),
  })

  const initialValues: IProject = {
    functionType: [{ name: 'Part-time', id: '1' }],
    salary: { min: '', max: '', duration: '' },
    briefDescription: '',
    jobDescription: {
      header: '',
      points: null,
    },
    jobRequirements: {
      header: '',
      points: null,
    },
    workingConditions: {
      header: '',
      points: null,
    },
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

  const onSubmit = async (values: any) => {
    // const updatedProject = {
    //   ...values,
    //   functionType: values.functionType.map((d: any) => d.name).join(', '),
    //   salary: { ...values.salary, duration: values.salary.duration[0].name },
    //   jobDescription: {
    //     ...values.jobDescription,
    //     points: values.jobDescription.map((v: any) => v.name),
    //   },
    //   jobRequirements: {
    //     ...values.jobRequirements,
    //     points: values.jobRequirements.map((v: any) => v.name),
    //   },
    //   workingConditions: {
    //     ...values.workingConditions,
    //     points: values.workingConditions.map((v: any) => v.name),
    //   },
    // }
    mutate(values)
  }

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

          <Divider />
          <Title size="text-lg">Job Description</Title>
          <FormInput
            label="Job Description Header"
            id="jobDescription[header]"
            name="jobDescription[header]"
            required
            placeholder="Add title"
          />
          <List
            label="Points"
            placeholder="Make improvement plans"
            name="jobDescription[points]"
          />

          <Divider />
          <Title size="text-lg">Job Requirements</Title>
          <FormInput
            label="Job Requrements Header"
            id="jobRequirements[header]"
            name="jobRequirements[header]"
            required
            placeholder="Add title"
          />
          <List
            label="Points"
            placeholder="Managing and training the team of quality controllers that you manage"
            name="jobRequirements[points]"
          />

          <Divider />
          <Title size="text-lg">Working Conditions</Title>
          <FormInput
            label="Working Conditions Header"
            id="workingConditions[header]"
            name="workingConditions[header]"
            required
            placeholder="Add title"
          />
          <List
            label="Points"
            placeholder="A premium if you are not sick for a year!"
            name="workingConditions[points]"
          />

          <Divider />
          <Title size="text-lg">Closure</Title>
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
