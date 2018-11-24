import { handleAction } from 'redux-actions'
import { getData } from '../actions/gallery'

export default handleAction(
  [getData],
  (state, action) => ({
    ...state,
    ...action.payload
  }),
  {}
)
