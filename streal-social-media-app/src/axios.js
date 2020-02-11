import axios from 'axios';

const instance = axios.create({
    baseURL : 'https://streal-social-media.firebaseio.com/'
})

export default axios;