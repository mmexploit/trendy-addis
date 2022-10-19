import React from 'react'
import CustomButton from '../custom-button/custom-button.component'
import './collection-item.styles.css'

import { useDispatch } from 'react-redux'
import { addItem } from '../../redux/cart/cart.actions'


const CollectionItem = ({item }) => {
    const dispatch = useDispatch()

    const { id, name, price, imageUrl, oldPrice } = item;
    return(
        <div key={id} className='collection-item'>
            <div className='image' style={{backgroundImage: `url(${imageUrl})`}}/>
            <div className='collection-footer'>
                <span className='name'>{ name }</span>
                <div className='price-tag'>
                    <span className="old-price">ETB {oldPrice}</span>
                    <span className='price'><span className="currency">ETB </span>{ price }</span>
                </div>
            
            </div>
            <CustomButton onClick= {() => dispatch(addItem(item))} id="cart-button" inverted>Add to cart</CustomButton>
        </div>
    )
}


export default CollectionItem;