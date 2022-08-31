import React, { Component } from 'react'
import ShopData  from './shop.data'
import CollectionPreview from '../../preview-collection/collection-preview.component'

export class ShopPage extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         collections : ShopData
      }
    }
  render() {
    const { collections } = this.state;
    return (

      <div className="shop-page">
        {
            collections.map(({ id, ...otherCollectionProps }) => <CollectionPreview id={id} {...otherCollectionProps}/>)
        }
      </div>
    )
  }
}

export default ShopPage