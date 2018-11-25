import React, { PureComponent } from 'react'
import { array, string } from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Select from '@material-ui/core/Select'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'

const styles = {
  formControl: {
    margin: '20px',
    minWidth: 120,
    maxWidth: 300
  }
}

class Filter extends PureComponent {
  state = {
    inputValue: ''
  }

  handleChange = e => {
    this.setState({ inputValue: e.target.value })
  }

  render() {
    const { classes, data, name } = this.props
    const { inputValue } = this.state
    return (
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="select-multiple">{name}</InputLabel>
        <Select
          value={inputValue}
          onChange={this.handleChange}
          input={<Input id="select-multiple" />}
        >
          {data &&
            data.map(item => (
              <MenuItem key={item.id} value={item.name}>
                {item.name}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
    )
  }
}

Filter.propTypes = {
  data: array,
  name: string
}

export default withStyles(styles)(Filter)
