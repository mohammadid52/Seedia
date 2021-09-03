import { useRouteMatch } from 'react-router-dom'
import Card from './atoms/Card'

const PublicProfileCard = ({ secondary }: { secondary?: boolean }) => {
  const match = useRouteMatch()

  return (
    <Card
      className="mb-12"
      secondary={secondary}
      content={
        <div className="min-h-20 mb-6 flex items-center justify-center">
          <a
            href={`${match.url.replace('/private', '/public')}`}
            className="dark:text-gray-400 hover:underline link-hover"
          >
            Edit public profile & url
          </a>
        </div>
      }
    />
  )
}

export default PublicProfileCard
