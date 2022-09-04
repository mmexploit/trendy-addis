import React from 'react'
import CustomButton from '../custom-button/custom-button.component'
import './collection-item.styles.css'

import { connect } from 'react-redux'
import { addItem } from '../../redux/cart/cart.actions'


const CollectionItem = ({item, addItem}) => {
    const { id, name, price, imageUrl } = item;
    return(
        <div key={id} className='collection-item'>
            <div className='image' style={{backgroundImage: `url(${imageUrl})`}}/>
            <div className='collection-footer'>
                <span className='name'>{ name }</span>
                <div className='price-tag'>
                    <span className="old-price">ETB 1000</span>
                    <span className='price'><span className="currency">ETB </span>{ price }</span>
                </div>
            
            </div>
            <CustomButton onClick= {() => addItem(item)} id="cart-button" inverted>Add to cart</CustomButton>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    addItem: item => dispatch(addItem(item))

})

export default connect(null, mapDispatchToProps)(CollectionItem);