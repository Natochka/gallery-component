import { createAction } from 'redux-actions'
import { getLicensesData } from '../api'

export const getLicenses = createAction('GET_LICENSES')
export const resetFilters = createAction('RESET_FILTERS')

export const fetchLicenses = () => async dispatch => {
  const data = await getLicensesData()
  dispatch(getLicenses(data))
}
