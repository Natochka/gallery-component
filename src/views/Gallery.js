import React, { Component } from 'react'
import { connect } from 'react-redux'
import { array } from 'prop-types'
import { fetchData } from '../actions/gallery'

class Gallery extends Component {
  componentDidMount() {
    const { fetchData } = this.props
    fetchData && fetchData()
  }
  render() {
    console.log('props', this.props)
    return <div>Gallery view</div>
  }
}

Gallery.propTypes = {
  photos: array
}

const mapStateToProps = (state, props) => {
  console.log(state)
  return {
    photos: state.gallery.photo
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
