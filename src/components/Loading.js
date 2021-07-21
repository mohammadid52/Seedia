import React from 'react'

// value can be 0/false and 1-100 for true
const Loading = ({ value }) => {
  

    return (
        <div className="h-screen w-screen flex items-center justify-center">
            <img style={{height: '60%', width: '60%'}} src={'/logo-full.gif'} alt="Loading..." />
        </div>
    )
}

export default Loading
