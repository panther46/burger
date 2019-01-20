import React from 'react';

import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl.js';

const controls = [
    {label:'Salad', type: 'salad'},
    {label:'Bacon', type: 'Bacon'},
    {label:'Cheese', type: 'Cheese'},
    {label:'Salad', type: 'salad'},
];


/*
   Aqui se usa un metodo .map que mapea el array, es decir, el metodo usa una funcion 
   que recibe como parametro "Build Control" el cual es otro componente maquetado en otro sitio,
   de esta manera los renderiza todos en pantalla, va elemento por elemento y lo sustituye por un elemento html.
    */

const BuildControls = (props) => (
    <div className= {classes.BuildControls}>
        {controls.map(ctrl => (
            <BuildControl 
            key = {ctrl.label} 
            label={ctrl.label}
            added={() => props.ingredientAdded(ctrl.type)}/>

        ))}

    </div>
);





export default BuildControls;