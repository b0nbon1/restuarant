const config = require('../config');

module.exports = {
  url: config.database.url,
  dialect: 'postgress',
};
