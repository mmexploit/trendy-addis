import React from "react";
import { useDispatch, useSelector } from 'react-redux'

import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { useHistory } from 'react-router-dom'

import './cart-dropdown.styles.css'
import { toggleCartHidden } from "../../redux/cart/cart.actions";

const CartDropDown = () => {
    const cartItems = useSelector(selectCartItems);
    const dispatch = useDispatch();
    const history = useHistory();

    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {
                    cartItems.length ? 
                    cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem}/>)
                    : <span className="empty-message">You cart is empty</span>
                }
            </div>
            <CustomButton id="checkoutbutton" onClick={() => {
                history.push('/checkout');
                dispatch(toggleCartHidden())
                }}>GO TO CHECKOUT</CustomButton>
        </div>
    )
}


export default CartDropDown;