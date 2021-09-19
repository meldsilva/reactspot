import {getAuthCode} from "../utils/helpers"
import {useEffect, useState} from "react";

const RedirectPage = () => {

    const[authcode, setAuthCode] = useState(null);

    useEffect(() => {
        if(!getAuthCode(window.location.href)) {
            return;
        }
        setAuthCode(getAuthCode(window.location.href));
        localStorage.setItem('auth', getAuthCode(window.location.href));
        // localStorage.setItem('expiry_time', expiryTime);

        // get token here


    },[authcode]);


    return(
        <>
        <h1>Redirect Page</h1>
        <p>{getAuthCode(window.location.href)}</p>
        {/*<p>{process.env.REACT_APP_CLIENT_ID}</p>*/}

            </>
    );
}
export default RedirectPage;

// http://localhost:3000/callback/?code=AQBAPjnn0CWqKc3EdpcemwgNrZN0ab49MMQUGehjDWGqmtWWAIoUHEhMr__m_PqV4iaTkZZCJT2D97P-jzte8uVchZw-gGJ7adpO6Vg1ogEWktIidqcs4X0Lmdv6b0WLsPbA99u2Q6yq9eB0LTRDwctw6WhTzGeyZ764VKP3AnLvR_IqdZv5-cyhHhV5czbW7jitL4SrTky6AfGSWWz-MYdSuKvMCtk