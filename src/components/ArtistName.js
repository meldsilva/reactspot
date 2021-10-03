import React, { useState } from 'react';
import ArtistModal from './ArtistModal';
import { Button } from 'react-bootstrap';

// Custom component to render Artist Names
const ArtistName = (artists) => {
    // Loop through the array and create a badge-like component instead of a comma-separated string
    const [show, showModal] = useState(false);
    const doModal = () => {
        console.log("Called Tracks.doModal");
        showModal(true);
    }
    const hideModal = () => {
        console.log("Called Tracks.hideModal");
        showModal(false);
    }
    // console.log("Artists Prop: " ,artists);
    return (       
        
        artists.artists.map( (artist, idx) => (
        <>
            <Button variant="link" 
                key={idx}
                onClick={doModal}>
                    {artist.name}
            </Button>
            <ArtistModal
                show={show}
                closeModal={hideModal}
                artistid={artist.id} 
            />
        </>
        ))
    )
}

export default ArtistName;