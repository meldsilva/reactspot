import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { Card, Button, Modal as BootModal } from "react-bootstrap";

const Modal = ({ isShowing, hide }) =>
  isShowing
    ? ReactDOM.createPortal(
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
      )
    : null;

export default Modal;