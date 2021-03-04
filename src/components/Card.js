import React, { useState } from 'react';
import './Card.css';

const Card = (props) => {
  const [image, setImage] = useState(
    `../static/img/clothes/${props.item.code}/default.jpeg`
  );

  // TODO: DO THIS WITH USEEFFECT
  const handleMouseOver = () => {
    setImage(`../static/img/clothes/${props.item.code}/model.jpeg`);
  };

  const handleMouseLeave = () => {
    setImage(`../static/img/clothes/${props.item.code}/default.jpeg`);
  };

  return (
    <div className="card" id={props.id}>
      <img
        src={image}
        alt={`${props.item.title}`}
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
      ></img>
      <div className="cardInfo">
        <h5>{props.item.title}</h5>
        <p>${props.item.price}</p>
        <button className="notAdded" onClick={props.handleAddToCart}>
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Card;
