import { handleActions } from 'redux-actions'
import { getLicenses, resetFilters } from '../actions/filters'

const initialState = {
  licences: []
}

export default handleActions(
  {
    [getLicenses]: (state, action) => ({
      ...state,
      licences: action.payload
    }),
    [resetFilters]: () => ({
      ...initialState
    })
  },
  initialState
)
