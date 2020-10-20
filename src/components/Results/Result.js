import React from 'react';

const Result = ({resultado, ganarMasa, perderGrasa, proteinasVolumen, proteinasDefinicion, grasasVolumen, grasasDefinicion, carbosVolumen, carbosDefinicion}) => {
    return (
        <>
            <h2>Estos son los parámetros diarios recomendados según tus datos:</h2>
            <h2 >Calorías:</h2>
            <h3 className='h3'>Si buscas mantenerte en tu peso: {resultado.toFixed(1)}.</h3>
            <h3 className='h3'>Para ganar masa muscular:  {ganarMasa.toFixed(1)}.</h3>
            <h3 className='h3'>Para perder grasa:  {perderGrasa.toFixed(1)}.</h3>
            <h2>Macronutrientes:</h2>
            <h2>Proteínas:</h2>
            <h3 className='h3'>Para ganar volumen:  {proteinasVolumen.toFixed(1)} gramos.</h3>
            <h3 className='h3'>Para ganar definición:  {proteinasDefinicion.toFixed(1)} gramos.</h3>
            <h2>Grasas:</h2>
            <h3 className='h3'>Para ganar volumen:  {grasasVolumen.toFixed(1)} gramos.</h3>
            <h3 className='h3'>Para ganar definición:  {grasasDefinicion.toFixed(1)} gramos.</h3>
            <h2>Hidratos:</h2>
            <h3 className='h3'>Para ganar volumen:  {carbosVolumen.toFixed(1)} gramos.</h3>
            <h3 className='h3'>Para ganar definición:  {carbosDefinicion.toFixed(1)} gramos.</h3>
            <h3 className='h3-advice'>Todos estos datos son muuuuy orientativos, para tomar cualquier decisión sobre tu dieta y rutinas, consulta siempre con profesionales en la materia. Recuerda sobre todo que el cuerpo perfecto es el tuyo.</h3>
   </>
    )
};
  
  export default Result;