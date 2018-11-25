import React from 'react'
import { object } from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import Grid from '@material-ui/core/Grid'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
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
  }
}

const transformDate = date => new Date(Number(date + '000')).toLocaleDateString()

function CardComponent({ item, classes }) {
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
          <Typography component="p">{item.ownername}</Typography>
          <Typography component="p">{transformDate(item.dateupload)}</Typography>
        </Grid>
        <Typography gutterBottom variant="h5" component="h2">
          {item.title}
        </Typography>
        <Typography className={classes.cardDescription} component="p">
          {item.description._content}
        </Typography>
      </CardContent>
    </Card>
  )
}

CardComponent.propTypes = {
  item: object
}

export default withStyles(styles)(CardComponent)
