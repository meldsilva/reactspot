import axios from "axios";
import { useEffect, useState } from "react/cjs/react.development";
import { createBearerToken } from "../utils/helpers";

const Playlists = () => {

    // console.log("Playlists props token is", props.token);
    const [playlists, setPlaylists] = useState();
    const token = localStorage.getItem('token');

    useEffect( ( ) => {
        axios.get(
            'https://api.spotify.com/v1/me/playlists',
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            }
        ).then( (resp) => {
            setPlaylists(resp.data);
            console.log(resp.data);
        }).catch( (err) => {
            console.log("PLAYLISTS API ERROR",JSON.stringify(err));
            return <p>{JSON.stringify(err)}</p>
        });

    });
    return(
        <div>
            
            <p>{JSON.stringify(playlists.href)}</p>
        </div> 
    );
      
}
export default Playlists;
