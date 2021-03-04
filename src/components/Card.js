import React, { useState } from 'react';
import './Card.css';

const Card = (props) => {
  const [image, setImage] = useState(
    `../static/img/clothes/${props.code}/default.jpeg`
  );

  // TODO: DO THIS WITH USEEFFECT
  const handleMouseOver = () => {
    setImage(`../static/img/clothes/${props.code}/model.jpeg`);
  };

  const handleMouseLeave = () => {
    setImage(`../static/img/clothes/${props.code}/default.jpeg`);
  };

  return (
    <div className="card">
      <img
        src={image}
        alt={`${props.title}`}
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
      ></img>
      <div className="cardInfo">
        <h5>{props.title}</h5>
        <p>${props.price}</p>
        <button onclick={props.handleClickButton}>Add to cart</button>
      </div>
    </div>
  );
};

export default Card;
