import React, { Component } from 'react'
import Chip from '@material-ui/core/Chip'
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import { connect } from 'react-redux'
import { fetchData } from '../../actions/gallery'
import { changeTags } from '../../actions/filters'

const styles = theme => ({
  chip: {
    margin: `0 ${theme.spacing.unit / 4}px`
  }
})

class Tags extends Component {
  state = {
    value: ''
  }

  handleChange = e => this.setState({ value: e.target.value })

  handleDelete = tag => () => {
    this.props.changeTags(tag)
    this.props.fetchData()
  }

  handleSubmit = e => {
    e.preventDefault()
    const { value } = this.state

    if (!value) {
      return
    }

    this.props.changeTags(value)
    this.props.fetchData()

    this.setState({ value: '' })
  }

  render() {
    const { classes } = this.props
    const hasDelete = this.props.tags.length > 1

    return (
      <Grid item xs={12}>
        <form autoComplete="off" noValidate onSubmit={this.handleSubmit}>
          <TextField
            id="tags"
            label="Tags"
            value={this.state.value}
            onChange={this.handleChange}
            margin="normal"
          />
        </form>
        {this.props.tags.map(item => (
          <Chip
            className={classes.chip}
            key={item}
            label={item}
            onDelete={hasDelete ? this.handleDelete(item) : undefined}
          />
        ))}
      </Grid>
    )
  }
}

const mapStateToProps = state => ({
  tags: state.filters.tags
})

const mapDispatchToProps = {
  changeTags,
  fetchData
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Tags))
