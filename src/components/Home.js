import React from "react";
import Authenticator from "./Authenticator";
import home from '../assets/images/home-red.jpg';

const Home = (props) => {
    return(
        <div>
        <header style={{backgroundColor: "black", height: "30%"}}>
            <h2>Hi Spotifier!</h2>
            <Authenticator />
        </header>
        <body>
        <img src={home} style={{width: "100%", height: "70%"}}
            alt="home"/>
        </body>
        </div>
    );
}
export default Home;
