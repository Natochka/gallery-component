import { createAction } from 'redux-actions'
import { getFlickrData } from '../api'

export const getData = createAction('GET_DATA')
export const resetData = createAction('REST_DATA')

export const fetchData = () => async (dispatch, getState) => {
  const {
    gallery: { page }
  } = getState()
  const data = await getFlickrData({ tags: 'dogs', page: page + 1 })
  dispatch(getData(data))
}

export const fetchAuthorPhotos = user_id => async (dispatch, getState) => {
  const {
    gallery: { page }
  } = getState()
  const data = await getFlickrData({ user_id, page: page + 1 })
  dispatch(getData(data))
}
