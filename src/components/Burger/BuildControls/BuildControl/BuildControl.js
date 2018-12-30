import React from 'React';

import classes from './BuildControl.module.css';


const BuildControl = (props) => (

    <div ClassName= {classes.BuildControl}>
        <div ClassName={classes.BuildControl}>{prop.label}</div>
        <button className= {classes.Less}>Less</button>
        <button className= {classes.More}>More</button>
    </div>


);


export default BuildControl;