import React from 'react'

interface SectionProps {
  sectionTitle: string
  Icon?: any
  content?: React.ReactNode
  withSectionHeadings?: boolean | React.ReactNode
}

const Section: React.FC<SectionProps> = ({
  Icon,
  sectionTitle,
  withSectionHeadings,
  content,
}: SectionProps) => {
  return (
    <div className="space-y-6 text-gray-600 dark:text-white">
      <div className="flex items-center justify-between">
        <div>
          <Icon />
          <span className="ml-2">{sectionTitle}</span>
        </div>
        {withSectionHeadings ? (
          <div className="flex-shrink-0 flex">{withSectionHeadings}</div>
        ) : (
          <div className="" />
        )}
      </div>
      {content}
    </div>
  )
}

export default Section
