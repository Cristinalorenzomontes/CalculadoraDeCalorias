import React, {useState} from 'react';
import './App.css';
import Form from './components/Form/Form';
import formData from './data/form.json';


const App = () => {
  const [inputValues, setInputValues] = useState({}) 

  const handleInputChange = (ev, id) => setInputValues({ ...inputValues, [id]: ev.target.value });

  const handdleButton = () => {
    const {gender,
      age,
      weight,
      height,
      phisicalActivity } = inputValues;
    console.log({gender,
      age,
      weight,
      height,
      phisicalActivity })
    //if (edad === undefined){
    //alert(pon la edad anda)
    //return
  //},
    
    
    console.log("es",{inputValues}); 
let resultado = (9.99 * parseInt(weight) + 6.25 * parseInt(height) + 4.92 * parseInt(age) - 50)
    if (gender === "m") resultado = resultado - 200
    const multiplier = parseFloat(phisicalActivity)
    resultado = resultado * multiplier;
console.log(resultado)
    
//const phisical = calories*parseInt(inputValues.phisical-activity)
  
}

  return (
    <div className="App">
      <Form inputFields={formData.inputFields} onInputChange={handleInputChange} />
      <button onClick={handdleButton}>Calcular</button>
      {/* {resultado ? <Resultado props={resultado} />: null} */}
    </div>
  );
}

export default App;
