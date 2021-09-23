import axios from "axios";
import { useEffect, useState } from "react";

const Playlists = () => {
    const [playlists, setPlaylists] = useState({});
    const [loading, setLoading] = useState(false);

    const token = localStorage.getItem('token');

    useEffect( () => {
        setLoading(true);

        async function fetchData(){
        try {
            const response = await axios.get('https://api.spotify.com/v1/me/playlists?limit=10', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            setPlaylists(response.data);
            console.log(response.data);
        }
        catch(error) {
            console.log(error);
        }
        finally {
            setLoading(false);
        }
    }
    fetchData()
        // await axios.get(
        //     'https://api.spotify.com/v1/me/playlists',
        //     {
        //         headers: {
        //             Authorization: `Bearer ${token}`,
        //         }
        //     }
        // ).then( (resp) => {
        //     setPlaylists(resp.data);
        //     console.log(resp.data);
        // }).catch( (err) => {
        //     console.log("PLAYLISTS API ERROR",JSON.stringify(err));
        //     return;
        // });
    },[]);

    if (loading) {
        return <p>Data is loading...</p>;
    }
    // if (Object.keys(playlists).length === 0) {
    //     return <p>No Data!</p>
    // }

    return(
        <div>
            <h1>Here are my playlists...</h1>
            <h2>href: {playlists.href}</h2>
            {/* <h3>Offset: {playlists.offset}</h3>
            <h4>Limit: {playlists.limit}</h4> */}
            {/* <p>Playlist: {playlists.items[9].name}</p> */}
            <ul>
                {
                    playlists.items.map((p) => {
                        <li>{p.name}</li>
                    })
                }
            </ul>
            
        </div>
    );
      
}
export default Playlists;
