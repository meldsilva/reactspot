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
            const response = await axios.get('https://api.spotify.com/v1/me/playlists/', {
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
    },[token]);

    if (loading) {
        return <h3>Data is loading...</h3>;
    }
    if (Object.keys(playlists).length === 0) {
        return <p>No Data!</p>
    }

    return(
        <div>
            <h5>Here are my playlists...</h5>
   
         
            <table>
            {
                playlists.items.map((pl) => (
                    
                    <tr>
                                            <td>
                    <img 
                    src={pl.images[0].url} 
                    alt={pl.name}
                    width="50" height="50"/> 
                    </td>
                    <td />
                    <td>{pl.name}</td>
                    <td>{pl.owner.display_name}</td>

                    </tr>
                ))
            }
            </table>
     
            
        </div>
    );
      
}
export default Playlists;
