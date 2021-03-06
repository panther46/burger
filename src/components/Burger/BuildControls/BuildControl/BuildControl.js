import React from 'react';

import classes from './BuildControl.module.css';


const BuildControl = (props) => (

    <div ClassName= {classes.BuildControl}>
        <div ClassName={classes.BuildControl}>{props.label}</div>
        <button className= {classes.Less}>Less</button>
        <button className= {classes.More}onClick={props.added}>More</button>
    </div>


);


export default BuildControl;