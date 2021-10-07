import React, { useState } from 'react';
import ArtistModal from './ArtistModal';
import { Button } from 'react-bootstrap';

// Custom component to render Artist Names
const ArtistName = (artists) => {
    // Loop through the array and create a badge-like component instead of a comma-separated string
    const [show, showModal] = useState(false);
    const [activeArtist, setActiveArtist] = useState('');
    const doModal = (event) => {
        showModal(true);
        setActiveArtist(event.currentTarget.id);
    }
    const hideModal = () => {
        showModal(false);
    }
    
    return (       
        
        artists.artists.map( (artist, idx) => (
        <React.Fragment>
            <Button variant="link" 
                style={{textAlign: 'left'}}
                key={idx.toString()}
                id={artist.id}
                onClick={doModal}>
                    {artist.name}
            </Button>
            <ArtistModal
                show={show}
                closeModal={hideModal}
                artistid={artist.id} 
                activeArtist={activeArtist}
                key={Math.random.toString()}
            />
        </React.Fragment>
        ))
    )
}

export default ArtistName;