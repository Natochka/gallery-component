import { createAction } from 'redux-actions'
import { getFlickrData } from '../api'

export const getData = createAction('GET_DATA')
export const resetData = createAction('RESET_DATA')

export const fetchData = () => async (dispatch, getState) => {
  const {
    gallery: { page },
    filters: { tags, author, ...rest }
  } = getState()

  const stringTags = tags.join(',')
  const user_id = (author || {}).owner

  const data = await getFlickrData({
    ...rest,
    user_id,
    tags: stringTags,
    page: page // @TODO + 1
  })
  dispatch(getData(data))
}

export const fetchAuthorPhotos = user_id => async (dispatch, getState) => {
  const {
    gallery: { page }
  } = getState()
  const data = await getFlickrData({ user_id, page: page + 1 })
  dispatch(getData(data))
}
