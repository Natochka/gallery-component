import { createAction } from 'redux-actions'
import { fetchData } from './gallery'

export const resetFilters = createAction('RESET_FILTERS')
export const mergeTag = createAction('MERGE_TAG')
export const removeTag = createAction('REMOVE_TAG')
export const changeLicense = createAction('CHANGE_LICENSE')
export const setAuthor = createAction('CHANGE_AUTHOR')

export const changeTags = tag => (dispatch, getState) => {
  if (!tag) return

  const {
    filters: { tags }
  } = getState()

  if (tags.includes(tag)) {
    dispatch(removeTag(tag))
  } else {
    dispatch(mergeTag(tag))
  }
}

export const changeAuthor = param => dispatch => {
  param && dispatch(resetFilters())
  dispatch(setAuthor(param))
  dispatch(fetchData())
}
