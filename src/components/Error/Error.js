import React from 'react'
import { connect } from 'react-redux'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

function Error({ message }) {
  console.log('message', message)
  if (message)
    return (
      <Grid item xs={12}>
        <Typography align="center" variant="h5">
          {message}
        </Typography>
      </Grid>
    )

  return null
}

const mapStateToProps = state => ({
  message: state.errors.message
})

export default connect(mapStateToProps)(Error)
