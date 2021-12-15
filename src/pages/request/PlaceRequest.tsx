import { addPost, addRequest } from 'apis/mutations'
import Error from 'components/alerts/Error'
import Info from 'components/alerts/Info'
import Button from 'components/atoms/Button'
import FormInput from 'components/atoms/FormInput'
import Meta from 'components/atoms/Meta/Meta'
import Title from 'components/atoms/Title'
import List from 'components/List'
import { links } from 'constants/Links'
import NarrowLayout from 'containers/NarrowLayout'
import { useNotifications } from 'context/NotificationContext'
import { Form, Formik } from 'formik'
import { IParent, IRequest } from 'interfaces/UniversalInterface'
import { useState } from 'react'
import { useMutation } from 'react-query'
import { useHistory } from 'react-router-dom'
import * as Yup from 'yup'

const PlaceRequest = ({ userData }: { userData: IParent }) => {
  const validationSchema = Yup.object({
    title: Yup.string().required('Title is required').min(10).max(150),
    description: Yup.string()
      .required('Description is required')
      .min(50)
      .max(600),
  })

  // @ts-ignore
  const initialValues: IRequest = {
    title: '',
    description: '',
    skills: userData?.background?.skills || [],
  }
  const { setNotification } = useNotifications()

  const postMutation = useMutation(addPost, {
    onSuccess: () => {
      history.push(links.FEED)
    },
  })

  const { mutate, isLoading, isError, error } = useMutation(addRequest, {
    onSuccess: (data) => {
      const requestId = data.data.data
      const message = data.data.message
      setNotification({
        show: true,
        title: message,
        buttonText: 'View',
        buttonUrl: links.viewRequestById(requestId),
      })

      postMutation.mutate({
        postData: {
          text: `${userData.fullName} has placed request for work.`,
          postType: 'request',
          customInId: requestId,
        },
      })
    },
  })

  const [skillsError, setSkillsError] = useState('')

  const history = useHistory()

  const onSubmit = async (values: any) => {
    if (values.skills.length > 0) {
      const updatedValues = {
        ...values,
        skills: values.skills.map((skill: { name: string }) => skill.name),
      }
      mutate(updatedValues)
      setSkillsError('')
    } else {
      setSkillsError('Add atleast one skill')
    }
  }

  return (
    <NarrowLayout userData={userData}>
      <Meta pageTitle="Place Request | Jobs | 13RMS" />
      <Title fontWeight="font-bold mb-8">Place Request</Title>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form className="space-y-8">
          <Info text="Job/Work Title and Skills are very important for more views and jobs. Try to add more keywords related to your skills in it. Like Javascript, etc." />

          <FormInput
            label="Title"
            id="title"
            name="title"
            required
            placeholder="Add title"
          />

          <FormInput
            label="Description"
            id="description"
            name="description"
            placeholder="Give a little information about your niche"
            required
            textarea
            rows={5}
            cols={255}
          />
          <List
            initialValues={userData?.background?.skills}
            min={3}
            max={20}
            name="skills"
            placeholder="skill"
          />

          <div className="flex items-center justify-end">
            <Button
              type="submit"
              rounded="rounded-lg"
              loading={isLoading}
              gradient
              size="lg"
              label="Place request"
            />
          </div>

          {isError && <Error errors={[error.toString()]} />}
          {!isError && skillsError && (
            <Error errors={[skillsError.toString()]} />
          )}
        </Form>
      </Formik>
    </NarrowLayout>
  )
}

export default PlaceRequest
