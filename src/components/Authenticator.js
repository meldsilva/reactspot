import React, {useEffect, useState} from "react";

const Authenticator = (props) => {

    // Constants
    const client_id = process.env.REACT_APP_CLIENT_ID;
    const callback_uri = process.env.REACT_APP_CALLBACK_URI;
    const auth_endpoint = process.env.REACT_APP_AUTH_ENDPOINT;
    //add scopes here

    // States
    const [user, setUsername] = useState("");
    const [auth_code, setAuthCode] = useState(null);
    const [token, setToken] = useState(null);
    
    // Construct auto call uri
    const auth_call = `${auth_endpoint}?client_id=${client_id}&redirect_uri=${callback_uri}&scope=user-read-private user-read-email&response_type=code&show_dialog=true`;

    function getauthcode(e) {
        e.preventDefault()
        // Call auth API
        window.location = auth_call; // redirected page's window will contain authcode.
    }

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