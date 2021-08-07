import React from 'react'

const Card = ({
  cardTitle,
  content,
  disablePadding = false,
  withCardHeadings = false,
}: {
  cardTitle: string
  content?: React.ReactNode
  withCardHeadings?: boolean | React.ReactNode
  disablePadding?: boolean
}) => {
  return (
    <div
      className={`${
        disablePadding ? 'py-6' : 'p-6'
      }  bg-white dark:bg-gray-700 h-full rounded-md`}
    >
      <div className="flex items-center justify-between">
        <h4
          className={`${
            disablePadding ? 'px-6' : ''
          }  text-lg leading-6 font-medium text-gray-900 dark:text-white`}
        >
          {cardTitle}
        </h4>
        {withCardHeadings ? (
          <div className="flex-shrink-0 flex">{withCardHeadings}</div>
        ) : (
          <div className="w-auto" />
        )}
      </div>
      <hr
        className={`${
          disablePadding ? 'mx-6' : ''
        } gradient-border bottom text-gray-500 my-4`}
      />
      {content}
    </div>
  )
}

export default Card
