import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import { Container } from 'react-bootstrap';

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
            <h4 class="text-muted">{playlistname}</h4>
            <ul>
                    {
                        tracks.items.map( ( item ) => (
                            <>
                            <li>Track: {item.track.name}</li>
                            <li>Album: {item.track.album.name}</li>
                            <li>Artist: {item.track.artists[0].name}</li>
                            <li>{item.added_at}</li>
                            </>
                        ))
                            
                        
                    }
                </ul>
            </Container>            
            
     
            
{/*              
            <p>Track: {tracks.items[1].track.name}</p>
            <p>Album: {tracks.items[1].track.album.name}</p>
            <p>Artist: {tracks.items[1].track.artists[0].name}</p> */}
        </div>
    )
}

export default Tracks;
