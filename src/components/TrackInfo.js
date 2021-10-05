import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';

const TrackInfo = ({trackinfo}) => {
    
    const arr = trackinfo.split(':');
    const [trackname, trackid] = arr;
    const token = localStorage.getItem('token');
    const uri = `https://api.spotify.com/v1/tracks/${trackid}`;

    const [show, showModal] = useState(false);
    const [loading, setLoading] = useState(false);
    const [track, setTrack] = useState({});

    console.log("Track Name: ", arr);
    console.log("Track ID: ", trackid);
    
    const doModal = (event) => {
        showModal(true);
    }
    const hideModal = () => {
        showModal(false);
    }

    // useEffect( () => {
    //     setLoading(true);
  
    //     async function fetchData(){
    //     try {
    //         const response = await axios.get(uri, {
    //             headers: {
    //                 'Authorization': `Bearer ${token}`
    //             }
    //         });
           
    //         setTrackInfo(response.data);
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

    
    return (       
        
        <React.Fragment>
            <Button variant="link" 
                onClick={doModal}>
                    {trackname}
            </Button>
            {/* <ArtistModal
                show={show}
                closeModal={hideModal}
                artistid={artist.id} 
                activeArtist={activeArtist}
                key={Math.random.toString()}
            /> */}
        </React.Fragment>
        
    )
}

export default TrackInfo;