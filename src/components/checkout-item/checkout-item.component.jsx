import React from 'react'

import './checkout-item.styles.css'

const CheckoutItem = ({ cartItem: { name, imageUrl, price, quantity}}) => (
    <div className="checkout-item">
        <div className="image-container">
            <img src={imageUrl} alt="" className="item-checkout" />
        </div>
        <span className="name-checkout">{name}</span>
        <span className="quantity-checkout">{quantity}</span>
        <span className="price-checkout">{price}</span>
        <span className="remove-button-checkout">&#10005;</span>
    </div>
)

export default CheckoutItem