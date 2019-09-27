const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mid = require('./middleware');
const ordersRoute = require('./routes/orders');
const partsRoute = require('./routes/parts');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
    const q = 
    `SELECT first_name, 
    last_name,
    id,
    manufacturer,
    model,
    phone
    FROM orders`;

    mid.query(q, res);
});

app.use('/orders', ordersRoute);
app.use('/parts', partsRoute);

process.on('uncaughtException', (err) => {
    console.error('Uncaught error', err);
    process.exit(1);
});

app.listen(process.env.PORT, process.env.IP);