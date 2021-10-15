import React, { useState, useEffect } from "react";
import NewReleasesTable from "./NewReleasesTable";
import axios from "axios";

const NewReleases = () => {

    const [loading, setLoading] = useState(false);
    const [newReleases, setNewReleases] = useState({});
    const token = localStorage.getItem('token');
    const uri = 'https://api.spotify.com/v1/browse/new-releases?country=us&limit=20';    

    useEffect( () => {
        setLoading(true);

        async function fetchData(){
        try {
            const response = await axios.get(uri, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
           
            setNewReleases( response.data );
            console.log("New Releases Response", response.data);
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

    if (Object.keys(newReleases).length === 0) {
        return <p>No Data!</p>
    }    

    return(
        <React.Fragment>
            <h4 className="text-muted">New Releases</h4>
            {/* <pre>{JSON.stringify(newReleases.albums)}</pre> */}
            <NewReleasesTable new_releases={newReleases.albums}/>
        </React.Fragment>
    );

}

export default NewReleases;

