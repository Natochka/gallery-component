import { createAction } from 'redux-actions'
import { getFlickrData } from '../api'
import { setError, clearError } from './errors'

export const getData = createAction('GET_DATA')
export const mergeData = createAction('MERGE_DATA')
export const resetData = createAction('RESET_DATA')
export const changeLoading = createAction('CHANGE_LOADING')

export const fetchData = loadMore => async (dispatch, getState) => {
  dispatch(clearError())

  const {
    gallery: { page },
    filters: { tags, author, sort, ...rest }
  } = getState()

  const stringTags = tags.join(',')
  const user_id = (author || {}).owner
  const sortString = `date-posted-${sort}`

  if (!loadMore) dispatch(resetData())
  dispatch(changeLoading(true))
  const data = await getFlickrData({
    ...rest,
    user_id,
    tags: stringTags,
    sort: sortString,
    page: loadMore ? page + 1 : page
  })

  if (loadMore) dispatch(mergeData(data))
  else if (!data.photo.length) dispatch(setError('Ups, pusto :('))
  else dispatch(getData(data))

  dispatch(changeLoading(false))
}

export const fetchAuthorPhotos = user_id => async (dispatch, getState) => {
  const {
    gallery: { page }
  } = getState()
  const data = await getFlickrData({ user_id, page: page + 1 })
  dispatch(getData(data))
}
