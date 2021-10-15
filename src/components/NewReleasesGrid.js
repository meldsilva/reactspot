import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';import Grid from '@mui/material/Grid';
import { CardMedia, Typography } from "@material-ui/core";
import Button from '@mui/material/Button';

const header_style = {
  backgroundColor: '#1DB954',
  color: '#FFF',
  fontSize: 17,
  fontWeight: 'bold',
  width: 800,
  maxWidth: 800
  
}

const NewReleasesGrid = ({new_releases}) => {

        return (
          <>
<Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
  <Grid item xs>
     <Card sx={{ maxWidth: 300 }}>
      <CardMedia
        component="img"
        height="150"
        image="https://avatars.githubusercontent.com/u/2364086?v=4"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>  
    </Grid>
  <Grid item xs>
  <Card sx={{ maxWidth: 300 }}>
      <CardMedia
        component="img"
        height="150"
        image="https://avatars.githubusercontent.com/u/2364086?v=4"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Trynosaurus
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
    </Card> 
  </Grid>
  <Grid item xs>
  <Card sx={{ maxWidth: 300 }}>
      <CardMedia
        component="img"
        height="150"
        image="https://avatars.githubusercontent.com/u/2364086?v=4"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Pene
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
    </Card> 
  </Grid> 
</Grid>
          </>

        )
}

export default NewReleasesGrid;



  