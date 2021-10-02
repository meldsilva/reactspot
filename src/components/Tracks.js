import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import LoadingPage from './LoadingPage';
import Table from './Tracks.Table';
import Artist from './Artist';
import useModal from './customhooks/useModal';
import Modal from './Modal';

function Tracks() {

    const playlistid = useParams().playlistid;
    const playlistname = useParams().playlistname;
    const token = localStorage.getItem('token');
    const uri = `https://api.spotify.com/v1/playlists/${playlistid}/tracks`;

    const columns = React.useMemo(
        () => [ 
                {
                    Header: 'Track',
                    accessor: 'track.name'
                },
                {
                    Header: 'Album',
                    accessor: 'track.album.name'
                },
                {
                    Header: 'Artist',
                    accessor: 'track.artists',
                    Cell: ({ cell: { value } }) => <ArtistName artists={value} />        
                },
                {
                    Header: 'Date Added',
                    accessor: 'added_at'.toLocaleString()
                },
         ],
        []
    );

    const [loading, setLoading] = useState(false);
    const [tracks, setTracks] = useState([]);

    useEffect( () => {

        setLoading(true);

        async function fetchData(){
        try {
            const response = await axios.get(uri, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
           
            setTracks(response.data.items);
            // console.log("Tracks Response", response.data);
            // console.log("Tracks List",response.data.items);
        }
        catch(error) {
            console.log(error);
        }
        finally {
            setLoading(false);
        }
    }
    fetchData()
    },[token, uri]);

    if (loading) {
        return <LoadingPage />;
    }
    // if (Object.keys(tracks).length === 0) {
    //     return <p>No Data!</p>
    // }

    if (tracks.length === 0){
        return <p>No Data!</p>
    }

    return (
        <div>
            <h4 className="text-muted">{playlistname}</h4>
            <Table columns={columns} data={tracks} />
        </div>
    )
}

// Custom component to render Artist Names
const ArtistName = (artists) => {
    // Loop through the array and create a badge-like component instead of a comma-separated string
    // console.log("Artistnames: ", artistnames);
    // const navigate = useNavigate();

    const {isShowing, toggle} = useModal();
    // // Modal states
    // const [show, setShow] = useState(false);
    // const openModal = () => setShow(true);
    // const closeModal = () => setShow(false);

    const displayArtist = (name, href) => {
        console.log(name);
        // alert(event.target.innerText);
    }


// {/* onClick={() => {navigate(`/artists/${artist.id}`)}} */}
    return (        
        artists.artists.map( (artist, idx) => (
            <React.Fragment>
            <Button variant="link" 
                key={idx}
                onClick={toggle}>
                    {artist.name}
            </Button>
            <Modal 
            isShowing={isShowing}
            hide={toggle} />            
            </React.Fragment>
          ))
    )
}

export default Tracks;

