import { handleAction } from 'redux-actions'
import { getLicenses } from '../actions/licenses'

const initialState = []

export default handleAction(
  [getLicenses],
  (state, action) => [...state, ...action.payload],
  initialState
)
