import {getAuthCode} from "../utils/helpers"
import {useEffect, useState} from "react";
import axios from "axios";
import qs from 'qs';
import { useNavigate } from "react-router-dom"
import Home from "./Home";

const RedirectPage = () => {

    const client_id = process.env.REACT_APP_CLIENT_ID;
    const callback_uri = process.env.REACT_APP_CALLBACK_URI;
    const client_secret = process.env.REACT_APP_CLIENT_SECRET;
    const api_endpoint = process.env.REACT_APP_TOKEN_ENDPOINT;

    const[auth_code, setAuthCode] = useState(null);
    const[token, setToken] = useState(null);
    
    const encodeAuthorizationToBase64 = () => {
        const stringToEncode = `${client_id}:${client_secret}`;
        return Buffer.from(stringToEncode).toString("base64");
    };    

    const navigate = useNavigate();
    //--------------------------
    // API -- Auth Code call
    //--------------------------
    useEffect(() => {

        console.log("auth_code state = ", auth_code);
        console.log("token state = ", token);

        if(!getAuthCode(window.location.href)) {
            return;
        }
        setAuthCode(getAuthCode(window.location.href));

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

        axios.post(
            api_endpoint,
            request_body,
            request_header).then( (resp) => {
                    console.log("Token Response: ", resp.data.access_token);
                    setToken(resp.data.access_token);
                    localStorage.setItem('token', resp.data.access_token);
                    //Redirect here
                    //navigate("/",);
                    
                    //navigate(<Home token={token} /> ); // ??? I'm not sure if this is the right way
                })
                .catch( (err) => {
                    console.log("TOKEN API POST ERROR: ",err);
                });
    });
  
    return(
        <>
            <h1>Redirect Page</h1>
            <p>Auth Code: {auth_code}</p>
            <p>Token: {token}</p>
            <Home token={token} />
        </>
    );
}
export default RedirectPage;
