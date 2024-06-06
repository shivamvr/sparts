
import React, { useState } from 'react'

const Academies = () => {

  return (
    <div className='academies-section' style={{overflow: 'hidden',}}>
        <h2>Explore Our Top Academies</h2>
        <div className='academies' style={{position: 'relative'}}>
            <div className="academy-card"></div>
            <div className="academy-card"></div>
            <div className="academy-card"></div>
            <div className="academy-card"></div>ii
            <button style={{position: 'absolute', top: '50%', right: '0',background: 'orange', padding: '.7rem', color: '#fff', borderRadius: '2rem' }}>→</button>
        </div>
    </div>
  )
}

export default Academies