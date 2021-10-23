import React from "react";
import { Outlet} from "react-router-dom";
import { Container } from "react-bootstrap";
import { StyledLink, StyledNav } from "./SpotifyPageStyles";

const SpotifyPage = () => {
    return(
        <React.Fragment>
            <div style={{backgroundColor: "black", height: "7%", width: '100%', position: 'fixed'}}>
                <StyledNav>
                    <StyledLink activeclassname="active" to="playlists">Playlists</StyledLink>
                    <StyledLink activeclassname="active" to="podcasts">Podcasts</StyledLink>
                    <StyledLink activeclassname="active" to="albums">Albums</StyledLink> 
                    <StyledLink activeclassname="active" to="newreleases">New Releases</StyledLink> 
                </StyledNav>
            </div>
            {/* <div style={{
                    // position: 'absolute', 
                    position: 'absolute',
                    width: '90%',
                    top: '7%', 
                    padding: '5px'
                    }}
            > */}
                <Outlet />
            {/* </div> */}

        </React.Fragment>
    );
}
export default SpotifyPage;