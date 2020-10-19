import React from 'react';
import Input from '../Input/Input';


const Form = ({inputFields, onInputChange, inputValues}) => {
  console.log('hola soy ' + inputValues)

  return (
    <form>
      <h1 className="h1">Calcular calorías diarias según tus objetivos</h1>
      <h2 className="h2">Vamos a conocernos un poquito más</h2>
    {inputFields.map(({label, id, type, placeholder, options}) => 
    <>
            <label>{label}</label>
            <Input id={id} type={type} placeholder={placeholder} options={options} value={inputValues[id]} onChange={(ev) => onInputChange(ev, id)}
 />
    </>)}
    </form>
  );
}

export default Form;