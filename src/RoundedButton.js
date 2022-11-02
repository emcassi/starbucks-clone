import React from 'react'

function RoundedButton(props) {
  return (
    <button className='rounded-btn'>
        {props.children}      
    </button>
  )
}

export default RoundedButton