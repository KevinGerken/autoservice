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
    FROM parts`;
 
    mid.query(q, res);
});

router.get('/:id', (req, res) => {
    const q = 
    `SELECT * 
    FROM parts
    WHERE order_id=${req.params.id}`;
 
    mid.query(q, res);
});

router.post('/:id', (req, res) => {
    const parts = req.body;

    try{
        connection.query('INSERT INTO parts (price,part_name,order_id) VALUES ? ', [parts], function(err, result) {
            res.send(result);
        });   
    } catch(e) {
        res.send(e);
    }
});

router.delete('/:id', (req, res) => {
    const q = 
    `DELETE 
    FROM parts 
    WHERE order_id=${req.params.id}`

    try {
        mid.query(q, res);
    } catch(e) {
        res.send(e);
    }
});

router.post

module.exports = router;