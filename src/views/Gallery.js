import React, { Component } from 'react'
import { connect } from 'react-redux'
import { array, bool, func } from 'prop-types'
import Observer from 'react-intersection-observer'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import CircularProgress from '@material-ui/core/CircularProgress'
import { fetchData } from '../actions/gallery'
import Filters from '../components/Filters'
import Card from '../components/Card'
import Error from '../components/Error'

const SPACING = 16
const isOnline = typeof navigator !== 'undefined' && navigator.onLine

const styles = theme => ({
  wrapper: {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  progress: {
    flex: '1 1 100%',
    textAlign: 'center',
    padding: SPACING
  },
  container: {
    padding: SPACING
  }
})

class Gallery extends Component {
  componentDidMount() {
    const { fetchData } = this.props
    fetchData && fetchData()
  }

  loadMorePhotos = inView => {
    const { fetchData, isLoading } = this.props
    inView && !isLoading && fetchData(true)
  }

  render() {
    const { photos, classes, showLoader, hasError } = this.props
    return (
      <Grid className={classes.container} container spacing={SPACING}>
        <Filters isOnline={isOnline} />
        {hasError ? (
          <Error />
        ) : (
          <Grid item xs={12}>
            <Grid container spacing={SPACING}>
              {photos &&
                photos.map(item => (
                  <Grid xs={12} sm={6} md={4} lg={3} key={item.id} item>
                    <Card item={item} />
                  </Grid>
                ))}
              {showLoader && (
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
        )}
      </Grid>
    )
  }
}

Gallery.propTypes = {
  photos: array,
  showLoader: bool,
  changeAuthor: func,
  fetchData: func,
  hasError: bool
}

const mapStateToProps = state => {
  return {
    photos: state.gallery.photo,
    isLoading: state.gallery.isLoading,
    showLoader: state.gallery.page !== state.gallery.pages && isOnline,
    hasError: !!state.errors.message
  }
}

const mapDispatchToProps = {
  fetchData
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Gallery))
