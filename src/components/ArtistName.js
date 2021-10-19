import React, { useState } from 'react';
import ArtistModal from './ArtistModal';
import { Button } from 'react-bootstrap';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

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
            <Stack direction="column" spacing={1}>
            {
                <Chip 
                    clickable
                    id={artist.id}
                    key={idx.toString()} 
                    label={artist.name} 
                    style={{backgroundColor: idx % 2 === 0 ? '#1DB954' : '#60F4D7'} }
                    size="small"
                    onClick={doModal}
                    />
            }
            </Stack>    
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