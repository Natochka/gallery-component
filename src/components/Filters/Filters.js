import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Tags from './Tags'
import Licenses from './Licenses'

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap'
  }
}

function Filters({ classes }) {
  return (
    <div className={classes.root}>
      <Tags />
      <Licenses />
    </div>
  )
}

export default withStyles(styles)(Filters)
