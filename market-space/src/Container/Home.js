import React from "react";
import Cards from "../Components/Cards.js";
import { Data } from "../Data";

const Home = () => {
  return (
    <div>
      <Cards info = {Data[0]}/>
      <Cards info = {Data[1]}/>
      <Cards info = {Data[2]}/>
    </div>
  );
};

export default Home;
