import { getAuthCode } from "../utils/helpers"
import { useEffect, useState } from "react";
import axios from "axios";
import qs from 'qs';
import { useNavigate } from "react-router-dom"

const RedirectPage = () => {

    const client_id = process.env.REACT_APP_CLIENT_ID;
    const callback_uri = process.env.REACT_APP_CALLBACK_URI;
    const client_secret = process.env.REACT_APP_CLIENT_SECRET;
    const api_endpoint = process.env.REACT_APP_TOKEN_ENDPOINT;

    const[auth_code, setAuthCode] = useState(null);
    
    const encodeAuthorizationToBase64 = () => {
        const stringToEncode = `${client_id}:${client_secret}`;
        return Buffer.from(stringToEncode).toString("base64");
    };    
    const navigate = useNavigate();

    //--------------------------
    // API -- Auth Code call
    //--------------------------
    useEffect( () => {

        setAuthCode(getAuthCode(window.location.href));

        async function fetchData() {
            const request_body = qs.stringify(
            {
                'grant_type': 'authorization_code',
                'code': auth_code,
                'redirect_uri': callback_uri,
            });
            const request_header = {
                headers: {
                    Accept: "application/json",
                    Authorization: `Basic ${encodeAuthorizationToBase64()}`,
                },
            };

            if (auth_code) {
            await axios.post(
                api_endpoint,
                request_body,
                request_header).then( (resp) => {
                        localStorage.setItem('token', resp.data.access_token);
                        //Redirect to Home page here along with the token as a prop
                        navigate("/spotifypage");
                    })
                    .catch( (err) => {
                        console.log("TOKEN-API POST ERROR: ",err);
                    });
                }
    }
    fetchData();
    },[auth_code]);
  
    //Nothing to render
    return(
       null
    );
}
export default RedirectPage;
