import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Card, ProgressBar, Badge,  Modal as BootModal } from "react-bootstrap";
// import axios from "axios";
// import { capitalize } from "../utils/helpers"
import img404 from '../assets/images/img_not_found.gif';

const TrackInfoModal = ({ show, closeModal, track }) => {

  console.log("TrackInfo Modal show value: ", show);
  console.log("Trackid: ", track.id);
  // console.log("URL: ", track.external_urls.spotify);
    const uri = `https://open.spotify.com/embed/track/${track.id}`;




  const handleHide = () => {
    closeModal();
  }

  if (Object.keys(track).length === 0) {
    return null;// return <p>No Data!</p>
  }    
  return(
    ReactDOM.createPortal(      
        <React.Fragment>
          <BootModal centered 
            show={show} 
            onHide={handleHide} 
            size="sm">
          {/*<BootModal.Header closeButton>*/}
          {/*  <BootModal.Title>{track.name}</BootModal.Title>*/}
          {/*</BootModal.Header>*/}
          <BootModal.Body>
            <Card className="card" >
                {/*<Card.Img*/}
                {/*    variant="top"*/}
                {/*    src= {track.album.images.length > 0 ? track.album.images[0].url : img404} />*/}
              <Card.Body>
                <Card.Text style={{ fontSize: 13, fontFamily: "Arial" }}>
                    {/*<iframe src={track.preview_url} width="100%" height="380"*/}
                    {/*        frameBorder="0" allowFullScreen=""*/}
                    {/*        allow="clipboard-write; encrypted-media; fullscreen; picture-in-picture">*/}
                    {/*</iframe>*/}
                    {/*<iframe src={track.preview_url} width="100%" height="77"*/}
                    {/*        frameBorder="0" allowFullScreen=""*/}
                    {/*        allow="clipboard-write; encrypted-media; fullscreen; picture-in-picture">*/}
                    {/*</iframe>*/}
                    <iframe src={uri} width="100%" height="380"
                            frameBorder="0" allowFullScreen=""
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture">
                    </iframe>
                    {/*<iframe src={uri} width="100%" height="80"*/}
                    {/*        frameBorder="0" allowFullScreen=""*/}
                    {/*        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture">*/}
                    {/*</iframe>*/}
                    <br/>
                    {

                        track.album.artists.map( (track) => (
                                <span>{`${track.name}`}&nbsp;</span>

                            // <span style={{padding: 'padding-left:4px'}}>{track.name}</span>
                        )



                            // (<><span>{track.name}</span> <br/></>)
                            // {track.name + '|'}
                        )
                    }<br />
                    {/*{track.id}*/}
                </Card.Text>
              </Card.Body>
            </Card>
          </BootModal.Body>
          </BootModal>
        </React.Fragment>,
        // document.getElementById('trackmodal')
        document.body
      ));
}

export default TrackInfoModal;