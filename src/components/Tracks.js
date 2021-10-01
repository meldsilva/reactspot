import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import { Badge } from 'react-bootstrap';
import LoadingPage from './LoadingPage';
import Table from './Tracks.Table';

function Tracks() {

    const playlistid = useParams().playlistid;
    const playlistname = useParams().playlistname;
    const token = localStorage.getItem('token');
    const uri = `https://api.spotify.com/v1/playlists/${playlistid}/tracks`;
   
    // Function to manipulate api response to make it react-table friendly
    // 1. Convert UTC date to current locale string
    // 2. Create a list of artist names array in artistnames for each track object
    const adjustData = (tracks) => {
        // iterate through each track object in array
        tracks.forEach(track => {
            track.added_at = new Date(track.added_at).toLocaleString();
            track.artistnames = [];
            track.track.artists.forEach( (artist) => {
                track.artistnames.push(artist.name);
                // console.log("Artist is: ", artist.name);
            });
            // console.log("Artist List is: ", track.artistnames.slice());
        }); 
        return tracks;//Return manupulated tracks object array
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
                    accessor: 'artistnames',
                    // Cell: ({ cell: { value } }) => <ArtistName artists={value} />,

                    Cell: ({ cell: { value } }) => {
                        return (
                            <ArtistName artistnames={value} />
                        //   value.join(', ')
                        );
                    }          
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
           
            setTracks( adjustData( response.data.items) );
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

// Custom component to render Artist Names
const ArtistName = (artistnames) => {
    // Loop through the array and create a badge-like component instead of a comma-separated string
    // console.log("Artistnames: ", artistnames);
 
    const displayArtist = (event) => {
        console.log(event);
        alert(event.target.innerText);
    }

    return (        
        artistnames.artistnames.map( (name, idx) => (
            <>
            <Badge pill key={idx}
            bg={idx % 2 === 0 ?  "dark" : "secondary"} 
            onClick={displayArtist}>
            {name}
            </Badge>
            </>
          ))
    )
}

export default Tracks;

