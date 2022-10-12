import React from 'react'
import { useSelector } from 'react-redux'

import CollectionItem from '../../collection-item/collection-item.component'
import { selectCollection } from '../../../redux/shop/shop.selectors'

import CollectionsContext from '../../../contexts/collections/collections.context'

import './collection.styles.css'
import { useParams } from 'react-router-dom'


const CollectionPage = () => {
    // const params = useParams();
    // const collection = useSelector(selectCollection(params.collectionId));

    const { title, items } = collection;
    return (
        <CollectionsContext.Consumer>
        <div className='collection-page'>
            <h2 className='title'>{ title }</h2>
            <div className="items-container">
                <div className="items">
                {
                    items.map(item => <CollectionItem key={item.id} item={item}/>)
                }
            </div>
            </div>
            
        </div>
        </CollectionsContext.Consumer>
        
    )
}

export default CollectionPage