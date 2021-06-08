import React from 'react'
import { compose, pure, lifecycle } from 'recompose'
import ToggleStyles from './styles/ToggleStyles'
import sun from './../public/assets/sun.png'
import night from './../public/assets/night.png'
import moon from './../public/assets/moon.png'
import useDarkMode from 'use-dark-mode'
const Toggle = ({ checked, onChange }) => {
  const darkMode = useDarkMode(false)
  return (
''
  )
}

export default compose(
  lifecycle({
    componentDidUpdate(prevProps) {
      //console.log(this.theme)
      if (this.props.checked !== prevProps.checked) {
        const theme = this.props.checked ? 'dark' : 'light'
        this.props.themeToggler(theme)
      }
    },
  }),
  pure
)(Toggle)
