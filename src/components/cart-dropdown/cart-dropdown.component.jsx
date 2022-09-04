import React from "react";

import CustomButton from "../custom-button/custom-button.component";

import './cart-dropdown.styles.css'

const CartDropDown = () => (
    <div className="cart-dropdown">
        <div className="cart-items">
            <CustomButton id="checkoutbutton">GO TO CHECKOUT</CustomButton>
        </div>
    </div>
)

export default CartDropDown;