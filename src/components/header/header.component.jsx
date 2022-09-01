import React from 'react'
import { Link } from 'react-router-dom'

import { ReactComponent as Logo } from '../../assets/trendy-logo-mobile.svg'

import './header.styles.css'

const Header  = () => (
    <div className='header'>
        <Link className="logo-container" to="/">
            <Logo className="logo"/>
        </Link>
        <div className='option'>
            <Link className='option' to="/shop">
                Shop
            </Link>
            <Link className='option' to="/shop">
                Contact
            </Link>
        </div>

    </div>
)

export default Header;