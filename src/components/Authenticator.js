import React, {useEffect, useState} from "react";
import Button from 'react-bootstrap/Button';

const Authenticator = () => {
    // Constants
    const client_id = process.env.REACT_APP_CLIENT_ID;
    const callback_uri = process.env.REACT_APP_CALLBACK_URI;
    const auth_endpoint = process.env.REACT_APP_AUTH_ENDPOINT;
    //add scopes here

    // States
    const [auth_code, setAuthCode] = useState(null);
    const [token, setToken] = useState(null);
    
    // Construct auto call uri
    const auth_call = `${auth_endpoint}?client_id=${client_id}&redirect_uri=${callback_uri}&scope=user-read-private user-read-email playlist-read-private&response_type=code&show_dialog=true`;

    function getauthcode(e) {
        e.preventDefault()
        // Call auth API
        window.location = auth_call; // redirected page's window will contain authcode.
    }

    return(
        <div>
            <Button style={{backgroundColor: "#1DB954"}}
            onClick={getauthcode}>Sign in</Button>
        </div>
    );
}
export default Authenticator;