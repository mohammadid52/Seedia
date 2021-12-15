import { useUserContext } from 'context/UserContext'
import darkLogo from 'assets/images/logo.dark.png'
import lightLogo from 'assets/images/logo.png'

function useTheme() {
  const context = useUserContext()
  const { darkMode = true } = context !== null ? context : { darkMode: true }
  const isDarkMode = darkMode
  const logo = isDarkMode ? darkLogo : lightLogo
  return { isDarkMode, logo }
}

export default useTheme
