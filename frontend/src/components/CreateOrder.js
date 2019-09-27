import React, { useState } from 'react';
import Axios from 'axios';
import {Button, Form, Input} from 'antd';
import 'antd/dist/antd.css';
import { Link, Redirect } from 'react-router-dom';
import useInputState from '../hooks/useInputState';
import './CreateOrder.css';

export default function CreateOrder() { 
    const { TextArea } = Input;
    const fieldNames = {
        'Customer': {
            'First Name': useInputState('', 'first_name'),
            'Last Name': useInputState('', 'last_name'),
            'Street': useInputState('', 'street'),
            'City': useInputState('', 'city'),
            'State': useInputState('', 'st', /^[a-zA-Z]{2}$/),
            'Zip': useInputState('', 'zip', /^\d{5}$/),
            'Phone': useInputState('', 'phone', /^\(?([0-9]{3})\)?[-.●]?([0-9]{3})[-.●]?([0-9]{4})$/),
            'Email': useInputState('', 'email', /^\S+@\S+\.\S+$/)
        },
        'Car': {
            'Manufacturer':  useInputState('', 'manufacturer'),
            'Model': useInputState('', 'model'),
            'Oil Type': useInputState('', 'oil_type'),
            'Name Plate Pressure': useInputState('', 'name_plate_pressure'),
            'Belt Size': useInputState('', 'belt_size', /^\d{1,5}$/),
            'Belt Qyt': useInputState('', 'belt_qty', /^\d{1,5}$/),
            'HP': useInputState('', 'motor_hp', /^\d{1,5}$/),
            'Volts': useInputState('', 'motor_volts', /^\d{1,5}$/),
            'Amps': useInputState('', 'motor_amps', /^\d{1,5}$/),
            'Phase': useInputState('', 'motor_phase'),
            'SF': useInputState('', 'motor_sf'),
            'RPM': useInputState('', 'motor_rpm', /^\d{1,5}$/),
            'Frame': useInputState('', 'motor_frame')
        },
        'Order': {
            'Details': useInputState('', 'detail'),
            'Price': useInputState('', 'price', /(^[0-9]{1,5})+(\.[0-9]{1,2})?$/),
            'Part': useInputState('', 'part_name'),
            'Labor': useInputState('', 'labor_cost', /(^[0-9]{1,5})+(\.[0-9]{1,2})?$/)
        },
    }

    const fields = [];
    const [errors, setErrors] = useState([]);
    const [inserted, setInserted] = useState({id: null, inserted: false});
    const [parts, setParts] = useState([]);

    function addPart(e) {
        e.preventDefault();
        const part = [
            fieldNames.Order.Price.value,
            fieldNames.Order.Part.value
        ];
        setParts(old=>[...old, part]);
        fieldNames.Order.Price.reset();
        fieldNames.Order.Part.reset();
    }

    const checkForm = (e) => {
        e.preventDefault();
        const errorsArr = [];
        for(const key of Object.keys(fieldNames)) {
            if(fieldNames[key].valid === false) {
                errorsArr.push(<h2 key={key}>{`Please enter a valid ${key}`}</h2>);
            }
        }
        setErrors(errorsArr);
        if(!errorsArr.length) submit();
    }

    const resetFields = () => {
        setParts([]);
        for(const key of Object.keys(fieldNames)) {
            for(const field of Object.keys(fieldNames[key])) {
                fieldNames[key][field].reset();
            }
        } 
    }

    const submit = () => {
        let dbObj = {};
        dbObj.active = 1;
        dbObj.detail = fieldNames.Order.Details.value;
        dbObj.order_date = new Date().toISOString().slice(0, 19).replace('T', ' ');
        dbObj.labor_cost = fieldNames.Order.Labor.value;
        function submitFieldSet(fieldSet) {
            for (const key of Object.keys(fieldSet)) {
                dbObj[fieldSet[key].dbName] = fieldSet[key].value;
            }
        }
        submitFieldSet(fieldNames.Customer);
        submitFieldSet(fieldNames.Car);

        async function send() {
            const post = await Axios.post('http://localhost:3001/orders/', dbObj)
            .then((res) => {
                sendPart(res.data.insertId)
            });
        }

        async function sendPart(id) {
            const fo = fieldNames.Order;
            if(fo.Part.value) {
                parts.push([fo.Price.value, fo.Part.value]);
            }
            for(let part of parts) {
                part.push(id);
            }
            const partPost = await Axios.post(`http://localhost:3001/parts/${id}`, parts);
            setInserted({id: id, inserted: true});
        }

        send();
    }

    function createFieldset(fieldset) {
        if(fieldset === 'Order') {
            return(
                <fieldset key={fieldset} style={{margin:'10px'}} className={fieldset}>
                    <legend>{fieldset}</legend>
                    {createFields(fieldNames[fieldset])}
                    {partsMap}
                    <Button size="large" 
                    onClick={addPart} 
                    style={{margin: '10px auto', display: 'block'}}
                    type="default">
                        Add part
                    </Button>
                </fieldset>
            );
        } else {
            return(
                <fieldset key={fieldset} style={{margin:'10px'}} className={fieldset}>
                    <legend>{fieldset}</legend>
                    {createFields(fieldNames[fieldset])}
                </fieldset>
            );
            }
    }

    function createFields(fields) {
        let returnFields = [];
        for (const key of Object.keys(fields)) {
            const k = fields[key];
            if(key === 'Details') {
                returnFields.push(
                    <div key={key}>
                        <label for="Details">Details</label>
                        <TextArea
                        name="Details"
                        rows="5"
                        cols="33"
                        placeholder={key} 
                        value={k.value} 
                        onChange={k.handleChange} 
                        id={key.replace(/\s/g, '')}
                        className={k.valid ? `valid` : `invalid`}/>
                    </div>
                )
            } else {
                returnFields.push(
                    <div key={key}>
                        <label for={key}>{key}</label>
                        <Input type="text" 
                        name={key}
                        placeholder={key} 
                        value={k.value} 
                        onChange={k.handleChange} 
                        id={key.replace(/\s/g, '')}
                        className={k.valid ? `valid` : `invalid`}/>
                    </div>
                )
            }
        }
        return returnFields;
    }

    const partsMap = [];

    parts.map(part => {
        partsMap.push(
            <div key={`${part[0]}, ${part[1]}`}>
                <p>${part[0]}  {part[1]}</p>
            </div>
        )
    });
    
    for(let key of Object.keys(fieldNames)) {
        fields.push(createFieldset(key));
    }
    
    return (
        <div>
            {inserted.inserted && <Redirect to={`/orders/${inserted.id}`} />}
            <Form>
                <Link to="/">
                    <Button size="large" 
                    style={{margin: '15px auto', display: 'block'}} 
                    type="primary">
                        Home
                    </Button>
                </Link>
                <div className="order-container">
                    {fields}
                </div>
                <Button htmlType="submit" 
                size="large" 
                style={{margin: '15px auto', display: 'block', color: 'white', background: 'rgb(36, 157, 61)', border: 'none'}} 
                type="primary'" 
                onClick={checkForm}>
                    Submit
                </Button>
                <Button htmlType="reset" 
                size="large" 
                style={{margin: '15px auto', display: 'block'}} 
                type="danger" 
                onClick={resetFields}>
                    Reset
                </Button>
                {errors}
            </Form>
        </div>
    )
}