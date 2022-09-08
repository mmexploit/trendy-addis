import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCollections } from '../../redux/shop/shop.selectors'

import CollectionPreview from '../preview-collection/collection-preview.component'

import './collection-overview.styles.css'

const CollectionOverview = ({ collections }) => (
    <div className="collections-overview">
       {
          collections.map(({ id, ...otherCollectionProps }) => <CollectionPreview id={id} {...otherCollectionProps}/>)
       }
    </div>
)

const mapStateToProps = createStructuredSelector ({
    collections: selectCollections
})

export default connect(mapStateToProps)(CollectionOverview)