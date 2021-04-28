import React from 'react'
import { compose, pure, lifecycle } from 'recompose'
import ToggleStyles from './styles/ToggleStyles'

const Toggle = ({ checked, onChange }) => {
  return (
    <span {...{ className: ToggleStyles + ' toggle-control' }}>
       <div className='switch'>
        <input type='checkbox' className='switch__input' id='Switch' checked={checked} onChange={onChange} />
        <label className='switch__label' for='Switch'>
            <span className='switch__indicator'></span>
            <span className='switch__decoration'></span>
        </label>
    </div>
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
