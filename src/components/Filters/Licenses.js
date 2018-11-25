import React, { Component } from 'react'
import { func } from 'prop-types'
import { connect } from 'react-redux'
import { fetchLicenses } from '../../actions/licenses'
import { changeLicense } from '../../actions/filters'
import { fetchData } from '../../actions/gallery'
import Filter from './Filter'

class Licenses extends Component {
  componentDidMount() {
    const { fetchLicenses } = this.props
    fetchLicenses && fetchLicenses()
  }

  handleChange = id => {
    const { changeLicense, fetchData } = this.props
    changeLicense(id)
    fetchData()
  }

  render() {
    const { data } = this.props
    return <Filter name="Licences" data={data} onChange={this.handleChange} />
  }
}

Licenses.propTypes = {
  fetchLicenses: func,
  changeLicense: func
}

const mapStateToProps = state => {
  console.log('state', state)
  return {
    data: state.licenses
  }
}

const mapDispatchToProps = {
  fetchData,
  fetchLicenses,
  changeLicense
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Licenses)
