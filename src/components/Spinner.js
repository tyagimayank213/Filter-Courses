import React from 'react'

const Spinner = () => {
  return (
    <div className="flex flex-col items-center space-y-2">
        <div className="spinner"></div>
        <h5>Loading....</h5>
    </div>
  )
}

export default Spinner