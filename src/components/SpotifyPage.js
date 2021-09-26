import {Outlet} from "react-router-dom";
import { StyledLink, StyledNav } from "./SpotifyPageStyles";

const SpotifyPage = () => {
    return(
        <>
        <div style={{backgroundColor: "black", height: "30%"}}>
        <h2>Spotify Page</h2>
        <StyledNav>
            <StyledLink to="playlists">Playlists</StyledLink>
            <StyledLink to="podcasts">Podcasts</StyledLink>
            <StyledLink to="artists">Artists</StyledLink>
            <StyledLink to="albums">Albums</StyledLink> 
        </StyledNav>
        </div>
        <div>
            <Outlet />
        </div>
        </>
    );
}
export default SpotifyPage;