import React, { useEffect, useState } from 'react';
import './CartCard.css';

const CartCard = (props) => {
  const [options, setOptions] = useState([]);
  const [total, setTotal] = useState('');
  let productTotal = '';

  useEffect(() => {
    let tempOptions = [];
    for (let i = 1; i < 21; i++) {
      tempOptions.push(<option>{i}</option>);
    }
    setOptions(tempOptions);
    setTotal(props.item.price);

    return;
  }, []);

  const updateAmount = (e) => {
    if (e) {
      productTotal = e.target.value * props.item.price;
      setTotal(productTotal);
    }
  };

  return (
    <div className="cartCard" id={props.id}>
      <div className="leftContainer">
        <div className="cartCardImg">
          <img
            src={`../static/img/clothes/${props.item.code}/default.jpeg`}
            alt={props.item.title}
          ></img>
        </div>
        <div className="cartCardInfo">
          <h5>{props.item.title}</h5>
          <p>{parseFloat(props.item.price).toFixed(2)}</p>
          <p>{`Total: ${parseFloat(total).toFixed(2)}`}</p>
          <select onChange={updateAmount}>{options}</select>
        </div>
      </div>
      <div className="cartCardButton">
        <img
          onClick={props.removeCard}
          className="trashIcon"
          src={'../static/img/trashIcon.png'}
          alt="Trash Icon"
        ></img>
      </div>
    </div>
  );
};

export default CartCard;
