import { combineReducers } from 'redux'
import gallery from './gallery'
import filters from './filters'

export default combineReducers({
  gallery,
  filters
})
