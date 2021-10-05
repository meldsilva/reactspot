import React, { Fragment, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import LoadingPage from './LoadingPage';
import Table from './PlaylistTracks.Table';
import ArtistName from './ArtistName';
import { Container } from 'react-bootstrap';
import Trackinfo from './TrackInfo';

function PlaylistTracks() {

    const playlistid = useParams().playlistid;
    const playlistname = useParams().playlistname;
    const token = localStorage.getItem('token');
    const uri = `https://api.spotify.com/v1/playlists/${playlistid}/tracks`;

    const columns = React.useMemo(
        () => [ 
                {
                    Header: 'Track',
                    accessor: 'track.name',
                    accessor: row => `${row.track.name} ${row.track.id}`,
                    Cell: ({ cell: { value } }) => 
                    <Fragment>
                    <Trackinfo key={Math.random.toString()} trackname={value} />
                    </Fragment>
                },
                {
                    Header: 'Album',
                    accessor: 'track.album.name'
                },
                {
                    Header: 'Artist',
                    accessor: 'track.artists',
                    Cell: ({ cell: { value } }) => <ArtistName key={Math.random.toString()} artists={value} />        
                },
                {
                    Header: 'Date Added',
                    accessor: 'added_at',
                    Cell: ({ cell: { value } }) => {  const dt = new Date(value); return dt.toLocaleString() }
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
        <Container fluid="xl">
            <h4 className="text-muted">{playlistname}</h4>
            <Table columns={columns} data={tracks} />
        </Container>
    )
}

export default PlaylistTracks;

