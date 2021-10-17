import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';import Grid from '@mui/material/Grid';
import { CardMedia, Typography } from "@material-ui/core";
import ArtistName from './ArtistName';

const GridTile = ({release}) => {

  return (
    <Grid item lg={3}>
    <Card sx={{ maxWidth: 600, maxHeight: 600 }}>
      <CardMedia
        component="img"
        height="300"
        image={release.images[0].url}
        alt={release.name}
      />
      <CardContent>
        <Typography gutterBottom variant="subtitle1" component="div">
          {release.name}
        </Typography>
        <ArtistName artists={release.artists} />
        <Typography variant="body2" color="text.secondary">
          <li>Released: {release.release_date}</li>
          <li>Type: {release.album_type}</li>
          <li>Tracks: {release.total_tracks}</li>
        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>  
    </Grid>

  )
}

const NewReleasesGrid = ({new_releases}) => {
  return (
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      {
        new_releases.items.map( (release) => 
          <GridTile release={release} />
        )
      }
    </Grid>

  )
}

export default NewReleasesGrid;



  