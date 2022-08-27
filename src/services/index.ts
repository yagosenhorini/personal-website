/* eslint-disable promise/no-promise-in-callback */
import axios from 'axios';

import { BASE_URL } from '@Constants/index';

export const apiUrl = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

apiUrl.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error)
);

apiUrl.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
);
