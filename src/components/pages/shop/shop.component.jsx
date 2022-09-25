import React from 'react'
import { useEffect } from 'react'
import { Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import CollectionOverview from '../../../components/collection-overview/collection-overview.component'
import CollectionPage from '../collection/collection.component'

import { fetchCollectionsStartAsync } from '../../../redux/shop/shop.actions'
import { selectIsCollectionLoaded } from '../../../redux/shop/shop.selectors'

import WithSpinner from '../../with-spinner/with-spinner.component'


import './shop-page.styles.css'

const CollectionOverviewWithSpinnner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

const ShopPage = ({match}) => {
    const isCollectionsLoaded = useSelector(selectIsCollectionLoaded);
    const dispatch = useDispatch();

    useEffect (() => {
        dispatch(fetchCollectionsStartAsync());
    }, [dispatch])


    return ( 
            <div className="shop-page">
                <Route exact path={`${match.path}`} render={(props) => <CollectionOverviewWithSpinnner isLoading={!isCollectionsLoaded} {...props}/>}/>
                <Route path={`${match.path}/:collectionId`} render={(props) => <CollectionPageWithSpinner isLoading={!isCollectionsLoaded} {...props}/>}/>
            </div>
    )
}

export default ShopPage