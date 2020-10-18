import React from 'react';


const Input = ({id, type, placeholder, options, onChange}) => {
 if (type === 'singleselect') {
      return (
        <select id={id} placeholder={placeholder} onChange={onChange}
        >
          {options.map((option) => (
            <option key={option} >{option}</option>
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
      ></input>
    );
}

export default Input;