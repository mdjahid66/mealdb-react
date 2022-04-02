import React, { useContext } from 'react';
import { MyContext } from '../Meals/Meals';
import Showcart from '../showcart/Showcart';
import './Cart.css'

const Cart = ({ cart }) => {
    const owner = useContext(MyContext);
    // console.log(cart);


    return (
        <div className="cart">
            <h1 className="mt-4 text-center">Order Summary</h1>

            {
                cart.map(meal => <Showcart meal={meal}></Showcart>)
            }
            <h1>{owner}</h1>
        </div>
    );
};

export default Cart;