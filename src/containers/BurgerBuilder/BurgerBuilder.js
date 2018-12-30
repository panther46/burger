import React, { Component } from 'react';

import Aux from '../../hoc/Aux.js';
import Burger from '../../components/Burger/Burger.js';
import BuildControls from '../../components/Burger/BuildControls/BuildControls.js ';

class BurgerBuilder  extends Component {
    state = {
        ingredients: {
            salad:0,
            bacon:2,
            cheese:0,
            meat:0
        }
    }

    render(){
        return(
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls/>
             </Aux>
            
        );
    }
}  

export default BurgerBuilder;
