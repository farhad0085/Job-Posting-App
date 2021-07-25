import axios from 'axios';
import { REACT_APP_API_BASE } from './config';

const instance = axios.create({
    baseURL: REACT_APP_API_BASE
})

export default instance

