import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { Card, Button, Modal as BootModal } from "react-bootstrap";
import axios from "axios";

const Modal = ({ isShowing, hide, artistdata }) => {

  const [loading, setLoading] = useState(false);
  const [artist, setArtist] = useState({});
  const token = localStorage.getItem('token');
  const uri = `https://api.spotify.com/v1/artists/${artistdata.artistid}`;

  console.log("isShowing is : ",isShowing);
  console.log("Artist is : ",artistdata.name);

  // useEffect( () => {
  //     setLoading(true);

  //     async function fetchData(){
  //     try {
  //         const response = await axios.get(uri, {
  //             headers: {
  //                 'Authorization': `Bearer ${token}`
  //             }
  //         });
         
  //         setArtist(response.data);
  //         console.log("Artists Response", response.data);
  //     }
  //     catch(error) {
  //         console.log(error);
  //     }
  //     finally {
  //         setLoading(false);
  //     }
  // }
  // fetchData()
  // },[]);
  
  // if(!isShowing) {return null}
  
    ReactDOM.createPortal(      
        <React.Fragment>
          <BootModal show={hide} onHide={isShowing} size="md">
            <BootModal.Header closeButton>
              <BootModal.Title>"Artist Name"</BootModal.Title>
            </BootModal.Header>
            <BootModal.Body>
              <Card className="card">
                {/* <Card.Img variant="top" src={artist.images[0].uri} /> */}
                <Card.Body>
                  <Card.Text style={{ fontSize: 13, fontFamily: "Arial" }}>
                    <li> Genres: Artist Genres</li>
                    {/* <li>
              <a>Tracks: </a>
              <a
                  href="" onClick={() => {navigate(`/tracks/${pl.name}/${pl.id}`)}}>{pl.tracks.total}
              </a>
          </li> */}
                  </Card.Text>
                </Card.Body>
              </Card>
            </BootModal.Body>
            <BootModal.Footer>
              <Button variant="secondary" onClick={hide}>
                Close
              </Button>
            </BootModal.Footer>
          </BootModal>
        </React.Fragment>,
        document.body
        // </React.Fragment>, document.getElementById('app')
      );
}

export default Modal;



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