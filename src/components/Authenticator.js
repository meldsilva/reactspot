import React, {useEffect, useState} from "react";
import RedirectPage from "./RedirectPage";

const Authenticator = (props) => {

    const client_id = process.env.REACT_APP_CLIENT_ID;
    const callback_uri = process.env.REACT_APP_CALLBACK_URI;
    const authEndpoint = process.env.REACT_APP_AUTH_ENDPOINT;
    //add scopes here
    //
    const [user, setUsername] = useState("");
    const [auth_code, setAuthCode] = useState(null);
    const [token, setToken] = useState(null);
    //

    const auth_call = `${authEndpoint}?client_id=${client_id}&redirect_uri=${callback_uri}&scope=user-read-private user-read-email&response_type=code&show_dialog=true`;

    function getauthcode(e) {
        e.preventDefault()

        window.location = auth_call;
        //
        //
        // fetch(auth_call)
        //         .then(response => response.json())
        //         .then(setAuthCode)
        //         .catch(console.error.error);
        // console.log(window.location.href);
        setAuthCode(window.location.href);
        props.getAuthcode(JSON.stringify(window.location.href));
        // return <h3>JSON.stringify(window.location.href<h3>;
    }

    // useEffect(() => {
    //     fetch(`https://restcountries.eu/rest/v2/name/${name}?fullText=true`)
    //         .then(response => response.json())
    //         .then(setData)
    //         .catch(console.error.error);
    // },[name]);

    return(
        <div>
            <button
                type="button"
                onClick={getauthcode}>
                Authorize
            </button>
            {/*<a*/}
            {/*    className="btn btn--loginApp-link"*/}
            {/*    href={`${authEndpoint}client_id=${client_id}&redirect_uri=${callback_uri}&scope=user-read-private user-read-email&response_type=token&show_dialog=true`}>*/}
            {/*    Login to Spotify*/}
            {/*</a>*/}

        </div>
    );
}
export default Authenticator;