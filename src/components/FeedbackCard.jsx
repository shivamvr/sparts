
import React from 'react'

const FeedbackCard = ({name,text}) => {
  return (
    <div className='feedback-card'>
        <h2 style={{color: '#a853f3d6'}}>{name}</h2>
        <p style={{fontSize: '15px'}}>{text}</p>
        <img src="/avatar.png" alt="" />
    </div>
  )
}

export default FeedbackCard