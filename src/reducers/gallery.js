import { handleActions } from 'redux-actions'
import { getData, resetData } from '../actions/gallery'

const initialState = {
  photo: [],
  page: 0
}

export default handleActions(
  {
    [getData]: (state, action) => ({
      ...state,
      ...action.payload,
      photo: [...state.photo, ...action.payload.photo]
    }),
    [resetData]: () => ({
      ...initialState
    })
  },
  initialState
)
