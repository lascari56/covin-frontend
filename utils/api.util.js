// import feathers from 'feathers/client';
import feathers from '@feathersjs/client';
import rest from 'feathers-rest/client';
import auth from '@feathersjs/authentication-client';
import axios from 'axios';

import {API} from '@configs/api';

const api = feathers();

api.configure(feathers.authentication());
api.configure(rest(API).axios(axios));
api.configure(auth())

export {api};
