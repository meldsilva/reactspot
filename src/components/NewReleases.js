import React, { useState, useEffect } from "react";
import NewReleasesTable from "./NewReleasesTable";
import NewReleasesGrid from "./NewReleasesGrid";
import axios from "axios";
import LoadingPage from "./LoadingPage";
import { IconButton } from "@material-ui/core";
import ListIcon from '@mui/icons-material/List';
import GridViewIcon from '@mui/icons-material/GridView';
import Tooltip from '@mui/material/Tooltip';

const NewReleases = () => {

    const [loading, setLoading] = useState(false);
    const [viewType, setViewType] = useState('list');
    const [newReleases, setNewReleases] = useState({});
    const token = localStorage.getItem('token');
    const uri = 'https://api.spotify.com/v1/browse/new-releases?country=us&limit=50';


    const handleViewTypeList = (e) => {
        setViewType('list');
    }

    const handleViewTypeGrid = (e) => {
        setViewType('grid');
    }

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

    if (loading) {
        return <LoadingPage />;
    }

    if (Object.keys(newReleases).length === 0) {
        return <p>No Data!</p>
    }

    return(
        <React.Fragment>

            <Tooltip title="List View">
                <IconButton onClick={handleViewTypeList}
                tooltip="List View" aria-label="list" color="primary">
                <ListIcon />
                </IconButton>
            </Tooltip>
            <Tooltip title="Grid View">
                <IconButton onClick={handleViewTypeGrid}
                aria-label="grid" color="primary">
                <GridViewIcon />
                </IconButton>
            </Tooltip>
            {
                viewType === 'list' ?
                <NewReleasesTable new_releases={newReleases.albums}/> : 
                <NewReleasesGrid new_releases={newReleases.albums}/>
             }
        </React.Fragment>
    );

}

export default NewReleases;

