import React from 'react';


const Input = ({id, type, placeholder, options, onChange, value}) => {
  console.log('hola soy ' + value + 'en input')


 if (type === 'singleselect') {
      return (
        <select id={id} placeholder={placeholder} onChange={onChange} value={value}
        >
              {options.map((option) => (
                  <option key={option.key} value={option.value}>{option.text}</option>
          ))}
        </select>
      );
    }
  
    return (
      <input
        id={id}
        placeholder={placeholder}
        type={type}
        onChange={onChange}
        value={value}
      ></input>
    );
}

export default Input;