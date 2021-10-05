import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';

const TrackInfo = ({trackname}) => {


    const trackid = '6ng47hft8dJO3VhgrnIqps';

    // const name  = trackname;
    
    // const trackid = useParams().trackid;
    // const trackname = useParams().trackname;
    const token = localStorage.getItem('token');
    const uri = `https://api.spotify.com/v1/tracks/${trackid}`;

    const [show, showModal] = useState(false);
    const [loading, setLoading] = useState(false);
    const [trackinfo, setTrackInfo] = useState({});

    console.log("Track Name: ", trackname);
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