import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://api.collinsdictionary.com/api/v1'
  });