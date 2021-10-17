import Card from 'components/atoms/Card'
import Button from 'components/atoms/Button'
import { links } from 'constants/Links'

const AdditionalFeatures = () => {
  return (
    <Card
      cardTitle="Additional Features"
      content={
        <div className="flex flex-col gap-y-6">
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
        </div>
      }
    />
  )
}

export default AdditionalFeatures
