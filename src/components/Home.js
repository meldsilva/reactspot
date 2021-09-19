import {Link} from "react-router-dom";

const Home = (props) => {
    return(
        <>
        <h2>Spotify Data Home</h2>
        <nav>
            <Link to="playlists">Playlists</Link>
            <Link to="podcasts">Podcasts</Link>
            <Link to="artists">Artists</Link>
            <Link to="albums">Albums</Link>

        </nav>
        </>

    );
}
export default Home;
