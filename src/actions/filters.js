import { createAction } from 'redux-actions'

export const resetFilters = createAction('RESET_FILTERS')
export const mergeTag = createAction('MERGE_TAG')
export const removeTag = createAction('REMOVE_TAG')
export const changeLicense = createAction('CHANGE_LICENSE')

export const changeTags = tag => (dispatch, getState) => {
  if (!tag) return

  const {
    filters: { tags }
  } = getState()

  if (tags.includes(tag) && tags.length > 1) {
    dispatch(removeTag(tag))
  } else if (!tags.includes(tag)) {
    dispatch(mergeTag(tag))
  }
}
