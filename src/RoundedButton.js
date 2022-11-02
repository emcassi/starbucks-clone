import React from 'react'
import './RoundedButton.css'

function RoundedButton(props) {
  return (
    <button className='rounded-btn'>
        {props.children}      
    </button>
  )
}

export default RoundedButton