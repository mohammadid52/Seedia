import Button from 'components/atoms/Button'
import Card from 'components/atoms/Card'
import Modal from 'components/atoms/Modal'
import { links } from 'constants/Links'
import { useUserContext } from 'context/UserContext'
import { network } from 'helpers'
import useAccountType from 'hooks/useAccountType'
import { IParent } from 'interfaces/UniversalInterface'
import React, { useState } from 'react'
import { avatarPlaceholder } from 'state/Redux/constants'
import { BsFillBookmarkFill } from 'react-icons/bs'
import { fetchAvgViews } from 'apis/queries'
import { useQuery } from 'react-query'

const PersonalCard = ({
  className,

  userData: user,
}: {
  className?: string
  userData?: IParent
}) => {
  const [showModal, setShowModal] = useState(false)
  const [saving, setSaving] = useState(false)

  const [_image, setImage] = useState('')

  const onImageSelect = (e: any) => {
    const img = e.target.files[0]
    setImage(img)
    setShowModal(true)
  }

  const { setValues } = useUserContext()

  const onSave = async () => {
    setSaving(true)

    const fd = new FormData()
    fd.append('image', _image)

    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }

    try {
      const { data } = await network.post('/uploadImage', fd, config)

      if (data && data.data && data.data.location) {
        const updatedData = {
          ...user,
          profilePicture: data.data.location,
        }
        //@ts-ignore
        delete updatedData.password

        setValues({ ...updatedData })

        await network.post('/user/update', {
          ...updatedData,
        })
      }
    } catch (error) {
      console.error(error.message)
    } finally {
      setShowModal(false)
    }
    setSaving(false)
  }

  const showFileExplorerForProfile = () =>
    //@ts-ignore
    profileImageSelectorRef?.current?.click()

  const profileImageSelectorRef = React.useRef()

  const { isBusiness } = useAccountType(user)

  const { data } = useQuery('average-post-views', () => fetchAvgViews())

  const postViews = data?.data?.data || 0

  return (
    <>
      {showModal && (
        <Modal
          header={`Profile Photo`}
          disableBackdropClose
          open={showModal}
          setOpen={setShowModal}
        >
          <div className={`sm:min-w-64 sm:min-h-64`}>
            <div
              className={`relative min-h-48 flex items-center justify-center`}
            >
              {_image && (
                <img
                  className={`shadow-xl md:h-32 md:w-32 sm:h-12 sm:w-12 rounded-full`}
                  src={URL.createObjectURL(_image)}
                  alt="People working on laptops"
                />
              )}
            </div>
            <div className="mt-5 sm:mt-4 flex justify-end  items-center">
              <Button
                gradient
                loading={saving}
                disabled={saving}
                onClick={onSave}
                label="Save"
              />
            </div>
          </div>
        </Modal>
      )}
      {/* HIDDEN IMAGE INPUT */}
      <input
        // @ts-ignore
        ref={profileImageSelectorRef}
        className="hidden"
        type="file"
        onChange={onImageSelect}
        accept="image/x-png,image/jpeg"
      />

      {/* ------------ Profile Card ---------*/}
      <div className="rounded-lg border dark:border-gray-700  border-gray-200  overflow-hidden lg:max-w-xs bg-white dark:bg-gray-800">
        <div
          style={{
            backgroundImage: `url(${
              user?.coverPicture
                ? user?.coverPicture
                : 'https://source.unsplash.com/1600x900/?nature,water'
            })`,
          }}
          className="w-full lg:h-20 sm:h-24 bg-center bg-no-repeat bg-cover h-20"
        />
        <div className="flex justify-center -mt-8">
          <img
            alt=""
            src={user.profilePicture ? user.profilePicture : avatarPlaceholder}
            className="rounded-full border-solid lg:h-16 lg:w-16 h-12 w-12  border-white border-2 -mt-3"
          />
        </div>
        <div className="text-center px-3 pb-6 pt-2">
          <h3 className="dark:text-white text-gray-900 text-base font-bold ">
            {user.fullName}
          </h3>
          <p className="text-sm font-light text-white">
            {isBusiness ? user.business.name : user.company.jobTitle}
          </p>
        </div>
        <div className="flex gap-y-2  flex-col border-t py-2 text-xs font-medium text-gray-500 dark:text-gray-500 border-gray-200 dark:border-gray-700">
          <div className="flex transition-all item-center px-4 py-1 cursor-pointer dark:hover:bg-gray-700 justify-between">
            <h6 className="">Who viewed your profile</h6>
            <span className="text-link font-semibold">{user.pwvpCount}</span>
          </div>
          <div className="flex transition-all item-center px-4 py-1 cursor-pointer dark:hover:bg-gray-700 justify-between">
            <h6 className="">Views of your post</h6>
            <span className="text-link font-semibold">{postViews}</span>
          </div>
        </div>
        <div className="flex items-center cursor-pointer hover:bg-gray-200 transition-all dark:hover:bg-gray-700 gap-y-2  justify-start px-4 border-t py-2 text-xs font-medium text-gray-500 dark:text-gray-500 border-gray-200 dark:border-gray-700">
          <BsFillBookmarkFill className="mr-2" />
          <p>My Items</p>
        </div>
      </div>
      {/* ------------ Profile Card Ends ---------*/}

      {/* // ~~~~~~~~~~~~~~~~~~~Discover Cards ~~~~~~~~~~~~~~~~~~~~ // */}
      <div className="rounded-lg border dark:border-gray-700  border-gray-200  overflow-hidden lg:max-w-xs bg-white dark:bg-gray-800 ">
        <div className="">
          <div className="p-4 flex flex-col gap-y-3 text-xs font-medium text-link">
            <a href={links.groups()} className="hover:underline cursor-pointer">
              Groups
            </a>
            <div className=" cursor-pointer flex items-center justify-between">
              <p className="hover:underline ">Events</p>
              <div className="text-gray-900 dark:text-gray-500 text-base hover:bg-gray-700 rounded-full h-6 transition-all w-6 flex items-center justify-center">
                +
              </div>
            </div>
            <div className="hover:underline cursor-pointer">
              Followed Hastags
            </div>
          </div>
          <div className="flex items-center cursor-pointer hover:bg-gray-200 transition-all dark:hover:bg-gray-700 gap-y-2  justify-center px-4 border-t py-4  text-sm font-medium text-gray-500 dark:text-gray-500 border-gray-200 dark:border-gray-700">
            <p>Discover more</p>
          </div>
        </div>
      </div>
    </>
  )
}
export default PersonalCard
