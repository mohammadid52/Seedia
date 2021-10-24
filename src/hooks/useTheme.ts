import { useUserContext } from 'context/UserContext'
import darkLogo from 'assets/images/logo.dark.png'
import lightLogo from 'assets/images/logo.png'

function useTheme() {
  const { darkMode } = useUserContext()
  const isDarkMode = darkMode
  const logo = isDarkMode ? darkLogo : lightLogo
  return { isDarkMode, logo }
}

export default useTheme
