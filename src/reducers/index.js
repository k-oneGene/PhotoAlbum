// Set up your root reducer here...
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import album from './albumReducer';
import albumCollection from './albumCollectionReducer';

const rootReducer = combineReducers({
  routing: routerReducer,
  album, // should work as album: albumReducer (changed name above)
  albumCollection
});

export default rootReducer;
