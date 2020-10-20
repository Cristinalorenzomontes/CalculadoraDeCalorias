import React from 'react';


const Input = ({id, type, placeholder, options, onChange, value}) => {

 if (type === 'singleselect') {
      return (
        <select id={id} placeholder={placeholder} onChange={onChange} value={value}
        className='input'>
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
        className='input'
      ></input>
    );
}

export default Input;