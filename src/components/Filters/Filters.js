import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Tags from './Tags'
import Licenses from './Licenses'
import Author from '../Author'
import Sort from './Sort'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'

const styles = {
  root: {
    flex: '1',
    padding: 8
  },
  offline: {
    pointerEvents: 'none',
    opacity: 0.25
  },
  paper: {
    padding: 16,
    flex: 1,
    height: '100%'
  }
}

function Filters({ classes, isOnline }) {
  return (
    <Grid container className={(classes.root, !isOnline && classes.offline)} spacing={16}>
      <Grid item xs={12} sm={9}>
        <Paper elevation={1} className={classes.paper}>
          <Grid container wrap="wrap" spacing={16}>
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
      </Grid>
      <Grid item xs={12} sm={3}>
        <Paper elevation={1} className={classes.paper}>
          <Sort />
        </Paper>
      </Grid>
    </Grid>
  )
}

export default withStyles(styles)(Filters)
