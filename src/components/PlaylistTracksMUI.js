import React, {  useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import LoadingPage from './LoadingPage';
import MaterialTable from "material-table";
import ArtistName from './ArtistName';
import { ThemeProvider } from '@material-ui/core';
import AudioPlayer from 'material-ui-audio-player';


const header_style = {
    backgroundColor: '#1DB954',
    color: '#FFF',
    fontSize: 17,
    fontWeight: 'bold',
    width: 800,
    maxWidth: 800
  }

function PlaylistTracksMUI() {

    const playlistid = useParams().playlistid;
    const playlistname = useParams().playlistname;
    const token = localStorage.getItem('token');
    const uri = `https://api.spotify.com/v1/playlists/${playlistid}/tracks`;

    const table_header = {
        columns: [
            {
                title: 'Track',
                field: 'track.name'
            },
            {
                title: 'Album',
                field: 'track.album.name'
            },
            {
                
                title: 'Artist',
                render: rowData => {
                    console.log(rowData.track.artists[0].name);
                    {return <ArtistName 
                        artists={rowData.track.artists}
                        key={Math.random().toString()} />}
                    }
            },
            {
                title: 'Date Added',
                field: 'added_at',
                // type: 'date'
            },
            {
                title: 'Preview',
                field: 'track.preview_url',
                
                render: rowData => {
                    {
                        // {console.log("track.preview_url", rowData.track.preview_url)}
                        return(
                            //  <p>{rowData.track.preview_url}</p>
                            <AudioPlayer
                            rounded={true}
                            src={rowData.track.preview_url}
                          />
                            // <audio controls style={{width: 110, height: 25, color: 'green'}}
                            //    useRef="audio_tag" autoPlay={false}
                            //    src={rowData.track.preview_url} Play/>                          
                        )
                    }
                }
            }
        ]
    };

    // const columns = React.useMemo(
    //     () => [
    //             // {
    //             //     Header: 'Track',
    //             //     align: 'left',
    //             //     accessor: row => `${row.track.name}:${row.track.id}`,
    //             //     Cell: ({ cell: { value } }) =>
    //             //         <Fragment>
    //             //             <Trackinfo key={Math.random.toString()} trackinfo={value} />
    //             //         </Fragment>
    //             // },
    //             {
    //                 Header: 'Track',
    //                 accessor: 'track.name',
    //                 maxWidth: 150

    //             },
    //             {
    //                 Header: 'Album',
    //                 accessor: 'track.album.name',
    //                 maxWidth: 150,
    //             },
    //             {
    //                 Header: 'Artist',
    //                 accessor: 'track.artists',
    //                 Cell: ({ cell: { value } }) =>
    //                     <ArtistName key={Math.random.toString()} artists={value} />
    //             },
    //             {
    //                 Header: 'Date Added',
    //                 accessor: 'added_at',
    //                 maxWidth: 150,
    //                 Cell: ({ cell: { value } }) => {  const dt = new Date(value); return dt.toLocaleString() }
    //             },
    //         {
    //             Header: 'Preview',
    //             accessor: 'track.preview_url',
    //             Cell: ({ cell: { value } }) =>
    //                 <div>
    //                     <audio controls style={{width: 110, height: 25, color: 'green'}}
    //                            useRef="audio_tag" autoPlay={false}
    //                            src={value} Play/>
    //                 </div>
    //         }
    //      ],
    //     []
    // );

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
            console.log("Response Data Items",response.data.items);
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
        // <Container fluid="xl">
        <div>
            <h4 className="text-muted">{playlistname}</h4>
            <MaterialTable columns={table_header.columns} data={tracks} />
        </div>
    )
}

export default PlaylistTracksMUI;

