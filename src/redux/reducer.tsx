import { combineReducers } from 'redux'

import rootReducer from './features/root/reducer'

const appReducer = combineReducers({
  root: rootReducer
})


export default appReducer
