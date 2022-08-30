import React from 'react'
import './menu-item.styles.css'

export const MenuItem = ({title, imageUrl, size, subtitle}) => (
    <div className={`${size} menu-item`} style={{backgroundImage:`url("${imageUrl}")`,}}>
        <div className='content' style={{position: "relative", zIndex: 1}}>
            <h1 className='title'>{title}</h1>
            <span className='subtitle'>{subtitle}</span>
        </div>
    </div>

)