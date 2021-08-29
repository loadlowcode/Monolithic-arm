import React from 'react';
import Cards from '../Components/Cards';
import { Data } from "../Data";

const Cart = () => {
    return(
        <div>
            <h1 style = {{textAlign : "center" ,color : "Red"}}>Cart Items</h1>
            <Cards info = {Data[1]}/>
        </div>
    );
}

export default Cart;