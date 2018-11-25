import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchLicenses } from '../../actions/filters'
import Filter from './Filter'

class Licenses extends Component {
  componentDidMount() {
    const { fetchLicenses } = this.props
    fetchLicenses && fetchLicenses()
  }

  render() {
    const { data } = this.props
    return <Filter name="Licences" data={data} />
  }
}

const mapStateToProps = state => {
  return {
    data: state.filters.licences
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchLicenses: () => dispatch(fetchLicenses())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Licenses)
