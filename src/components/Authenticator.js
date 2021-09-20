import React, {useEffect, useState} from "react";

const Authenticator = (props) => {

    // Constants
    const client_id = process.env.REACT_APP_CLIENT_ID;
    // const client_secret = process.env.REACT_APP_CLIENT_SECRET;
    const callback_uri = process.env.REACT_APP_CALLBACK_URI;
    const authEndpoint = process.env.REACT_APP_AUTH_ENDPOINT;
    //add scopes here

    // States
    const [user, setUsername] = useState("");
    const [auth_code, setAuthCode] = useState(null);
    const [token, setToken] = useState(null);
    //

    const auth_call = `${authEndpoint}?client_id=${client_id}&redirect_uri=${callback_uri}&scope=user-read-private user-read-email&response_type=code&show_dialog=true`;

    function getauthcode(e) {
        e.preventDefault()

        window.location = auth_call;

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
        </div>
    );
}
export default Authenticator;