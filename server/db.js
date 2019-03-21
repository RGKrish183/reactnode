const mysql = require('mysql');
const config = require('../config');


const pool = mysql.createPool({
  host: config.db.host,
  user: config.db.username,
  password: config.db.password,
  database: config.db.databasename,
  port: config.db.port,
});


// eslint-disable-next-line no-undef
pool.on('connection', (conn) => {
  console.log('Mssql db connection established');

  conn.on('error', (err) => {
    console.error(new Date(), 'MySQL error', err.code);
  });
  conn.on('close', (err) => {
    console.error(new Date(), 'MySQL close', err);
  });
  conn.on('release', (connect) => {
    console.log('Connection %d released', connect.threadId);
  });
});

module.exports = pool;
