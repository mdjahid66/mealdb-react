import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import './Meal.css'
import { useNavigate } from 'react-router-dom';

const Meal = ({ meal, addToCart }) => {


    const navigate = useNavigate();

    const { strMeal, strInstructions, strMealThumb, idMeal } = meal;

    return (
        <div className="meal mt-4">
            <div className="">
                <img src={strMealThumb} alt="" />
                <div className="meal-info">
                    <p className="text-center fs-3 fw-bold meal-name">{strMeal}</p>
                    <p className='info'><span className="description">Description:</span> {strInstructions.slice(0, 100)}..<span onClick={() => navigate(`/details/${idMeal}`)} className='read-more'>Read More</span></p>

                </div>
            </div>
            <div className='btn-container'>
                <button onClick={() => addToCart(meal)} className="cart-btn ">
                    <p className="btn-text">Add to cart</p>
                    <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                </button>


            </div>
            {/* <Details meal={meal}></Details> */}
        </div>
    );
};

export default Meal;