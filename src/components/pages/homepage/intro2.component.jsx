import React from 'react'

import './intro2.styles.css'

const Intro2 = () => (
    <div className='intro2'>
        <h2 className='intro2-title'>What do you need?</h2>
        <div className="first-section">
            <div className='image1 reveal'/>
            <div className='image2 reveal'/>
        </div>
        <div className='image3 reveal'/>
        <div className="content-container">
            <p className='intro2-content'>All your needs</p>
            <p className='intro2-content'>at an affordable price</p>
        </div>
        
    </div>
)

export default Intro2;