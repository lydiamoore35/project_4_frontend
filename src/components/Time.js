import React from 'react'

function Time(props) {
  const date = new Date().toLocaleDateString();
  return (
    <div className="time">
      <h3>Today's date is: {date}</h3>
    </div>
  )
}

export default Time