import { createAction } from 'redux-actions'
import { getFlickrData } from '../api'

export const getData = createAction('GET_DATA')

export const fetchData = () => async (dispatch, getState) => {
  const {
    gallery: { page }
  } = getState()
  const data = await getFlickrData({ page: page + 1 })
  dispatch(getData(data))
}
