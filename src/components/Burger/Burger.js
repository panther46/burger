import React from 'react';

import classes from './Burger.module.css';
import BurgerIngredient from './Burgeringredients/Burgeringredients.js';

// Aqui realizamos un procedimiento en el cual se pasa el objeto (el estado de burger builder) y se convierte en un array
const Burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients)
    .map(igKey =>{
        return [...Array(props.ingredients[igKey])].map((_,i) => {
            return<BurgerIngredient key = {igKey + i} type = {igKey} />;
        });
    })
    // Con .reduce() el array es convertido a un unico valor acepta dos argumentos el valor anterior y el siguiente
    .reduce((arr,el) => {
        return arr.concat(el)
    }, []);
     // Ya con el array reducido a un unico valor, podemos construir un condicional en caso de que sea cero, se incluira un mensaje
    if (transformedIngredients.length === 0){
        transformedIngredients = <p> Please start adding ingredients</p>
    }
    
    return(
        <div className = {classes.Burger}>
            <BurgerIngredient type = "bread-top"/>
            {transformedIngredients}
            <BurgerIngredient type = "bread-bottom"/>
        </div>
    );
};

export default Burger;