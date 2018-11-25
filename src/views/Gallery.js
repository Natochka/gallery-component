import React, { Component } from 'react'
import { connect } from 'react-redux'
import { array, bool } from 'prop-types'
import Observer from 'react-intersection-observer'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import CircularProgress from '@material-ui/core/CircularProgress'
import { fetchData } from '../actions/gallery'
import Card from '../components/Card'

const SPACING = 16

const styles = theme => ({
  wrapper: {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  progress: {
    textAlign: 'center',
    padding: '20px 0'
  }
})

class Gallery extends Component {
  state = {
    isLoading: true
  }

  componentDidMount() {
    const { fetchData } = this.props
    fetchData && fetchData().then(() => this.setState({ isLoading: false }))
  }

  loadMorePhotos = inView => {
    const { fetchData } = this.props
    const { isLoading } = this.state
    inView && !isLoading && fetchData()
  }

  render() {
    console.log('props', this.props)
    const { photos, classes, isLastPage } = this.props
    return (
      <Grid container spacing={16}>
        <Grid className={classes.wrapper} item xs={12}>
          <Grid container justify="center" spacing={SPACING}>
            {photos &&
              photos.map(item => (
                <Grid xs={12} sm={6} md={4} lg={3} key={item.id} item>
                  <Card item={item} />
                </Grid>
              ))}
            {!isLastPage && (
              <Observer onChange={this.loadMorePhotos}>
                {({ ref }) => (
                  <div ref={ref} className={classes.progress}>
                    <CircularProgress disableShrink />
                  </div>
                )}
              </Observer>
            )}
          </Grid>
        </Grid>
      </Grid>
    )
  }
}

Gallery.propTypes = {
  photos: array,
  isLastPage: bool
}

const mapStateToProps = state => {
  return {
    photos: state.gallery.photo,
    isLastPage: state.gallery.page === state.gallery.pages
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
)(withStyles(styles)(Gallery))
