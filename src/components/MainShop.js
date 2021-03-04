import React, { useEffect, useState } from 'react';
import Card from './Card';
import Cart from '../Cart';
import './MainShop.css';
import Items from '../static/data/items.json';
import _ from 'lodash';

const MainShop = () => {
  const [cardsList, setCardsList] = useState([]);

  useEffect(() => {
    let newCardsList = [];

    for (let property in Items) {
      let item = Items[property];
      newCardsList.push(
        <Card
          key={_.uniqueId(`${item.code}_`)}
          title={item.title}
          price={item.price}
          code={item.code}
        />
      );
    }

    setCardsList(newCardsList);
  }, []);

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
        <div className="cardsList">{cardsList}</div>
      </div>
    </div>
  );
};

export default MainShop;
