import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import { Container, Table } from 'react-bootstrap';

function Tracks() {

    const playlistid = useParams().playlistid;
    const playlistname = useParams().playlistname;
    const token = localStorage.getItem('token');
    const uri = `https://api.spotify.com/v1/playlists/${playlistid}/tracks`;

    const [loading, setLoading] = useState(false);
    const [tracks, setTracks] = useState({});

    useEffect( () => {
        setLoading(true);

        async function fetchData(){
        try {
            const response = await axios.get(uri, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            setTracks(response.data);
            console.log(response.data);
            console.log("Track ###", response.data.items[9].track.track_number);
            
        }
        catch(error) {
            console.error(error);
        }
        finally {
            setLoading(false);
        }
    }
    fetchData()
    },[token]);

    if (loading) {
        return <h3>Data is loading...</h3>;
    }
    if (Object.keys(tracks).length === 0) {
        return <p>No Data!</p>
    }

    return (
        <div>
            <Container fluid>
            <h4 className="text-muted">{playlistname}</h4>

            <Table striped bordered hover size="sm" responsive>
            <thead>
                <tr>
                <th>#</th>
                <th>Track</th>
                <th>Album</th>
                <th>Artist</th>
                <th>Date Added</th>
                </tr>
            </thead>
            <tbody>
            {
                tracks.items.map( ( item ) => (
                    <tr>
                        <td key={Math.random()}>{item.track.track_number}</td>
                        <td key={Math.random()}>{item.track.name}</td>
                        <td key={Math.random()}>{item.track.album.name}</td>
                        <td key={Math.random()}>{item.track.artists[0].name}</td>
                        <td key={Math.random()}>{new Date(item.added_at).toLocaleString()}</td>
                    </tr>
                ))
            }
            </tbody>
            </Table>
            </Container>            
            
     
            
{/*              
            <p>Track: {tracks.items[1].track.name}</p>
            <p>Album: {tracks.items[1].track.album.name}</p>
            <p>Artist: {tracks.items[1].track.artists[0].name}</p> */}
        </div>
    )
}

export default Tracks;
