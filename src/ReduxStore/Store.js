import {  createStore } from 'redux'
// import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import rootReducer from './Reducers'

export default function configureStore(preloadedState) {

//   const middlewares = [thunkMiddleware];

//   const middlewareEnhancer = applyMiddleware(...middlewares)

//   const enhancers = [middlewareEnhancer]

    const enhancers = [] ;

  const composedEnhancers = composeWithDevTools(...enhancers)

  const store = createStore(rootReducer, preloadedState, composedEnhancers)

  return store
}