import Authenticator from "./Authenticator";
import home from '../assets/images/home-red.jpg';
import SpotifyPage from "./SpotifyPage";


const Home = (props) => {
    return(
        <>
        <header style={{backgroundColor: "black", height: "30%"}}>
            <h2>Spotify Dashboard</h2>
            <Authenticator />


        </header>
        <body>
        <img src={home} style={{width: "100%", height: "70%"}}
            alt="home"/>
        </body>
        </>
    );
}
export default Home;
