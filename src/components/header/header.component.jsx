import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux/es/exports'

import { auth } from '../../firebase/firebase.utils'

import { ReactComponent as Logo } from '../../assets/trendy-logo-mobile.svg'
import CartIcon from '../cart-icon/cart-icon.component'
import openIcon from "../../assets/icon-open.svg"
import closeIcon from "../../assets/icon-close.svg"
import CartDropDown from '../cart-dropdown/cart-dropdown.component'
import { selectCurrentUser } from '../../redux/user/user.selector'

import './header.styles.css'
import { selectCartHidden } from '../../redux/cart/cart.selectors'

import { HeaderContainer } from './header.styles'

const Header = ( ) => {
    const currentUser = useSelector(selectCurrentUser);
    const hidden = useSelector(selectCartHidden);

    return (
        <HeaderContainer>
            <Link className="logo-container" to="/">
                <Logo className="logo"/> </Link>
            <button className='mobile-nav-toggle' aria-controls='primary-navigation' aria-expanded="false">
                <img className="icon-open" src={openIcon} alt="" aria-hidden="true"/>
                <img className="icon-close" src={closeIcon} alt="" aria-hidden="true"/>
                <span className='visually-hidden'>Menu</span>
            </button>
            
            
            <nav className="primary-navigation">
                    <ul className='nav-list' id="primary-navigation">
                    <li><Link className='option' to="/shop">
                        Shop
                    </Link></li>
                    <li><Link className='option' to="/shop">
                        Contact
                    </Link></li>
                    {
                        currentUser ?
                        <li><div className='option' id="sign-out-button" onClick={() => auth.signOut()}>Sign Out</div></li>
                        :
                        <li><Link className='option' to='/signin'>Sign In</Link></li>
                    }
                    
                    </ul>
        

            </nav>
            <CartIcon id="cart-icon"/>
            {
                hidden ? null :
                <CartDropDown/>
            }
            
        </HeaderContainer>
    )
};

export default Header;