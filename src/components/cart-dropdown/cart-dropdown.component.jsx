import React from "react";

import CustomButton from "../custom-button/custom-button.component";

import './cart-dropdown.styles.css'

const CartDropDown = () => (
    <div className="cart-dropdown">
        <div className="cart-items">
            
        </div>
        <CustomButton id="checkoutbutton">GO TO CHECKOUT</CustomButton>
    </div>
)

export default CartDropDown;