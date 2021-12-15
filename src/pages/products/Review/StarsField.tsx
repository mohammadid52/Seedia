import { useField } from 'formik'
// @ts-ignore
// eslint-disable-next-line
import ReactStars from 'react-rating-stars-component'

const StarsField = () => {
  const [field, meta, helpers] = useField('rating')

  const { setValue } = helpers

  const ratingConfig = {
    size: 30,
    value: field.value,
    isHalf: false,
    onChange: (v: any) => setValue(v.toString()),
  }

  return (
    <div>
      <label className="block dark:text-white text-sm font-medium text-gray-700">
        Give stars
      </label>
      <ReactStars {...ratingConfig} />
      {meta.touched && meta.error && (
        <p className="mt-2 transition-all duration-200 text-sm text-red-600 dark:text-red-500">
          {meta.error}
        </p>
      )}
    </div>
  )
}

export default StarsField
