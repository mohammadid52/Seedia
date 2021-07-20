// import React from 'react'
import { compose, pure, lifecycle } from 'recompose'
const Toggle = ({ checked, onChange }) => {
    return ''
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
