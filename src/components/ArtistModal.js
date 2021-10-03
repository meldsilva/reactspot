import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { Card, Button, ListGroup,  Modal as BootModal } from "react-bootstrap";
import axios from "axios";

const ArtistModal = ({ show, closeModal, artistid }) => {

  const [loading, setLoading] = useState(false);
  const [artist, setArtist] = useState({});
  const token = localStorage.getItem('token');
  const uri = `https://api.spotify.com/v1/artists/${artistid}`;

  console.log("Show: ",show);
  // console.log("Artist: ", artistdata.name);
  // console.log("Artist ID: ", artistdata.id);
  console.log("Artist Data: ", artistid);
  console.log("Artist API Resp: ", artist);

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
          console.log("Artists Response", response.data);
      }
      catch(error) {
          console.log(error);
      }
      finally {
          setLoading(false);
      }
  }
  fetchData()
  },[artistid, uri, token]);

    
  if (Object.keys(artist).length === 0) {
        return <p>No Data!</p>
  }  
  if (loading) {
    return <p>Loading. Please wait...</p>;
  }  
  return(
    ReactDOM.createPortal(      
        <React.Fragment>
          <BootModal show={show} onHide={handleHide} size="md">
            <BootModal.Header closeButton>
              <BootModal.Title>{artist.name}</BootModal.Title>
            </BootModal.Header>
            <BootModal.Body>
              <Card className="card">
                {/* <Card.Img variant="top" src={artist.images[0].uri} /> */}
                <Card.Body>
                  <Card.Text style={{ fontSize: 13, fontFamily: "Arial" }}>
                    <ListGroup variant="flushed">
                    {
                      artist.genres.map( (genre, idx)  =>
                        <ListGroup.Item key={idx}>{genre}</ListGroup.Item>
                      )
                    }
                    </ListGroup>
                    Followers: {artist.followers.total}
                  </Card.Text>
                </Card.Body>
              </Card>
            </BootModal.Body>
            <BootModal.Footer>
              <Button variant="secondary" onClick={handleHide}>
                Close
              </Button>
            </BootModal.Footer>
          </BootModal>
        </React.Fragment>,
        document.body
        // </React.Fragment>, document.getElementById('app')
      ));
}

export default ArtistModal;



// const Modal = ({ isShowing, hide, artist }) =>
//   isShowing
//     ? ReactDOM.createPortal(      
//         <React.Fragment>
//           <BootModal show={hide} onHide={isShowing} size="md">
//             <BootModal.Header closeButton>
//               <BootModal.Title>"Artist Name"</BootModal.Title>
//             </BootModal.Header>
//             <BootModal.Body>
//               <Card className="card">
//                 {/* <Card.Img variant="top" src={artist.images[0].uri} /> */}
//                 <Card.Body>
//                   <Card.Text style={{ fontSize: 13, fontFamily: "Arial" }}>
//                     <li> Genres: Artist Genres</li>
//                     {/* <li>
//               <a>Tracks: </a>
//               <a
//                   href="" onClick={() => {navigate(`/tracks/${pl.name}/${pl.id}`)}}>{pl.tracks.total}
//               </a>
//           </li> */}
//                   </Card.Text>
//                 </Card.Body>
//               </Card>
//             </BootModal.Body>
//             <BootModal.Footer>
//               <Button variant="secondary" onClick={hide}>
//                 Close
//               </Button>
//             </BootModal.Footer>
//           </BootModal>
//         </React.Fragment>,
//         document.body
//         // </React.Fragment>, document.getElementById('app')
//       )
//     : null;

// export default Modal;