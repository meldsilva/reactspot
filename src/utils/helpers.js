// import axios from 'axios';

export const getAuthCode = (url) => {

    let searchstr = "code=";
    let authCode = null;
    let idx = url.search(searchstr);
    if (idx > -1) {
        authCode = url.substring(idx + searchstr.length);
    }
    return authCode;
};

export const createBearerToken = (client_id, client_secret) => {
    const stringToEncode = `${client_id}:${client_secret}`;
    return Buffer.from(stringToEncode).toString("base64");
}

export function capitalize(string) {
    //es5
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    // es6 using destructuring 
    // const ret = ([first,...rest]) => first.toUpperCase() + rest.join('').toLowerCase();
    // return ret;
    
}