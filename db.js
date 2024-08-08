var pg = require('pg');
//var conString = "postgres://postgres:janak123@localhost:5432/TYL_Space";

const conString = {
    host: 'localhost', // server name or IP address;
    port: 5432,
    database: 'TYL_Space',
    user: 'postgres',
    password: 'janak123'
};


var db = new pg.Client(conString);
//db.connect();

db.connect() .then(() => { console.log('Connected to PostgreSQL database!'); }) .catch((err) => { console.error('Error connecting to the database:', err); });


module.exports = db;





