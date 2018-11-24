import { handleAction } from 'redux-actions'
import { getData } from '../actions/gallery'

const initialState = {
  data: []
}

export default handleAction(
  [getData],
  (state, action) => ({
    ...state,
    data: action.payload
  }),
  initialState
)
