import React, { useState, useEffect } from "react";
import NewReleasesTable from "./NewReleasesTable";

const NewReleases = () => {

    return(
        <React.Fragment>
            <h4 className="text-muted">New Releases</h4>
            <NewReleasesTable />
        </React.Fragment>
    );

}

export default NewReleases;

