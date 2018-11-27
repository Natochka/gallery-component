import { handleActions } from 'redux-actions'
import { setError, clearError } from '../actions/errors'

const initialState = {
  message: ''
}

export default handleActions(
  {
    [setError]: (state, action) => ({
      ...state,
      message: action.payload
    }),
    [clearError]: () => ({
      ...initialState
    })
  },
  initialState
)
