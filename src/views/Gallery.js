import React from 'react'
import { connect } from 'react-redux'
import { array } from 'prop-types'
import { fetchData } from '../actions/gallery'

function Gallery() {
  return <div>Gallery view</div>
}

Gallery.propTypes = {
  data: array
}

const mapStateToProps = (state, props) => {
  return {
    data: state.gallery.data
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchData: () => dispatch(fetchData())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Gallery)
