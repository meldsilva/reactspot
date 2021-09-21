import {getAuthCode} from "../utils/helpers"
import {useEffect, useState} from "react";
import axios from "axios";
import qs from 'qs';


const RedirectPage = () => {

    const client_id = process.env.REACT_APP_CLIENT_ID;
    const callback_uri = process.env.REACT_APP_CALLBACK_URI;
    const client_secret = process.env.REACT_APP_CLIENT_SECRET;

    const[auth_code, setAuthCode] = useState(null);
    const[token, setToken] = useState(null);
    
    const encodeAuthorizationToBase64 = () => {
        const stringToEncode = `${client_id}:${client_secret}`;
        return Buffer.from(stringToEncode).toString("base64");
    };    

    // API -- Auth Code
    useEffect(() => {
        if(!getAuthCode(window.location.href)) {
            return;
        }
        setAuthCode(getAuthCode(window.location.href));
        localStorage.setItem('auth_code', getAuthCode(window.location.href));
    },[]);

    // API -- Token 
    useEffect( () => {

        const authcode = localStorage.getItem('auth_code');

        if(!authcode) {
            return;
        }
                
        const request_body = qs.stringify(
        {
            'grant_type': 'authorization_code',
            'code': authcode,//getAuthCode(window.location.href),
            'redirect_uri': callback_uri,
        });
        const request_header = {
            headers: {
                Accept: "application/json",
                Authorization: `Basic ${encodeAuthorizationToBase64()}`,
            },
        };

        axios.post(
            "https://accounts.spotify.com/api/token",
            request_body,
            request_header).then( (resp) => {
                    console.log("Token Response=", resp.data.access_token);
                    setToken(resp.data.access_token);
                })
                .catch( (err) => {
                    console.log("TOKEN API POST ERROR: ",err);
                });        
    },[]);//blank dependancy array means that effect is only called one i.e. if the values in the array change. But there are no values in the array

    return(
        <>
            <h1>Redirect Page</h1>
            <p>Auth Code: {auth_code}</p>
            <p>Token: {token}</p>
        </>
    );
}
export default RedirectPage;
