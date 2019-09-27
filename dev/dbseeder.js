const express = require('express');
const app = express();
const faker = require('faker');
const mysql = require('mysql');
const cors = require('cors');
require('dotenv').config();
const connection = mysql.createConnection({
    host    : process.env.DATABASEURL,
    user    : process.env.DATABASEUSER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
});

app.use(cors());

function seedOrders(n) {
    for(let i = 0; i < n; i++) {
        const order = {
            email: faker.internet.email(),
            first_name: faker.name.firstName(),
            last_name: faker.name.lastName(),
            street: faker.address.streetAddress(),
            city: faker.address.city(),
            st: faker.address.stateAbbr(),
            zip: faker.address.zipCode("#####"),
            phone: faker.phone.phoneNumber("##########"),
            manufacturer: faker.vehicle.manufacturer(),
            model: faker.vehicle.model(),
            oil_type: '10W30',
            name_plate_pressure: 32,
            belt_size: 82,
            belt_qty: 2,
            motor_hp: 186,
            motor_volts: 5.8,
            motor_amps: 55,
            motor_phase: 3,
            motor_sf: '1.15',
            motor_rpm: 3000,
            motor_frame: 42,
            detail: faker.lorem.paragraph(),
            active: Math.round(Math.random()),
            order_date: faker.date.past(),
            labor_cost: (Math.random()*1000).toFixed(2),
        }
        connection.query('INSERT INTO orders SET ?', order, function(err, result) {
            if(err) throw err;
            console.log(result);
        });
    }
}

function seedParts(n) {
    const parts = [
        'spark plug', 
        'muffler', 
        'tailpipe', 
        'belt', 
        'alternator',
        'tire',
        'brake pad',
        'hose',
        'tailpipe',
        'oil filter'
    ];
    for(let i = 1; i <= n; i++) {
        const partObj = {
            part_name: parts[i-1],
            price: (Math.random()*100).toFixed(2),
            order_id: i
        }
        connection.query('INSERT INTO parts SET ?', partObj, function(err, result) {
            if(err) throw err;
            console.log(result);
        })
    }
}

function seedAll(n) {
    seedOrders(n);
    seedParts(n);
    seedParts(n);
} 

app.get('/', (req, res) => {
    const q = 'SELECT * FROM orders';
    connection.query(q, function(err, result) {
        if(err) throw err;
        res.send(result);
    });
});

app.get('/seed', (req, res) => {
    seedAll(10);
});

app.listen(process.env.PORT);