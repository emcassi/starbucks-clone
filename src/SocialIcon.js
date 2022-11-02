import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './SocialIcon.css'

function SocialIcon(props) {
  return (
    <div className={props.white ? 'social-icon__white' : 'social-icon__black'}>
        <FontAwesomeIcon icon={props.icon}/>
    </div>
  )
}

export default SocialIcon