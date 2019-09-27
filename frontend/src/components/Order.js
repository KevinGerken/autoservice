import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import {Button, Icon} from 'antd';
import 'antd/dist/antd.css';
import './Order.css';
import { Link, Redirect } from 'react-router-dom';

export default function Order(props) {
    const [order, setOrder] = useState({data: [], loaded: false});
    const [parts, setParts] = useState({data: [], loaded: false});
    const [notFound, setNotFound] = useState(false);
    const [deleted, setDeleted] = useState(false);
    const id = props.match.params.id;
    const od = order.data;
    
    useEffect(() => {
        async function getParts() {
            const parts = await Axios.get(`http://localhost:3001/parts/${id}`);
            setParts({data: parts.data, loaded: true});
        }
        async function getOrder() {
            const order = await Axios.get(`http://localhost:3001/orders/${id}`);
            if(!order.data.length) {
                setNotFound(true);
            } else {
                setOrder({data: order.data[0], loaded: true});
            }
        }
        getOrder();
        getParts();  
    }, [id]);

    let partsCost = 0;
    let tax = 0;
    let totalCost = 0;

    function addCost() {
        partsCost = parts.data.map((part) => {
            return(
                <p key={part.id}>{part.part_name} ${part.price}</p>
            )
        });
        let partsTotal = 0;
        for(let part of parts.data) {
            partsTotal  +=  Number(part.price);
        }
        tax = (partsTotal * .075).toFixed(2);
        totalCost = (Number(partsTotal) + Number(tax) + Number(order.data.labor_cost)).toFixed(2);
    }

    parts.loaded && addCost();

    async function deleteOrder() {
        const deleted = await Axios.all([
            Axios.delete(`http://localhost:3001/orders/${order.data.id}`),
            Axios.delete(`http://localhost:3001/parts/${order.data.id}`)
        ]);
        setDeleted(deleted[0].data);
    }

    return(
        <div className="order">
            <Link to="/">
                <Button size="large" 
                style={{margin: '10px auto', display: 'block'}} 
                type="primary">
                    Home
                </Button>
            </Link>

            {notFound && <h1>Order not found</h1>}
            
            {deleted && <Redirect to='/' />}
            
            {(!order.loaded || !parts.loaded) &&
            <Icon type="smile" 
            theme="twoTone" 
            spin="true" 
            twoToneColor="#00ff00" 
            style={{position: 'fixed', fontSize: '5rem', left: '45%', top: '45%'}} ></Icon>
            }
            
            {(order.loaded && parts.loaded) &&
            <div>
            <div className="order-container">
                <h1>Order #: {od.id}</h1>
                <p className="date">{order.data.order_date.slice(0, 10)}</p>
            <div className="customer">
                <h2>Customer</h2>
                <p>{od.first_name} {order.data.last_name}</p>
                <p>{order.data.address}</p>
                <p>{order.data.city}, {order.data.state} {order.data.zip}</p>
                <p>{order.data.phone}</p>
                <p>{order.data.email}</p>
            </div>
            <div className="vehicle">
                <h2>Vehicle</h2>
                <p>{order.data.manufacturer} {order.data.model}</p>
                <p>Oil type: {order.data.oil_type}</p>
                <p>Name plate pressure: {order.data.name_plate_pressure}</p>
                <p>Belt size: {order.data.belt_size}</p>
                <p>Belt quantity: {order.data.belt_qty}</p>
                <p>HP: {order.data.motor_hp} Volts: {order.data.motor_volts} Amps: {order.data.motor_amps}</p>
                <p>Phase: {order.data.motor_phase} SF: {order.data.motor_sf} RPM: {order.data.motor_rpm}</p>
            </div>
            <div className="detail">
                <h2>Details</h2>
                <p>{order.data.detail}</p>
            </div>
            <div className="cost">
                <h2>Cost</h2>
                <h3>Parts</h3>
                {partsCost}
                <p>Labor: ${order.data.labor_cost}</p>
                <p>Tax: ${tax}</p>
                <p>Total: ${totalCost}</p>
            </div>
            </div>
            <Button size="large" 
            type="danger" 
            style={{margin: '10px auto', display:'block'}} 
            onClick={deleteOrder}>
                Delete Order
            </Button>
            </div>
            }
        </div>  
    );
}