import React from 'react'
import "./NonIcobed.css"

const NonIconed = ({title, text}) => {
  return (
    <div className='noni-container'>
        <h5 className='noni-title'>{title}</h5>
        <p className='noni-text'>{text}</p>
    </div>
  )
}

export default NonIconed