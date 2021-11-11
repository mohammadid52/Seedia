import Card from 'components/atoms/Card'
import EmptyState from 'components/atoms/EmptyState'
import SectionTitle from 'components/atoms/SectionTitle'
import { LegacyRef } from 'react'

const Section = ({
  children,
  title = '',
  showChildren,
  // @ts-ignore
  noDataText = 'No products found',
  _ref,
}: {
  _ref?: LegacyRef<HTMLDivElement> | undefined
  showChildren?: boolean
  children: React.ReactNode
  title?: string
  noDataText?: string
}) => {
  return (
    <div ref={_ref} className="py-16 ">
      {title && <h2 className="sr-only">{title}</h2>}
      {title && <SectionTitle title={title} />}

      {showChildren ? (
        <div className=" grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {children}
        </div>
      ) : (
        <Card
          content={
            <div>
              <EmptyState
                title={noDataText}
                subtitle="Cannot find products"
                hideBorders
                iconUrl="/empty-cart.png"
              />
            </div>
          }
        />
      )}
    </div>
  )
}

export default Section
