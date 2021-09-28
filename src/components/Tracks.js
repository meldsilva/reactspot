import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
// import { Container, Table } from 'react-bootstrap';
import LoadingPage from './LoadingPage';
import Table from './Tracks.Table';

function Tracks() {

    const playlistid = useParams().playlistid;
    const playlistname = useParams().playlistname;
    const token = localStorage.getItem('token');
    const uri = `https://api.spotify.com/v1/playlists/${playlistid}/tracks`;

   const adjustData = (d) => {
    d.map(item => {
        item.added_at = new Date(item.added_at).toLocaleString();
        // console.log("Artists are", item.artists[0].name);
        // let arti
        // item.artists.array.forEach(element => {
        //     arti.push(element.artists.name)
        // });
    }); 
    return d;
   }

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
                        accessor: 'track.artists.name'
                    },
                    {
                        Header: 'Date Added',
                        accessor: 'added_at'.toLocaleString()
                    },
            // {
            //     Header: 'Header Name',
            //     columns:[
            //         {
            //             Header: 'Track',
            //             accessor: 'track.name'
            //         },
            //         {
            //             Header: 'Album',
            //             accessor: 'track.album.name'
            //         },
            //         {
            //             Header: 'Date Added',
            //             accessor: 'added_at'
            //         },
            //     ]
            // }
        ],
        []
    );

    const [loading, setLoading] = useState(false);
    const [tracksResponse, setTracksResponse] = useState({});
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
           
            setTracksResponse(response.data);
            setTracks( adjustData( response.data.items) );

            console.log("Tracks Response", response.data);
            console.log("Tracks List",response.data.items);
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

export default Tracks;
