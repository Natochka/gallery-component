import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Tags from './Tags'
import Licenses from './Licenses'
import Author from '../Author'

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
      <Author />
    </div>
  )
}

export default withStyles(styles)(Filters)
