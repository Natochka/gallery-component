import React from 'react'
import { object } from 'prop-types'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import { getPhotoSrc } from '../../api'

function CardComponent({ item }) {
  return (
    <Card>
      <CardMedia
        component="img"
        alt={item.title}
        height="150"
        image={getPhotoSrc(item)}
        title={item.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {item.title}
        </Typography>
        <Typography component="p">Default description</Typography>
      </CardContent>
    </Card>
  )
}

CardComponent.propTypes = {
  item: object
}

export default CardComponent
