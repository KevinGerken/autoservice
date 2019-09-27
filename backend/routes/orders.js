const express = require('express');
const router = express.Router({mergeParams: true});
const mid = require('../middleware');
const mysql = require('mysql');

const connection = mysql.createConnection({
    host    : process.env.DATABASEURL,
    user    : process.env.DATABASEUSER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
});

router.get('/', (req, res) => {
    const q = 
    `SELECT * 
    FROM orders
    ORDER BY last_name`;
 
    mid.query(q, res);
});

router.get('/:id', (req, res) => {
    const q = 
    `SELECT * 
    FROM orders 
    WHERE id = ${req.params.id}`;
 
    mid.query(q, res);
});

router.post('/', (req, res) => {
    const order = req.body;

    try{
        connection.query('INSERT INTO orders SET ?', order, function(err, result) {
            res.send(result);
        });
    } catch(e) {
        res.send(e);
    }
});

router.delete('/:id', (req, res) => {
    const q = 
    `DELETE 
    FROM orders 
    WHERE id=${req.params.id}`

    try {
        connection.query(q, function(err, result) {
            res.send(true);
        });
    } catch(e) {
        res.send(e);
    }
});

module.exports = router;