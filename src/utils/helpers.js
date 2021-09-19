// import axios from 'axios';

export const getAuthCode = (url) => {

    let searchstr = "code=";
    let authCode = null;
    let idx = url.search(searchstr);
    if (idx > -1) {
        authCode = url.substring(idx + searchstr.length);
    }
    console.log("authCode is = ", authCode);
    return authCode;
};


// http://localhost:3000/callback/?code=AQBAPjnn0CWqKc3EdpcemwgNrZN0ab49MMQUGehjDWGqmtWWAIoUHEhMr__m_PqV4iaTkZ

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