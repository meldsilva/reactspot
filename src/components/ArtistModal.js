import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { Card, ProgressBar, Badge,  Modal as BootModal } from "react-bootstrap";
import axios from "axios";
import { capitalize } from "../utils/helpers"
import img404 from '../assets/images/img_not_found.gif';

const ArtistModal = ({ show, closeModal, artistid, activeArtist }) => {

  const [loading, setLoading] = useState(false);
  const [artist, setArtist] = useState({});
  const token = localStorage.getItem('token');
  const uri = `https://api.spotify.com/v1/artists/${artistid}`;

  // console.log("Show: ",show);
  // console.log("Artist ID: ", artistid);
  // console.log("activeArtist: ", activeArtist);
  // console.log("Artist API Response: ", artist);
  // console.log("Artist Image URL: ", artist.images);
  // console.log("Artist Popularity: ", artist.popularity);

  const handleHide = () => {
    closeModal();
  }

  useEffect( () => {
      setLoading(true);

      async function fetchData(){
      try {
          const response = await axios.get(uri, {
              headers: {
                  'Authorization': `Bearer ${token}`
              }
          });
         
          setArtist(response.data);
          // console.log("Artists Response", response.data);
      }
      catch(error) {
          console.log(error);
      }
      finally {
          setLoading(false);
      }
  }
  fetchData()
  },[]);

    
  if (Object.keys(artist).length === 0) {
        return <p>No Data!</p>
  }  
  if (loading) {
    return <p>Loading. Please wait...</p>;
  }  
  return(
    ReactDOM.createPortal(      
        <React.Fragment>
          <BootModal centered 
            show={show && (artistid === activeArtist)} 
            onHide={handleHide} 
            size="sm"
          >
          <BootModal.Header closeButton>
            <BootModal.Title>{artist.name}</BootModal.Title>
          </BootModal.Header>
          <BootModal.Body>
            <Card className="card" >
              <Card.Img
                variant="top" 
                src= {artist.images.length > 0 ? artist.images[0].url : img404} />
              <Card.Body>
                <Card.Text style={{ fontSize: 13, fontFamily: "Arial" }}>
                  <span>Followers: {artist.followers.total.toLocaleString()} </span><br/>
                  <span>
                    <ProgressBar now={artist.popularity} label={`Popularity ${artist.popularity}`} />
                  </span>

                  {
                    artist.genres.map( (genre, idx)  =>
                      <span style={{padding: 1}}>
                      <Badge pill 
                      key={idx}
                      bg={idx % 2 === 0  ? 'primary' : 'secondary'}>
                        {`${capitalize(genre)}`}</Badge>
                      </span>
                    )
                  }
                  {/* <br/> */}
                </Card.Text>
              </Card.Body>
            </Card>
          </BootModal.Body>
          {/* <BootModal.Footer>
            <Button variant="secondary" onClick={handleHide}>
              Close
            </Button>
          </BootModal.Footer> */}
          </BootModal>
        </React.Fragment>,
        document.body
      ));
}

export default ArtistModal;