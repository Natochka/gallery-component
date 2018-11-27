import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Tags from './Tags'
import Licenses from './Licenses'
import Author from '../Author'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'

const styles = {
  root: {
    flex: '1',
    padding: '0 16px 16px'
  },
  paper: {
    margin: 8,
    flex: 1
  }
}

function Filters({ classes }) {
  return (
    <Paper elevation={1} className={classes.paper}>
      <Grid container wrap="wrap" className={classes.root} spacing={16}>
        <Grid item xs={12}>
          <Tags />
        </Grid>
        <Grid item>
          <Licenses />
        </Grid>
        <Grid item>
          <Author />
        </Grid>
      </Grid>
    </Paper>
  )
}

export default withStyles(styles)(Filters)
