import React from 'react'

import './cart-item.styles.css'

const CartItem = ({ item : { imageUrl, price, name, quantity } }) => (
    <div className="cart-item">
        <img id="drop-down-item" src={imageUrl} alt="item" />
        <span className="namee">{name}</span>
        <span className="pricee">
            {quantity} X ETB{price}
            </span>
    </div>
)

export default CartItem;