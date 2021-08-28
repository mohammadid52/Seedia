import { Transition } from '@headlessui/react'
import React, { Fragment } from 'react'

interface SectionProps {
  sectionTitle: string
  Icon?: any
  content?: React.ReactNode
  withSectionHeadings?: boolean | React.ReactNode
  hidden?: boolean
}

const Section: React.FC<SectionProps> = ({
  Icon,
  sectionTitle,
  withSectionHeadings,
  content,
  hidden,
}: SectionProps) => {
  return (
    <div className="space-y-6 text-gray-600 dark:text-white">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Icon />
          <span className="ml-2">{sectionTitle}</span>
        </div>
        {withSectionHeadings ? (
          <div className="flex-shrink-0 flex">{withSectionHeadings}</div>
        ) : (
          <div className="" />
        )}
      </div>
      <div>
        {hidden ? (
          <p className="text-center text-gray-500">This content is hidden</p>
        ) : (
          content
        )}
      </div>
    </div>
  )
}

export default Section
