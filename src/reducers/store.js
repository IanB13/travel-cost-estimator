import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import jobsReducer from './jobsReducer';
import builderReducer from './builderReducer';
import estimateReducer from './estimateReducer';

const reducer = combineReducers({
    jobs: jobsReducer,
    builders: builderReducer,
    estimate: estimateReducer
})

export const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
)