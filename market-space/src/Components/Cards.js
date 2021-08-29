import React from "react";
import "tachyons";


function Cards({info}) {
  return (
    <div className="tc fl w-25 bg-washed-red grow ba b--black-20 br4 ma5 o-90">
      <Image pic = {info.cover}/>
      <div>
        <Offer offer = {info.offer}/>
        <Price price = {info.price}/>
      </div>
    </div>
  );
}


function Image({ cover }) {
  return (
    <img className = 'pic'
      src = {`https://robohash.org/${cover}?100x100`}
      alt="Card"
    />
  );
}

function Offer({ offer }) {
  return <h2 className="offer">{offer}</h2>;
}

function Price({ price }) {
  return <p className="price">{price}</p>;
}

export default Cards;
