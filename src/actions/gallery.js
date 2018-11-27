import { createAction } from 'redux-actions'
import { getFlickrData } from '../api'

export const getData = createAction('GET_DATA')
export const resetData = createAction('RESET_DATA')
export const changeLoading = createAction('CHANGE_LOADING')

export const fetchData = () => async (dispatch, getState) => {
  const {
    gallery: { page, isLoading },
    filters: { tags, author, ...rest }
  } = getState()

  const stringTags = tags.join(',')
  const user_id = (author || {}).owner

  dispatch(changeLoading(true))

  console.log('isLoading', isLoading)

  const data = await getFlickrData({
    ...rest,
    user_id,
    tags: stringTags,
    page: page // @TODO + 1
  })
  dispatch(getData(data))

  dispatch(changeLoading(false))
  console.log('isLoading', isLoading)
}

export const fetchAuthorPhotos = user_id => async (dispatch, getState) => {
  const {
    gallery: { page }
  } = getState()
  const data = await getFlickrData({ user_id, page: page + 1 })
  dispatch(getData(data))
}
