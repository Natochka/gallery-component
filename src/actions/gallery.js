import { createAction } from 'redux-actions'

export const getData = createAction('GET_DATA')

export const fetchData = () => dispatch => {
  dispatch(getData())
}
