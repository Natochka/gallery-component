import { createAction } from 'redux-actions'
import { getFlickrData } from '../api'

export const getData = createAction('GET_DATA')

export const fetchData = () => async dispatch => {
  const data = await getFlickrData()
  dispatch(getData(data))
}
