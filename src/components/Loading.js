import React from 'react'

// value can be 0/false and 1-100 for true
const Loading = ({ value }) => {
    const loaderStyle = {
        display: 'grid',
        width: '100vw',
        height: '100vh',
        alignContent: 'center',
        justifyContent: 'center',
    }

    return (
        <div style={loaderStyle}>
            <img src={'/logo-full.gif'} alt="Loading..." />
        </div>
    )
}

export default Loading
