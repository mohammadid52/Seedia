import React from 'react'

const Card = ({
  cardTitle,
  content,
  disablePadding = false,
  withCardHeadings = false,
  cardTitleStyles = '',
  className = '',
  id = '',
  privateCard = false,
  secondary = false,
  style,
  transparent = false,
}: {
  cardTitle?: string
  privateCard?: boolean
  className?: string
  content?: React.ReactNode
  withCardHeadings?: boolean | React.ReactNode
  disablePadding?: boolean
  cardTitleStyles?: string
  id?: string
  secondary?: boolean
  transparent?: boolean
  style?: any
}) => {
  const transparentClass = transparent
    ? 'bg-transparent'
    : `${
        disablePadding ? 'py-6' : 'p-6'
      }  bg-white  dark:bg-gray-700 h-full rounded-md ${className}`

  return (
    <div
      style={{ ...style }}
      id={id}
      className={`${transparentClass} transform scale-90`}
    >
      {cardTitle && (
        <>
          <div className="flex items-center justify-between">
            <h4
              className={`${disablePadding ? 'px-6' : ''}  leading-6 ${
                secondary
                  ? 'uppercase tracking-wider text-xs text-gray-400 font-medium'
                  : 'text-sm font-medium text-gray-900 dark:text-white'
              }   ${cardTitleStyles}`}
            >
              {cardTitle}{' '}
              {privateCard && (
                <span className="ml-2 text-xs italic text-gray-400">
                  {'Private to you'}
                </span>
              )}
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
            } gradient-border bottom text-gray-500 mb-4 mt-2`}
          />
        </>
      )}
      {content}
    </div>
  )
}

export default React.memo(Card)
