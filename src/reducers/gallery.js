import { handleActions } from 'redux-actions'
import uniqBy from 'lodash/uniqBy'
import { getData, mergeData, resetData, changeLoading } from '../actions/gallery'

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
    }),
    [mergeData]: (state, action) => ({
      ...state,
      ...action.payload,
      photo: uniqBy([...state.photo, ...action.payload.photo], 'id')
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
