import axios from 'axios';


// const sendHttpRequest = (method, url, data) => {
//     const promise = new Promise((resolve, reject) => {
//         const xhr = new XMLHttpRequest();
//         xhr.open(method, url);

//         xhr.responseType = 'json';

//         if (data) {
//             xhr.setRequestHeader('Content-Type', 'application/json');
//         }
//         console.log('data', data)

//         xhr.onload = () => {
//             if (xhr.status >= 400) {
//                 reject(xhr.response);
//             } else {
//                 resolve(xhr.response);
//             }
//         };

//         xhr.onerror = () => {
//             reject('Something went wrong!');
//         };

//         xhr.send(JSON.stringify(data));
//     });
//     return promise;
// };



// const getData = async (data) => {
//     let responseData = await sendHttpRequest('GET', 'http://localhost:3600/user', data);
//     return responseData;
// };

// module.exports = { sendHttpRequest, getData }


// import axios from "axios";

const getData = async (data) => {
    try {
        const response = await axios.post('http://localhost:3600/user', data);
        const responseData = response.data;
        return responseData;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export default getData;