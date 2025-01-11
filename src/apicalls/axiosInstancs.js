// import axios from 'axios';
// export const axiosInstance = axios.create({
//     header: {
//         authorization: `Bearer ${localStorage.getItem('token')}`
//     }
// })
import axios from 'axios';

export const axiosInstance = axios.create({
    headers: {
        authorization: `Bearer ${localStorage.getItem('token')}` // Use 'headers' and correct key
    }
});
