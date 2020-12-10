import React from 'react'

function Time(props) {
  const date = new Date().toLocaleDateString();
  return (
    <div>
      <h3>{date}</h3>
    </div>
  )
}

export default Time