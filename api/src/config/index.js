/* eslint-disable global-require */
import merge from 'lodash.merge';
import dotenv from 'dotenv';
import config from './env/default';

if (process.env.NODE_ENV !== 'production') {
  dotenv.config();
  let localConfig = {};

  try {
    // eslint-disable-next-line import/no-dynamic-require
    localConfig = require(`./env/${config.env}`);
    localConfig = localConfig || {};
  } catch (err) {
    localConfig = {};
  }

  merge(config, localConfig);
}

export default config;
