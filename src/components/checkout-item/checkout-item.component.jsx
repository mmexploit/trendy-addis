import React from 'react'
import { connect, useDispatch } from 'react-redux'
import { addItem, clearItemFromCart, removeItem } from "../../redux/cart/cart.actions";

import './checkout-item.styles.css'

const CheckoutItem = ({ cartItem }) => {
    const dispatch = useDispatch();

    const { name, imageUrl, price, quantity} = cartItem
    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt="" className="item-checkout" />
            </div>
            <span className="name-checkout">{name}</span>
            <span className="quantity-checkout">
                <div className="arrow" onClick={() => dispatch(removeItem(cartItem))}>&#10094;</div>
                <span className="value">{quantity}</span>
                <div className="arrow" onClick={() => dispatch(addItem(cartItem))}>&#10095;</div>
                </span>
            <span className="price-checkout">{price}</span>
            <span className="remove-button-checkout" onClick={() => dispatch(clearItemFromCart(cartItem))}>&#10005;</span>
        </div>
    )
}

// const mapDispatchToProps = dispatch => ({
//     clearItem: item => dispatch(clearItemFromCart(item)),
//     addItem: item => dispatch(addItem(item)),
//     removeItem: item => dispatch(removeItem(item))
// })

export default CheckoutItem