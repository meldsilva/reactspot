import React, {  useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import LoadingPage from './LoadingPage';
import MaterialTable from "material-table";
import ArtistName from './ArtistName';
import { ThemeProvider } from '@material-ui/core';
import AudioPlayer from 'material-ui-audio-player';
import { makeStyles } from '@material-ui/core';


const header_style = {
    backgroundColor: '#1DB954',
    color: '#FFF',
    fontSize: 17,
    fontWeight: 'bold',
    width: 800,
    maxWidth: 800
  }
  const useStyles = makeStyles(theme => ({
    playIcon: {
        color: '#1DB954',
        '&:hover': {
          color: 'tomato'
        }
    }
}));  

//   const useStyles = () => makeStyles(
//       {
//         playIcon: {
//             color: '#f50057',
//             '&:hover': {
//               color: '#ff4081'
//             }
//       }
//     });
      

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
                        return <ArtistName 
                        artists={rowData.track.artists}
                        key={Math.random().toString()} />
                    }
            },
            {
                title: 'Date Added',
                field: 'added_at',
                type: 'datetime'
            },
            {
                title: 'Preview',
                field: 'track.preview_url',
                
                render: rowData => {
                    {
                        return(
     
                                <AudioPlayer
                                  elevation={1}
                                  rounded={true}
                                  width="56px"
                                  variation="primary"
                                  download={false}
                                  volume={false}
                                  displaySlider={false}
                                  useStyles={useStyles}
                                //   loop={loop}
                                //   spacing={spacing}
                                  debug={false}
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
            // console.log("Response Data Items",response.data.items);
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

    if (tracks.length === 0){
        return <p>No Data!</p>
    }

    return (
        // <Container fluid="xl">
        <div>
            <h4 className="text-muted">{playlistname}</h4>
            <MaterialTable 
            columns={table_header.columns} 
            data={tracks}
            options={{
                sorting: true,
                search: true,
                pageSize: 20,
                showTitle: false,
                maxBodyHeight: '500px',
                searchFieldAlignment: 'left'}}
            />
        </div>
    )
}

export default PlaylistTracksMUI;

