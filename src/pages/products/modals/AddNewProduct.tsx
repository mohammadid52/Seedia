import Button from 'components/atoms/Button'
import FormInput from 'components/atoms/FormInput'
import FormMultipleSelector from 'components/atoms/FormMultipleSelector'
import FormSelector from 'components/atoms/FormSelector'
import FormTagsInput from 'components/atoms/FormTagsInput'
import Modal from 'components/atoms/Modal'
import NormalFormInput from 'components/atoms/NormalFormInput'
import { Form, Formik, useField } from 'formik'
import { network } from 'helpers'
import { map, times } from 'lodash'
import remove from 'lodash/remove'
import { nanoid } from 'nanoid'
import { useState } from 'react'
import { BiTrashAlt } from 'react-icons/bi'
import { colorsList, sizeList } from 'values/values'
import * as Yup from 'yup'
type AddNewProductType = {
  show: boolean
  actions: any
  setShow: React.Dispatch<React.SetStateAction<boolean>>
}

const Features = ({ name }: { name: string }) => {
  const [field, meta, helpers] = useField(name)

  const [features, setFeatures] = useState<{ name: string; id: string }[]>([])

  const { setTouched, setError: $setError, setValue } = helpers
  const [error, setError] = useState('')

  const [featureField, setFeatureField] = useState('')
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFeatureField(e.target.value)
    $setError(``)
    setError(``)
  }

  const onFeatureAdd = () => {
    if (featureField.length >= 10) {
      setError('')
      setFeatures((prev) => [...prev, { name: featureField, id: nanoid(4) }])
      setValue(features)
      setTouched(true)
      $setError(undefined)
      setFeatureField('')
    } else {
      setError(`${name} text must be at least 10 characters`)
    }
  }

  const onFeatureRemove = (featureId: string) => {
    remove(features, (f) => f.id === featureId)
    setFeatures((prev) => [...prev])
  }

  return (
    <div>
      {features && features.length > 0 && (
        <ol className="space-y-4 border dark:border-gray-700 border-gray-200 rounded-lg p-4  list-disc ">
          {map(features, (feature, featureIdx) => (
            <li
              className="flex items-center on-hover-container relative text-gray-900 dark:text-white  cursor-pointer text-left"
              key={feature.id}
            >
              <div className="">
                <span className="block text-gray-900 dark:text-gray-400 text-sm font-normal">
                  {feature.name}
                </span>
              </div>

              <span
                onClick={() => onFeatureRemove(feature.id)}
                className="absolute on-hover-item  pr-4 right-0"
              >
                <BiTrashAlt className="hover:bg-gray-700 p-2 h-8 w-8  rounded-md text-red-500" />
              </span>
            </li>
          ))}
        </ol>
      )}
      <div
        className={`flex mt-4 justify-start  ${
          !error ? 'items-end' : 'items-center'
        } rounded-md  gap-2`}
      >
        <NormalFormInput
          error={error}
          label={`Add ${name}`}
          value={featureField}
          id="tags"
          placeholder={`Enter ${name}`}
          fullWidth
          className="w-full capitalize"
          onChange={onChange}
        />

        <Button
          onClick={onFeatureAdd}
          size="lg"
          invert
          className="w-32"
          gradient
          label="+ Add"
        />
      </div>
    </div>
  )
}

const AddNewProduct = ({
  show,
  setShow,
  actions,
}: AddNewProductType): JSX.Element => {
  const minMsg = (field: string, number: number) =>
    `${field} must be atleast ${number} characters`
  const maxMsg = (field: string, number: number) =>
    `${field} must be maximum ${number} characters`

  const validationSchema = Yup.object({
    productName: Yup.string()
      .required('Product name is required')
      .min(8, minMsg('Product Name', 8))
      .max(50, maxMsg('Product Name', 50)),
    productDescription: Yup.string()
      .required('Product description is required')
      .min(50, minMsg('Product Description', 50))
      .max(600, maxMsg('Product Description', 600)),
    details: Yup.string()
      .required('Product details is required')
      .min(50, minMsg('Product details', 50))
      .max(600, maxMsg('Product details', 600)),
    price: Yup.string()
      .required('Price is required')
      .matches(/^[0-9]+$/, 'Must be only digits'),
  })

  const [saving, setSaving] = useState(false)

  const initialValues = {
    // images:[],
    productName: '',
    productDescription: '',
    availableColors: [],
    availableSizes: [],
    tags: [],
    estimatedDelivery: 'In 7 days',
    price: 10,
    details: '',
    features: [],
    highlights: [],
  }
  const onSubmit = async (values: any) => {
    setSaving(true)
    await network.post('/products/add', { newProductData: values })
    setSaving(false)
    actions.cancel(unsavedChanges)
  }
  const [unsavedChanges, setUnsavedChanges] = useState(false)

  return (
    <>
      <Modal
        header="Add new product"
        open={show}
        setOpen={() => actions.cancel()}
      >
        <div
          style={{ minHeight: '80vh' }}
          className="min-w-132 max-w-256 h-full"
          id="add-new-products__modal-container"
        >
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            <Form className="space-y-6">
              <FormInput
                setUnsavedChanges={setUnsavedChanges}
                label="Product Name"
                id="productName"
                name="productName"
                required
                placeholder="Eg. Programming T-shirts"
              />
              <FormInput
                label="Product Description"
                id="productDescription"
                setUnsavedChanges={setUnsavedChanges}
                name="productDescription"
                placeholder="Tell your customer about the product in brief"
                required
                textarea
                rows={4}
                cols={255}
              />

              <FormInput
                label="Details"
                setUnsavedChanges={setUnsavedChanges}
                id="details"
                name="details"
                placeholder="What includes in product?"
                required
                textarea
                rows={2}
                cols={255}
              />
              <div className="flex items-center w-full space-x-6">
                <FormMultipleSelector
                  className="w-1/2"
                  label="Available Colors"
                  disableFieldOption
                  name="availableColors"
                  placeholder="Available colors for product"
                  list={colorsList}
                />
                <FormMultipleSelector
                  className="w-1/2"
                  sortBy="id"
                  disableFieldOption
                  label="Available Sizes"
                  name="availableSizes"
                  placeholder="XS,M,XL"
                  list={sizeList}
                />
              </div>
              <div className="flex items-start w-full space-x-6">
                <FormInput
                  label="Product Price"
                  id="price"
                  gridClass="w-1/2"
                  setUnsavedChanges={setUnsavedChanges}
                  name="price"
                  required
                  placeholder="99"
                />

                <FormSelector
                  required
                  list={map(times(30), (d) => ({
                    name: `In ${d + 1} days`,
                    id: d.toString(),
                  }))}
                  className="w-1/2"
                  name="estimatedDelivery"
                  placeholder="In 3 days"
                  label={'Estimated Delivery'}
                />
              </div>
              <FormTagsInput name="tags" />
              <Features name="features" />
              <Features name="highlights" />

              <div className="flex items-center justify-end">
                <Button
                  type="submit"
                  rounded="rounded-lg"
                  loading={saving}
                  gradient
                  fullWidth
                  size="lg"
                  label="Submit"
                />
              </div>
            </Form>
          </Formik>
        </div>
      </Modal>
    </>
  )
}

export default AddNewProduct
