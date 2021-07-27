import { useState } from 'react'

const useForm = (
  initialFields: { [key: string]: string },
  errorInitialFields: { [key: string]: string }
) => {
  const [fields, setFields] = useState(initialFields)
  const [errors, setErrors] = useState(errorInitialFields)
  const onChange = (e: any) => {
    const { id, value } = e.target
    setFields({ ...fields, [id]: value })
    setErrors({ ...errors, [id]: '' })
  }

  return { fields, setFields, onChange, errors, setErrors }
}

export default useForm
