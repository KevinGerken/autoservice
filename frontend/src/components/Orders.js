import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import {Table, Button, Icon} from 'antd';
import 'antd/dist/antd.css';
import './Orders.css';

export default function Orders(props) {
    const [orders, setOrders] = useState({data: [], loaded: false});

    useEffect(() => {
        async function getOrders() {
            const orders = await Axios.get(`http://localhost:3001/`);
            let dataSource = [];
            for(let order of orders.data) {
                dataSource.push({
                    name: `${order.first_name} ${order.last_name}`,
                    car: `${order.manufacturer} ${order.model}`,
                    orderId: order.id,
                    key: order.id,
                    phone: order.phone
                })
            }
            setOrders({data: dataSource, loaded: true});
        }
        getOrders();
    }, []);
 
    
    const columns = [
        {
            title: 'Order number',
            dataIndex: 'orderId',
            width: 90,
            render: text => <Link to={`/orders/${text}`}>{text}</Link>
        },
        {
            title: 'Name',
            width: 170,
            dataIndex: 'name'
        },
        {
            title: 'Car',
            dataIndex: 'car'
        },
        {
            title: 'Phone',
            width: 123,
            dataIndex: 'phone'
        }
    ]

    return (
        <div>
            {!orders.loaded &&
            <Icon type="car" 
            theme="twoTone" 
            spin="true" 
            twoToneColor="#00ff00" 
            style={{position: 'fixed', fontSize: '5rem', left: '45%', top: '45%'}} ></Icon>
            }
            {orders.loaded &&
            <div>
                <Link to='/createorder'>
                    <Button size="large" 
                    style={{margin: '10px auto', display: 'block'}} 
                    type="primary">
                        New Order
                    </Button>
                </Link>
                <div id="table-container">
                    <Table dataSource={orders.data} 
                    columns={columns} 
                    bordered={true} 
                    pagination={false}
                    scroll={{y: '80vh'}}
                    style={{maxWidth: '700px', height: '80vh', margin: 'auto'}}
                    />
                </div>
                
            </div>
            }
        </div>
    )
}