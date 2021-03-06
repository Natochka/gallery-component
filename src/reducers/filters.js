import { handleActions } from 'redux-actions'
import {
  resetFilters,
  mergeTag,
  removeTag,
  changeLicense,
  setAuthor,
  setSort
} from '../actions/filters'

const initialState = {
  tags: ['dogs'],
  license: '',
  sort: 'desc',
  author: null
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
    [setSort]: (state, action) => ({
      ...state,
      sort: action.payload
    }),
    [setAuthor]: (state, action) => ({
      ...state,
      author: action.payload
    }),
    [resetFilters]: () => ({
      ...initialState,
      tags: [] //TODO
    })
  },
  initialState
)
