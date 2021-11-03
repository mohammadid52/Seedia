import Button from 'components/atoms/Button'
import Card from 'components/atoms/Card'
import { links } from 'constants/Links'
import { useRouter } from 'hooks/useRouter'
import useUser from 'hooks/useUser'
import { IParent } from 'interfaces/UniversalInterface'
import React from 'react'
import { SIDEBAR_HEIGHT } from 'state/Redux/constants'

// min-width: 1280px; // 1280px or greater than that, then to do the action.
// max-width: 1280px; // 1280px or less than that, then to do the action.

const Layout = ({
  firstCol,
  secondCol,
  thirdCol,
  hideBorders = false,
  business = false,
  userData,
}: {
  firstColClass?: string
  firstCol?: React.ReactNode
  secondCol?: React.ReactNode
  thirdCol?: React.ReactNode
  hideBorders?: boolean
  business?: boolean
  userData?: IParent
}) => {
  const route: any = useRouter()
  const { userId: userIdFromParam } = route?.match?.params
  const { iAmOwnerOfThisProfile } = useUser(userIdFromParam, userData)

  return iAmOwnerOfThisProfile ? (
    <div
      style={{ marginTop: SIDEBAR_HEIGHT }}
      className="flex-grow w-full  mx-auto xl:px-8 justify-start max-w-360 items-start lg:flex flex-col"
    >
      <Card
        className="w-full"
        cardTitle="Business Features"
        content={
          <div className="gap-4 grid grid-cols-2 sm:grid-cols-6 ">
            {business && (
              <>
                <Button
                  link={links.viewMyProjects()}
                  label="View My Projects"
                  gradient
                />
                <Button
                  label="Add Project"
                  link={links.addProject()}
                  gradient
                />
              </>
            )}
            <Button
              link={links.BROWSE_PRODUCTS(userData?.profileUrl)}
              label="Browse Products"
              gradient
            />
            <Button link={links.addProduct()} label="Add Product" gradient />
          </div>
        }
      />
      <div>
        {/* Left sidebar & main wrapper */}
        <div className="flex-1 min-w-0 xl:flex items-start">
          <div
            className={` border-${
              hideBorders ? 'transparent xl:block hidden' : 'b'
            } dark:border-gray-700 border-gray-200  xl:border-b-0 xl:flex-shrink-0 xl:w-64`}
          >
            <div className="h-full pl-4 pr-6 py-6 sm:pl-6 lg:pl-8 xl:pl-0">
              {/* Start left column area */}
              <div className="h-full relative">{firstCol}</div>
              {/* End left column area */}
            </div>
          </div>

          <div className="lg:min-w-0 lg:flex-1">
            <div className="h-full py-6 px-4 sm:px-6 lg:px-8">
              {/* Start main area*/}
              <div className="relative h-full">{secondCol}</div>
              {/* End main area */}
            </div>
          </div>
          <div className="pr-4 sm:pr-6 lg:pr-8 lg:flex-shrink-0 xl:pr-0">
            <div className="h-full pl-6 py-6 lg:w-80">
              {/* Start right column area */}
              <div className="h-full relative">{thirdCol}</div>
              {/* End right column area */}
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div
      style={{ marginTop: SIDEBAR_HEIGHT }}
      className="flex-grow w-full  mx-auto xl:px-8 justify-start max-w-360 items-start lg:flex"
    >
      {/* Left sidebar & main wrapper */}
      <div className="flex-1 min-w-0 xl:flex items-start">
        <div
          className={` border-${
            hideBorders ? 'transparent xl:block hidden' : 'b'
          } dark:border-gray-700 border-gray-200  xl:border-b-0 xl:flex-shrink-0 xl:w-64`}
        >
          <div className="h-full pl-4 pr-6 py-6 sm:pl-6 lg:pl-8 xl:pl-0">
            {/* Start left column area */}
            <div className="h-full relative">{firstCol}</div>
            {/* End left column area */}
          </div>
        </div>

        <div className="lg:min-w-0 lg:flex-1">
          <div className="h-full py-6 px-4 sm:px-6 lg:px-8">
            {/* Start main area*/}
            <div className="relative h-full">{secondCol}</div>
            {/* End main area */}
          </div>
        </div>
      </div>

      <div className="pr-4 sm:pr-6 lg:pr-8 lg:flex-shrink-0 xl:pr-0">
        <div className="h-full pl-6 py-6 lg:w-80">
          {/* Start right column area */}
          <div className="h-full relative">{thirdCol}</div>
          {/* End right column area */}
        </div>
      </div>
    </div>
  )
}
export default React.memo(Layout)
