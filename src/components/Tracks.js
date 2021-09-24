import React from 'react';
import { useParams } from 'react-router';

function Tracks(params) {

    const param = useParams();
    console.log("Track name", param.trackid);
    return (
        <div>
            <p>Track {param.trackid}</p>
            <p>Album- Link to Album</p>
            <p>Album Img</p>
            <p>Release Date</p>
            <p>Track Added to PL date</p>
        </div>
    )
}

export default Tracks;
