import axios from "axios";
import { useEffect, useState } from "react";

const Playlists = () => {
    const [playlists, setPlaylists] = useState([]);
    const token = localStorage.getItem('token');

    useEffect( async () => {
        try {
            const resp = await axios.get('https://api.spotify.com/v1/me/playlists?limit=10', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            setPlaylists(resp.data.items);
            console.log(resp.data.items);
        }
        catch(error) {
            console.log(error);
        }
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

    return(
        <div>
            <h3>Here are my playlists...</h3>
            <p>{playlists.href}</p>
        </div>
    );
      
}
export default Playlists;
