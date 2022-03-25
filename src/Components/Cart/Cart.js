import React from 'react';
import Showcart from '../showcart/Showcart';

import './Cart.css'
const Cart = ({ cart }) => {
    // console.log(cart);


    return (
        <div className="cart">
            <h1 className="mt-4 text-center">Order Summary</h1>
            
            {
                cart.map(meal => <Showcart meal={meal}></Showcart>)
            }
        </div>
    );
};

export default Cart;