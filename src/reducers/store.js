import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import mapReducer from './mapReducer';
import estimateReducer from './estimateReducer';
import jobReducer from './jobsReducer'

const reducer = combineReducers({
    jobs: jobReducer,
    google: mapReducer,
    estimate: estimateReducer
})

export const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
)