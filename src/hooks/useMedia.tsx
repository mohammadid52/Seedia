import { useState } from 'react'
import { useMutation } from 'react-query'
import { uploadMediaToServer } from 'apis/mutations'

const defaultAccept = 'image/x-png,image/jpeg'

interface MediaInterface {
  onImageSelectCallback?: (img?: any) => void
  accept?: string
  onSuccess?: (data: any) => void
}

const useMedia = (ref: any, variables?: MediaInterface) => {
  const {
    onImageSelectCallback = () => {},
    onSuccess = () => {},
    accept = defaultAccept,
  } = variables || {}
  const openFileExplorer = () =>
    //@ts-ignore
    ref?.current?.click()

  const [media, setMedia] = useState('')

  const onImageSelect = (e: any) => {
    const img = e.target.files[0]
    setMedia(img)
    if (typeof onImageSelectCallback === 'function') {
      onImageSelectCallback(img)
    }
  }

  const { data, mutate, isSuccess, isError, isLoading, error } = useMutation(
    (data: any) => uploadMediaToServer(data)
  )

  const uploadMedia = (e?: any) => {
    if (e) {
      e?.preventDefault()
    }

    const fd = new FormData()
    fd.append('image', media)
    try {
      mutate(fd)
      if (isSuccess) {
        return data.data.data.location
      } else {
        return null
      }
    } catch (error) {
      // @ts-ignore
      console.error(error.message)
    } finally {
    }
  }

  const HiddenInput = () => (
    <div>
      <input
        ref={ref}
        className="hidden"
        type="file"
        onChange={onImageSelect}
        accept={accept}
      />
    </div>
  )

  return {
    openFileExplorer,
    HiddenInput,
    media,
    setMedia,
    uploading: isLoading,
    isError,
    error,
    uploadMedia,
    isSuccess,
    isLoading,
  }
}

export default useMedia
