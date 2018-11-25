import { handleActions } from 'redux-actions'
import { resetFilters, mergeTag, removeTag, changeLicense } from '../actions/filters'

const initialState = {
  tags: ['dogs'],
  license: ''
}

export default handleActions(
  {
    [mergeTag]: (state, action) => ({
      ...state,
      tags: [...state.tags, action.payload]
    }),
    [removeTag]: (state, action) => ({
      ...state,
      tags: state.tags.filter(item => item !== action.payload)
    }),
    [changeLicense]: (state, action) => ({
      ...state,
      license: action.payload
    }),
    [resetFilters]: () => ({
      ...initialState
    })
  },
  initialState
)
