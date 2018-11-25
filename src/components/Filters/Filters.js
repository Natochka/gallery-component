import React from 'react'
import { withStyles } from '@material-ui/core/styles'
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
      <Licenses />
    </div>
  )
}

export default withStyles(styles)(Filters)
