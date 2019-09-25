import axios from 'axios';

const clientPix = axios.create({
    baseURL: 'https://pixabay.com/api'
});

export default clientPix;

