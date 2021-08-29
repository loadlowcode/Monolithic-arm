import React from 'react';
import Cards from '../Components/Cards';
import { Data } from "../Data";

const Star = () => {
    return(
        <div>
            <h1 style = {{textAlign : "center"}}>Starred</h1>
            <Cards info = {Data[0]}/>
        </div>
    );
}

export default Star;