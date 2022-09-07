import React from 'react'
import './menu-item.styles.css'
import { withRouter } from 'react-router-dom'

const MenuItem = ({title, imageUrl, size, history, linkUrl, match}) => (
    <div className={`${size} menu-item`} style={{backgroundImage:`url("${imageUrl}")`,}} onClick={() => history.push(`/shop`)}>
        <div className='content' style={{position: "relative", zIndex: 1}}>
            <h1 className='title'>{title}</h1>
            <span className='subtitle'>SHOP NOW</span>
        </div>
        {/* history.push(`${match.url}${linkUrl}` */}
    </div>

)

export default withRouter(MenuItem);