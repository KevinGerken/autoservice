const mysql = require('mysql');
require('dotenv').config();

const connection = mysql.createConnection({
    host    : process.env.DATABASEURL,
    user    : process.env.DATABASEUSER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
});

const middleware = {
    query(q, res) {
        try {
            connection.query(q, function(err, result) {
                res.send(result);
            });
        } catch(e) {
            res.send(e);
        }
    }  
}

module.exports = middleware;