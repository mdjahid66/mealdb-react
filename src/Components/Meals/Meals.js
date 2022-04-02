import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Meal from '../Meal/Meal';
import './Meals.css'

export const MyContext = React.createContext();

const Meals = () => {
    const [meals, setMeals] = useState([]);
    const [cart, setCart] = useState([]);


    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=a')
            .then(response => response.json())
            .then(data => setMeals(data.meals));
    }, [])

    const addToCart = (meal) => {
        const newCart = [...cart, meal]
        setCart(newCart);
    }
    return (
        <MyContext.Provider value={'jahid'}>
            <div className="meals-container">
                <div>
                    <h1 className="text-center mt-4 title">Welcome to The <span id="mealdb">Mealdb</span></h1>

                    <div className="meals">
                        {meals.map(meal => <Meal meal={meal} key={meal.idMeal} addToCart={addToCart}></Meal>)}
                    </div>
                </div>
                <div className="cart-container">

                    <Cart cart={cart}></Cart>
                </div>
            </div >
        </MyContext.Provider>



    )
};

export default Meals;