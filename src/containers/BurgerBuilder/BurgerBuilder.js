import React, { Component } from 'react';

import Aux from '../../hoc/Aux.js';
import Burger from '../../components/Burger/Burger.js';
import BuildControls from '../../components/Burger/BuildControls/BuildControls.js';

const INGREDIENT_PRICES = {
    salad:0.5,
    cheese:0.2,
    meat: 1.3,
    bacon: 0.7

};


class BurgerBuilder  extends Component {
    state = {
        ingredients: {
            salad:0,
            bacon:2,
            cheese:0,
            meat:0
        },
        totalPrice:4,
    };

    /*
   Añadiendo manejadores de eventos para añadir ingredients y actualizar precios
    */
addIngredientHandler = (type) =>{
    const oldCount = this.state.ingredients[type]  // Cuenta anterior
    const updatedCount = oldCount +1;  // Cuenta actualizada
    const updatedIngredients = {
        ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount; // Cuenta actualizada, inmutable para react
    const priceAddition = INGREDIENT_PRICES[type];  // añadiendo precios
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    this.setState ({totalPrice: newPrice, ingredients: updatedIngredients});
}

removeIngredientHandler = (type)=>{}

    render(){
        return(
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls
                    ingredientAdded = {this.addIngredientHandler}/>
             </Aux>
            
        );
    }
}  

export default BurgerBuilder;
