import axios from 'axios';

const instance = axios.create({
    baseURL : "https://postingg-redux.firebaseio.com/"
})

export default instance;