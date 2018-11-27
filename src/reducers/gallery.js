import { handleActions } from 'redux-actions'
import { getData, resetData, changeLoading } from '../actions/gallery'

const initialState = {
  photo: [],
  page: 0,
  isLoading: true
}

export default handleActions(
  {
    [getData]: (state, action) => ({
      ...state,
      ...action.payload
      // photo: [...state.photo, ...action.payload.photo]
    }),
    [changeLoading]: (state, action) => ({
      ...state,
      isLoading: action.payload
    }),
    [resetData]: () => ({
      ...initialState
    })
  },
  initialState
)
