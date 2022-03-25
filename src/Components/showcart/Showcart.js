import React from 'react';
import './Showcart.css'
const Showcart = ({ meal }) => {
    console.log(meal)
    return (
        <div>
            <h1>Name:{meal.strMeal}</h1>
        </div>
    );
};

export default Showcart;