import feathers from 'feathers/client';
import rest from 'feathers-rest/client';

import axios from 'axios';

import {API} from '@configs/api';

const api = feathers()
  .configure(rest(API).axios(axios))

// import axios from 'axios';

// import {API} from '@configs/api';

// const defaultConfig = {
//   baseURL: API,
// };

// const api = axios.create(defaultConfig);

// const setHeader = token => {
//   api.defaults.headers.common.Authorization = `Bearer ${token}`;
// };

// const removeHeader = () => {
//   api.defaults.headers.common = {};
// };

export {api};
