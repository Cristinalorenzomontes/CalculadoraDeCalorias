import React from 'react';

const Result = ({resultado, ganarMasa, perderGrasa, proteinasVolumen, proteinasDefinicion, grasasVolumen, grasasDefinicion, carbosVolumen, carbosDefinicion}) => {
    return (
        <>
            <h3>Tus calorías diarias para manenerte son: {resultado.toFixed(2)}.</h3>
            <h3>Tus calorías diarias para manenerte son:  {ganarMasa.toFixed(2)}.</h3>
            <h3>Tus calorías diarias para manenerte son:  {perderGrasa.toFixed(2)}.</h3>
            <h3>Tus calorías diarias para manenerte son:  {proteinasVolumen.toFixed(2)}.</h3>
            <h3>Tus calorías diarias para manenerte son:  {proteinasDefinicion.toFixed(2)}.</h3>
            <h3>Tus calorías diarias para manenerte son:  {grasasVolumen.toFixed(2)}.</h3>
            <h3>Tus calorías diarias para manenerte son:  {grasasDefinicion.toFixed(2)}.</h3>
            <h3>Tus calorías diarias para manenerte son:  {carbosVolumen.toFixed(2)}.</h3>
            <h3>Tus calorías diarias para manenerte son:  {carbosDefinicion.toFixed(2)}.</h3>
        </>
    )
};
  
  export default Result;