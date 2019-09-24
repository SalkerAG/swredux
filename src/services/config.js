import axios from 'axios';

const clientAxios = axios.create({
    baseURL: 'https://www.swapi.co/api/'
});

export default clientAxios;