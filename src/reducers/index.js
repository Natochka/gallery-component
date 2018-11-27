import { combineReducers } from 'redux'
import gallery from './gallery'
import filters from './filters'
import licenses from './licenses'
import errors from './errors'

export default combineReducers({
  gallery,
  filters,
  licenses,
  errors
})
