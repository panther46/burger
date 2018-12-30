import React from 'react';

import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl.js';

const controls = [
    {label:'Salad', type: 'salad'},
    {label:'Bacon', type: 'Bacon'},
    {label:'Cheese', type: 'Cheese'},
    {label:'Salad', type: 'salad'},
];


const BuildControls = (props) => (
    <div className= {classes.BuildControls}>
        {controls.map(ctrl => (
            <BuildControl key = {ctrl.label} label={ctrl.label}/>

        ))}

    </div>
);



export default BuildControls;