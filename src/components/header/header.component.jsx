import React from 'react'
import { Link } from 'react-router-dom'
import { connect  } from 'react-redux/es/exports'
import {createStructuredSelector} from 'reselect'

import { auth } from '../../firebase/firebase.utils'

import { ReactComponent as Logo } from '../../assets/trendy-logo-mobile.svg'
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropDown from '../cart-dropdown/cart-dropdown.component'
import { selectCurrentUser } from '../../redux/user/user.selector'

import './header.styles.css'
import { selectCartHidden } from '../../redux/cart/cart.selectors'

const Header  = ({currentUser, hidden}) => (
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
            {
                currentUser ?
                <div className='option' onClick={() => auth.signOut()}>Sign Out</div>
                :
                <Link className='option' to='/signin'>Sign In</Link>
            }
            
        </div>
        <CartIcon/>
        {
            hidden ? null :
            <CartDropDown/>
        }
        
    </div>
);

const mapStateToProps = (state) => createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);