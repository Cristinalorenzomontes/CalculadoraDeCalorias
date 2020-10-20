import React from 'react';
import Input from '../Input/Input';


const Form = ({inputFields, onInputChange, inputValues}) => {

  return (
    <form className='form'>
     
    {inputFields.map(({label, id, type, placeholder, options}) => 
    <>
            <label className='label'>{label}</label>
            <Input id={id} type={type} placeholder={placeholder} options={options} value={inputValues[id]} onChange={(ev) => onInputChange(ev, id)}
 />
    </>)}
    </form>
  );
}

export default Form;