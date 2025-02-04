import axios from 'axios';
import {BASE_URL} from '../constants/endpoints';

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 7000,
  headers: {'X-Custom-Header': 'foobar'}
});

export default api;
