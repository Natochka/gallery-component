import React from 'react'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormLabel from '@material-ui/core/FormLabel'
import { changeSort } from '../../actions/filters'

const styles = {}

function Sort({ sort, changeSort }) {
  const handleChange = e => changeSort(e.target.value)

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Sort:</FormLabel>
      <RadioGroup aria-label="Sort" name="sort" value={sort} onChange={handleChange}>
        <FormControlLabel value="desc" control={<Radio />} label="Date: Descending" />
        <FormControlLabel value="asc" control={<Radio />} label="Date: Ascending" />
      </RadioGroup>
    </FormControl>
  )
}

const mapStateToProps = state => ({
  sort: state.filters.sort
})

const mapDispatchToProps = {
  changeSort
}

export default withStyles(styles)(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Sort)
)
