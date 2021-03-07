import React from 'react';
import Card from './Card';
import './MainShop.css';

const MainShop = (props) => {

  const createCardList = (items) => {
    let newCardsList = [];
    items.forEach((product) => {
      newCardsList.push(
        <Card
          key={product.code}
          handleAddToCart={props.handleAddToCart}
          item={product}
          id={`card_${product.id}`}
        />
      );
    });
    return newCardsList;
  };

  return (
    <div className="mainShop">
      <div className="shopDisplay">
        <div className="cardsListTitle">
          <h1>MEN'S SWIM TRUNKS</h1>
          <p>
            Get vacation-ready with our selection of men’s swim shorts. Browse
            classic knee-length styles in staple colors from navy blue to khaki
            green and black. Want to go graphic? No problem. Experiment with
            stripes, animal motifs or printed shorts to reflect your
            personality. Pair your trunks with retro sunglasses or a hat and
            you’ll be ready to hit the beach or pool in just a few scrolls.
          </p>
        </div>
        <div className="cardsList">{createCardList(props.items)}</div>
      </div>
    </div>
  );
};

export default MainShop;
