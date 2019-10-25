import axios from 'axios';

const instance = axios.create({
    baseURL : 'https://grocery-online-d8a03.firebaseio.com/'
})

export default instance;
