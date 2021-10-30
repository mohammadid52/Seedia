import Card from 'components/atoms/Card'
import Button from 'components/atoms/Button'
import { links } from 'constants/Links'
import { IParent } from 'interfaces/UniversalInterface'
import { saveProfile } from 'apis/mutations'
import useUser from 'hooks/useUser'
import { useRouter } from 'hooks/useRouter'
import { useMutation } from 'react-query'
import { useState } from 'react'
import { useNotifications } from 'context/NotificationContext'
// import { AiOutlineSave } from 'react-icons/ai'

// import ReactPDF from '@react-pdf/renderer'

// const styles = ReactPDF.StyleSheet.create({
//   page: {
//     flexDirection: 'row',
//     backgroundColor: '#E4E4E4',
//   },
//   section: {
//     margin: 40,
//     padding: 10,
//     flexGrow: 1,
//   },
// })

const AdditionalFeatures = ({
  isBusiness,
  userData,
  otherUserData,
  iAmOwnerOfThisProfile,
  refetchProfile,
}: {
  isBusiness: boolean
  userData: IParent
  otherUserData?: IParent
  iAmOwnerOfThisProfile: boolean
  refetchProfile: any
}) => {
  // const MyDocument = () => (
  //   <ReactPDF.Document>
  //     <ReactPDF.Page size="A4" style={styles.page}>
  //       <ReactPDF.View style={styles.section}>
  //         <ReactPDF.Text>{userData?.fullName}</ReactPDF.Text>
  //       </ReactPDF.View>
  //     </ReactPDF.Page>
  //   </ReactPDF.Document>
  // )

  const { setNotification } = useNotifications()

  const { mutate } = useMutation(saveProfile, {
    onSuccess: (data) => {
      const action = data.data.data
      setSaved((prev) => !prev)
      setNotification({
        show: true,
        title: `${otherUserData.fullName}'s Profile ${
          action === 'save' ? 'added to' : 'remove from'
        } saved list`,
        buttonText: 'View',
        buttonUrl: links.myItems(),
      })
      refetchProfile()
    },
  })

  const _saveProfile = () => {
    mutate({
      targetId: otherUserData._id,
      action: alreadySaved ? 'unsave' : 'save',
    })
  }

  const alreadySaved = Boolean(
    userData.savedProfiles &&
      userData?.savedProfiles.find((d) => d === otherUserData._id)
  )

  const [saved, setSaved] = useState(alreadySaved)

  return (
    <Card
      cardTitle="Additional Features"
      content={
        <div className="flex flex-col gap-y-6">
          {!isBusiness && iAmOwnerOfThisProfile && (
            <>
              <Button
                link={links.exploreJobs()}
                label="Explore Projects & Jobs"
                gradient
              />
              <Button
                link={links.placeRequest()}
                label="Place Request For Work"
                gradient
              />
              <Button
                link={links.viewMyRequests()}
                label="View My Requests"
                gradient
              />
            </>
          )}
          {!iAmOwnerOfThisProfile && (
            <Button
              onClick={() => _saveProfile()}
              label={saved ? 'Unsave profile' : 'Save profile'}
              gradient
            />
          )}

          {/* <ReactPDF.PDFDownloadLink
            document={<MyDocument />}
            fileName={`${userData.profileUrl}.pdf`}
          >
            {({ loading, url }: any) => {
              console.log(url)
              return loading ? (
                <p>Loading...</p>
              ) : (
                <Button
                  Icon={AiOutlineSave}
                  label="Save profile as PDF"
                  gradient
                />
              )
            }}
          </ReactPDF.PDFDownloadLink> */}
        </div>
      }
    />
  )
}

export default AdditionalFeatures
