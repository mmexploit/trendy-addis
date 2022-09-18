import React from 'react'
import { Route } from 'react-router-dom'
import {connect} from 'react-redux'
import { createStructuredSelector } from 'reselect'

import CollectionOverview from '../../../components/collection-overview/collection-overview.component'
import CollectionPage from '../collection/collection.component'

import { fetchCollectionsStartAsync } from '../../../redux/shop/shop.actions'
import { selectIsCollectionFetching, selectIsCollectionLoaded } from '../../../redux/shop/shop.selectors'

import WithSpinner from '../../with-spinner/with-spinner.component'


import './shop-page.styles.css'

const CollectionOverviewWithSpinnner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
    unsubscribeFromSnapshot = null;

    componentDidMount () {
        const { fetchCollectionsStartAsync } = this.props;
        fetchCollectionsStartAsync();
 
    }
   render() { 
    const { match, isCollectionFetching, isCollectionsLoaded } = this.props;
    return ( 
            <div className="shop-page">
                <Route exact path={`${match.path}`} render={(props) => <CollectionOverviewWithSpinnner isLoading={!isCollectionsLoaded} {...props}/>}/>
                <Route path={`${match.path}/:collectionId`} render={(props) => <CollectionPageWithSpinner isLoading={!isCollectionsLoaded} {...props}/>}/>
            </div>
    )
   }
} 

const mapStateToProps = createStructuredSelector({
    isCollectionFetching: selectIsCollectionFetching,
    isCollectionsLoaded: selectIsCollectionLoaded,
})

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
})

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage)