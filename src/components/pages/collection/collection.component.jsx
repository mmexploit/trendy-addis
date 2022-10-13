import React from 'react'
import { useSelector } from 'react-redux'

import CollectionItem from '../../collection-item/collection-item.component'
import { selectCollection } from '../../../redux/shop/shop.selectors'

import CollectionsContext from '../../../contexts/collections/collections.context'

import './collection.styles.css'
import { useParams } from 'react-router-dom'
import { useContext } from 'react'


const CollectionPage = () => {
    const params = useParams();
    const collections = useContext(CollectionsContext);
    const collection = collections[params.collectionId];
    const { title, items } = collection;

    
    // const collection = useSelector(selectCollection(params.collectionId));
    return (
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
        
    )
}

export default CollectionPage