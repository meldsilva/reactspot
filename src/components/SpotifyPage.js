import React from "react";
import { Outlet} from "react-router-dom";
import { Container } from "react-bootstrap";
import { StyledLink, StyledNav } from "./SpotifyPageStyles";

const SpotifyPage = () => {
    return(
        <React.Fragment>
        <div style={{backgroundColor: "black", height: "30%"}}>
        <h2>Spotify Page</h2>
        <StyledNav>
            <StyledLink activeClassName="active" to="playlists">Playlists</StyledLink>
            <StyledLink activeClassName="active" to="podcasts">Podcasts</StyledLink>
            <StyledLink activeClassName="active" to="albums">Albums</StyledLink> 
            <StyledLink activeClassName="active" to="newreleases">New Releases</StyledLink> 
        </StyledNav>
        </div>
        <Container fluid="xl">
            <Outlet />
        </Container>
        </React.Fragment>
    );
}
export default SpotifyPage;