import React, { Component } from 'react'
import { connect } from 'react-redux'
import { array } from 'prop-types'
import { fetchData } from '../actions/gallery'
import Grid from '@material-ui/core/Grid'
import Card from '../components/Card'

const SPACING = 16

class Gallery extends Component {
  componentDidMount() {
    const { fetchData } = this.props
    fetchData && fetchData()
  }
  render() {
    console.log('props', this.props)
    const { photos } = this.props
    return (
      <Grid container spacing={16}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={SPACING}>
            {photos &&
              photos.map(item => (
                <Grid xs={12} sm={6} md={4} lg={3} key={item.id} item>
                  <Card item={item} />
                </Grid>
              ))}
          </Grid>
        </Grid>
      </Grid>
    )
  }
}

Gallery.propTypes = {
  photos: array
}

const mapStateToProps = (state, props) => {
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
