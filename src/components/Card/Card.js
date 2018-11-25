import React from 'react'
import { object, func, array } from 'prop-types'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import Grid from '@material-ui/core/Grid'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { changeAuthor, changeTags } from '../../actions/filters'
import { getPhotoSrc } from '../../api'

const styles = {
  card: {
    height: '100%'
  },
  cardMedia: {
    objectFit: 'cover'
  },
  cardDescription: {
    overflowY: 'auto',
    maxHeight: 150
  },
  infoWrapper: {
    justifyContent: 'space-between'
  },
  tags: {
    marginTop: '10px'
  },
  tagButton: {
    margin: '4px'
  },
  button: {
    padding: 0,
    minHeight: '25px'
  }
}

const transformDate = date => new Date(Number(date + '000')).toLocaleDateString()

function CardComponent({ item, classes, filterTags, changeAuthor, changeTags }) {
  const { owner, ownername } = item

  const handleChangeAuthor = () => {
    changeAuthor({ owner, ownername })
  }

  const handleTagClick = tag => () => {
    changeTags(tag)
  }

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.cardMedia}
        component="img"
        alt={item.title}
        height="150"
        image={getPhotoSrc(item)}
        title={item.title}
      />
      <CardContent>
        <Grid container className={classes.infoWrapper}>
          <Button className={classes.button} onClick={handleChangeAuthor}>
            {item.ownername}
          </Button>
          <Typography component="p">{transformDate(item.dateupload)}</Typography>
        </Grid>
        <Typography gutterBottom variant="h5" component="h2">
          {item.title}
        </Typography>
        <Typography className={classes.cardDescription} component="p">
          {item.description._content}
        </Typography>
        <Typography component="p" className={classes.tags}>
          <strong>Tags: </strong>
          {item.tags.split(' ').map(el => (
            <Button
              onClick={handleTagClick(el)}
              key={el}
              variant="outlined"
              size="small"
              disabled={filterTags.includes(el)}
              className={classes.tagButton}
            >
              {el}
            </Button>
          ))}
        </Typography>
      </CardContent>
    </Card>
  )
}

CardComponent.propTypes = {
  item: object,
  filterTags: array,
  changeAuthor: func,
  changeTags: func
}

const mapStateToProps = state => ({
  filterTags: state.filters.tags
})
const mapDispatchToProps = {
  changeAuthor,
  changeTags
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(CardComponent))
