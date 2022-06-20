import { combineReducers } from 'redux'

import names from './personNamesSlice'


const rootReducer = combineReducers({
  // Define a top-level state field named `todos`, handled by `todosReducer`
  names: names,
})

export default rootReducer;