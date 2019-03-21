require('dot-env');

const env = process.env.NODE_ENV; // 'dev' or 'test'

const dev = {
  app: {
    port: 3000,
  },
  db: {
    url: 'mongodb://localhost/testdb',
    host: '192.168.1.184',
    databasename: 'siruthul_infosiruthuli',
    username: 'root',
    password: '',
    port: '3306',
  },
};

const prod = {
  app: {
    port: 3000,
  },
  db: {
    url: 'mongodb://localhost/test',
    host: '192.168.1.184',
    databasename: 'siruthul_infosiruthuli',
    username: 'root',
    password: '',
    port: '3306',
  },
};

const config = {
  dev,
  prod,
};

module.exports = config[env];
