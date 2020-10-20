import React, {useState} from 'react';
import './stylesheet/app.scss';
import './stylesheet/header.scss'
import './stylesheet/main.scss';
import './stylesheet/form.scss';
import './stylesheet/input.scss';
import './stylesheet/result.scss';
import "./stylesheet/footer.scss";
import Form from './components/Form/Form';
import formData from './data/form.json';
import Result from './components/Results/Result';


const initialFormState = {
gender: "n", 
age: "", 
weight: "",
height: "",
phisicalActivity: "n"}

const App = () => {
  const [inputValues, setInputValues] = useState(initialFormState) 
  const [isFormSubmited, setIsFormSubmited] = useState(false)

  const handleInputChange = (ev, id) => setInputValues({ ...inputValues, [id]: ev.target.value });

  const handdleButton = () => {
    const {gender,
      age,
      weight,
      height,
      phisicalActivity } = inputValues;
  
  
  if (gender === ""){
        alert('Necesitamos conocer tu sexo para ajustar el cálculo lo máximo posible')
        return
        }
  if (age === ""){
    alert('La edad es solo un número, ¡pon tu edad anda!')
    return
    }
  if (height === ""){
      alert('No olvides poner tu altura')
      return
      }
  if (weight === ""){
        alert('Tu peso no te define, ¡así que ponlo sin miedo')
        return
  }
    if (phisicalActivity === "") {
      alert('¿Cuánto deporte haces semanalmente?')
      return
  }  

    setIsFormSubmited(true)
  }

let resultado = ((9.99 * parseInt(inputValues.weight)) + (6.25 * parseInt(inputValues.height)) + (4.92 * parseInt(inputValues.age)) - 50) - 200
if (inputValues.gender === "f") resultado = resultado - 200
const multiplier = parseFloat(inputValues.phisicalActivity)
resultado = resultado * multiplier;

let resultadoGanarMasa = resultado + 300;
let resultadoPerderGrasa = resultado - 300;

const getMacronutrients = (number) => inputValues.weight * number 

const resultadoProteinasVolumen = getMacronutrients(2.5)
const resultadoProteinasDefinicion = getMacronutrients(3)
const resultadoGrasasVolumen =  getMacronutrients(1)
const resultadoGrasasDefinicion = getMacronutrients(0.75)

let resultadoCarbosVolumen = ((resultadoGanarMasa - (resultadoProteinasVolumen * 4) - (resultadoGrasasVolumen * 9)) / 4);
let resultadoCarbosDefinicion = ((resultadoPerderGrasa - (resultadoProteinasDefinicion * 4) - (resultadoGrasasDefinicion * 9)) / 4);


  const handleReset = () => {
    setInputValues(initialFormState);
    setIsFormSubmited(false)
  }
  
  return (
  <div className="App">
      <header className="header">
      <h1 className="h1">Calcular calorías diarias según tus objetivos</h1>
      <h2 className="h2">Vamos a conocernos un poquito más</h2>
      </header>
      <main className="main">
      <Form inputFields={formData.inputFields} onInputChange={handleInputChange} inputValues={inputValues} />
      <button onClick={handdleButton} className="button">Calcular</button>
      {isFormSubmited && <>
      <Result resultado={resultado} ganarMasa={resultadoGanarMasa} perderGrasa={resultadoPerderGrasa} proteinasVolumen={resultadoProteinasVolumen} proteinasDefinicion={resultadoProteinasDefinicion} grasasVolumen={resultadoGrasasVolumen} grasasDefinicion={resultadoGrasasDefinicion} carbosVolumen={resultadoCarbosVolumen} carbosDefinicion={resultadoCarbosDefinicion}/>
      <button onClick={handleReset} className="button">Borrar</button>
        </>}
        </main>
      <footer className="footer">
        <h4>&copy; 2020 Christina Lorenzo Montes</h4>
      </footer>
 </div>
  );
}

export default App;
