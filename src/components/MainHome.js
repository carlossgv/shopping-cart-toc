import React from 'react';
import './MainHome.css';
import homeBackground from '../static/img/homeBackground.jpg';

const MainHome = () => {
  return (
    <div
      className="mainHome"
      style={{ backgroundImage: `url(${homeBackground})` }}
    >
      <button className="shopButton">
        <a href="/shop">shop.</a>
      </button>
    </div>
  );
};

export default MainHome;
