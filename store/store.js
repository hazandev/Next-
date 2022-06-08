import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import thunk from 'redux-thunk';


import { uiReducer } from './reducers/uiReducer.js'


let composeEnhancers = compose;

if(typeof window !== "undefined"){
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ 
}
const rootReducer = combineReducers({
  uiModule: uiReducer,
})

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
)
