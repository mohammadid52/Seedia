import Copyright from 'components/Copyright'
import React from 'react'
import AnimatedDiv from 'components/animation/AnimatedDiv'
import useTheme from 'hooks/useTheme'

const Layout = ({
  title,
  subtitle,
  children,
  withButton,
}: {
  title?: string
  subtitle?: React.ReactNode
  children: React.ReactNode
  withButton?: React.ReactNode
}) => {
  const { logo } = useTheme()

  return (
    <div className="min-h-screen dark:bg-gray-900 bg-gray-50 flex flex-col justify-start py-12 sm:px-6 lg:px-8">
      <AnimatedDiv
        // @ts-ignore
        className="sm:mx-auto sm:w-full sm:max-w-md flex items-center flex-col"
      >
        <img className="mx-auto h-32 w-auto" src={logo} alt="13RMS" />
        {title && (
          <h2 className="mt-6 text-center text-3xl font-extrabold dark:text-white text-gray-900">
            {title}
          </h2>
        )}
        {subtitle && (
          <p className="mt-2 text-center text-sm text-gray-600">{subtitle}</p>
        )}
        {withButton && withButton}
      </AnimatedDiv>

      {children}
      <Copyright />
    </div>
  )
}

export default Layout
