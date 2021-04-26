import React from 'react'
import { compose, pure, lifecycle } from 'recompose'
import ToggleStyles from './styles/ToggleStyles'

const Toggle = ({ checked, onChange }) => {
  return (
    <span {...{ className: ToggleStyles + ' toggle-control' }}>
      <label className="switch">
        <input type="checkbox" checked={checked} onChange={onChange} id="dmcheck" />
        <span className="slider round"></span>
      </label>
    </span>
  )
}

export default compose(
  lifecycle({
    componentDidUpdate(prevProps) {
      if (this.props.checked !== prevProps.checked) {
        const theme = this.props.checked ? 'dark' : 'light'
        this.props.themeToggler(theme)
      }
    },
  }),
  pure
)(Toggle)
