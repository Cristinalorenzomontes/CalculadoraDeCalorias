import React from 'react';

const Result = ({resultado, ganarMasa, perderGrasa, proteinasVolumen, proteinasDefinicion, grasasVolumen, grasasDefinicion, carbosVolumen, carbosDefinicion}) => {
    return (
        <>
            <h3 className='h3'>Tus calorías diarias para mantnerte son: {resultado.toFixed(2)}.</h3>
            <h3 className='h3'>Tus calorías diarias para ganar masa muscular son:  {ganarMasa.toFixed(2)}.</h3>
            <h3 className='h3'>Tus calorías diarias para perder grasa son:  {perderGrasa.toFixed(2)}.</h3>
            <h3 className='h3'>Tus proteínas diarias recomendadas para ganar volumen son:  {proteinasVolumen.toFixed(2)}.</h3>
            <h3 className='h3'>Tus proteínas diarias recomendadas para ganar definición son:  {proteinasDefinicion.toFixed(2)}.</h3>
            <h3 className='h3'>Tus grasas diarias recomendadas para ganar volumen son:  {grasasVolumen.toFixed(2)}.</h3>
            <h3 className='h3'>Tus grasas diarias recomendadas para ganar definición son:  {grasasDefinicion.toFixed(2)}.</h3>
            <h3 className='h3'>Tus hidratos diarios recomendados para ganar volumen son:  {carbosVolumen.toFixed(2)}.</h3>
            <h3 className='h3'>Tus hidratos diarios recomendados para ganar definición:  {carbosDefinicion.toFixed(2)}.</h3>
            <h3 className='h3-advice'>Todos estos datos son orientativos, para tomar cualquier decisión sobre tu dieta y rutinas, consulta siempre con profesionales en la materia. Recuerda sobre todo que el cuerpo perfecto es el tuyo.</h3>
        </>
    )
};
  
  export default Result;