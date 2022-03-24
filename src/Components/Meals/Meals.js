import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Meal from '../Meal/Meal';
import './Meals.css'
const Meals = () => {
    const [meals, setMeals] = useState([]);
    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=a')
            .then(response => response.json())
            .then(data => setMeals(data.meals));
    }, [])
    return (
        <div className="meals-container">
            <div>
                <h1 className="text-center mt-4 title">Welcome to The <span id="mealdb">Mealdb</span></h1>

                <div className="meals">
                    {meals.map(meal => <Meal meal={meal}></Meal>)}
                </div>
            </div>
            <div className="cart-container">
                <Cart></Cart>
            </div>
        </div >



    )
};

export default Meals;