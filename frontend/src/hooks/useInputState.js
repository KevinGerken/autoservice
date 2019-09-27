import { useState } from 'react';

export default (initialVal = '', dbName='', validation = /^\S/) => {
    const [value, setValue] = useState(initialVal);
    const [valid, setValid] = useState(false);
    const handleChange = e => {
        setValue(e.target.value);
        validation.test(e.target.value) ? setValid(true) : setValid(false);
    };
    const reset = () => {
        setValue('');
        setValid(false);
    };
    return {value, handleChange, reset, valid, dbName};
}