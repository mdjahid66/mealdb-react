import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import './Meal.css'

const Meal = ({ meal, addToCart }) => {

    const { strMeal, strInstructions, strMealThumb } = meal;

    return (
        <div className="meal-container mx-auto meal mt-4">
            <div className="">
                <img src={strMealThumb} alt="" />
                <div className="meal-info">
                    <p className="text-center fs-3 fw-bold meal-name">{strMeal}</p>
                    <p className='info'><span className="description">Description:</span> {strInstructions.slice(0, 100)}..</p>

                </div>
            </div>
            <div className='btn-container'>
                <button onClick={() => addToCart(meal)} className="cart-btn ">
                    <p className="btn-text">Add to cart</p>
                    <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                </button>

            </div>

        </div>
    );
};

export default Meal;