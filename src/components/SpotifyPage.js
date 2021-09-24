import Authenticator from "./Authenticator";
import {Link, Outlet} from "react-router-dom";

const SpotifyPage = () => {

    return(
        <div style={{backgroundColor: "pink"}}>
        <h2>Spotify Page</h2>
        <nav>
            <Link to="playlists">Playlists</Link>
            <Link to="podcasts">Podcasts</Link>
            <Link to="artists">Artists</Link>
            <Link to="albums">Albums</Link>
        </nav>
        <Outlet />
        </div>
    );
}

export default SpotifyPage;