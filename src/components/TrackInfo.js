import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import TrackInfoModal from './TrackInfoModal';

const TrackInfo = ({trackinfo}) => {
    
    const arr = trackinfo.split(':');
    const [trackname, trackid] = arr;
    const token = localStorage.getItem('token');
    const uri = `https://api.spotify.com/v1/tracks/${trackid}`;

    const [show, showModal] = useState(false);
    const [loading, setLoading] = useState(false);
    const [track, setTrack] = useState({});

    // console.log("Track Name: ", arr);
    // console.log("Track ID: ", trackid);
    
    const doModal = () => {
        showModal(true);
        console.log("show in TrackInfo::doModal() is: ", show);
    }
    const hideModal = () => {
        showModal(false);
    }

    const handleGetArtistInfo = (event) => {

        async function fetchData() {
        try {
            const response = await axios.get(uri, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            
            setTrack(response.data);
            }
            catch(error) {
                console.log(error);
            }
            finally {
                setLoading(false);
            }
        }
        fetchData();
        doModal();
    }



    return (       
        <React.Fragment>
            <Button variant="link" 
                // onClick={doModal}>
                onClick={handleGetArtistInfo}>
                    {trackname}
            </Button>
            <TrackInfoModal
                show={show}
                closeModal={hideModal}
                track={track} 
            />
        </React.Fragment>
    )
}

export default TrackInfo;