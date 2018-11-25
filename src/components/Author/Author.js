import React from 'react'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import Chip from '@material-ui/core/Chip'
import Typography from '@material-ui/core/Typography'
import { changeAuthor } from '../../actions/filters'

const styles = {
  author: {
    display: 'flex',
    alignItems: 'center',
    margin: '20px 0 0'
  },
  chip: {
    marginLeft: '10px'
  }
}

function Author({ author, changeAuthor, classes }) {
  if (!author) return null

  return (
    <Typography component="p" className={classes.author}>
      Author:{' '}
      <Chip className={classes.chip} label={author.ownername} onDelete={() => changeAuthor(null)} />
    </Typography>
  )
}

const mapStateToProps = state => ({
  author: state.filters.author
})

const mapDispatchToProps = {
  changeAuthor
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Author))
