import React from 'react'
import { connect } from 'react-redux'
import Chip from '@material-ui/core/Chip'
import { changeAuthor } from '../../actions/filters'

function Author({ author, changeAuthor }) {
  if (!author) return null

  return <Chip label={author.ownername} onDelete={() => changeAuthor(null)} />
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
)(Author)
