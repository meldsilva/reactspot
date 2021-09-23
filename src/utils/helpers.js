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
//
// export const setAuthHeader = () => {
//     try {
//         const params = JSON.parse(localStorage.getItem('params'));
//         if (params) {
//             axios.defaults.headers.common[
//                 'Authorization'
//                 ] = `Bearer ${params.access_token}`;
//         }
//     } catch (error) {
//         console.log('Error setting auth', error);
//     }
// };