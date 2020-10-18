import React, {useState} from 'react';
import './App.css';
import Form from './components/Form/Form';
import formData from './data/form.json';


const App = () => {
  const [inputValues, setInputValues] = useState({}) 

  const handleInputChange = (ev, id) => setInputValues({ ...inputValues, [id]: ev.target.value });

  const handdleButton = () => {
const calories = (9.99 * parseInt(inputValues.weight) + 6.25 * parseInt(inputValues.height) + 4.92 * parseInt(inputValues.age) - 50)
const phisical = calories*parseInt(inputValues.phisical-activity)
  
}

  return (
    <div className="App">
      <Form inputFields={formData.inputFields} onInputChange={handleInputChange} />
      <button onClick={handdleButton}>Calcular</button>
    </div>
  );
}

export default App;
