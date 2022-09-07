import React from 'react'
import footerLogo from '../../../assets/trendy-logo-Computer.svg'
import telegramLogo from '../../../assets/telegram-icon.svg'
import './footer.styles.css'

const Footer = () => (
    <div className='footer'>
        <img src={footerLogo} alt="" className="footer-logo" /> <br></br>
        <div className="telegram-container">
            <img src={telegramLogo} alt="" className="telegram" />
            <span className='telegram-tag'>@trendyAddis</span>
        </div>
        
    </div>
)

export default Footer