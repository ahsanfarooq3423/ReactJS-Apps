import axios from 'axios';


const instance = axios.create({
    baseURL : 'https://spiky-productivity.firebaseio.com/'
})


export default instance;