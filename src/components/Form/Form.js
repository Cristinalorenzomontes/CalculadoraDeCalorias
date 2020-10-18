import React from 'react';
import Input from '../Input/Input';


const Form = ({inputFields, onInputChange}) => {
  return (
    <form>
      <h1 className="h1">Calcular calorías diarias</h1>
      <h2 className="h2">Vamos a conocernos un poquito más</h2>
    {inputFields.map(({label, id, type, placeholder, options}) => 
    <>
            <label>{label}</label>
            <Input id={id} type={type} placeholder={placeholder} options={options} onChange={(ev) => onInputChange(ev, id)}
 />
    </>)}
    </form>
  );
}

export default Form;