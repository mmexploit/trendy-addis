import React from 'react'
import './collection-item.styles.css'

const CollectionItem = ({id, name, price, imageUrl}) => {
    console.log(imageUrl)
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
        </div>
    )
}

export default CollectionItem;