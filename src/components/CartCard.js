import React, { useEffect, useState } from 'react';
import './CartCard.css';

const CartCard = (props) => {
  const [options, setOptions] = useState([]);
  const [total, setTotal] = useState(props.item.price);

  useEffect(() => {
    let tempOptions = [];
    for (let i = 1; i < 21; i++) {
      tempOptions.push(<option>{i}</option>);
    }
    setOptions(tempOptions);
  }, []);

  let updateAmount = (e) => setTotal(e.target.value * props.item.price);

  return (
    <div className="cartCard" id={props.id}>
      <div className="cartCardImg">
        <img
          src={`../static/img/clothes/${props.item.code}/default.jpeg`}
          alt={props.item.title}
        ></img>
      </div>
      <div className="cartCardInfo">
        <h5>{props.item.title}</h5>
        <p>{props.item.price}</p>
        <p>{`Total: ${total}`}</p>
        <select onChange={updateAmount}>{options}</select>
      </div>
      <div className="cartCartButton">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          height="24"
          width="24"
          stroke="currentColor"
          onClick={props.removeCard}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
          />
        </svg>
      </div>
    </div>
  );
};

export default CartCard;
