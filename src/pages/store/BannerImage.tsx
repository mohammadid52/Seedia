import placeholder from 'assets/svg/placeholder.png'
import React, { useRef } from 'react'

const BannerImage = ({ onImageSelect, media, setMedia }: any) => {
  const bannerRef = useRef()

  const openFileExplorer = () =>
    //@ts-ignore
    bannerRef?.current?.click()

  return (
    <div
      style={{
        backgroundImage: `url(${
          media ? URL.createObjectURL(media) : placeholder
        })`,
      }}
      className="h-96 bg-center flex items-center justify-center bg-no-repeat bg-cover shadow-xl rounded-xl w-full border border-gray-200 dark:border-gray-700"
    >
      <input
        ref={bannerRef}
        className="hidden"
        type="file"
        onChange={(e: any) => onImageSelect(e, setMedia)}
        accept={'image/x-png,image/jpeg'}
      />
      <h1
        onClick={openFileExplorer}
        className="text-3xl font-bold  transition-all cursor-pointer bg-transparent hover:bg-white px-2 py-2 hover:text-gray-700 text-white"
      >
        {media ? 'Change' : '+ Choose'} Banner Image
      </h1>
    </div>
  )
}

export default React.memo(BannerImage)
