import { createStore, applyMiddleware } from 'redux'
import {persistStore} from 'redux-persist'
import thunk from 'redux-thunk'

import rootReducer from './root-reducer'

const middlewares = [thunk];

// const middlewares = [logger];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));
export const persistor = persistStore(store)

export default {store, persistor};