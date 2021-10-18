import Button from 'components/atoms/Button'
import Card from 'components/atoms/Card'
import Title from 'components/atoms/Title'
import { links } from 'constants/Links'
import { IParent, IRequest } from 'interfaces/UniversalInterface'
import { useHistory } from 'react-router'
import { avatarPlaceholder } from 'state/Redux/constants'
import { getFromNowTime } from 'utils/functions'

const RequestCard = ({
  request,
  userId,
  userData,
  isLoading = false,
}: {
  request?: IRequest
  userId?: string
  userData?: IParent
  isLoading?: boolean
}) => {
  const iAmOwnerOfThisProject = request.postedBy.toString() === userId

  const history = useHistory()

  const { user } = request

  return (
    <div onClick={() => history.push(links.viewRequestById(request._id))}>
      <Card
        isLoading={isLoading}
        className="box   hover:shadow-xl transition-all  cursor-pointer"
        content={
          <div className="relative max-h-64 h-64">
            {isLoading ? (
              <div className="bg-gray-400 h-12 w-12 mb-4 cursor-pointer rounded-lg shadow-md"></div>
            ) : (
              <img
                className="h-12 w-12 mb-4 cursor-pointer rounded-lg shadow-md"
                src={
                  user?.profilePicture
                    ? user?.profilePicture
                    : avatarPlaceholder
                }
                alt=""
              />
            )}
            <Title isLoading={isLoading} size="text-xl">
              {request.title}
            </Title>
            <Title
              size="text-base"
              isLoading={isLoading}
              className="tracking-wide mt-1 gradient-text"
            >
              {user?.email}
            </Title>
            <Title
              size="text-sm"
              isLoading={isLoading}
              className="tracking-wide truncate whitespace-pre-line mt-1"
            >
              {request.description}
            </Title>

            {!isLoading && (
              <div className="flex items-center justify-between inset-x-0 absolute bottom-0">
                <div className="text-sm text-gray-400  dark:text-gray-500">
                  {getFromNowTime(request.postedOn)}
                </div>

                <div onClick={(e) => e.stopPropagation()}>
                  {iAmOwnerOfThisProject ? (
                    <Button
                      label="View"
                      onClick={() => {
                        history.push(links.viewRequestById(request._id))
                      }}
                      disabled={isLoading}
                      gradient
                    />
                  ) : (
                    <Button
                      disabled={isLoading}
                      label="View Profile"
                      gradient
                      link={links.getProfileById(
                        user.profileUrl,
                        user?.other?.template || 1
                      )}
                    />
                  )}
                </div>
              </div>
            )}
          </div>
        }
      />
    </div>
  )
}

export default RequestCard
