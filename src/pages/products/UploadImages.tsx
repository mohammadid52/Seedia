import { uploadMultipleImages } from 'apis/mutations'
import Button from 'components/atoms/Button'
import FormError from 'components/atoms/form/FormError'
import { useField } from 'formik'
import { IProductImage } from 'interfaces/UniversalInterface'
import lgZoom from 'lightgallery/plugins/zoom'
import LightGallery from 'lightgallery/react'
import { forEach, map } from 'lodash'
import { nanoid } from 'nanoid'
import { useEffect, useRef, useState } from 'react'
import { AiOutlineCamera, AiOutlineUpload } from 'react-icons/ai'
import { useMutation } from 'react-query'

const UploadImages = ({
  setImagesUploaded,
}: {
  setImagesUploaded: React.Dispatch<React.SetStateAction<boolean>>
}) => {
  const productImageRef: React.LegacyRef<HTMLInputElement> = useRef()
  const [_, meta, helpers] = useField('images')

  const { setValue, setError } = helpers
  const [imageList, setImageList] = useState<any[]>([])

  const {
    mutate,
    isLoading,
    isError,
    error = '',
    data,
    isSuccess,
  } = useMutation(uploadMultipleImages)

  const onImageSelect = (e: any): void => {
    const imgs: File[] = Object.values(e.target.files)

    if (imgs.length > 0) {
      imgs.forEach((img) => imageList.push(img))

      setImageList((prev) => [...prev])
    }
  }

  const showFileExplorer = () => productImageRef?.current?.click()

  const upload = () => {
    const fd = new FormData()

    forEach(imageList, (image) => {
      fd.append('images', image)
    })

    setTimeout(() => {
      mutate(fd)
    }, 500)
  }

  if (isError) {
    setError(error.toString())
  }

  useEffect(() => {
    if (isSuccess) {
      const finalImageList: IProductImage[] = map(
        data.data.data,
        (img, idx: number) => ({
          id: nanoid(24),
          url: img.location,
          isCover: idx === 0,
          alt: '',
        })
      )

      setValue(finalImageList)
      setImagesUploaded(true)
    }
  }, [isSuccess])

  return (
    <div>
      {imageList && imageList.length > 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-4 mb-8 gap-8">
          {imageList.map(
            (image, idx) =>
              // <div key={idx}>
              image && (
                <LightGallery key={idx} speed={500} plugins={[lgZoom]}>
                  <img
                    className={`shadow-lg  rounded-lg`}
                    src={URL.createObjectURL(image)}
                    alt="People working on laptops"
                  />
                </LightGallery>
              )
            // </div>
          )}
        </div>
      )}
      <input
        ref={productImageRef}
        className="hidden"
        multiple
        type="file"
        onChange={onImageSelect}
        accept="image/x-png,image/jpeg"
      />
      <div className="flex items-center gap-x-4">
        <Button
          onClick={showFileExplorer}
          size="lg"
          invert
          // className="w-32"
          gradient
          Icon={AiOutlineCamera}
          label="+ Add Images"
        />
        {imageList.length > 0 && (
          <Button
            onClick={upload}
            size="lg"
            // className="w-32"
            loading={isLoading}
            loadingText="Uploading Images..."
            gradient
            Icon={AiOutlineUpload}
            label="Upload Images"
          />
        )}
      </div>
      <FormError
        show={Boolean(meta.touched && meta.error)}
        error={meta.error}
      />
    </div>
  )
}

export default UploadImages
