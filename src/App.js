import React, {useState} from 'react';
import './App.css';
import Form from './components/Form/Form';
import formData from './data/form.json';
// import Result from './components/Results/Result';
// import Alert from 'react-bootstrap/Alert';


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

    
      // [
      //   'primary',
      //   'secondary',
      //   'success',
      //   'danger',
      //   'warning',
      //   'info',
      //   'light',
      //   'dark',
      // ].map((variant, idx) => (
      //   <Alert key={idx} variant={variant}>
      //     This is a {variant} alert—check it out!
      //   </Alert>
      // ));
    
  if (gender === undefined){
        alert('Necesitamos conocer tu sexo para ajustar el cálculo lo máximo posible')
        return
        }
  if (age === undefined){
    alert('La edad es solo un número, ¡pon tu edad anda!')
    return
    }
  if (height === undefined){
      alert('No olvides poner tu altura')
      return
      }
  if (weight === undefined){
        alert('Tu peso no te define, ¡así que ponlo sin miedo')
        return
  }
    if (phisicalActivity === undefined) {
    alert('¿Cuánto deporte haces semanalmente?')
  }
    
    
    console.log("es",{inputValues}); 
let resultado = (9.99 * parseInt(weight) + 6.25 * parseInt(height) + 4.92 * parseInt(age) - 50)
    if (gender === "m") resultado = resultado - 200
    const multiplier = parseFloat(phisicalActivity)
    resultado = resultado * multiplier;
    console.log('Mantenimiento ' + resultado)
    
    let resultadoGanarMasa = resultado + 300;
    console.log('Ganar Masa ' + resultadoGanarMasa);
    
    let resultadoPerderGrasa = resultado - 300;
    console.log('Perder Grasa '+ resultadoPerderGrasa);

    let resultadoProteinasVolumen = weight * 2.5;
    console.log('Proteínas Volumen ' + resultadoProteinasVolumen);

    let resultadoProteinasDefinicion = weight * 3;
    console.log('Proteínas Definición ' + resultadoProteinasDefinicion);
  
    let resultadoGrasasVolumen = weight * 1;
    console.log('Grasas Volumen ' + resultadoGrasasVolumen);

    let resultadoGrasasDefinicion = weight * 0.75;
    console.log('Grasas Definición ' + resultadoGrasasDefinicion);

    let resultadoCarbosVolumen = ((resultadoGanarMasa - (resultadoProteinasVolumen * 4) - (resultadoGrasasVolumen*9)) / 4);
    console.log('Carbos Volumen ' + resultadoCarbosVolumen);

    let resultadoCarbosDefinicion = ((resultadoPerderGrasa -(resultadoProteinasDefinicion * 4) - (resultadoGrasasDefinicion * 9)) / 4);
    console.log('Carbos Definición ' + resultadoCarbosDefinicion);
}

  return (
    <div className="App">
      <Form inputFields={formData.inputFields} onInputChange={handleInputChange} />
      <button onClick={handdleButton}>Calcular</button>
      {/* {resultado ? <Result props={resultado} />: null} */}
    </div>
  );
}

export default App;
