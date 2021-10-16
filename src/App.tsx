import { useUserContext } from 'context/UserContext'
import { getUserValues } from 'helpers'
import { IParent } from 'interfaces/UniversalInterface'
import { isEmpty } from 'lodash'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Router from 'Router'

const App = () => {
  const { setDarkMode } = useUserContext()

  useEffect(() => {
    const loadTheme = () => {
      const theme = localStorage.getItem('theme')

      const html = document.querySelector('html')

      if (theme) {
        if (theme === 'dark') {
          setDarkMode(true)
          html?.classList.add('dark')
        } else {
          setDarkMode(false)
          html?.classList.remove('dark')
        }
      }
    }
    loadTheme()
    return () => loadTheme()
  }, [setDarkMode])

  const [userData, setUserData] = useState<IParent>()

  const values = useSelector((state) => getUserValues(state))

  useEffect(() => {
    if (!isEmpty(values)) {
      setUserData(values)
    }
  }, [values, window.location.pathname])

  const accountFilled: boolean | undefined =
    userData?.other?.accountFilled || false

  const isUser = !isEmpty(userData)

  const template = userData?.other?.template || 1

  const navProps = {
    isUser,
    profileUrl: userData?.profileUrl,
    template,
    accountFilled,
  }

  return (
    <Router
      userData={userData}
      isUser={isUser}
      template={template}
      navProps={navProps}
    />
  )
}

export default App
