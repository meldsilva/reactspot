import React, {useState, useEffect} from 'react';
import axios from "axios";

const Artist = ({ isShowing, hide }) => {

    const token = localStorage.getItem('token');
    const uri = 'https://api.spotify.com/v1/artists/1sXbwvCQLGZnaH0Jp2HTVc';
    // const uri = `https://api.spotify.com/v1/artists/${props.artistid}`;

    const [show, setShow] = useState(true);
    const [loading, setLoading] = useState(false);
    const [artist, setArtist] = useState({});

    useEffect( () => {
        setLoading(true);

        async function fetchData(){
        try {
            const response = await axios.get(uri, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
           
            setArtist( response.data );
            console.log("Artists Response", response.data);
        }
        catch(error) {
            console.log(error);
        }
        finally {
            setLoading(false);
        }
    }
    fetchData()
    },[]);
   
    if (Object.keys(artist).length === 0) {
        return <p>No Data!</p>
    }
    // if (!artist) {
    //     return <p>No Data!</p>
    // }    
    return (
        <> 
        <React.Fragment>
            <div className="modal-overlay"/>
            <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
            <div className="modal">
                <div className="modal-header">
                <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={hide}>
                    <span aria-hidden="true">&times;</span>
                </button>
                </div>
                <p>
                Artist Modal Boxxx
                </p>
            </div>
            </div>
        </React.Fragment>, document.body
        ) : null;        
        </>
    );

    // return(
    //     <h2>{artistid}</h2>
    //     followers
    //     genres list
    //     image
    //     popularity
    //     type
    // );
}
export default Artist;