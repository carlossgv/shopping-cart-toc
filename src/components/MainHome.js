import React from 'react';
import { Link } from 'react-router-dom';
import './MainHome.css';
import homeBackground from '../static/img/homeBackground.jpg';

const MainHome = () => {
  return (
    <div
      className="mainHome"
      style={{ backgroundImage: `url(${homeBackground})` }}
    >
      <button className="shopButton">
        <Link to="/shop">shop.</Link>
      </button>
    </div>
  );
};

export default MainHome;
