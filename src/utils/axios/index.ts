import axios from 'axios';


export const instance = axios.create({
    baseURL: 'http://localhost:5000/',
    timeout: 10000,
    headers: {'X-Custom-Header': 'foobar'}
  });


export const coinGeckoApi = axios.create({
    baseURL: 'https://api.coingecko.com/api/v3/',
    timeout: 10000,
    headers: {'X-Custom-Header': 'foobar'}
  });